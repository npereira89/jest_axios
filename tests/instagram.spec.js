//import { instance } from "../src/api_client";
const instance = require("../src/api_client")

describe ("Get information instagram account", () =>{
    it ("Test get information instagram account", async () => {
   
       // let res = await instance.get("https://www.instagram.com/api/v1/users/web_profile_info/?username=sophiavictoria204");

        let res = await instance.get("https://www.instagram.com/api/v1/users/web_profile_info/?username=martitwerkreal");

        console.log("teste");
    
        expect(res.status).toEqual(200);
        console.log(JSON.stringify(res.data));
    })
})
