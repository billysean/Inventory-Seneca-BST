'use strict'
let mongoose = require('../schema/clientSchema.js')
let log = require('../schema/logSchema.js')
let mongo = require('./clientReadController.js')

module.exports = {
    addMember: (body, done) => {
        mongo.findOne({
            company_name: body.data.company,
            "person.fullname": body.data.person.fullname
        }, (err, user) => {
            if (user) {
                done(null, {message: "user already exists"})
            } else {
                mongoose.update({
                    company_name: body.data.company
                }, {
                    $push: {
                        person: body.data.person
                    }
                }, (err, result) => {
                    if (err) {
                        console.error(err)

                        /*save log*/
                        new log({
                            employee: {
                                employee_id: 'BST_03',
                                name: "Ivan Patria",
                                role: "Front-end Lead"
                            },
                            action: "fail to add member " + body.data.person.fullname + " to " + body.data.company,
                            server_stat: err
                        }).save()

                        done(null, {
                            message: 'fail to add member',
                            status: false
                        })
                    } else {

                        /*save log*/
                        new log({
                            employee: {
                                employee_id: 'BST_03',
                                name: "Ivan Patria",
                                role: "Front-end Lead"
                            },
                            action: "successfully add member " + body.data.person.fullname + " to " + body.data.company,
                            server_stat: "server is working fine"
                        }).save()

                        done(null, {
                            message: 'member added successfully',
                            status: true
                        })
                    }
                })
            }
        })
    },
    addClient: (body, done) => {
        console.log(body)
        mongo.findOne(body, done)
    }

}