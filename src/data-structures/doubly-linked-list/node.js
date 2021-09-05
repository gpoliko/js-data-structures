class Node {
  constructor(data, next = null, previous = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }

  /**
   * toString - convert a node object to string
   * @param {function} callback
   * @return string representation of the node
   */
  toString(callback) {
    if (callback) {
      return callback(this.data);
    }

    return `${this.data}`;
  }
}

export default Node;
