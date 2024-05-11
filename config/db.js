import mongoose from "mongoose";
import { db } from "./env.js";

async function connectDB(){
    try{
        await mongoose.connect(db)
        console.log('connected succcesfully')
    }catch(e){
        console.log(e)
    }
}

export { connectDB }