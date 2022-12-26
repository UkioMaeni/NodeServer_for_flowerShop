const db = require("../db");

/* 
create TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    email VARCHAR UNIQUE NOT NULL,
    phonenumber VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL
);
*/

class UserController {
    async createUser(request, response) {
        const {email, phonenumber, password} = request.body;
        db.query(`INSERT INTO users (email, phonenumber, password) VALUES (${email}, ${phonenumber}, ${password}) RETURNING *;`)
        .then(result => { console.log(`USER ${result}\nADDED SUCCESSFULLY`) })
        .catch(err => { console.log(err) });
    }

    async getOneUser(request, response) {
        const id = request.params.id;
        db.query(`SELECT * FROM users WHERE id=${id};`)
        .then(result => { response.json(result.rows) })
        .catch(err => { console.log(err) });
    }

    async updateUser(request, response) {
        const {id, email, phonenumber, password} = request.body;
        db.query(`UPDATE users SET email=${email}, phonenumber=${phonenumber}, password=${password} WHERE id=${id}`)
        .then(result => { console.log(`USER ${result}\nUPDATED SUCCESSFULLY`) })
        .catch(err => { console.log(err) });
        
    }

    async deleteUser(request, response) {
        const id = request.body.id;
        db.query(`DELETE FROM users WHERE id=${id};`)
        .then(() => { console.log(`USER WITH id=${id} DELETED SUCCESSFULLY`) })
        .catch(err => { console.log(err) });
    }
}

module.exports = new UserController();