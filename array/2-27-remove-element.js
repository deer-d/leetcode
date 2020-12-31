/**
 * 给定一个数组 nums 和一个数值 val，将数组中所有等于 val 的元素删除，并返回剩余的元素个数。
 * */
// 解题思路 #
//     这道题和第 283 题很像。这道题和第 283 题基本一致，283 题是删除 0，这一题是给定的一个 val，实质是一样的。

// 这里数组的删除并不是真的删除，只是将删除的元素移动到数组后面的空间内，然后返回数组实际剩余的元素个数，OJ 最终判断题目的时候会读取数组剩余个数的元素进行输出。

function remove(nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            if (i !== j) {
                // 交换
                let temp_i = nums[i]
                nums[i] = nums[j]
                nums[j] = temp_i
                j++
            }
        }
    }

    return j;

}


const __main = () => {
    let nums = [2, 0, 3, 0, 4]

    console.log(remove(nums, 0))
    console.log(nums)
}
__main()
