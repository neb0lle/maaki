const connectMongoDB = async () => {
	try {
		if (isConnected) {
			console.log("MongoDB Connection already established.");
		} else {
			await client.connect();
			isConnected = true;
			console.log("Connected to MongoDB.");
		}
		return client;
	} catch (error) {
		isConnected = false;
		console.error("Error connecting to MongoDB:", error);
		throw error;
	}
};

const dbInstance = async () => {
	const client = await connectMongoDB();
	return client.db("DestinationDesigns");
};

export default dbInstance;
