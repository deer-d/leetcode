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
// 思路：1、我们定义两个指针，分别称之为g(guard 守卫)和p(point)。
// 我们首先根据方法的参数m确定g和p的位置。将g移动到第一个要反转的节点的前面，
// 将p移动到第一个要反转的节点的位置上。我们以m=2，n=4为例。
//
    //   g
    //     m     n
    // D 2 4 6 8 2 1 4
    //     p ->
    //       r
    //             

    //      6 8 2 1
    //      1 2 8 6



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
// 头插法
var reverseBetween = function(head, m, n) {
    // 1.在head前插入虚拟节点
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let g = dummyHead;
    let p = dummyHead.next;

    // 2.将g(guard守卫)移动到 m 之前的一位， p移动到 m 位
    let step = 0;
    while (step < m - 1) {
        g = g.next;
        p = p.next;
        step ++;
    }

    // 3.在m-n区间内反转
    for (let i = 0; i < n - m; i++) {
        let removed = p.next // 取出 p 的后一位
        p.next = p.next.next // p 指向后一位的后一位
        removed.next = g.next; // 取出的 那一位 next 指向 g.next
        g.next = removed // g.next 插入 removed
    }

    return dummyHead.next;
};
