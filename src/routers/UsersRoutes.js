const router = require('express').Router()

//controllers
const {
  createUser,allUsers,deleteUsers
} = require('../controllers/UsersController')

// midlewares 
const validate = require('../middlewares/handleValidation')

const {usersCreateValidation} = require("../middlewares/usersValidation")

const authGuard = require("../middlewares/authGuard")

router.get("/",authGuard,allUsers)
router.post("/create", authGuard ,usersCreateValidation(), validate, createUser);
router.delete('/delete/:id',authGuard,deleteUsers)


module.exports = router