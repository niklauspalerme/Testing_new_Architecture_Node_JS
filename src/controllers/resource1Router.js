/////////////////////////////////////////////////////////////
// Imports & Variables - Developer Area

const express = require("express");
const { getResource1Controller } = require("./get-resource1-controller");
const { postResource1Controller } = require("./post-resource1-controller");

// Error handler middleware for async controller
const asyncHandler = fn => (req, res, next) => {
      return Promise
          .resolve(fn(req, res, next))
          .catch(next);
  };
  

const resource1Router = () => {


      const resource1Router = express.Router();

      resource1Router.get("/",  getResource1Controller);
      resource1Router.post("/", postResource1Controller);

      return  resource1Router;

}




/////////////////////////////////////////////////////////////
// Exports

module.exports = {resource1Router}