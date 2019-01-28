var mongoose = require('mongoose')
var Schema = mongoose.Schema

var skemaSO = new Schema({
    namacpu: String,
    tipe: String,
    platform: String,
    rilis: String,
    ramSisa: Number,
    ramTotal: Number,
})

var Sistem = mongoose.model('data', skemaSO)
module.exports = Sistem