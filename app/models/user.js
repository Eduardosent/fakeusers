import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const userSchema = new Schema({
    name:{
        type:String
    },
    imgprofile:{
        type:String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    email:{
        type: String,
        unique: true,
        required: true
    }
},
{
    versionKey:false,
    timestamps:true
}
)
userSchema.plugin(mongoosePaginate)
const userModel = model('user',userSchema)

export { userModel }