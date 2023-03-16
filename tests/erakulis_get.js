//import { instance } from "../src/api_client";
const instance = require("../src/api_client")

/*describe ("Get an information user authenticated on Erakulis", () =>{
    it ("Test getting an information user authenticated on Erakulis", async () => {
   
        let res = await instance.get("https://erakulis-api.dev3.creative.devoteam.com.pt/api/v1/me");

        expect(res.status).toEqual(200);
        console.log(JSON.stringify(res.data));
    })
})*/
describe ("Get an information user authenticated on Erakulis", () =>{
    it ("Test getting an information user authenticated on Erakulis", async () => {
   
        let res = await instance.put("https://erakulis-api.dev3.creative.devoteam.com.pt/api/v1/users/01gtv58931d5cc4rs4gma7t4b4/profile",
        {"sex": "male", "date_of_birth": "1975-01-15"});

        expect(res.status).toEqual(200);
        console.log(JSON.stringify(res.data));
    })
})
