const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: String,
    username: String,
    firstname: String,
    lastname: String,
    password: String
})

const User = mongoose.model('User', userSchema)

module.exports = function create(payload) {
    return new User(payload)
}