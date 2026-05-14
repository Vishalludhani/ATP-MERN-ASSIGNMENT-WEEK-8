//create user schema with validation
//create user model for user schema

import { Schema,model } from "mongoose";

const userSchema = Schema({
    name:{
        type:String,
        required:[true,"Enter your name"]
    },
    email:{
        type:String,
        required:[true,"Enter Email"],
        unique:[true,"Email already Exists"]
    },
    dateOfBirth:{
        type:Date,
        required:[true,"Enter the Date of Birth"]
    },
    mobileNumber:{
        type:Number
    },
    status:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true,
    strict:"throw",
    versionKey:false
})

export const UserTypeModel = model("user",userSchema)