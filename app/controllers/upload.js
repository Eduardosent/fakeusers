import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null,'uploads')
    },filename: (req, file, cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
})
const upload = multer({storage:storage})

/*export const uploading = upload.single('myFile')
export function uploadFile(req,res){
    res.send(
        {data:"upload file"}
    )
}*/
export function uploadfileright(req,res){
    try{
        upload.single('myFile')
        console.log('exito')
        res.send('exito')
    }catch(e){
        console.log(e)
        res.send(e)
    }
}