"use server";
import { Storage } from "@google-cloud/storage";
export const UploadFile = async (form) => {
	try {
		const file = form.get("file");
		const projectname = form.get("projectname");
		console.log(projectname);
		if (!file) throw new Error("No file Provided.");
		if (file.size < 1) throw new Error("File is empty.");
		const buffer = await file.arrayBuffer();
		const storage = new Storage({
			keyFilename: "auth.json",
		});
		await storage
			.bucket("dotslash")
			.file(`${projectname}/` + file.name)
			.save(Buffer.from(buffer));

		try {
			const response = await fetch(
				"https://101b-34-134-48-70.ngrok-free.app/create",
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
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};
