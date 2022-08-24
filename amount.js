let mongoose = require('mongoose')

//create schema
let mongoSchema = mongoose.Schema

let amountSchema = new mongoSchema({
    "name": String,
    "bells": Number,
    "whistles": Number
}, {collection: 'amount'})

//export the mongoose model
module.exports = mongoose.model('amount',amountSchema)