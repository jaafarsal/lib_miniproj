const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mis_lib'
});

connection.connect(function (err) {
    if (err) {
        console.log('Error while connecting to mysql', err);
        throw err;
    }
    console.log('Connected to MySql')
});

module.exports = connection;