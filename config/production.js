module.exports = {
    server : {
        port : process.env.PORT_PRODUCTION || 8081,
        domain : 'localhost',
    },

    //Base de datos
    mongoDb : {
        url: process.env.MONGODB_URL_PRODUCTION
    },

    logger : 'dev'
}