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
})