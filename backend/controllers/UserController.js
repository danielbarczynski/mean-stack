const { connect } = require('../database');
const User = require('../models/User');

connect()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

async function getUsers() {
  return await User.find();
}

async function deleteUser(id) {
  return await User.deleteOne({ _id: id });
}
module.exports = { getUsers, deleteUser };
