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
    
    
  .get('/', async (req, res) => {
    const allCats = await Cat.getAllCats();
    res.json(allCats);
  })

;
    
