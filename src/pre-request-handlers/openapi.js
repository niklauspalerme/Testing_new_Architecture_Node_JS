const OpenApiValidator = require('express-openapi-validator');



const validateInputs = OpenApiValidator.middleware({
    apiSpec: "assets/openapi.json",
    validateRequests: true,
    validateResponses: false,
  });


module.exports={
    validateInputs
}
