const Router = require('express');
const { People } = require('../models/peopleModel');


module.exports = Router()

    .get('/:id', async (req, res) => {
        const person = await People.getSinglePerson(req.params.id);
        res.json(person);
    })
    
    .post('/', async (req, res) => {
        const response = await People.insertPerson(req.body);
        res.json(response);
    })
    
    .get('/', async (req, res) => {
        const everyone = await People.getAllPeople()
        res.json(everyone);
    });





    ;