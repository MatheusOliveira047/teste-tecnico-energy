const router = require('express').Router()

// Controllers
const {
  register,
  login,
} = require("../controllers/UserController")

// middlewares validations

const validate = require('../middlewares/handleValidation')

const {
  userCreateValidation,
  loginValidation,
} = require("../middlewares/userValidations")

// routes
router.post("/register", userCreateValidation(), validate, register);
router.post('/login', loginValidation(),validate,login)

module.exports = router