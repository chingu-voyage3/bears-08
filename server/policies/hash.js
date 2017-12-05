const bcrypt = require('bcrypt')

module.exports = function hash(saltRounds, plainPass) {
    bcrypt.genSalt(saltRounds, function salter(err, salt) {
        bcrypt.hash(plainPass, salt, function hash(err, hash) {
            if (err) return err
            return hash
        })
    })
}