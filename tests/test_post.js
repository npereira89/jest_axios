//import { instance } from "../src/api_client";
const instance = require("../src/api_client")

describe ("Post a instance API", () =>{
    it ("Test Post Verb must return OK",async () => {

        let res = await instance.post('https://api.instantwebtools.net/v1/passenger', //await, bloqueia até a resposta chegar
            {name: "David Duarte" ,trips: 777,airline: 2})

            // validations
            expect(res.status).toEqual(200);
            console.log(res.data);
    })
})
