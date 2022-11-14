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

  static async getSingleCat(id) {
    const { rows } = await pool.query(`
        SELECT * FROM cat
        WHERE id = $1
        
        `, [id]);
    if (rows.length === 0) {
      return null;
    }
    return new Cat(rows[0]);
  }

  static async insertCat({ name, breed }) {
    const { rows } = await pool.query(`
insert into cat (name, breed)
values ($1, $2)
RETURNING *
        `, [name, breed]);
    return new Cat(rows[0]);
  }
  static async updateCat(id, newName) {
    const newCat = Cat.getSingleCat(id);
    if (!newCat) return null;
    const updatedCat = { ...newCat, ...newName };
    const { rows } = await pool.query(`
      UPDATE cat SET name = $2, breed = $3
      WHERE id = $1
      RETURNING *;    
          `, [id,
      updatedCat.name,
      updatedCat.breed
    ]);
    return new Cat(rows[0]);
  }
    
    
  static async deleteCat(id) {
    const { rows } = await pool.query(
      'DELETE FROM cat WHERE id = $1 RETURNING *', [id]);
    return new Cat(rows[0]);
  }

    
}
module.exports = { Cat }
;
