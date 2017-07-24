var config = require('./knexfile.js')
var env = 'development'
var knex = require('knex')(config[env])

module.exports = knex

/*
un-comment when needs to update db structure
migration is used when dealing with modifying database

in terminal type knex migrate:make <tablename>
*/

// knex     .migrate     .latest([config]);