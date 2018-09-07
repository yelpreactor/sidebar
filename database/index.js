const data = require('./generateData.js');
const Sequelize = require('sequelize');

const db = new Sequelize('yelpReactorSidebar', 'root', 'nopass', {
  dialect: mysql
})

const Restaurant = db.define('restaurant', {
  priceRange: Sequelize.INTEGER, // 0-3
  healthScore: Sequelize.INTEGER, // 50-100
  certificate: Sequelize.BOOLEAN,
  reservationForm: Sequelize.BOOLEAN,
  deliveryAndTakeOutForm: Sequelize.BOOLEAN,
  /******* STRETCH GOALS *******/
  // description: Sequelize.STRING, //
  // firstReviewer: Sequelize.INTEGER, // user_id
  // attributes: Sequelize.INTEGER, // attr_id 
  /******* STRETCH GOALS *******/
});

const Reservations = db.define('reservations', {
  restaurantId: Sequelize.INTEGER,
  date: Sequelize.DATE,
  time: Sequelize.STRING, // random from array of times
  numOfPeople: Sequelize.INTEGER,
  remainingSpots: Sequelize.INTEGER // starts at 5
});

/**********************************
 *
 *  For Stretch Goal ONLY 
 *
const HourOfOperation = db.define('hours', {
  restaurantId: Sequelize.INTEGER,
  Mon: Sequelize.STRING,
  Tue: Sequelize.STRING,
  Wed: Sequelize.STRING,
  Thu: Sequelize.STRING,
  Fri: Sequelize.STRING,
  Sat: Sequelize.STRING,
  Sun: Sequelize.STRING,
});

const Attribute = db.define('attribute', {
  reservations: Sequelize.BOOLEAN,
  delivery: Sequelize.BOOLEAN,
  takeout: Sequelize.BOOLEAN,
  creditCard: Sequelize.BOOLEAN,
  debitCard: Sequelize.BOOLEAN,
  applePay: Sequelize.BOOLEAN,
  googlePay: Sequelize.BOOLEAN,
  goodForBreakfast: Sequelize.BOOLEAN,
  goodForLunch: Sequelize.BOOLEAN,
  goodForDinner: Sequelize.BOOLEAN,
  valet: Sequelize.BOOLEAN,
  streetParking: Sequelize.BOOLEAN,
  bikeParking: Sequelize.BOOLEAN,
  wheelchairAccessible: Sequelize.BOOLEAN,
  goodForKids: Sequelize.BOOLEAN,
  goodForGroups: Sequelize.BOOLEAN,
  attire: Sequelize.STRING, // [dressy, classy, casual] random
  ambience: Sequelize.STRING, // [classy, 'classy, upscale', casual] random Sequelize.INTEGER
  noiseLevel: Sequelize.STRING, // [quiet, average] random
  alcohol: Sequelize.STRING, // [Beer & wine only, full bar] random
  outdoorSeating: Sequelize.BOOLEAN,
  WiFi: Sequelize.BOOLEAN,
  hasTV: Sequelize.BOOLEAN,
  waiter: Sequelize.BOOLEAN,
  caters: Sequelize.BOOLEAN,
  genderNeutralBathrooms: Sequelize.BOOLEAN
});

const User = db.define('user', {
  name: Sequelize.STRING,
  photo: Sequelize.STRING, // url
});

const Pageview = db.define('view', {
  userId: Sequelize.INTEGER,
  restaurantId: Sequelize.INTEGER
})

const Bookmark = db.define('bookmark', {
  userId: Sequelize.INTEGER,
  restaurantId: Sequelize.INTEGER
})
 *
 *  For Stretch Goal ONLY 
 *
 **********************************/


 modules.exports = {
  db: db,
  Restaurant: Restaurant,
  Reservations: Reservations,
  /******* STRETCH GOALS *******/
  // User: User,
  // HourOfOperation: HourOfOperation,
  // Attribute: Attribute,
  // Pageview: Pageview,
  // Bookmark: Bookmark
  /******* STRETCH GOALS *******/
};