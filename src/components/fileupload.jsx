import { UploadFile } from "@/lib/gcs";

import React from "react";
function FileUpload() {
	return (
		<>
			<form action={UploadFile}>
				<input type="file" name="file" />
				<button type="submit">Upload</button>
			</form>
		</>
	);
}

export default FileUpload;
