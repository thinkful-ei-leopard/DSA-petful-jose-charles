const express = require('express')
const json = require('body-parser').json()
const PeopleService = require('./people.service')

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(PeopleService.get())
})

router.post('/', json, (req, res) => {
  console.log(req.body)
  const name = req.body.name;
  PeopleService.enqueue(name)
  res.status(202).end()
})

module.exports = router
