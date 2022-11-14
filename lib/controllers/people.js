const Router = require('express');
const { People } = require('../models/peopleModel');


module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const person = await People.getSinglePerson(req.params.id);
      res.json(person);
    } catch (e) {
      next(e);
    }
  }).put('/:id', async (req, res) => {
    const newPerson = await People.updatePerson(req.params.id, req.body);
    res.json(newPerson);
  }).delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await People.deletePerson(id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  }).post('/', async (req, res) => {
    const response = await People.insertPerson(req.body);
    res.json(response);
  }).get('/', async (req, res) => {
    const everyone = await People.getAllPeople();
    res.json(everyone);
  });






