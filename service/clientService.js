'use strict'

let knex = require('../dbconfig/dbConfig.js')
let mongoose = require('../dbconfig/mongooseConfig.js')

module.exports = function (options) {
    let seneca = this

    seneca.add({
        role: 'client',
        cmd: 'message'
    }, (message, done) => {
        done(null, 'message returned')
    })

    seneca.add({
        role: 'client',
        cmd: 'create'
    }, createClient);

    seneca.add({
        role: 'client',
        cmd: 'confirm'
    }, confirmPayment)

    function createClient(body, done) {
        console.log(body.data.fullname)

        knex
            .insert({
            full_name: body.data.fullname,
            email: body.data.email,
            password: body.data.password,
            sex: 'Male',
            status: 'valid',
            country_id: 100,
            company_id: 1
        })
            .into('client')
            .then(() => {
                mongoose.model('')
            })
            .then((result) => {
                done(null, {
                    message: 'user created',
                    status: true
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function confirmPayment(body, done) {
        knex
            .update({status: 'paid'})
            .where({email: body.email})
            .from('client')
    }

}
