import LinkedListNode from './linkedListNode'

/** Class respresenting a LinkedList */
class LinkedList {

    /** Creates a LinkedList */
    constructor () {
        this.head = null
        this.tail = null
        this.size = 0
    }

    /**
     * Adds values to the front of the list
     * @param {*} value 
     * @return entire LinkedList
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

    /**
     * Adds values to the end of the list
     * @param {*} value
     * @return entire LinkedList
     */
    append (value) {
        // Create a new node
        const newNode = new LinkedList(value)

        // If no head exists, newNode will become the head
        if (!this.head) {
            this.head = newNode
            this.tail = newNode

            return this
        }

        // Adding newNode to the end  of the list
        this.tail.next = newNode
        this.tail = newNode

        return this
    }
}

export default LinkedList