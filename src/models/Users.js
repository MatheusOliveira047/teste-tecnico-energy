const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
  name:String,
  email:String,
  phone:Number,
  state:String,
  city:String,
  district:String,
  Street:String,
  number:String,
  cpf:String,
},{
  timestamps:true
})

const Users = mongoose.model("UsersClient",userSchema)

module.exports = Users