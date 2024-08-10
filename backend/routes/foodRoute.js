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

const uploads = multer({storage:storage})

foodRouter.post('/add',addFood)




export default foodRouter;