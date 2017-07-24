'use strict'
let client = require('../controller/clientController.js')

module.exports = function (options) {
    let seneca = this

    seneca.add({
        role: 'client',
        cmd: 'addMember'
    }, client.addMember)

}
