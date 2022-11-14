const pool = require('../utils/pool')
    
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

    
}
    
    
    
module.exports = { Dog }
;
