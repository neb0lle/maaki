from google.cloud import storage
import os


def download_directory(bucket_name, remote_dir, local_dir):
    storage_client = storage.Client("spatial-country-418111")
    bucket = storage_client.bucket(bucket_name)

    blobs = bucket.list_blobs(prefix=remote_dir)
    for blob in blobs:
        filename = blob.name.replace(remote_dir + "/", "")
        local_path = os.path.join(local_dir, filename)

        # Create directories if they don't exist locally
        os.makedirs(os.path.dirname(local_path), exist_ok=True)

        # Download the blob (overwrites existing files)
        blob.download_to_filename(local_path)
        print(f"Downloaded: {blob.name} to {local_path}")


def upload_directory(bucket_name, local_dir, remote_dir):
    storage_client = storage.Client("spatial-country-418111")
    bucket = storage_client.bucket(bucket_name)

    for root, _, files in os.walk(local_dir):
        for filename in files:
            # Construct the full local and remote paths
            local_path = os.path.join(root, filename)
            remote_path = os.path.join(
                remote_dir, os.path.relpath(local_path, local_dir)
            )

            # Upload the file (overwrites existing files)
            blob = bucket.blob(remote_path)
            blob.upload_from_filename(local_path)
            print(f"Uploaded: {local_path} to {remote_path}")


bucket_name = "dotslash"
remote_dir = "test0"
local_dir = "models/test0"

download_directory(bucket_name, remote_dir, local_dir)

# Uncomment to upload the directory (sync)
# upload_directory(bucket_name, local_dir, remote_dir)
