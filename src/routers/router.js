const express = require('express')
const router = express()

// user
router.use("/api/user", require("./UserRoutes"))

// users
router.use("/api/users", require('./UsersRoutes'))

// teste
router.get('/',(req,res)=>{res.status(200).json({msg:"Deu certo"})})

module.exports = router;