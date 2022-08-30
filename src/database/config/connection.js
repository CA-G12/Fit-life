require('dotenv').config();
const { Pool } = require('pg');
const database = require('../Configurations/connection')
const { readFileSync } = require("fs");
const { join } = require("path");

const connection = new Pool(database);

// class DB {
//     static connection;
//     constructor() {
//         DB.connection = new Pool(database);
//     }

//     static build = () => {
//         const query = readFileSync(join(__dirname, "build.sql")).toString();
//         return connection.query(query);
//     };
// }

module.exports = connection
