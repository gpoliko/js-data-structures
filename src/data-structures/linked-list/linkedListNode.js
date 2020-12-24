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
    // return callback ? callback(this.data) : `${this.data}`
  }
}

export default LinkedListNode
