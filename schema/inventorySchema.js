'use strict'
let mongoose = require('../dbconfig/mongooseConfig.js')
let schema = mongoose.Schema

var client = new schema({
    company_name: {
        type: String,
        index: true,
        unique: true
    },
    person: [
        {
            fullname: String,
            sex: String,
            workphone: Number,
            homephone: Number,
            email: {
                type: String,
                index: true
            },
            password: String
        }
    ],
    city: String,
    country: String,
    address: String,
    active: Boolean,
    since: {
        type: Date,
        default: Date.now
    }
}, {versionKey: false})

var clientModel = mongoose.model('clients', client)

module.exports = clientModel