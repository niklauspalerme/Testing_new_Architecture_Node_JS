/////////////////////////////////////////////////////////////
// Imports & Variables


const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const { errorHandler, invalidPathHandler, methodNotAllowed } = require('./error-handling/errors-Handlers');
const helmet = require('helmet');
const { validateInputs } = require('./pre-request-handlers/openapi');
const {apirouter} = require('./controllers/api-router');



// Test #1
require('express-async-errors');


//Test #2
//const { hookRouter } = require("./controllers/hookRouter")





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

        // Validating the OpenApis Spec before go to controller
        this.app.use(validateInputs); 

        //Test #2  - Error Async Handler
        //hookRouter();

    }


    routes = () => {

        this.app.use("/api", apirouter());

    }

    
    errors = () =>{

        this.app.use(errorHandler) // -> Sync Error Handler
        //this.app.use(invalidPathHandler);
        //this.app.use(methodNotAllowed);

    }

    listen = (port) => {

        this.app.listen(port, () => {
            console.log(`🚀 Server is listen the port ${port} 🚀`);
        })

    }

}


/////////////////////////////////////////////////////////////
// Exportamos

module.exports = Server