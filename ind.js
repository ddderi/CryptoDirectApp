const port = 8000
//import express, { response } from 'express'
const express = require('express')
//import cors from 'cors'
const cors = require('cors')
//import axios from 'axios'
const axios = require('axios')
//import fetch from "node-fetch";
//import dotenv  from "dotenv"
require('dotenv').config()


const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json('hi')

})

app.get('/news', (req, res) => {
    // fetch(`https://min-api.cryptocompare.com/data/v2/news/?lang=EN&${process.env.REACT_APP_RAPID_API_KEY}`)
    // .then(response => console.log(response))


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