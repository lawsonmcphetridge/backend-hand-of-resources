const pool = require('../utils/pool');

class Overwatch {
  id;
  name;
  role;
  constructor(char) {
    this.id = char.id;
    this.name = char.name;
    this.role = char.role;
  }

    
  static async getAllCharacters() {
    const { rows } = await pool.query(`
        SELECT * FROM overwatch
        `);
    return rows.map((newChar) => new Overwatch(newChar));
  }
    
    
  static async getSingleChar(id) {
    const { rows } = await pool.query(`
        SELECT * FROM overwatch 
        WHERE id = $1
        
        `, [id]);
    if (rows.length === 0) {
      return null;
    }
    return new Overwatch(rows[0]);
  }

    
    
  static async insertChar({ name, role }) {
    const { rows } = await pool.query(`
insert into overwatch (name, role)
values ($1, $2)
returning *
        `, [name, role]);
    return new Overwatch(rows[0]);
  }

    
  static async updateChar(id, newName) {
    const person = Overwatch.getSingleChar(id);
    if (!person) return null;
    const updatedPerson = { ...person, ...newName };
    const { rows } = await pool.query(`
    UPDATE overwatch SET name = $2, role = $3
    WHERE id = $1
    RETURNING *;    
        `, [id,
      updatedPerson.name,
      updatedPerson.role
    ]);
    return new Overwatch(rows[0]);
  }

    
//   static async deleteChar(id) {

//     const { rows } = await pool.query(
//       'DELETE FROM overwatch WHERE id = $1 RETURNING *', [id]);
//     return new Overwatch(rows[0]);
//   }
}

module.exports = { Overwatch };
