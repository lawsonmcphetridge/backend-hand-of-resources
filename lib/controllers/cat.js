const Router = require('express');
const { Cat } = require('../models/catModel');

module.exports = Router()

  .get('/:id', async (req, res, next) => {
    try {
      const cat = await Cat.getSingleCat(req.params.id);
      res.json(cat);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res) => {
    const response = await Cat.insertCat(req.body);
    res.json(response);
  })
  .put('/:id', async (req, res) => {
    const newCat = await Cat.updateCat(req.params.id, req.body);
    res.json(newCat);
  })

    
  .get('/', async (req, res) => {
    const allCats = await Cat.getAllCats();
    res.json(allCats);
  })

;
    
