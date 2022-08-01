///////////////////////////////////////////////////////////
// Imports & Variables


const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


///////////////////////////////////////////////////////////
// Functions - Controllers

const getResource1Controller = async (req, res, next) => {

  // try {

    console.log("GET METHOD");

    const myHeaders = new Headers();
        myHeaders.append("client_id", "d099d73705d84220bd66cc8e67d8b5d0");
        myHeaders.append("client_secret", "29aD7b998f854F82B226f54372193fc8");
        
        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
    };
  
        
    const response = await fetch("https://us1nico.api.kimclark.com/kcc-sls-hana-sys-api-dev/hana/v1/api/slm/ppg", requestOptions)
      .then(response => response.text())
      .then(result => result)
      /*
      .catch( error => { 
          console.log("Error in Fetching the Hana Sys API - GETTING HANA PPG DATA");
          throw error 
    });*/

    console.log("Request for PPG (1/1) - DONE");
    res.status(200).send(response);

    /*
    
  } catch (error) {

      console.log("Error doing some process");
      next(error) //Calling next error handling middleware
  
  }
  */
  
};


///////////////////////////////////////////////////////////
// Exports:

 module.exports = {
   getResource1Controller
 }