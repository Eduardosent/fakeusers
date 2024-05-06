import mongoose from "mongoose";
import { db } from "./env.js";

async function connectDB(){
    try{
        await mongoose.connect(db)
        console.log('connected succcesfully')
        return true
    }catch(e){
        console.log(e)
        return false
    }
}

export { connectDB }