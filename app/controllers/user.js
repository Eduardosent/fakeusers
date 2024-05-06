import { userModel } from "../models/user.js";

const options = {
    limit: 10
}

export async function getUsers(req,res){
    res.send({data:{
        "user1":"user1",
        "user2":"user2",
    }})
    /*await userModel.paginate({},options)
    .then((data)=>res.send(data))
    .catch(e=>console.log(e))*/
}
export async function getUser(req,res){
    const id = req.params.id
    try{
        const resp = await userModel.findById(id)
        res.send(resp)
    }catch(e){
        res.status(404).send({error:e.message})
    }
}
export async function createUser(req,res){
    const data = req.body
    try{
        const resp = await userModel.create(data)
        res.send(resp)
    }catch(e){
        res.status(404).send({error:e.message})
    }
}
export async function updateUser(req,res){
    const id = req.params.id
    try{
        const resp = await userModel.updateOne({_id:id},req.body)
        res.send(resp)
    }catch(e){
        res.status(404).send({error:e.message})
    }
}
export async function deleteUser(req,res){
    const id = req.params.id
    try{
        const resp = await userModel.deleteOne({_id:id})
        res.send(resp)
    }catch(e){
        res.status(404).send({error:e.message})
    }
}