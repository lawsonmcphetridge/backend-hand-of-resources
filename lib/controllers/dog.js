const Router = require('express');
const { Dog } = require('../models/dogModel');

module.exports = Router()
    
  .get('/:id', async (req, res, next) => {
    try {
      const dog = await Dog.getSingleDog(req.params.id);
      res.json(dog);
    } catch (e) {
      next(e);
    }
  })
    
  .put('/:id', async (req, res) => {
    const newDog = await Dog.updateDog(req.params.id, req.body);
    res.json(newDog);
  })
    
  .delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await Dog.deleteDog(id);
      res.json(data);
    } catch (e) {
      next(e);
    }
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
