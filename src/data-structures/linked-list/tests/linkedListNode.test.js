import LinkedListNode from '../linkedListNode'

describe('Linked List Node', () => {
  it('should create a node containing data', () => {
    const n1 = new LinkedListNode(9)
    const n2 = new LinkedListNode('test')

    expect(n1.data).toBe(9)
    expect(n1.next).toBeNull()
    expect(n2.data).toBe('test')
    expect(n2.next).toBeNull()
  })

  it('should link a node to another node', () => {
    const n4 = new LinkedListNode(4)
    const n3 = new LinkedListNode('three', n4)

    expect(n4.data).toBe(4)
    expect(n3.data).toBe('three')
    expect(n3.next).toBe(n4)
    expect(n4.next).toBeNull()
  })

  it('should allow a node\'s data to be an object', () => {
    const n2Data = { d1: 'test1', d2: 'test2' }
    const n2 = new LinkedListNode(n2Data)

    expect(n2.data.d1).toBe('test1')
    expect(n2.data.d2).toBe('test2')
  })

  // Used example
  it('should convert a node to a string', () => {
    const n1 = new LinkedListNode(5)

    expect(n1.toString()).toBe('5')

    n1.data = 'test'

    expect(n1.toString()).toBe('test')
  })

  it('should convert a node to string with our defined stringifier', done => {
    const nodeData = { d1: 1, d2: 'test' }
    const node = new LinkedListNode(nodeData)

    function callback (data) {
      try {
        expect(data).toEqual({ d1: 1, d2: 'test' })
        done()
      } catch (err) {
        done(err)
      }
    }

    node.toString(callback)
  })
})
