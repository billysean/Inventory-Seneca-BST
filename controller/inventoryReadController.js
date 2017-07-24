'use strict'
let mongoose = require('../schema/clientSchema.js')
let log = require('../schema/logSchema.js')

module.exports = {
    findAll: (body, done) => {
        return new Promise((resolve, reject) => {
            mongoose.find({}, (err, result) => {
                if (err) {
                    /*save log*/
                    new log({
                        employee: {
                            employee_id: 'BST_03',
                            name: "Ivan Patria",
                            role: "Front-end Lead"
                        },
                        action: "FIND ALL",
                        message: "employee fail to retrieve data client",
                        server_stat: err
                    }).save()

                    done(null, {
                        message: "server is having an error",
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
                        action: "FIND ALL",
                        message: "Employee retrieve data client successfully",
                        server_stat: "Server is working fine"
                    }).save()

                    done(null, result)

                }
            })
        })
    },
    findOne: (body, done) => {
        mongoose.find({
            company_name: body.data.company,
            "person.fullname": body.data.person.fullname
        }, (err, result) => {
            if (err) {
                /*save log*/
                new log({
                    employee: {
                        employee_id: 'BST_03',
                        name: "Ivan Patria",
                        role: "Front-end Lead"
                    },
                    action: "data not found ",
                    message: "search parameter company : " + body.data.company + " & person:" + body.data.person.fullname,
                    server_stat: err
                }).save()

            } else {

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

                done(null, result)
            }
        })
    }

}