const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  thumbnail: String,
  socialId: String,
  displayName: String,
  description: String,
  email: String,
  joinded_data: { type: Date, default: Date.now },
});

User.statics.findUser = (username) => {
  return this.findOne({ username }).exec();
}

module.exports = mongoose.model('user', User);