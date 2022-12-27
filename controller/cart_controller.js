const db = require("../db");

/* 
-- для хранения информации о содержимом корзины
create TABLE IF NOT EXISTS Carts(
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES Users (id),
    flowerId INTEGER,
    FOREIGN KEY (flowerId) REFERENCES Flowers (id),
    numberFlowers SMALLINT,
    PRIMARY KEY (userId, flowerId)
);
*/

class CartController {
    async addToCart(request, response) {
        const {userId, flowerId} = request.body;
        db.query(`INSERT INTO carts (userid, flowerid, numberflowers) VALUES (${userId}, ${flowerId}, 1) RETURNING *;`)
        .then(result => { console.log(`Flower ${result}\nADDED in cart SUCCESSFULLY`) })
        .catch(err => { console.log(err) });
    }

    async getCart(request, response) {
        const userId = request.params.userId;
        db.query(`SELECT f.*, c.numberflowers FROM flowers AS f, carts AS c WHERE f.id = c.flowerid AND f.id IN (SELECT flowerid FROM carts WHERE userid=${userId});`)
        .then(result => { response.json(result.rows) })
        .catch(err => { console.log(err) });
    }

    async updateCart(request, response) {
        const {userId, flowerId, numberFlowers} = request.body;
        db.query(`UPDATE carts SET numberflowers=${numberFlowers} WHERE flowerid=${flowerId} AND userid=${userId};`)
        .then(result => { console.log(`Flowers ${result}\nUPDATED flower number SUCCESSFULLY`) })
        .catch(err => { console.log(err) });
        
    }

    async deleteFromCart(request, response) {
        const { flowerId, userId } = request.body;
        db.query(`DELETE FROM carts WHERE flowerid=${flowerId} AND userid=${userId};`)
        .then(() => { console.log(`Flower WITH id=${flowerId} DELETED FROM cart of user WITH id=${userId} SUCCESSFULLY`) })
        .catch(err => { console.log(err) });
    }
}

module.exports = new CartController();