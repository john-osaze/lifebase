const dotenv = require('dotenv');
const mysql = require('mysql')
dotenv.config();

const dbData = {
    host: process.env.host,
    user: process.env.USER,
    password: process.env.password,
    database: process.env.database,
}
const db = mysql.createConnection(dbData);


module.exports = db;