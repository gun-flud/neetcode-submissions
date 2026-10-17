/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    constructor () {
        this.nextTemp = null;
    }
    reverseList (head) {
        if (!head) {
            return this.nextTemp;
        }
        const nextNode = head.next;
        head.next = this.nextTemp;
        this.nextTemp = head;

        return this.reverseList(nextNode);
    }
}
