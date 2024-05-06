import express from 'express'
import { connectDB } from './config/db.js'
import { userRouter } from './app/routes/user.js'
import bodyParser from 'body-parser'

connectDB()

const app = express()
const port = process.env.PORT || 3000

//for parsin json
app.use(
    bodyParser.json({
        limit:'20mb'
    })
)
//for parse applicaction/x-ww-form-urlencoded
app.use(
    bodyParser.urlencoded({
        limit:'20mb',
        extended:true
    })
)
app.get('/',(req,res)=>{
    res.send({data:'Hello World!'})
})
app.get('/connection',async(req,res)=>{
    try{
        await connectDB()
        res.send({data:"connected"})
    }catch(e){
        res.status(400).send({error:e.message})
    }
})

app.use(userRouter)
 
app.listen(port,()=>console.log('server connected')) 