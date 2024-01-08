const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send("@chinmaymohite2311")
})

app.get('/login', (req,res) => {
    res.send('<h1> Helloo World !!! </h1>')
})

app.get('/chinmay',(req,res) =>{
    res.send('<h2> Chinmay Mohite </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
