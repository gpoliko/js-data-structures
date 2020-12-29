import LinkedListNode from './linkedListNode'

// Class respresenting a LinkedList
class LinkedList {
  // Creates a LinkedList object
  constructor () {
    this.head = null
    this.tail = null
  }

  // Override default toString() method
  toString (callback) {
    // console.log("THIS =", this)
    return this.toArray((node) => node.toString(callback)).toString()
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
    const newNode = new LinkedListNode(data)

    // If no head exists, newNode will become the head
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    // Adding newNode to the end of the linked list
    this.tail.next = newNode
    this.tail = newNode
    return this
  }

  /**
   * addFirst - adds nodes to the front of the linked list
   * @param {Object} data
   * @return entire LinkedList
   */
  addFirst (data) {
    // Create a new node to become a head
    const newNode = new LinkedListNode(data, this.head)
    this.head = newNode

    // If no tail exists, newNode will become the tail
    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  /**
   * size - returns the number of nodes in the linked list
   * @return number of nodes in the linked list
   */
  size () {
    let count = 0
    let node = this.head

    // Iterate through the linked list nodes
    // Increase counter for every node found in the linked list
    while (node) {
      count++
      node = node.next
    }
    return count
  }

  /**
   * get - returns node given index
   * @param {int} index
   * @return node at the given index of the linked list
   */
  get (index) {
    let counter = 0
    let node = this.head

    // Iterate through the linked list nodes to find the node to return
    while (node) {
      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }
    return null
  }

  /**
   * getFirst - returns the first node in the linked list
   * @return first node in the linked list
   */
  getFirst () {
    return this.head
  }

  /**
   * delete - Removes a node given the data as a parameter
   * @param {Object} data 
   * @return node to delete from the linked list
   */
  delete (data) {
    if (!this.head) {
      return null
    }

    // Assigning the node to delete
    // Setting the new head node
    let deletedNode = null
    while (this.head && (this.head.data === data)) {
      deletedNode = this.head
      this.head = this.head.next
    }

    // Iterate through the linkedList nodes to find the node to delete
    let currentNode = this.head
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.data === data) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    // Setting the tail node of the linked list
    if (this.tail.data === data) {
      this.tail = currentNode
    }
    return deletedNode
  }
}

export default LinkedList
