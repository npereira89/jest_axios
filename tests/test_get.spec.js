//import { instance } from "../src/api_client";
const instance = require("../src/api_client")

describe ("Get a instance API", () =>{
    it ("test Get Feature Covid. Must return SessionID", async () => {
   
        let res = await instance.get(`https://apixynew.p.rapidapi.com/users`,{ params: { id: 8 } }) //Get a request with a query param

        expect(res.status).toEqual(200);
        expect(res.data.website) 
        console.log(res.data) ;
    })
 
})