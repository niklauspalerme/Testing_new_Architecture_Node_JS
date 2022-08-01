/////////////////////////////////////////////////////////////
// Imports & Variables - Developer Area

const express = require("express");
const {resource1Router} = require("./resource1Router");


const apirouter = () => {

      const apiRouter = express.Router();

      apiRouter.use("/resource1", resource1Router());

      return  apiRouter;

}




/////////////////////////////////////////////////////////////
// Exports

module.exports = {apirouter}





//const { check } = require('express-validator');
//const { validarCampos} = require("../middlewares/validar-campos");
//const { unauthorizedError, unsupportedMediaType, invalidContentHeaders } = require("../error-handling/errors-Handlers");
