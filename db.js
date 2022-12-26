const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "flower_shop",
    password: "password",
    
});


module.exports = pool;

