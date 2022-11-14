const Router = require('express');
const { Shoe } = require('../models/shoeModel');

module.exports = Router()
  .get('/', async (req, res) => {
    const shoeList = await Shoe.getAllShoes();
    res.json(shoeList);
  })
 
    
    
    
    
;




