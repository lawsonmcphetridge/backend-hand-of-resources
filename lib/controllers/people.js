const Router = require('express');
const { People } = require('../models/peopleModel');


module.exports = Router()

    .get('/', async (req, res) => {
        const everyone = await People.getAllPeople()
        res.json(everyone);
    });

    



    ;