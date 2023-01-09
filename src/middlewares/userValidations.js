const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("userName")
      .isString()
      .withMessage("O userName é obrigatório.")
      .isLength({ min: 5 })
      .withMessage("O userName precisa ter no mínimo 5 caracteres."),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória.")
      .isLength({ min: 5 })
      .withMessage("A senha precisa de no mínimo 5 caracteres."),
  ];
};

const loginValidation = ()=>{
  return[
    body("userName")
      .isString()
      .withMessage("O username é obrigatório."),
    body("password")
      .isString()
      .withMessage("Senha é obrigatória.")
  ]
}


module.exports = {
  userCreateValidation,
  loginValidation,
}