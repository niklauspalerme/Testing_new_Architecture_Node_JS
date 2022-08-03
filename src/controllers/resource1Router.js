/////////////////////////////////////////////////////////////
// Imports & Variables  - DEVELOPER AREA


const express = require("express");
const { getResource1Controller } = require("./get-resource1-controller");
const { postResource1Controller } = require("./post-resource1-controller");


/////////////////////////////////////////////////////////////
// Functions - DEVELOPER AREA


const resource1Router = () => {

      const resource1Router = express.Router();
      resource1Router.get("/",  getResource1Controller);
      resource1Router.post("/", postResource1Controller);
      return  resource1Router;

}



/////////////////////////////////////////////////////////////
// Exports  - DEVELOPER AREA


module.exports = {resource1Router}























