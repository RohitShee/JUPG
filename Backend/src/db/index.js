import mongoose from "mongoose";

const DB_NAME = "JUPG"

const connectDB = async () =>{
    try{
        const connctionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST : ${connctionInstance.connection.host}`);
    } catch(error){
        console.log("MONGODB Connection error ",error);
        process.exit(1)
    }
}

export default connectDB