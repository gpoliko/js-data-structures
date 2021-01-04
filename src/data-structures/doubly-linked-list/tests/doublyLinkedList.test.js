import DoublyLinkedList from '../doublyLinkedList'

describe('Doubly Linked List Tests', () => {
  it('should create a new doubly linked list', () => {
    const newList = new DoublyLinkedList()

    expect(newList).toEqual({ head: null, tail: null })
    expect(newList.toString()).toBe('')
  })

  it('should add a new node to the end of the doubly linked list', () => {
    const newList = new DoublyLinkedList()

    newList.add(1)
    newList.add(2)

    expect(newList.toString()).toBe('1,2')
    expect(newList.head.toString()).toBe('1')
    expect(newList.head.next.data).toBe(2)
    expect(newList.tail.previous.data).toBe(1)
    expect(newList.tail.next).toBeNull()
  })

  it('should add node to the beginning of the linked list', () => {
    const newList = new DoublyLinkedList()

    newList.addFirst(5)
    expect(newList.head.toString()).toBe('5')
    expect(newList.tail.toString()).toBe('5')

    newList.add(2)
    newList.addFirst(3)

    expect(newList.head.next.next.previous).toBe(newList.head.next)
    expect(newList.tail.previous.next).toBe(newList.tail)
    expect(newList.tail.previous.data).toBe(5)
    expect(newList.toString()).toBe('3,5,2')
  })
})
