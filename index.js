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
res.json({message: ' Your message has been received.'})
})

app.get('/user/:id', (req, res) => {
    const userID = req.params.id;
    res.send(`user ID: ${userID}`)
})

app.use((req, res) => {
    res.status(404).send('404 - Not Found');
})

app.get('/search', (req, res) => {
    const {q} = req.query;
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})