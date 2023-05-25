const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number
});

module.exports = mongoose.model('User', userSchema);