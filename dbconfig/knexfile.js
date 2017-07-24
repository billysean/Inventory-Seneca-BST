/*
  mysql database
  runs on localhost(127.0.0.1) db target microservice
  pooling 0-10
  timeout 10s default 60s
*/

module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'microservice'
        },
        pool: {
            min: 0,
            max: 10
        },
        acquireConnectionTimeout: 10000
    }

}
