const pool = require('../utils/pool');


class People{
  id;
  first_name;
  last_name;

  constructor(person) {
    this.id = person.id;
    this.first_name = person.first_name;
    this.last_name = person.last_name;
  }

    
  static async getAllPeople() {
    const { rows } = await pool.query(`
        SELECT * FROM people            
        `)
    return rows.map((person) => new People(person))
  }

  static async getSinglePerson(id) {
    const { rows } = await pool.query(`  
    SELECT * FROM people
    where id = $1     
        `, [id]);
    if (rows.length === 0) {
      return null;
    }
    return new People(rows[0])
  }

    
    
    
  static async insertPerson({ first_name, last_name}) {
    const { rows } = await pool.query(`
insert into people (first_name, last_name)
values ($1, $2)
returning *
        `, [first_name, last_name]);
    return new People(rows[0]);
  }


  static async updatePerson() {
    const { rows } = await pool.query(`
    
    
    
    
        `);
  }



};

module.exports = { People };
