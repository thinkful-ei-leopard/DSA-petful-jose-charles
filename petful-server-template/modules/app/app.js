const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.get('/', (req, res) => {
    res.send('hello world!')
})

app.use('/api/people', require('../people/people.router'))
app.use('/api/pets', require('../pets/pets.router'))

app.use(function errorHandler(error, req, res, next) {
    let response
    
    console.log(error)
    response = { message: error.message, error }
    res.status(500).json(response)
})

module.exports = app
