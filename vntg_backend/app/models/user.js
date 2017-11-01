const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  thumbnail: String,
  displayName: String,
  description: String,
  email: String,
  joinded_data: { type: Date, default: Date.now },
});

module.exports = mongoose.model('user', userSchema);