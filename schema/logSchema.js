'use strict'
let mongoose = require('../dbconfig/mongooseConfig.js')
let schema = mongoose.Schema

var logs = new schema({
    employee: {
        employee_id: String,
        name: String,
        role: String
    },
    action: String,
    date: {
        type: Date,
        default: Date.now
    },
    server_stat: String
})

var logModel = mongoose.model('logs', logs)

module.exports = logModel