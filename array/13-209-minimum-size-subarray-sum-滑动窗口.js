// 题目大意 #
// 给定一个整型数组和一个数字 s，找到数组中最短的一个连续子数组，
// 使得连续子数组的数字之和 sum>=s，返回最短的连续子数组的返回值。
//
// 解题思路 #
// 这一题的解题思路是用滑动窗口。
// 在滑动窗口 [i,j]之间不断往后移动，
// 如果总和小于 s，就扩大右边界 j，不断加入右边的值，直到 sum > s，
// 之后再缩小 i 的左边界，不断缩小直到 sum < s，这时候右边界又可以往右移动。
// 以此类推。

function minSubArrayLen(s, nums) {
    let len = nums.length
    if (len === 0) {
        return 0
    }

    let l = 0
    let r = -1
    let sum = 0
    let res = len + 1

    while (l < len) {
        if ((r+1) < len && sum < s) {
            r++
            sum += nums[r]
        } else {
            sum -= nums[l]
            l++
        }
        if (sum >= s) {
            res = min([res, r-l+1])
        }
    }

    if (res === len + 1) {
        return 0
    }
    return res
}

function min(nums) { // []
    return nums.reduce((a, b) => a < b ? a : b)
}

let s = 4
//          l
let nums = [1, 2, -3, 0, 2, 1, -1, 3]
//        r
console.log(minSubArrayLen(s, nums))
