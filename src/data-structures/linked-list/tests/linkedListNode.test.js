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

  it('should convert a node to string with our defined stringifier', () => {
    const nodeData = { d1: 1, d2: 2 }
    const node = new LinkedListNode(nodeData)
    const callBackTrue = data => `d1: ${data.d1}, d2: ${data.d2}`
    const callBackResult = node.toString(callBackTrue)

    expect(callBackResult).toBe('d1: 1, d2: 2')
  })

  it('should return unchange node data format with our defined stringifier', () => {
    const objData = { d1: 1, d2: 2 }
    const strData = '5'
    const intData = 5

    const objNode = new LinkedListNode(objData)
    const strNode = new LinkedListNode(strData)
    const intNode = new LinkedListNode(intData)

    const test1 = objNode.toString()
    const test2 = strNode.toString()
    const test3 = intNode.toString()

    expect(test1).toBe('[object Object]')
    expect(test2).toBe('5')
    expect(test3).toBe('5')
  })
})
