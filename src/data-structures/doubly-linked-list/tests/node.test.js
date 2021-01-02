import Node from '../node'

describe('Doubly Linked List Node', () => {
  it('should create a node containing data', () => {
    const n1 = new Node(3)
    const n2 = new Node('test')

    expect(n1.data).toBe(3)
    expect(n1.next).toBeNull()
    expect(n2.data).toBe('test')
    expect(n2.next).toBeNull()
  })

  it('should doubly link a node to another node', () => {
    const n2 = new Node(2)
    const n1 = new Node(1, n2, null)

    expect(n2.data).toBe(2)
    expect(n1.data).toBe(1)
    expect(n1.next).toBe(n2)
  })

  it('should convert a node into a string', () => {
    const n1 = new Node(5)

    expect(n1.toString()).toBe('5')

    n1.data = 'testing-123'

    expect(n1.toString()).toBe('testing-123')
  })
})
