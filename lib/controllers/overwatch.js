const Router = require('express');
const { Overwatch } = require('../models/overwatchModel');

module.exports = Router()
  .post('/', async (req, res) => {
    const resp = await Overwatch.insertChar(req.body);
    res.json(resp);
  })
    
  .put('/:id', async (req, res) => {
    const newHero = await Overwatch.updateChar(req.params.id, req.body);
    res.json(newHero);
  })
    
  .get('/:id', async (req, res, next) => {
    try {
      const char = await Overwatch.getSingleChar(req.params.id);
      res.json(char);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await Overwatch.deleteChar(id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
    
  .get('/', async (req, res) => {
    const allHeros = await Overwatch.getAllCharacters();
    res.json(allHeros);
  })



;
