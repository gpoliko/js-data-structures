import Node from './node'

class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  // Override default toString() method
  toString (callback) {
    return this.toArray().map(node => node.toString(callback)).toString()
  }

  /**
   * toArray - creates an array of nodes
   * @return array of nodes
   */
  toArray () {
    const nodes = []

    let currentNode = this.head
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
    return nodes
  }

  /**
   * add - Adds nodes to the end of the linked list
   * @param {Object} data
   * @return entire LinkedList
   */
  add (data) {
    // Create a new node
    const newNode = new Node(data)

    // If no head exists, newNode will become the head
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    // Adding newNode to the end of the linked list
    this.tail.next = newNode
    newNode.previous = this.tail
    this.tail = newNode

    return this
  }

  /**
   * addFirst - Adds a node to the beginning of the doubly linked list
   * @param {Object} data
   * @return doubly linked list after adding new item to the beginning of the list
   */
  addFirst (data) {
    // Create a new node
    const newNode = new Node(data, this.head)

    // If head exists, head will be linked to newNode as "previous"
    if (this.head) {
      this.head.previous = newNode
    }
    // newNode made the head of the list
    this.head = newNode

    // Making newNode the tail of the list if no nodes exist
    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }
}

export default DoublyLinkedList
