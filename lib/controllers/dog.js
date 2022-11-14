const Router = require('express');
const { Dog } = require('../models/dogModel');

module.exports = Router()
    
  .get('/:id', async (req, res) => {
    const oneDog = await Dog.getSingleDog(req.params.id);
    res.json(oneDog);
  })
  .put('/:id', async (req, res) => {
    const newDog = await Dog.updateDog(req.params.id, req.body);
    res.json(newDog);
  })
  .post('/', async (req, res) => {
    const resp = await Dog.insertDog(req.body);
    res.json(resp);
  })
  .get('/', async (req, res) => {
    const dogList = await Dog.getAllDogs();
    res.json(dogList);
  })
    
    
    
    
;
