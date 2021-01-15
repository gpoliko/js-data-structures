import Comparator from '../comparator'

describe('Comparator Tests', () => {
  it('should use the class\'s default compare function', () => {
    const compare = new Comparator()

    expect(compare.equal(0, 0)).toBe(true)
  })
})
