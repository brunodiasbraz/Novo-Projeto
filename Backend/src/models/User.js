const mongoose = require('mongoose')

const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String,
  email_verify: Date,
  token_verify: String,
})

module.exports = User