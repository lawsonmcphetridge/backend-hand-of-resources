const Router = require('express');
const { Cat } = require('../models/catModel');

module.exports = Router()


  .get('/', async (req, res) => {
    const allCats = await Cat.getAllCats();
    res.json(allCats);
  })

;
    
