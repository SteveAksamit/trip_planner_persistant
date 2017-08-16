var router = require('express').Router();
var Activity = require('../models').Activity;

router.get('/', function (req, res, next) {
  Activity.findAll({})
    .then(list => {
      res.json(list);
    })
    .catch(next);
});

module.exports = router;




