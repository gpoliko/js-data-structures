import LinkedList from '../linkedList'

describe('Linked List Tests', () => {
  it('should create a new linked list', () => {
    const newList = new LinkedList()

    expect(newList).toEqual({ head: null, tail: null })
    expect(newList.toString()).toBe('')
  })

  it('should add a new node to the end of the linked list', () => {
    const newList = new LinkedList()

    newList.add('testing-123')
    expect(newList.toString()).toBe('testing-123')
    expect(newList.head).toEqual({ data: 'testing-123', next: null })
    expect(newList.tail.next).toBeNull()
  })

  it('should add a node to the beginning of the linked list', () => {
    const newList = new LinkedList()

    newList.addFirst('test1')
    expect(newList.head).toEqual({ data: 'test1', next: null })
    expect(newList.tail).toEqual({ data: 'test1', next: null })
    expect(newList.head.toString()).toBe('test1')
    expect(newList.tail.toString()).toBe('test1')

    newList.add('test2')
    newList.addFirst('test3')
    expect(newList.toString()).toBe('test3,test1,test2')
  })

  it('should return the size of the linked list', () => {
    const newList = new LinkedList()

    newList.add(1)
    newList.add('2')
    newList.add('three')
    expect(newList.size()).toBe(3)
    expect(newList.head.toString()).toBe('1')
    expect(newList.tail.toString()).toBe('three')
    expect(newList.toString()).toBe('1,2,three')
  })

  it('should return the node at the given index of the linked list', () => {
    const newList = new LinkedList()

    newList.add(1)
    newList.add('2')
    newList.add('two also')
    newList.add(3)
    expect(newList.get(1).toString()).toBe('2')
    expect(newList.get(0).data).toBe(1)
    expect(newList.get(2).data).toBe('two also')
    expect(newList.toString()).toBe('1,2,two also,3')
    expect(newList.tail.next).toBeNull()
    expect(newList.get(3).data).toBe(3)
  })

  it('should return the first node of the linked list', () => {
    const newList = new LinkedList()

    newList.add(1)
    newList.add('2')
    newList.add('three')
    expect(newList.getFirst().toString()).toBe('1')
    expect(newList.getFirst().data).toBe(1)
    expect(newList.getFirst().data).toEqual(1)
  })
})
