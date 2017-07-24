var seneca = require('seneca')()

seneca
    .use('./service/read_client.js')
    .use('./service/write_client.js')
    .listen({host: "localhost", port: 9000, type: 'http'})