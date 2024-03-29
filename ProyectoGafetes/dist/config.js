require('dotenv').config();
const config = {
  mysql: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT_DB
  }
};
module.exports = config;