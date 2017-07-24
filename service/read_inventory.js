'use strict'
let client = require('../controller/clientReadController.js')

module.exports = function (options) {
    let seneca = this

    //find specific data
    seneca.add({
        role: 'client',
        cmd: 'findOne'
    }, client.findOne);

    seneca.add({
        role: 'client',
        cmd: 'findAll'
    }, client.findAll);

}