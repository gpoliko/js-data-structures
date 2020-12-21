import LinkedList from '../linkedList'

describe('Linked List Tests', () => {
    it('should create a new linked list', () => {
        const newList = new LinkedList()

        expect(newList).toEqualq({head: null, size: 0, tail: null})
    })
})