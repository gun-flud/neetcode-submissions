class ListNode {
    constructor (val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
};

class MyStack {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        const node = new ListNode(x)
        if (this.empty()) {
            this.head = node;
            this.tail = node;
            // return this.head;
        }

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    /**
     * @return {number}
     */
    pop() {
        const value = this.tail.val;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return value;
        } 

        this.tail = this.tail.prev;

        
        return value;
    }

    /**
     * @return {number}
     */
    top() {
        if (!this.empty()) return this.tail.val;
        return null;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.head === null;
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */






 
