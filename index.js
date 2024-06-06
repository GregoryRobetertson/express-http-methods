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
    const userID = 'John Doe';
    res.send(`user id: ${userID}`)
})

app.get('/search', (req, res) => {
  const {term, sort} = req.query;
  if(!term || !sort) {
    return res.status(400).json({error: 'Missing required query parameters'})
  }
        res.json ({message: `Searching for: ${term}, sorted by: ${sort}`})
    
})

app.use((req, res) => {
    res.status(404).send('404 - Not Found');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})