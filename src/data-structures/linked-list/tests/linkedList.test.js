import LinkedList from '../linkedList'

describe('Linked List Tests', () => {
  it('should create a new linked list', () => {
    const newList = new LinkedList()

    expect(newList).toEqual({ head: null, size: 0, tail: null })
    expect(newList.toString()).toBe('')
  })

  it('should add a new node to the end of the linked list', () => {
    const newList = new LinkedList()

    newList.add('testing-123')
    expect(newList.toString()).toBe('testing-123')
    expect(newList.head).toEqual({data: 'testing-123', next: null})
    expect(newList.tail.next).toBeNull()
  })

  it('should add a node to the beginning of the linked list', () => {
    const newList = new LinkedList()
    
    newList.addFirst('test1')
    expect(newList.head).toEqual({data: 'test1', next: null})
    expect(newList.tail).toEqual({data: 'test1', next: null})
    expect(newList.head.toString()).toBe('test1')
    expect(newList.tail.toString()).toBe('test1')

    newList.add('test2')
    newList.addFirst('test3')
    expect(newList.toString()).toBe('test3,test1,test2')
  })
})
