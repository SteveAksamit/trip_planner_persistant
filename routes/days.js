var router = require('express').Router();
var Day = require('../models').Day;

router.get('/', function (req, res, next) {
  res.send('hit the get route for days')
})

.post('/', function (req, res, next) {
  Day.create({number: req.body.number});
  res.send('hit the post route for days')
})

.delete('/', function (req, res, next) {
  res.send('hit the delete route for days')
})

.put('/', function (req, res, next) {
  res.send('hit the put route for days')
})

module.exports = router;
