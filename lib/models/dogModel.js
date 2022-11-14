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
    
  static async updateDog(id, newName) {
    const newDog = Dog.getSingleDog(id);
    if (!newDog) return null;
    const updatedDog = { ...newDog, ...newName };
    const { rows } = await pool.query(`
      UPDATE dog SET name = $2, breed = $3
      WHERE id = $1
      RETURNING *;    
          `, [id,
      updatedDog.name,
      updatedDog.breed
    ]);
    return new Dog(rows[0]);
  }
    
  
  static async deleteDog(id) {
    const { rows } = await pool.query(
      'DELETE FROM dog WHERE id = $1 RETURNING *', [id]);
    return new Dog(rows[0]);
  }
    
    
}
    
    
    
module.exports = { Dog }
;
