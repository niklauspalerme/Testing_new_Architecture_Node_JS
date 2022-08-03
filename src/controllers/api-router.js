/////////////////////////////////////////////////////////////
// Imports & Variables - DEVELOPER AREA


const express = require("express");
const {resource1Router} = require("./resource1Router");



/////////////////////////////////////////////////////////////
// Functions - DEVELOPER AREA

const apirouter = () => {

      const apiRouter = express.Router();
      apiRouter.use("/resource1", resource1Router());
      return  apiRouter;
    
}



/////////////////////////////////////////////////////////////
// Exports - DEVELOPER AREA

module.exports = {apirouter}





//const { check } = require('express-validator');
//const { validarCampos} = require("../middlewares/validar-campos");
//const { unauthorizedError, unsupportedMediaType, invalidContentHeaders } = require("../error-handling/errors-Handlers");
