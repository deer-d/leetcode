// Example:
//
//
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
//
// 题目大意 #
//     合并 2 个有序链表
var mergeTwoLists = function(l1, l2) {
    let res = new Node('res')
    let n = l2.length > l1.length ? l2.length : l1.length
    let i = 0;
    while(i < n) {
        if (l1.val && l2.val) {
            if (l1.val > l2.val) {
                res.next = l1
                l1 = l1.next
            } else {
                res.next = l2
                l2 = l2.next
            }
        } else {
            if (l1.val) {
                res.next = l1
                l1 = l1.next
            } else if (l2.val) {
                res.next = l2
                l2 = l2.next
            }
        }

    }
    return res.next
};

// 递归
if(l1 == null) {
    return l2;
}
if(l2 == null) {
    return l1;
}

if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
} else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
}

