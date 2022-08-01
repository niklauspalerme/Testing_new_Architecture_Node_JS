/////////////////////////////////////////////////////////////
// Imports & Variables


const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const { errorHandler, invalidPathHandler, methodNotAllowed } = require('./error-handling/errors-Handlers');
const helmet = require('helmet');
const { validateInputs } = require('./pre-request-handlers/openapi');
const {apirouter} = require('./controllers/api-router');
const { request, response, next } = require('express');



/////////////////////////////////////////////////////////////
// Clases


class Server {


    ////////////////////////////////
    // 1) Constructor

    constructor() {

        //Express
        this.app = express();

        // Accedemos al ENV
        config();

        //Path de las rutas
        //this.slmPath = '/api/v1/ppg'
        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();

        //Errors Handlers
        this.errors();

        
    }

    ////////////////////////////////
    //2) Metodos


    middlewares = () => {

        this.app.use(cors());

        this.app.use(express.json());   

        this.app.use(helmet());

        // Validating inputs before go to controller
        this.app.use(validateInputs); 

    }


    routes = () => {

        // Error handler middleware for async controller
        const asyncHandler = () => {
            return Promise
                //.resolve(fn(req, res, next))
                .resolve(apirouter())
                .catch(next);
        };


        this.app.use("/api", asyncHandler());

      
    }

    
    errors = () =>{

        this.app.use(errorHandler) // -> Sync Error Handler
        //this.app.use(invalidPathHandler);
        //this.app.use(methodNotAllowed);

    }

    listen = (port) => {

        this.app.listen(port, () => {
            console.log(`Server is listen the port ${port}`);
        })

    }

}


/////////////////////////////////////////////////////////////
// Exportamos

module.exports = Server