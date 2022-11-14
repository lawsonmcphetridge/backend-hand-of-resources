const Router = require('express');
const { Overwatch } = require('../models/overwatchModel');

module.exports = Router()
    
  .get('/:id', async (req, res) => {
    const singleHero = await Overwatch.getSingleChar(req.params.id);
    res.json(singleHero);
  })
    
  .get('/', async (req, res) => {
    const allHeros = await Overwatch.getAllCharacters();
    res.json(allHeros);
  })



;
