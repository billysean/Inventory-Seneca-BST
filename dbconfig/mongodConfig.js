// let MongoClient = require('mongodb').MongoClient
// let assert = require('assert')

// // Connection URL
// let database = 'BST-Client'
// var url = 'mongodb://localhost:27017/' + database

// module.exports = {

//     connect: () => {
//         MongoClient.connect(url, (err, db) => {
//             if (err) 
//                 return
//             assert.equal(null, err)
//             console.log('connection with mongodb is successful')
//         })
//     },
//     close: () => {
//         db.close();
//     }
// }