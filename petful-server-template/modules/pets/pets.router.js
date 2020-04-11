const express = require('express')
const json = require('body-parser').json()
const PetService = require('./pets.service')

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // res send error
  //set error msg in state and render
  res.status(200).json(PetService.get())
})

router
.all(checkDogExists)
.get('/dogs', (req, res) => {
  res.status(200).json(PetService.getDogs())
})

router.get('/cats', (req, res) => {
  res.status(200).json(PetService.getCats())
})

router.delete('/', json, (req, res) => {
  const typeOfPet = req.body

  PetService.dequeue(typeOfPet.type)
  res.status(204).end()
  // display adopted success method
  //once we get a 204
  // change state from false to true, if true
  // render 'success'
})

async function checkDogExists(req, res, next) {
  try {
      const dog = await PetService.getDogs()

      if (dog.length === 0)
          return res.status(404).json({
              error: `No doggos left to adopt!`
          })

          res.dog = dog
          next()
  } catch (error) {
      console.log(error)
  }
}

module.exports = router
