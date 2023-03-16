const axios = require('axios')

const instance = axios.create({
   
  
    // IF YOU NEED TO INTRODUCE HEADER REQUEST, YOU NEED PUT THIS:        
    headers: {
      //"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5N2JlOTg2OS1lYmIxLTQ0YWMtYjFmNi01OGE3N2QzN2ZkZTYiLCJqdGkiOiJlZmI5OTg4YmZjMjY1ZDVjMWUxZTg5ZDMzOTUwZDQyODA5ODlmY2EyNDUxOTc3NGIyODIwMGE2ZDcxMjE2Mzc2OTk3OGQyZWUzODJhOWRjZSIsImlhdCI6MTY3ODE5MDU4OC4xNjAxMTQsIm5iZiI6MTY3ODE5MDU4OC4xNjAxMTYsImV4cCI6MTY3OTQ4NjU4OC4xMjc5ODEsInN1YiI6IjAxZ3R2NTg5MzFkNWNjNHJzNGdtYTd0NGI0Iiwic2NvcGVzIjpbXX0.J7IuizFegBhdpHcGuiEHFXK3dQm1ZhNB5PHJG7pny7rQiPkEGYd54wOdHp5cr6LAJEge4h4iqW_DeRoPupIB-YcswyccYGv2deT9bvS21dXoRwnl9KW80CktNKn1QLGcp6g_j3YoJA-lCHT5bvRka5oiDQ6pgk-0dq8CvEZQrVct48LSq3VKIOAyEu3kaeVeqWIGNcyAMubPaC88PPMn0-IfDNZfe8LmJI0TrVlObOjMQe_-r822dR2UlLIxQm8rVUDY27QAKGjwRZ7-FIFCwhFrRAREZIf65t-zYXsNkaz3nYFr3dHOYZeWlmDL-i7cITGICez3MNmzMPV2uHsQ9MpZ6RivGseX3dj9djmijd4PH3e5_km2S9iOTj0OQ-A5i5AgxErf-jbGqjY4lYUX_NWpZ2T2m1wYSgBc23lOlgdCcXImVJkcSxDiFmMoge01nDngMKcRhole9EJ4HjVSq_jTTwGefMlgYqI0ZToAef2o-HUQMoTU_uI60-livMbAtFmmstVEMPJnWw72CiEt0uqP2-xvIXKCpHkb6Rd_UGvJyeogF7kUHUxcle955l96k-fvDDjqoKMSthYtlMYIo0nt8NFQ3_zup9olMV5TbUAbU9wmyooWnoS_5Ohl5mA6BolAn3gQ4zDC3QFTZIw8aq5CfX8bDYS4q78u59NSPMs"
      "user-agent":'Mozilla/5.0 (Linux; Android 6.0.1; SM-G935T Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/51.0.2704.81 Mobile Safari/537.36 Instagram 8.4.0 Android (23/6.0.1; 560dpi; 1440x2560; samsung; SM-G935T; hero2qltetmo; qcom; en_US',
      "x-csrtoken": "n3hgbBz0UJbuEq3B0w1rKqMzhrYXR3kX"
       // 'X-RapidAPI-Key': '8f99f7ec78msh2dd7bc5731a1658p1865f9jsn339b5768f413',
       // 'X-RapidAPI-Host': 'apixynew.p.rapidapi.com'
    }, 
   // baseURL: 'https://apixynew.p.rapidapi.com/users',
    validateStatus: function (status) {
        return status >= 200 && status < 500; // default
      },
  });

  module.exports=instance
  
