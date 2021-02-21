var LinkedList = require('./LinkedListClass')
var a = [1,2,2,3,4]
var list = new LinkedList()
var a = list.createLinkedList(a)
list.printLinkedList(a)
var b = list.removeElement(a, 1)
list.printLinkedList(b)
