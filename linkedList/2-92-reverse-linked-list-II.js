// 题目 #
// Reverse a linked list from position m to n. Do it in one-pass.
//
// Note: 1 ≤ m ≤ n ≤ length of list.
//
// Example:
//
//
// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL
//
// 题目大意 #
// 给定 2 个链表中结点的位置 m, n，反转这个两个位置区间内的所有结点


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    // 1.在head前插入虚拟节点
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let g = dummyHead;
    let p = dummyHead.next;

    // 2.移动到 m 位
    let step = 0;
    while (step < m - 1) {
        g = g.next;
        p = p.next;
        step ++;
    }

    // 3.在m-n区间内反转
    for (let i = 0; i < n - m; i++) {
        let temp = g.next

    }
    //
    //      g
    //      m     n
    //  2 4 6 8 2 1 4
    //        p
    //          r

    //      6 8 2 1
    //      1 2 8 6

    return dummyHead.next;
};
