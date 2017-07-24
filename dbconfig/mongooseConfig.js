let mongoose = require('mongoose')
let database = 'BSTClient'
let url = 'mongodb://localhost:27017/'

mongoose.connect(url + database)

mongoose
    .connection
    .on('connected', () => {
        console.log('connected to database : ' + database)
    })

mongoose
    .connection
    .on('error', (err) => {
        console.log('connection to ' + database + " is having an error")
        console.log(err)
    })

mongoose
    .connection
    .on('disconnected', () => {
        console.log('connection to ' + database + "has been disconnected")
    })

mongoose.set('debug', true)
module.exports = mongoose
