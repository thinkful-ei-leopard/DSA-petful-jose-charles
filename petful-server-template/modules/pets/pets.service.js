const Queue = require('../queue/Queue')
const store = require('../../store')

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

const PetService = {
  get() {
    return [pets.dogs.show(), pets.cats.show()]
  },
  dequeue(type) {
    if(type === 'dogs') {
      pets.dogs.dequeue()
    } else if(type === 'cats') {
      pets.cats.dequeue()
    }
  },
  getDogs() {
    return [pets.dogs.show()]
  },
  getCats() {
    return [pets.cats.show()]
  },
}

// --------------------
module.exports = PetService