/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pre = null
    let cur = head
    while(cur !== null) {
        let tmp = cur.next // 1. 临时存储当前指针后续内容
        cur.next = pre // 2. 反转链表
        pre = cur // 3. 接收反转结果
        cur = tmp // 4. 接回临时存储的后续内容
    }
    return pre
};
