// 题目大意 #
//     抽象题意其实就是排序。这题可以用快排一次通过。
//
// 解题思路 #
//     题目末尾的 Follow up 提出了一个更高的要求，能否用一次循环解决问题？
//     这题由于数字只会出现 0，1，2 这三个数字，所以用游标移动来控制顺序也是可以的。
//     具体做法：
//     0 是排在最前面的，所以只要添加一个 0，就需要放置 1 和 2。
//     1 排在 2 前面，所以添加 1 的时候也需要放置 2 。
//     至于最后的 2，只用移动游标即可。
//
// 1.这道题可以用计数排序，适合待排序数字很少的题目。用一个 3 个容量的数组分别计数，记录 0，1，2 出现的个数。
// 然后再根据个数排列 0，1，2 即可。时间复杂度 O(n)，空间复杂度 O(K)。这一题 K = 3。
//
// 2.这道题也可以用一次三路快排。数组分为 3 部分，第一个部分都是 0，中间部分都是 1，最后部分都是 2 。

function sortColors(nums) {
    let zero = -1 // nums[0...zero] 0
    let two = nums.length // nums[two...nums.length - 1] 2
    for (let i = 0; i < two;) {
        if (nums[i] === 1) {
            i++
        } else if (nums[i] === 2) {
            two--
            swap(nums, i, two) // 因为此时的 num[i] 是没有处理过的数， 所以不进行++操作
        } else if (nums[i] === 0) {
            zero++
            swap(nums, i, zero)
            i++
        }
    }
    console.log('nums: ', nums)
}

function swap(arr, p, q) {
    let temp = arr[p]
    arr[p] = arr[q]
    arr[q] = temp
}

//         0
//                   i
//                               2
var a = [0, 0, 1, 1, 1, 0, 2, 0, 2, 2]
sortColors(a)
