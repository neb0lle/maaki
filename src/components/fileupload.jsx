import { UploadFile } from "@/lib/gcs";

import React from "react";
function UploadPage({ projectname }) {
	return (
		<>
			<form action={UploadFile}>
				<input type="file" name="file" />
				<input
					type="text"
					name="projectname"
					value={projectname.params.id}
					style={{ display: "none" }}
				/>
				<button type="submit">Upload</button>
			</form>
		</>
	);
}

export default UploadPage;
