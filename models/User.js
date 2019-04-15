const mongoose = require('mongoose')

const UserSchema = {
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  todos: [
    {
      subject: { type: String, required: true },
      text: { type: String, required: true },
      date: { type: Date, default: Date.now }
    }
  ]
}

module.exports = User = mongoose.model('users', UserSchema)
