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
  const person = req.body.person;
  PeopleService.enqueue(person)
  res.status(201).end()
})

router.delete('/', (req, res) => {
PeopleService.dequeue()
res.status(204).end()
})

module.exports = router
