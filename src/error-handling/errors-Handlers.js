/////////////////////////////////////////////////////////////
// Functions

const { kccErrorLogger } = require("../controllers/loggers/logger");


//1) Global Error - Bad Request/Any
const errorHandler = (err, req, res, next) => {

    // Error handling middleware functionality
    const status = err.status || 400
    const client_id = req.headers.client_id || ''
    const client_secret = req.headers.client_secret || ''
    console.log("Global Error Handler: ", status);


    //AQui debes tener el error de los hjeader el de no autorizado

    if(status === 405)
      next(methodNotAllowed(err,res));
    else if (status === 404)
      next(invalidPathHandler(err,res));
    else if (status === 416)
      next(unsupportedMediaType(err,res));
    else if (client_id === '' || client_secret === '')
      next(unauthorizedError(err,res));
    else {
      kccErrorLogger.log('error', err.message)
      // send back an easily understandable error message to the caller
      res.status(status).json({
        "result": "Error - Bad Request",
        "result_code": status,
        "message": err.message
      });
    }     
  
}


//2) Error - Resource Not Found
const invalidPathHandler = (err, res) => {

    kccErrorLogger.log('error', "Error - Resource Not Found");

    res.status(err.status).json({
        "result": "Error - Resource Not Found",
        "result_code": 404
    })
  
}


//3) Error - Method Not Allowed
const  methodNotAllowed = (err,res) => {

    kccErrorLogger.log('error', 'Error - Method Not Allowed');

    res.status(err.status).json({
        "result": "Error - Method Not Allowed",
        "result_code": 405
    });

}


//4) Error - Unauthorized
const unauthorizedError = (err,res) => {

    kccErrorLogger.log('error', 'Error - Unauthorized');

    res.status(401).json({
      "result": "Error - Unauthorized - Access denied",
      "result_code": 401
     });
  
}

//5 Error/Middleware - Invalid Content Headers
const invalidContentHeaders = (req,res,next) => {

  const client_id = req.headers.client_id || ''
  const client_secret = req.headers.client_secret || ''

 if (client_id !== "12345" || client_secret !== "12345" ){
    
    kccErrorLogger.log('error', 'Error -Invalid Content Headers');

    console.log("Nico esta aca II");

    res.status(401).json({
      "result": "Error - Unauthorized - Invalid content headers",
      "result_code": "401"
    });

  }else
    next();

}


//6) Error - Unsupported Media Type
const unsupportedMediaType = (err, res)  => {

  //const contentType = req.headers['content-type']

  kccErrorLogger.log('error', 'Error - Unsupported Media Type');

    res.status(err.status).json({
      "result": "Error - Unsupported Media Type",
      "result_code": 416
    });
 
}

/////////////////////////////////////////////////////////////
// Exports

module.exports={
    errorHandler
}
