const express = require('express')
const bodyParse = require('body-parser')
const hash = require('./policies/hash')
const register = require('./controllers/registercontroller')

const app = express()

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())

app.post('/register', function bcrypt(req, res) {
    req.body.password = hash(10, req.body.password)
    if (register(req.body)) res.send('')
})

app.listen(3000, 'localhost')