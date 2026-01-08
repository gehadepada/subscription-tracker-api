import mongoose, { Schema } from "mongoose";

const userScheme = new mongoose.Schema({
    name:{
        type : String , 
        required : [true , "Name is required"],
        trim : true , 
    },
    email:{
        type : String,
        unique:true,
        required : [true , "Email is required"],
        lowercase:true,
    },
    password :{
        type:String,
        required :[true , "Password is required"],
        minLength : 6,
    }
},
{timestamps:true});
const User = mongoose.model('User' , userScheme);
export default User;