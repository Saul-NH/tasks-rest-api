module.exports = {
    server : {
        port : process.env.PORT_DEV || 4000,
        domain : 'localhost',
    },

    //Base de datos
    mongoDb : {
        url: process.env.MONGODB_URL_DEV || 'mongodb://localhost/task-api'
    },

    logger : 'dev'
}