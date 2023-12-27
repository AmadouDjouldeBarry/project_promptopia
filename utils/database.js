import mongoose from "mongoose";

let isconnected = false;

export const connectToDB = async ()=>{
    mongoose.set("strictQuery", true);
    if(isconnected){
        console.log("Mongo is connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            db_name: "share_prompt",
            UseNewUrlParser: true,
            useUnifiedTopology: true,
        })

    isconnected = true;
    console.log("Mongo is connected");
        
    } catch (error) {

        console.log(error);
        
    }
}