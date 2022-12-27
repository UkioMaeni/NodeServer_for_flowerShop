/* Д О П И С А Т Ь    Э Т О Т    Ф А Й Л*/

const db = require("../db");

/* 
-- для хранения информации о совершенных покупках (кто когда и на какую сумму)
create TABLE IF NOT EXISTS Transactions(
    id SERIAL PRIMARY KEY,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES Users (id),
    amount NUMERIC(8, 2),
    timePurchase TIMESTAMP
);

-- для xранения информации о совершенных покупках (какие именно цветы были куплены)
create TABLE IF NOT EXISTS PurchasedFlowers(
    transactionId INTEGER,
    FOREIGN KEY (transactionId) REFERENCES Transactions (id),
    flowerId INTEGER,
    FOREIGN KEY (flowerId) REFERENCES Flowers (id),
    numberFlowers SMALLINT,
    PRIMARY Key (transactionId, flowerId)
);
*/

//  В КАЖДОМ МЕТОДЕ ПЕРЕПИСАТЬ ТЕЛО
class UserController {
    async createTransaction(request, response) {
        const {email, phonenumber, password} = request.body;
        db.query(`INSERT INTO users (email, phonenumber, password) VALUES (${email}, ${phonenumber}, ${password}) RETURNING *;`)
        .then(result => { console.log(`USER ${result}\nADDED SUCCESSFULLY`) })
        .catch(err => { console.log(err) });
    }

    async getAllTransactions(request, response) {
        db.query(`SELECT * FROM transactions WHERE ;`)
        .then(result => { response.json(result.rows) })
        .catch(err => { console.log(err) });
    }

    async getOneTransaction(request, response) {
        const {id, email, phonenumber, password} = request.body;
        db.query(`UPDATE users SET email=${email}, phonenumber=${phonenumber}, password=${password} WHERE id=${id}`)
        .then(result => { console.log(`USER ${result}\nUPDATED SUCCESSFULLY`) })
        .catch(err => { console.log(err) });
        
    }

    async deleteTransaction(request, response) {
        const id = request.body.id;
        db.query(`DELETE FROM users WHERE id=${id};`)
        .then(() => { console.log(`USER WITH id=${id} DELETED SUCCESSFULLY`) })
        .catch(err => { console.log(err) });
    }
}

module.exports = new UserController();