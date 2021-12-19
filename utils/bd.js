const myqsl = require("mysql");
const util = require("util");

const pool = myqsl.createPool({

 host: 'localhost',
 port: '3306',
 password: '',
 user: 'root',
 database:'base1',
 connectionLimit:10

});

pool.query = util.promisify(pool.query);

module.exports = pool;