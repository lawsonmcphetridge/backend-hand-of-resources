const Router = require('express');
const { Overwatch } = require('../models/overwatchModel');

module.exports = Router()
  .post('/', async (req, res) => {
    const resp = await Overwatch.insertChar(req.body);
    res.json(resp);
  })
  .get('/:id', async (req, res) => {
    const singleHero = await Overwatch.getSingleChar(req.params.id);
    res.json(singleHero);
  })
    
  .get('/', async (req, res) => {
    const allHeros = await Overwatch.getAllCharacters();
    res.json(allHeros);
  })



;
