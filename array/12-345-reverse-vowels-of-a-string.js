// 题目大意 #
// 题目要求我们反转字符串中的元音字母。需要注意字母大小写。
//
// 解题思路 #
// 这一题的解题思路是用 2 个指针，指针对撞的思路，来不断交换首尾元素，即可。这一题和第 344 题思路一样。

package leetcode

func reverseVowels(s string) string {
    b := []byte(s)
    for i, j := 0, len(b)-1; i < j; {
        if isVowels(b[i]) && isVowels(b[j]) {
            b[i], b[j] = b[j], b[i]
            i++
            j--
        } else if isVowels(b[i]) && !isVowels(b[j]) {
            j--
        } else if !isVowels(b[i]) && isVowels(b[j]) {
            i++
        } else {
            i++
            j--
        }
    }
    return string(b)
}

function isVowels(s byte) bool {
    if s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u' || s == 'A' || s == 'E' || s == 'I' || s == 'O' || s == 'U' {
        return true
    }
    return false
}
