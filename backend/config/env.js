require('dotenv').config();

const config = {
    dbUrl: process.env.DB_URL,
    tokenSecret: process.env.TOKEN_SECRET,
    port: process.env.PORT
};

module.exports = config;