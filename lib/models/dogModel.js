const pool = require('../utils/pool');
    
class Dog {
  id;
  name;
  breed;

  constructor(dog) {
    this.id = dog.id;
    this.name = dog.name;
    this.breed = dog.breed;
  }

    
  static async getAllDogs() {
    const { rows } = await pool.query(`
        SELECT * FROM dog            
        `);
    return rows.map((singleDog) => new Dog(singleDog));
  }
    
  static async getSingleDog(id) {
    const { rows } = await pool.query(`
        SELECT * FROM dog 
        WHERE id = $1
        
        `, [id]);
    if (rows.length === 0) {
      return null;
    }
    return new Dog(rows[0]);
  }

    
  static async insertDog({ name, breed }) {
    const { rows } = await pool.query(`
insert into dog (name, breed)
values ($1, $2)
RETURNING *
        `, [name, breed]);
    return new Dog(rows[0]);
  }
    
}
    
    
    
module.exports = { Dog }
;
