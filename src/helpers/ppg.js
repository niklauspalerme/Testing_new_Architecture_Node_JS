///////////////////////////////////////////////////////////
// Functions:


const ppgPostRequestOptions = (payload) =>{

    const myHeaders = new Headers();
    myHeaders.append("client_id", "d099d73705d84220bd66cc8e67d8b5d0");
    myHeaders.append("client_secret", "29aD7b998f854F82B226f54372193fc8");
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify(payload);
    
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
  
    return requestOptions
  
  }


///////////////////////////////////////////////////////////
// Exports:


module.exports={
    ppgPostRequestOptions
}
  