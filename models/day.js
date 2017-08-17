/* eslint-disable camelcase */
var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
  number: Sequelize.INTEGER
});

Day.hook('afterBulkDestroy', (queryObj) => {
  //console.log("day object",day)
  var deletedDayNum = queryObj.where.number

  //find each element's number and check if it is greater than deletedDayNum

  //if its greater than deletedDayNum, subtract 1 from number
  return Day.findAll({
    where: {
      number: {
        $gt: deletedDayNum
      }
    }
  })
    .then((daysToUpdate) => {
      var updatedDays = daysToUpdate.map(day => {
        day.number = day.number - 1;
        return day.save()
      })

      return Promise.all(updatedDays)

    })
}) ;


module.exports = Day;
