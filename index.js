'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000 || 3001

app.use(bodyParser.json())


app.get('/', (req,res) => {
    res.send('Welcome to our server.')
})

app.get('/about', (req,res) => {
res.send('This is the about page.')
})

app.post('/contact',( req, res)=> {
    const { name, email, message } = req.body;
})