/////////////////////////////////////////////////////////////
// Errors handlings 

//1) Error 400 - Bad Request/Any
const badRequest = (err, req, res, next) => {

    // Error handling middleware functionality
    const status = err.status || 400
    //const client_id = req.headers.client_id || ''
    //const client_secret = req.headers.client_secret || ''

    console.log("🔊 Error - Bad Request 🔊");



    if (status != 400)
      next(err);
    else{
      res.status(status).json({
        "response_timestamp": new Date(Date.now()).toISOString(),
        "result": "Error - Bad Request",
        "result_code": status,
        "message": err.message
      });
    }

}


//2) Error 404 - Resource Not Found
const notFound = (err, req, res, next) => {

   const status = err.status 

   if (status != 404)
     next(err);
   else{
     console.log("🔊 Error - Resource Not Found 🔊");
     res.status(status).json({
       "response_timestamp": new Date(Date.now()).toISOString(),
       "result": "Error - Resource Not Found",
       "result_code": 404,
       "message": err.message
     });
   }

}


//3) Error 405 - Method Not Allowed
const  methodNotAllowed =  (err, req, res, next) => {

   const status = err.status 

   if (status != 405)
     next(err);
   else{
     console.log("🔊 Error - Method Not Allowed 🔊");
     res.status(status).json({
       "response_timestamp": new Date(Date.now()).toISOString(),
       "result": "Error - Method Not Allowed",
       "result_code": 405,
       "message": err.message
     });
   }

}

//4) Error 406 - Not Acceptable
const  notAcceptable =  (err, req, res, next) => {

  const status = err.status 

  if (status != 406)
    next(err);
  else{
    console.log("🔊 Error - Not Acceptable 🔊");
    res.status(status).json({
      "response_timestamp": new Date(Date.now()).toISOString(),
      "result": "Error - Not Acceptable",
      "result_code": 406,
      "message": err.message
    });
  }

}


//5) Error 415 - Unsupported Media Type
const unsupportedMediaType =  (err, req, res, next) => {

  const status = err.status 

  if (status != 415)
    next(err);
  else{
    console.log("🔊 Error - Not Acceptable 🔊");
    res.status(status).json({
      "response_timestamp": new Date(Date.now()).toISOString(),
      "result": "Error - Unsupported Media Type",
      "result_code": 415,
      "message": err.message
    });
  }

}

//6) Error 501 - Not Implemented
const notImplemented =  (err, req, res, next) => {

  const status = err.status 

  if (status != 501)
    next(err);
  else{
    console.log("🔊 Error - Not Acceptable 🔊");
    res.status(status).json({
      "response_timestamp": new Date(Date.now()).toISOString(),
      "result": "Error - Not Implemented",
      "result_code": 501,
      "message": err.message
    });
  }

}


//6) Error XXX - Any Error
const anyError =  (err, req, res, next) => {

   console.log("🔊 Error - Any Error 🔊");
    res.status(status).json({
      "response_timestamp": new Date(Date.now()).toISOString(),
      "result": "Error - Not Implemented",
      "result_code": err.status,
      "message": err.message
    });
}


/////////////////////////////////////////////////////////////
// Exports

module.exports={
    badRequest,
    notFound,
    methodNotAllowed,
    notAcceptable,
    unsupportedMediaType,
    notImplemented,
    anyError
}












///////////////////////////////////////////////////////////////
//Comments Errors

/*


if (status != 400)
      next();
    else if (client_id === '' || client_secret === '')
      next(unauthorizedError(err,res));
    else{
      console.log("🔊 Error - Bad Request 🔊");
      res.status(status).json({
        "response_timestamp": new Date(Date.now()).toISOString(),
        "result": "Error - Bad Request",
        "result_code": status,
        "message": err.message
      });
    }



//4) Error - Unauthorized
const unauthorizedError = (err,res) => {

  res.status(401).json({
    "result": "Error - Unauthorized - Access denied",
    "result_code": 401
   });

}






//Error/Middleware - Invalid Content Headers
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







*/