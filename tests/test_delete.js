//import { instance } from "../src/api_client";
const instance = require("../src/api_client")

describe ("Delete a instance API", () =>{
    it ("Test Delete Verb must return OK", async () => {

        let response = await instance.delete('https://api.instantwebtools.net/v1/passenger/63c91ac236a09de74e224965')

        // validations
        expect(response.status).toEqual(200)
        console.log(response.data) 
    })
    it ("Test Delete Verb must return OK", async () => {

        let response = await instance.delete('https://api.instantwebtools.net/v1/passenger/63c91ac236a09d64e3224971')

        // validations
        expect(response.status).toEqual(200)
        console.log(response.data) 
    })
    it ("Test Delete Verb must return OK", async () => {

        let response = await instance.delete('https://api.instantwebtools.net/v1/passenger/63c91ac236a09d3b3522495f')

        // validations
        expect(response.status).toEqual(200)
        console.log(response.data) 
    })
    it ("Test Delete Verb must return OK", async () => {

        let response = await instance.delete('https://api.instantwebtools.net/v1/passenger/63c91ac236a09de81622496d')

        // validations
        expect(response.status).toEqual(200)
        console.log(response.data) 
    })
    it ("Test Delete Verb must return OK", async () => {

        let response = await instance.delete('https://api.instantwebtools.net/v1/passenger/63c91ac236a09d7d1b224973')

        // validations
        expect(response.status).toEqual(200)
        console.log(response.data) 
    })
    it ("Test Delete Verb must return OK", async () => {

        let response = await instance.delete('https://api.instantwebtools.net/v1/passenger/63c91ac236a09dd6b9224967')

        // validations
        expect(response.status).toEqual(200)
        console.log(response.data) 
    })
})
