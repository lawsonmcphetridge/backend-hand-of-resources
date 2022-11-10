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



};

module.exports = { People };
