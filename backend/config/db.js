import mongoose from 'mongoose'

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('DB connected')
        
    } catch (error) {
        console.error(err)
        process.exit(1)
        
    }
   
}