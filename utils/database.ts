import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log("MongoDB is already connected");
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
        isConnected = true;
        console.log("Mongodb is connected")
    } catch (error: any) {
        console.log("Error connecting to DB: " + error.message)
    }
 }