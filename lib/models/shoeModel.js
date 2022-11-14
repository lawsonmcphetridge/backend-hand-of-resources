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
    
  static async insertShoe({ name, brand }) {
    const { rows } = await pool.query(`
insert into shoes (name, brand)
values ($1, $2)
returning *
        `, [name, brand]);
    return new Shoe(rows[0]);
  }
    
  static async updateShoe(id, newName) {
    const oneShoe = Shoe.getSingleShoe(id);
    if (!oneShoe) return null;
    const updatedShoe = { ...oneShoe, ...newName };
    const { rows } = await pool.query(`
    UPDATE shoes SET name = $2, brand = $3
    WHERE id = $1
    RETURNING *;    
        `, [id,
      updatedShoe.name,
      updatedShoe.brand
    ]);
    return new Shoe(rows[0]);
  }
  static async deleteShoe(id) {

    const { rows } = await pool.query(
      'DELETE FROM shoes WHERE id = $1 RETURNING *', [id]);
    return new Shoe(rows[0]);
  }
    
    
    
    
}

module.exports = { Shoe };
