const pool = require('../utils/pool');

class   Cat {
  id;
  name;
  breed;
  constructor(cat) {
    this.id = cat.id;
    this.name = cat.name;
    this.breed = cat.breed;
  }
  static async getAllCats() {
    const { rows } = await pool.query(`
        SELECT * FROM cat            
        `);
    return rows.map((singleDog) => new Cat(singleDog));
  }



    
    
}
module.exports = { Cat }
;
