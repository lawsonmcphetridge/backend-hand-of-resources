const Router = require('express');
const { Overwatch } = require('../models/overwatchModel');

module.exports = Router()

  .get('/', async (req, res) => {
    const allHeros = await Overwatch.getAllCharacters();
    res.json(allHeros);
  })



;
