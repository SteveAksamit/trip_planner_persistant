var router = require('express').Router();
var Hotel = require('../models').Hotel;

router.get('/', function (req, res, next) {
  Hotel.findAll({})
    .then(list => {
      res.json(list);
    })
    .catch(next);
});

module.exports = router;
