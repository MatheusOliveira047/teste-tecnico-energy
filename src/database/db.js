const mongoose = require('mongoose')

const mongo_uri = process.env.MONGO_URI

const connectToDatabase = async ()=>{
    
    try {
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(mongo_uri)
        console.log('connect to database')

        return db 
    } catch (error) {
        console.log(error)
    }
}

connectToDatabase()

module.exports = connectToDatabase