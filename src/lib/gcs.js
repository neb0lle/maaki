import { Storage } from "@google-cloud/storage";

const storage = new Storage({
	keyFilename: "KEY_FILENAME.json",
});

const bucket = storage.bucket(process.env.GCS_BUCKET);

export const createWriteStream = (filename, contentType) => {
	const ref = bucket.file(filename);

	const stream = ref.createWriteStream({
		gzip: true,
		contentType: contentType,
	});

	return stream;
};
