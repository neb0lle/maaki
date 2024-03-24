import UploadPage from "@/components/fileupload";
import ConfigUpload from "@/components/configupload";

export default async function Page() {
	return (
		<>
			<UploadPage />
			<ConfigUpload />
		</>
	);
}
