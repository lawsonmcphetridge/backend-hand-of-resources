const pool = require('../utils/pool');

class Shoe {
  id;
  first_name;
  last_name;

  constructor(sho) {
    this.id = sho.id;
    this.name = sho.name;
    this.brand = sho.brand;
  }

  static async getAllShoes() {
    const { rows } = pool.query(`
    SELECT * FROM shoes
        `);
    return rows.map((doe) => new Shoe(doe));
  }


}

module.exports = { Shoe };
