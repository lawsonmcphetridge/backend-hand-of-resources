const Router = require('express');
const { Dog } = require('../models/dogModel');

module.exports = Router()
    
  .get('/:id', async (req, res) => {
    const oneDog = await Dog.getSingleDog(req.params.id);
    res.json(oneDog);
  })
    
    
  .get('/', async (req, res) => {
    const dogList = await Dog.getAllDogs();
    res.json(dogList);
  })
    
    
    
    
;
