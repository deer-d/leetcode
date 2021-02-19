// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
//
// 示例 1:
//
// 输入: 1->1->2
// 输出: 1->2
// 示例 2:
//
// 输入: 1->1->2->3->3
// 输出: 1->2->3

var deleteDuplicates = function(head) {
    var cur = head;
    while(cur && cur.next) {
        if(cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};

// 快慢指针
var deleteDuplicates = function(head) {
    if (!head) return null;
    let slow = head;
    let fast = head;
    while (fast !== null) {
        // 快慢指针不等时
        if (slow.val !== fast.val) {
            slow.next = fast;
            slow = fast;
        }
        // 快指针前进一步
        fast = fast.next;
    }
    // 断尾，删除多余重复元素
    slow.next = null;
    return head;
};