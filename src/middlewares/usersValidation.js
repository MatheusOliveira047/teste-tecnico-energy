const { body } = require("express-validator");

const usersCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório.")
      .isLength({ min: 5 })
      .withMessage("O userName precisa ter no mínimo 5 caracteres."),
    body("email")
      .isString()
      .withMessage("o email é obrigatório.")
      .isEmail()
      .withMessage("O email precisa ser valido"),
    body("phone")
      .isNumeric()
      .withMessage("O numéro precisa ser valido"),
    body("cpf")
      .isString()
      .withMessage("O cpf precisa ser valido"),
    body("state")
      .isString()
      .withMessage("O estado é obrigatório."),
    body("city")
      .isString()
      .withMessage("A cidade é obrigatória."),
    body("district")
      .isString()
      .withMessage("O bairro é obrigatório."),
    body("number")
      .isString()
      .withMessage("O numéro do endereço é obrigatório."),
  ];
};


module.exports = {
  usersCreateValidation,
}