// 链表的测试

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

function createLinkedList(arr, n) {
    if (n === 0) return null

    let head = arr[0]
    let curNode = head
    for(let i = 1; i < arr.length; i++) {
        curNode.next = arr[i] // 创建新节点
        curNode = curNode.next // 添加指向
    }

    return head

}

function printLinkedList(head) {
    let curNode = head
    while(curNode !== null) {
        console.log(curNode.val + ' -> ')
        curNode = curNode.next
    }
    console.log('null')
}

const __main = () => {
    var arr = [1, 2, 3, 4, 5]
    let n = arr.length

    let list = createLinkedList(arr, n)
    printLinkedList(list)

}

const LinkedListUtil = {
    createLinkedList: function (arr) {
        if (arr.length === 0) return null

        let head = arr[0]
        let curNode = head
        for(let i = 1; i < arr.length; i++) {
            curNode.next = arr[i] // 创建新节点
            curNode = curNode.next // 添加指向
        }

        return head
    },

    printLinkedList: function(head) {
        let curNode = head
        while(curNode !== null) {
            console.log(curNode.val + ' -> ')
            curNode = curNode.next
        }
        console.log('null')
    }
}
module.exports = LinkedListUtil