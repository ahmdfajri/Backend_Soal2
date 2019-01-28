var router = require('express').Router()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Sistem = require('./../models/sistemOperasi')
router.use(bodyParser.json())
var url =
'mongodb://fajri:12345@localhost:27017/sistem'

// response = semua data dari mongo
router.get("/data", (req, res) => {
    Sistem.find((err, data) => {
        if (err) {
            throw err;
        }
        else {
            res.send(data);
        }
    })
});

// route post data ke mongo
router.post('/data', (req, res)=>{
    mongoose.connect(url, ()=>{
        console.log('Terhubung ke MongoDB!')
        new Sistem({
            namacpu: req.body.namacpu,
            tipe: req.body.tipe,
            platform: req.body.platform,
            rilis: req.body.rilis,
            ramSisa: req.body.ramSisa,
            ramTotal: req.body.ramTotal
        }).save().then((hasil)=>{
            res.send("Successfully posted!");
        })
    })
})



module.exports = router