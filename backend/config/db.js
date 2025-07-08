import mongoose from "mongoose";

const connectDB = async() => {
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/authfullstack2') 
       console.log('Connection to the database established')
    } catch (error) {
        console.log('Error while connecting to the DB', error)
    }
}

export default connectDB