import express from 'express'
import { connectDB } from './config/db.js'
import { userRouter } from './app/routes/user.js'
import bodyParser from 'body-parser'
import { uploadfileright} from './app/controllers/upload.js'
import cors from 'cors'

connectDB()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

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

app.use(userRouter)

app.post('/upload',uploadfileright)
 
app.listen(port,()=>console.log('server connected')) 