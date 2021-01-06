// 题目大意 #
// 判断所给的字符串是否是有效的回文串。
//
// 解题思路 #
// 简单题，按照题意做即可。

function isPalindrome(s) {
    s = s.toLowerCase()

    let i = 0
    let j = s.length - 1

    while (i < j) {
        while (i < j && !isChar(s[i])) {
            i++
        }
        while (i < j && !isChar(s[j]))  {
            j--
        }
        if (s[i] != s[j]) {
            return false
        }
        i++
        j--
    }
    return true
}

// 判断 c 是否是字符或者数字
function isChar(c) {
    if (('a' <= c && c <= 'z') || ('0' <= c && c <= '9')) {
        return true
    }
    return false
}

let s = 'a man,a plan,a canal,panama'
console.log(isPalindrome(s))
