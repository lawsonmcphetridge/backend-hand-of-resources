const Router = require('express');
const { Dog } = require('../models/dogModel');

module.exports = Router()
    
  .get('/', async (req, res) => {
    const dogList = await Dog.getAllDogs();
    res.json(dogList);
  })
    
    
    
    
;
