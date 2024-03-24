"use client";
import { useState } from "react";
import yaml from "js-yaml";

export default function ConfigUpload() {
	const [yamlData, setYamlData] = useState("");
	const [otherData, setOtherData] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append("yaml_data", yamlData);
		formData.append("other_data", otherData);

		try {
			const response = await fetch(
				"https://48b8-35-226-109-148.ngrok-free.app/create",
				{
					method: "POST",
					body: formData,
				},
			);

			if (!response.ok) {
				throw new Error("Failed to send data");
			}

			console.log("Data sent successfully");
		} catch (error) {
			console.error("Error sending data:", error);
		}
	};

	return (
		<div>
			<h1>Send Data</h1>
			<form onSubmit={handleSubmit}>
				<textarea
					value={yamlData}
					onChange={(e) => setYamlData(e.target.value)}
					placeholder="YAML Data"
					rows={5}
					cols={50}
				/>
				<input
					type="text"
					value={otherData}
					onChange={(e) => setOtherData(e.target.value)}
					placeholder="Other Data"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
