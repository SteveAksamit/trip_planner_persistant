var router = require('express').Router();
var Day = require('../models').Day;
const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');

router.get('/', function (req, res, next) {

  Day.findAll({include: [Hotel, Restaurant, Activity]})
  .then(days => {
    res.send(days)
  })
  .catch(next)
})

router.get('/:id', function (req, res, next) {
  let dayId = req.params.id;
  Day.findById(dayId)
  .then(day => {
    res.send(day)
  })
  .catch(next)
})

.post('/', function (req, res, next) {
  Day.create({number: req.body.number})
  // Day.create(req.body)
  .then(newDay => {
    res.send(newDay)
  })
})


.delete('/:id', function (req, res, next) {
  Day.destroy({where: {number: req.params.id}})
  res.send('Day deleted!')
})

//Add/Update hotel to day
.put('/:id/hotel', function (req, res, next) {
  let dayId = req.params.id;
  let hotelId = req.body.hotel;
    
  Day.findById(dayId)
  .then(day => {
    day.setHotel(hotelId)
  })
  .then(() => {
    res.send('hotel added to day')
  })
})

//Add/Update restaurant to day
.put('/:id/restaurant', function (req, res, next) {
  let dayId = req.params.id;
  let restaurantId = req.body.restaurant;
    
  Day.findById(dayId)
  .then(day => {
    day.addRestaurant(restaurantId)
  })
  .then(() => {
    res.send('restaurant added to day')
  })
})

//Add/Update activity to day
.put('/:id/activity', function (req, res, next) {
  let dayId = req.params.id;
  let activityId = req.body.activity;

  Day.findById(dayId)
  .then(day => {
    day.addActivity(activityId)
  })
  .then(() => {
    res.send('activity added to day')
  })
})

// .put('/:id/restaurants', function (req, res, next) {
//   res.send('hit the put route for days')
// })


module.exports = router;
