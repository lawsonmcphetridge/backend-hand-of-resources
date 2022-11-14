const pool = require('../utils/pool');


class Shoe {
  id;
  first_name;
  last_name;

  constructor(Sho) {
    this.id = Sho.id;
    this.name = Sho.name;
    this.brand = Sho.brand;
  }

  static async getAllShoes() {
    const { rows } = pool.query(`
    SELECT * FROM shoes
        `);
    return rows.map((doe) => new Shoe(doe));
  }


}

module.exports = { Shoe };
