// Example 2:
//
//
// Input: 1->1->1->2->3
// Output: 2->3
//
// 题目大意 #
// 删除链表中重复的结点，只要是有重复过的结点，全部删除。

var {LinkedListClass, Node} = require('./LinkedListClass')
console.log(LinkedListClass)
var a = [1,1,1,1,1,3,4]
var list = new LinkedListClass()
var a = list.createLinkedList(a)

//        a
var a = ['g', '1', '1', '1', 3,4, 4, 5,]
//                           b

var deleteDuplicates = function(head) {
    let domyNode = new Node('domy')
    domyNode.next = head

    let g = domyNode
    let a = g
    let b = head
    while(b.next) {
        if (a.next.val === b.next.val) {
            //如果a、b指向的节点值相等，就不断移动b，直到a、b指向的值不相等
            while(b != null && b.next != null && a.next.val === b.next.val) {
                b = b.next;
            }
            a.next = b.next;
            b = b.next
        } else {
            a = a.next
            b = b.next
        }
    }
    return domyNode.next
};

var c = deleteDuplicates(a)
list.printLinkedList(c)

