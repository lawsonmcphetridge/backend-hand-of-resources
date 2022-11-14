const Router = require('express');
const { Shoe } = require('../models/shoeModel');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const singleShoe = await Shoe.getSingleShoe(req.params.id);
      res.json(singleShoe);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const shoeList = await Shoe.getAllShoes();
    res.json(shoeList);
  })
    
    
  .post('/', async (req, res) => {
    const resp = await Shoe.insertShoe(req.body);
    res.json(resp);
  })
    
    
    
;




