///////////////////////////////////////////////////////////
// Imports & Variables


const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


///////////////////////////////////////////////////////////
// Functions - Controllers


const postResource1Controller =  async (req, res,next) => {

  try {

    const myHeaders = new Headers();
    myHeaders.append("client_id", "d099d73705d84220bd66cc8e67d8b5d0");
    myHeaders.append("client_secret", "29aD7b998f854F82B226f54372193fc8");
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify(req.body);
    
    const requestOptions1 = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

      //Part #1 - PPG
      let response = await fetch("https://us1.api.kimclark.com/kcc-sls-hana-sys-api-dev/hana/v1/api/microservice/ppg", requestOptions1)
        .then(response => response.json())
        .then(result => result)
        .catch( error => { 
          console.log("Error in Fetching the Hana Sys API -GETTING PPG DATA");
          throw error 
        });
  
      console.log("Part #1 - Getting Data for PPG (1/2) - DONE");


    const myHeaders2 = new Headers();
    myHeaders2.append("client_id", "d099d73705d84220bd66cc8e67d8b5d0");
    myHeaders2.append("client_secret", "29aD7b998f854F82B226f54372193fc8");
    myHeaders2.append("Content-Type", "application/json");
  
    const raw2 = JSON.stringify(response);
  
    const requestOptions2 = {
      method: 'POST',
      headers: myHeaders,
      body: raw2,
      redirect: 'follow'
    };
  
      //Part #2 - Hana
     response = await fetch("https://us1.api.kimclark.com/kcc-sls-hana-sys-api-dev/hana/v1/api/slm/ppg",requestOptions2)
      .then(response => response.json())
      .then(result => result)
      .catch( error => { 
        console.log("Error in Fetching the Hana Sys API - PUSHING PPG DATA TO HANA SYS");
        throw error 
      });
  
    console.log("Part #2 - Pushed to Hana Table (2/2) - DONE");
    res.status(201).json(response);
  
  } catch (error) {

    console.log("Error doing some process");
    next(error) //Calling next error handling middleware

  }

}


///////////////////////////////////////////////////////////
// Exports:

 module.exports = {
  postResource1Controller
 }