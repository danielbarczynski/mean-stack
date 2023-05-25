const { connect } = require('../database');
const User = require('../models/User');

connect()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
  
function getUsers() {
  return User.find();
}

module.exports = { getUsers };