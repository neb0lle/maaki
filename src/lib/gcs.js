"use server";
import { Storage } from "@google-cloud/storage";
export const UploadFile = async (form) => {
	try {
		const file = form.get("file");
		if (!file) throw new Error("No file Provided.");
		if (file.size < 1) throw new Error("File is empty.");
		const buffer = await file.arrayBuffer();
		const storage = new Storage({
			keyFilename: "auth.json",
		});
		await storage
			.bucket("dotslash")
			.file(file.name)
			.save(Buffer.from(buffer));
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};
