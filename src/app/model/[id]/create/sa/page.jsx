"use client";
import { TextField, Button } from "@radix-ui/themes";
import UploadPage from "@/components/fileupload";
import ConfigUpload from "@/components/configupload";

import styles from "@/styles/form.module.css";

const Sentiment = (params) => {
	return (
		<div className={styles.container}>
			<UploadPage projectname={params} />
			<ConfigUpload projectname={params} />
		</div>
	);
};

export default Sentiment;
