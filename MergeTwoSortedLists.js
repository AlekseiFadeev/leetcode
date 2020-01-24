/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    }
    
    if (l1.val > l2.val) {
        [l1, l2] = [l2, l1];
    }
    l1.next = mergeTwoLists(l1.next, l2);
    
    return l1 || l2;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));