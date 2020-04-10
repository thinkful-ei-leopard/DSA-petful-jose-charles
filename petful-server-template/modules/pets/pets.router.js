const express = require('express')
const json = require('body-parser').json()
const PetService = require('./pets.service')

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(PetService.get())
})

router.delete('/', json, (req, res) => {
  const typeOfPet = req.body

  PetService.dequeue(typeOfPet.type)
  res.status(204).end()
})

module.exports = router
