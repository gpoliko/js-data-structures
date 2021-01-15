class Comparator {
  constructor (compareFn) {
    this.compare = compareFn || Comparator.compareDefault
  }

  static compareDefault (value1, value2) {
    if (value1 === value2) {
      return 0
    }

    if (value1 < value2) {
      return -1
    } else {
      return 1
    }
  }

  equal (value1, value2) {
    return this.compare(value1, value2) === 0
  }
}

export default Comparator
