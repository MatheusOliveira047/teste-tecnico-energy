const Users = require("../models/Users")
const mongoose = require('mongoose')

// Register user and sign in 
const createUser = async(req,res)=>{
  const {
    name,
    email,
    phone,
    cpf,
    state,
    city,
    district,
    number,
  } = req.body
  

  const newUser = await Users.create({
    name,
    email,
    phone,
    cpf,
    state,
    city,
    district,
    number,
  })


  if(!newUser){
    res.status(422).json({errors:['Houve um erro, por favor tente mais tarde']})
    return
  }

  return res.status(201).json({newUser})
}

// get users
const allUsers = async(req,res)=>{
  const users = await Users.find()

  return res.status(201).json({users})
}

const deleteUsers = async(req,res)=>{
  const {id} = req.params

  try {
     
    const user = await Users.findById(mongoose.Types.ObjectId(id))
    
    if(!user){
      return res.status(404).json({errors:["Usuário não encontrada"]})
    }
    
    await Users.findByIdAndDelete(user._id)
    
    return res.status(200).json({id:user._id, message:"Usuário excluído com sucesso."})
  
  } catch (error) {
    return res.status(404).json({errors:["Usuário não encontrada"]})
  }

}


module.exports = {
  createUser,
  allUsers,
  deleteUsers
}