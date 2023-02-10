const axios = require('axios');

describe('FetchData', () => {
    it('should return covid statistics', async () => {
      
        axios("https://covid-193.p.rapidapi.com")
        .get('/statistics')
        .then(res => {
            if (res.statusCode===200) {
                console.log(res.body)
                return 
            }
            else
            {
                throw new Error(err, "Expected different key!")
            }
        })
    })
})
