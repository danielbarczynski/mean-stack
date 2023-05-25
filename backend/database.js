const mongoose = require('mongoose');

function connect() {
  return mongoose
    .connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
};

module.exports = { connect };