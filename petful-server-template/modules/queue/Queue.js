class _Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if(this.first === null) {
      this.first = node;
    }

    if(this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if(this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if(node === this.last) {
      this.last = null;
    }

    return node.data;
  }

  show() {
    return this.first.data
  }

  isEmpty() {
    return this.first === null;
  }

  all() {
    if(this.isEmpty()) {
      return `Queue is empty!`
    }

    while(!this.isEmpty()) {
      this.dequeue()
    }
  }

  showAll() {
    if(this.isEmpty()) {
      return `Queue is empty!`
    }
    let people = [];
    let  node = this.first;
     while(node) {
    people.push(node.data);
    node = node.next;
    }
    return people
  }
}

module.exports = Queue
