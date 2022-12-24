const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: "5000",
    user: "postgres",
    database: "flower_shop",
    password: "qaz123"
});


module.exports = pool;

