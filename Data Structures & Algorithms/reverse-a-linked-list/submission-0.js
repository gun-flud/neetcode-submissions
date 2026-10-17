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
    if (!head) return null;
    const reversedArray = [];
    let curr = head;
    while (curr) {
        reversedArray.push(curr.val);
        curr = curr.next;
    }
    console.log('реверс'+reversedArray);
    head = new ListNode(reversedArray.pop());
    curr = head;
    while (reversedArray.length > 0) {
        curr.next = new ListNode(reversedArray.pop());
        curr = curr.next;
        console.log('попи'+reversedArray);
    }
    console.log('все що залишилось'+reversedArray);
    return head;
    }
}
