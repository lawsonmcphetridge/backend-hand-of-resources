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


}

module.exports = { Overwatch };
