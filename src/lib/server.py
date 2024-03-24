import os
import threading
import subprocess
from flask import Flask, request
from pyngrok import ngrok
from kaggle_secrets import UserSecretsClient
import pandas as pd
import numpy as np
from ludwig.visualize import learning_curves


user_secrets = UserSecretsClient()
secret_value_0 = user_secrets.get_secret("NGROK_TOKEN")
bucket_name = "dotslash"


ngrok.set_auth_token(secret_value_0)
app = Flask(__name__)
port = "5000"
public_url = ngrok.connect(port).public_url
app.config["BASE_URL"] = public_url


def download_folder_from_gcs(bucket_name, folder_name, destination_directory):
    try:
        if not os.path.exists(destination_directory):
            os.makedirs(destination_directory)
        command = [
            "gsutil",
            "-m",
            "cp",
            "-r",
            f"gs://{bucket_name}/{folder_name}*",
            destination_directory,
        ]
        subprocess.run(command, check=True)
        return True
    except subprocess.CalledProcessError:
        return False


# bucket_name = "dotslash"
# folder_name = "test0/"
# destination_directory = "./models/test0/"
# if download_folder_from_gcs(bucket_name, folder_name, destination_directory):
#     print("Folder downloaded successfully.")
# else:
#     print("Failed to download folder.")


def list_projects_in_gcs(bucket_name):
    try:
        command = ["gsutil", "ls", "-r", f"gs://{bucket_name}"]
        result = subprocess.run(command, capture_output=True, text=True, check=True)
        projects = [
            line.split("/")[-2]
            for line in result.stdout.splitlines()
            if line.endswith("/")
        ]
        return projects
    except subprocess.CalledProcessError:
        return []


# bucket_name = "dotslash"
# projects = list_projects_in_gcs(bucket_name)
# print(projects) if projects else print("Failed to list projects.")


def sync_local_to_gcs(
    local_directory, bucket_name, folder_name, key_file_path="./auth.json"
):
    try:
        if not os.path.exists(key_file_path):
            return False
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = key_file_path
        destination_uri = f"gs://{bucket_name}/{folder_name}/results/"
        command = ["gsutil", "-m", "rsync", "-r", local_directory, destination_uri]
        subprocess.run(command, check=True)
        return True
    except (FileNotFoundError, subprocess.CalledProcessError, Exception):
        return False


# local_directory = "./results/"
# folder_name = "test0"
# print("Files synced successfully.") if sync_local_to_gcs(
#     local_directory, bucket_name, folder_name
# ) else print("Failed to sync files.")


@app.route("/create", methods=["POST"])
def create():
    yaml_data = request.form.get("yaml_data")
    other_data = request.form.get("other_data")
    other_data_dir = os.path.join("models", other_data)
    os.makedirs(other_data_dir, exist_ok=True)
    yaml_file_path = os.path.join(other_data_dir, "config.yaml")
    with open(yaml_file_path, "w") as yaml_file:
        yaml_file.write(yaml_data)
    return "Data received and processed successfully"


@app.route("/train", methods=["POST"])
def train_model():
    other_data = request.form.get("other_data")
    download_folder_from_gcs(bucket_name, other_data + "/", f"models/{other_data}/")
    return "Model training started successfully"


threading.Thread(target=app.run, kwargs={"use_reloader": False, "debug": True}).start()
