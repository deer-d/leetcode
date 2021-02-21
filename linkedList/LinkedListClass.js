// 链表的测试
class Node {
    constructor(x) {
        this.val = x
        this.next = null
    }
}

class LinkedListClass {
    constructor() {
        this.head = new Node()
        this._length = 0
    }

    createLinkedList(arr) {
        if (arr.length === 0) return null

        let head = new Node(arr[0])
        let curNode = head
        for(let i = 1; i < arr.length; i++) {
            curNode.next = new Node(arr[i]) // 创建新节点
            curNode = curNode.next // 添加指向
        }
        return head
    }

    printLinkedList(head) {
        let curNode = head
        while(curNode !== null) {
            console.log(curNode.val + ' -> ')
            curNode = curNode.next
        }
        console.log('null')
    }

    removeElement(head, val) {
        if (head === null) {
            return null
        }

        // 设立链表虚拟头结点
        let domyNode = new Node('domy')
        domyNode.next = head

        let cur = domyNode
        while(cur.next !== null) {
            if (cur.next.val === val) {
                let delNode = cur.next
                cur.next = delNode.next
            }
            cur = cur.next
        }
        return domyNode.next
    }

    rearrange(x) {
        // 1
        // 下面的方法如果没有特别说明, 都是实例方法
        // 给一个单链表和一个值 x, 对它进行分割, 使得所有小于 x 的节点都在节点大于或等于 x 之前,
    }

    circleHead() {
        // 2
        // 给一个链表, 返回环形链表中环形开始的节点, 如果没有环形, 返回 null
    }

    reorder() {
        // 3
        // 给一个链表, 将原链表 L0 -> L1 -> L2 -> ... -> Ln-1 -> ln 排序为
        // L0 -> L1 -> Ln -> L2 -> Ln-1 -> ...
        // 要求: 不能修改节点的值
    }

    rotateList(k) {
        // 4
        // 给一个链表, 将列表向右旋转 k 个下标, 其中 k 是非负数
        // 例子:
        //     Input: 1->2->3->4->5->NULL, k = 2
        //     Output: 4->5->1->2->3->NULL
        //     Input: 0->1->2->NULL, k = 4
        //     Output: 2->0->1->NULL
    }

    sortList() {
        // 5
        //     给一个链表, 将链表排序
        //     要求: 时间复杂度为 O(n log n)
    }

    reverseMn(m, n) {
        // 6
        // 给一个单链表和正整数 m, n(m < n), 从 m 到 n 开始反转
    }

    deduplication() {
        // 7
        // 给一个有序的单链表, 删除所有有重复 value 的节点, 只留下原始列表中不同的 value
    }

    addNumber(a, b) {
        // 8
        // 给两个非空且长度不一定相同的单链表, 表示两个非负整数
        // 数字以相反的顺序存储(个位在前), 每个节点都包含一个 value, 将两个 value 相加并返回链表
    }

    static mergeListK(...args) {
        // 9
        // 合并 k 个有序链表并保证有序，要求时间复杂度最优，不会就讨论，乱写没价值
        // args 是一个包含 k 个链表的数组
    }

    reverseListK() {
        // 10
        // k 个一组反转链表(25)
        //     给一个链表, 以每 k 个为一组来翻转链表
        //     例子:
        //         Given this linked list: 1->2->3->4->5
        //
        //         k = 2, return: 2->1->4->3->5
        //
        //         k = 3, return: 3->2->1->4->5
    }
}
module.exports = {
    LinkedListClass,
    Node
}
