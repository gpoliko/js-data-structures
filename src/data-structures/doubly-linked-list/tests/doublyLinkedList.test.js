import DoublyLinkedList from '../doublyLinkedList'

describe('Doubly Linked List Tests', () => {
  it('should create a new doubly linked list', () => {
    const newList = new DoublyLinkedList()

    expect(newList).toEqual({ head: null, tail: null })
    expect(newList.toString()).toBe('')
  })

  it('should add a new node to the end of the doubly linked list', () => {
    const newList = new DoublyLinkedList()

    newList.add('testing-123')
    expect(newList.toString()).toBe('testing-123')
    // expect(newList.head).toEqual({ data: 'testing-123', next: null })
    expect(newList.tail.next).toBeNull()
  })
})
