export default function RootLayout(children) {
	return (
		<html lang="en">
			<head>
				<title>MAKI</title>
			</head>

			<body>
				<div className="container">{children}</div>
			</body>
		</html>
	);
}
