class LinkedListNode {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }

  /**
   * toString - convert a node object to string
   * @param {function} callback
   * @return string representation of the node
   */
  toString (callback) {
    if (callback) {
      return callback(this.data)
    } else {
      return `${this.data}`
    }
  }
}

// Adding a comment to run CircleCI
export default LinkedListNode
