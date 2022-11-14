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
    const { rows } = pool.query(`
        SELECT * FROM overwatch
        `);
    return rows.map((newChar) => new Overwatch(newChar));
  }
    


}

module.exports = { Overwatch };
