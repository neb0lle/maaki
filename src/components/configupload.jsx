"use client";
import { useState } from "react";

export default function ConfigUpload({ projectname }) {
	const [yamlData, setYamlData] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append("yaml_data", yamlData);
		formData.append("other_data", projectname.params.id);

		try {
			const response = await fetch(
				"https://6af6-34-171-210-109.ngrok-free.app/create",
				{
					method: "POST",
					body: formData,
				},
			);

			if (!response.ok) {
				throw new Error("Failed to send data");
			}

			try {
				const res = await fetch(
					"https://6af6-34-171-210-109.ngrok-free.app/train",
					{ method: "POST", body: formData },
				);
			} catch (error) {
				console.error("Error Training data:", error);
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
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
