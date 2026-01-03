import mongoose from "mongoose";
import { DB_URI ,NODE_ENV } from "../config/env.js";
if(!DB_URI)
{
    throw new Error("please define your MONGODP_URI");
}
const connectToDatabase= async ()=>{
    try{
        await mongoose.connect(DB_URI);
        console.log("connect sucseccfully");
    }
    catch(error)
    {
        console.error("error to connect to database" , error);
        process.exit(1);

    }
}
export default connectToDatabase;