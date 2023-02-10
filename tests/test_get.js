//import { instance } from "../src/api_client";
const instance = require("../src/api_client")

describe ("Get a instance API", () =>{
    it ("Test Get Verb must return 200", async () => {
        let res = await instance.get('https://api.chucknorris.io/jokes/random') //await, bloqueia até a resposta chegar

        expect(res.status).toEqual(200); // o resultado tem de ser OK (HTTP 200)
        console.log(res.data.updated_at);
        console.log(res.data.id);
    })
})