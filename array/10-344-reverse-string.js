// 题目大意 #
// 题目要求我们反转一个字符串。
//
// 解题思路 #
// 这一题的解题思路是用 2 个指针，指针对撞的思路，来不断交换首尾元素，即可。

function reverseString(s) {
    let i = 0
    let j = s.length - 1
    while(i < j) {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i++
        j--
    }
    return s
}

let s = 'abcde'
console.log(reverseString(s))
