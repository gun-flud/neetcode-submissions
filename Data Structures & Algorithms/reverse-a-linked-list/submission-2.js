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
    reverseList(head) {
    let previous = null;
    let current = head;
    let nextTemp = null

    while (current) {
        nextTemp = previous;
        previous = current;
        current = current.next;
        previous.next = nextTemp;
    }

    return previous;
    }
}
