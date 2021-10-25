    const mysql = require("mysql2");
    const dbConfig = require("../config/db.config.js");
    const dotenv = require('dotenv');
    // create MySQL Connection
    var connection = mysql.createPool({
      host: dbConfig.DB_HOST,
      user: dbConfig.DB_USER_NAME,
      password: dbConfig.DB_PASSWORD,
      database: dbConfig.DB_NAME
    });
    module.exports = connection;
