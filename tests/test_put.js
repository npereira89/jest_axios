//import { instance } from "../src/api_client";
const instance = require("../src/api_client")

describe ("Put a instance API", () =>{
    it ("Test Put Verb must return OK and update name data",async () => {

        let res = await instance.put('https://api.instantwebtools.net/v1/passenger/63c91ab836a09d621f22471b', //await, bloqueia até a resposta chegar
            {name:"Antonio Costa",trips:999,airline:6})

            // validations
            expect(res.status).toEqual(200);
            console.log(res.data);
    })
})
