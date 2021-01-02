import DoublyLinkedList from '../doublyLinkedList'
import Node from '../node'

describe('Doubly Linked List Tests', () => {
    it('should create a new doubly linked list', () => {
        const newList = new DoublyLinkedList()

        expect(newList).toEqual({ head: null, tail: null})
        expect(newList.toString()).toBe('')
    })
})