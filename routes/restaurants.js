var router = require('express').Router();
var Restaurant = require('../models').Restaurant;

router.get('/', function (req, res, next) {
  Restaurant.findAll({})
    .then(list => {
      res.json(list);
    })
    .catch(next);
});

module.exports = router;
