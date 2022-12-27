const db = require("../db");

/* 
-- для хранения информации о продаваемых цветах 
create TABLE IF NOT EXISTS Flowers(
    id SERIAL PRIMARY KEY,
    price  NUMERIC(6, 2),
    photoPath VARCHAR,
    description TEXT
);
*/

class flowerController {
    async createFlower(request, response) {
        const {name, price, photopath, description} = request.body;
        db.query(`INSERT INTO flowers (price, name, photopath, description) VALUES (${price}, ${name}, ${photopath}, ${description}) RETURNING *;`)
        .then(result => { console.log(`Flower ${result}\nADDED SUCCESSFULLY`) })
        .catch(err => { console.log(err) });
    }

    async getAllFlowers(request, response) {
        db.query(`SELECT * FROM flowers;`)
        .then(result => { response.json(result.rows) })
        .catch(err => { console.log(err) });
    }

    async getOneFlower(request, response) {
        const id = request.params.id;
        db.query(`SELECT * FROM flowers WHERE id=${id};`)
        .then(result => { response.json(result.rows) })
        .catch(err => { console.log(err) });
    }

    async updateFlower(request, response) {
        const {id, price, name, photopath, description} = request.body;
        db.query(`UPDATE flowers SET price=${price}, name=${name} photopath=${photopath}, description=${description} WHERE id=${id}`)
        .then(result => { console.log(`Flower ${result}\nUPDATED SUCCESSFULLY`) })
        .catch(err => { console.log(err) });
        
    }

    async deleteFlower(request, response) {
        const id = request.body.id;
        db.query(`DELETE FROM flowers WHERE id=${id};`)
        .then(() => { console.log(`Flower WITH id=${id} DELETED SUCCESSFULLY`) })
        .catch(err => { console.log(err) });
    }
}

module.exports = new flowerController();