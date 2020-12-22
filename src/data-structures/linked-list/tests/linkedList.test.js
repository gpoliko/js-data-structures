import LinkedList from '../linkedList'

describe('Linked List Tests', () => {
    it('should create a new linked list', () => {
        const newList = new LinkedList()

        expect(newList).toEqual({head: null, size: 0, tail: null})
        expect(newList.toString()).toBe('')
    })

    it('should add a new node to the linked list', () => {
        const newList = new LinkedList()

        newList.append('testing-123')
        expect(newList.toString()).toBe('testing-123')
    })
})