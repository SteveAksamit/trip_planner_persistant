const db = require('./_db');

const Place = require('./place');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');
const Day = require('./day');

Day.belongsTo(Hotel);

Day.belongsToMany(Restaurant, {through: 'RestaurantDay'});
Day.belongsToMany(Activity, {through: 'ActivityDay'});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
	db,
	Day,
	Place,
	Hotel,
	Restaurant,
	Activity
};
