import LinkedListNode from './linkedListNode'

class LinkedList {

    // Constructor to create a LinkedList data structure
    constructor () {
        /** @var LinkedList Node */
        this.head = null

        /** @var LinkedList Node */
        this.tail = null

        /** @var LinkedList length */
        this.size = 0
    }

    /**
     * 
     * @param {*} value 
     * @return {LinkedList}
     */
    prepend (value) {
        // Create a new node to become a head
        const newNode = new LinkedListNode(value, this.head)
        this.head = newNode

        // If no tail exists, newNode will become the tail
        if (!this.tail) {
            this.tail = newNode
        }

        return this
    }
}

export default LinkedList