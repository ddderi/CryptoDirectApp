// start local server 8000 port. request to put all the data  http://localhost:8000/news with app.get /news

const port = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')

require('dotenv').config()


const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json('hi')

})

app.get('/news', (req, res) => {
    
    const fetching =  {
        method: 'GET',
        url: 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&',
        headers: {
            'Apikey': process.env.REACT_APP_RAPID_API_KEY
        }
    } 
    axios.request(fetching).then((response) => {res.json(response.data)
    })
})





app.listen(8000, () => console.log(`serveur is running on port ${port}`))