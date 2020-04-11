const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const people = new Queue()
console.log(store.people)
store.people.forEach(person => people.enqueue(person))
store.people.forEach(person => console.log(person))

// --------------------

module.exports = {
  get() {

    return people.showAll();
  },

  enqueue(person) {
    people.enqueue(person)                    
  },

  dequeue() {
    people.dequeue()
  }
}



