// 题目大意 #
// 在一个字符串重寻找没有重复字母的最长子串。
//
// 解题思路 #
// 这一题和第 438 题，第 3 题，第 76 题，第 567 题类似，用的思想都是"滑动窗口”。
//
// 滑动窗口的右边界不断的右移，只要没有重复的字符，就持续向右扩大窗口边界。
// 一旦出现了重复字符，就需要缩小左边界，直到重复的字符移出了左边界，
// 然后继续移动滑动窗口的右边界。
// 以此类推，每次移动需要计算当前长度，并判断是否需要更新最大长度，最终最大的值就是题目中的所求。

function lengthOfLongestSubstring(s) {
    let freq = [];
    let l = 0;
    let r = -1; // 滑动窗口为s[l..r]
    let res = 0;

    while(l < s.length) {
        if (r+1 < s.length && freq[r+1] === 0) { // 可以继续向右拓展
            r++
            freq[s[r]]++
        } else {
            freq[s[l]]--
            l++
        }

        res = min([res, r-l+1])
    }

    return res;

}

function min(nums) { // []
    return nums.reduce((a, b) => a < b ? a : b)
}
