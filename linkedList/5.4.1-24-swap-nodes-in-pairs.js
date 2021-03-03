// medium
// 24. 两两交换链表中的节点
// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// **
// * Definition for singly-linked list.
// * function ListNode(val, next) {
// *     this.val = (val===undefined ? 0 : val)
//     *     this.next = (next===undefined ? null : next)
//         * }
// */
var {LinkedList, Node} = require('./LinkedListClass')
var util = new LinkedList();

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var list = util.create([2,4,1,3,5])
// 思路：
// p   n1
// -   2   4   1   3   5   null
//        n2  next
var swapPairs = function(head) {
    //  创建虚拟头结点
    let dummy = new Node('-')
    dummy.next = head

    let p = dummy
    while(p.next && p.next.next) {
        let node1 = p.next
        let node2 = node1.next
        let next = node2.next

        node2.next = node1
        node1.next = next
        p.next = node2

        p = node1
    }
    return dummy.next
};


util.print(swapPairs(list))
