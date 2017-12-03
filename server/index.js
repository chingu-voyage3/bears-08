const express = require('express')
const bodyParse = require('body-parser')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const user = require('./models/user')

mongoose.Promise = Promise

const promise = mongoose.connect('mongodb://<username>:<password>@ds127936.mlab.com:27936/bears-08', {
    useMongoClient: true
})
promise.then(function db() {
    console.log('Connected to the database.')
})

const app = express()

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())

app.post('/register', function register(req, res) {
    const saltRounds = 10
    const plainPass = req.body.password
    bcrypt.genSalt(saltRounds, function salter(err, salt) {
        bcrypt.hash(plainPass, salt, function hash(err, hash) {
            req.body.password = hash

            let newUser = user(req.body)
            newUser.save(function save(err, newUser) {
                if (err) return console.error(err)
                res.send('You have been registered successfully ' + newUser.firstname)
            })
        })
    })
})



app.listen(3000, 'localhost')