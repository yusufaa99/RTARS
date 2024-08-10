import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL

const connectToDatabase = async () => {
  
    const connectionState = mongoose.connection.readyState;
    if (connectionState === 1) {
    console.log("Already Connected !");
    return;
    }
    if (connectionState === 2) {
    console.log("Connecting...");
    return;
    }
    
    try {
       await mongoose.connect(MONGODB_URL,{
            dbName: "AccidentReportingSystem",
            bufferCommands: false,
        });
        console.log("Mongo Db connection Sucessful");
    } catch (error) {
        console.log("Error in Mongo Db connection " + error);

    }
}

export default connectToDatabase;