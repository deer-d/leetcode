// 题目大意 #
//     给定一个有序数组 nums，对数组中的元素进行去重，使得原数组中的每个元素只有一个。最后返回去重以后数组的长度值。

// 解题思路 #
//     这道题和第 27 题很像。这道题和第 283 题，第 27 题基本一致，283 题是删除 0，27 题是删除指定元素，这一题是删除重复元素，实质是一样的。
//
// 这里数组的删除并不是真的删除，只是将删除的元素移动到数组后面的空间内，然后返回数组实际剩余的元素个数，OJ 最终判断题目的时候会读取数组剩余个数的元素进行输出。

function removeDuplicated(nums) {
    let j = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++
            nums[j] = nums[i]
        }
    }
    console.log(j)
    nums.splice(j + 1)
    return nums
    console.log(nums)
}

let nums = [1, 1, 2, 3, 4, 4]
//             i
console.log(removeDuplicated(nums))
