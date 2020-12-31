// 题目大意 #
//     给定一个有序数组 nums，对数组中的元素进行去重，使得原数组中的每个元素最多暴露 2 个。最后返回去重以后数组的长度值。
//
// 解题思路 #
//     这道题和第 26 题很像。是第 26 题的加强版。这道题和第 283 题，第 27 题基本一致，
//     283 题是删除 0，27 题是删除指定元素，这一题是删除重复元素，实质是一样的。
//
// 这里数组的删除并不是真的删除，只是将删除的元素移动到数组后面的空间内，
// 然后返回数组实际剩余的元素个数，OJ 最终判断题目的时候会读取数组剩余个数的元素进行输出。

function removeDuplicated(nums) {
    let j = 1
    for(let i = 2;i < nums.length;i++) {
        if(nums[i] != nums[j-1]) {
            j++
            nums[j] = nums[i]
        }
    }
    console.log(nums)
    nums.splice(j + 1)
    return nums
}

//
//                                j
let nums = [ 0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 3]
//                                         i
console.log(removeDuplicated(nums))
