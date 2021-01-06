// 题目大意 #
// (Input array is sorted)
// 找出两个数之和等于 target 的两个数字，要求输出它们的下标。
// 注意一个数字不能使用 2 次。下标从小到大输出。假定题目一定有一个解。
//
// 解题思路 #
// 这一题比第 1 题 Two Sum 的问题还要简单，因为这里数组是有序的。可以直接用第一题的解法解决这道题。

// 时间复杂度 O(n)
// 空间复杂度 O(1)
function twoSum(nums, target) {
    let l = 0
    let r = nums.length - 1
    while (l < r) {
        if (nums[l] + nums[r] === target) {
            return [l, r]
        } else if (nums[l] + nums[r] < target) {
            l++
        } else {
            r++
        }
    }

}
