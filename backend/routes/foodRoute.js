import express from 'express'
import { addFood } from '../controllers/foodControllers.js'
import multer from 'multer'

const foodRouter = express.Router();

// image storage engine

const storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
            return cb(null,`${Date.now()}${file.originalname}`)
    }
})

// middleware
const upload = multer({storage:storage})

// route

foodRouter.post('/add',upload.single('image'),addFood)




export default foodRouter;