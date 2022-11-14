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
    const { rows } = await pool.query(`
    SELECT * FROM shoes
        `);
    return rows.map((doe) => new Shoe(doe));
  }
    
  static async getSingleShoe(id) {
    const { rows } = await pool.query(`
        SELECT * FROM shoes 
        WHERE id = $1
        `, [id]);
    if (rows.length === 0) {
      return null;
    }
    return new Shoe(rows[0]);
  }

    
}

module.exports = { Shoe };
