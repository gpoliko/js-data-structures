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
}

export default DoublyLinkedList
