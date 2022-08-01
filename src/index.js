/////////////////////////////////////////////////////////////
// Importaciones


const { config } = require('dotenv');
const Server = require('./server');



/////////////////////////////////////////////////////////////
// Función Principal


let main = () => {


    ////////////////////////////////
    //Accedemos al .env

    config();

    ////////////////////////////////
    //Variables

    const PORT = process.env.PORT || 3000;
    const server = new Server();

    ////////////////////////////////
    //Funciones

    server.listen(PORT)

}


/////////////////////////////////////////////////////////////
// Ejecutamos Función Principal


main();