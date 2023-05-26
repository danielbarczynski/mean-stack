const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  age: Number
});

module.exports = mongoose.model('User', userSchema);