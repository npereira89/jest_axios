const axios = require("axios");

const instance = axios.create({
   
    /*
    -- IF YOU NEED TO INTRODUCE HEADER REQUEST, YOU NEED PUT THIS:        
    headers: {
            'X-RapidAPI-Key': '8f99f7ec78msh2dd7bc5731a1658p1865f9jsn339b5768f413',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    },*/
    baseURL: 'https://covid-193.p.rapidapi.com',
    validateStatus: function (status) {
        return status >= 200 && status < 500; // default
      },
  });

  module.exports=instance
  
