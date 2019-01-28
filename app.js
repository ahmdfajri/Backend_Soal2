var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var routeSaya = require('./Routes/route_mongoose')

var app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(routeSaya)

// initial route
app.get('/', (req, res)=>{
    res.send('<h1>Express ♥ Mongoose</h1>')
})

app.listen('1357', ()=>{
    console.log('Serer aktif di port 1357!')
})