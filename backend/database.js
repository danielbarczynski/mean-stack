const mongoose = require('mongoose');
const User = require('./models/User');
mongoose
  .connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  });

getUsers();
async function getUsers() {
  User.find().then(u => console.log(u));
}
  module.exports = mongoose;