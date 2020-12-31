/**
 * / 将数组中 0 元素都移动到数组的末尾，并且维持所有非 0 元素的相对位置。
 */

function moveZeroes(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            if (i !== j) {
                // 交换
                let temp_i = nums[i]
                nums[i] = nums[j]
                nums[j] = temp_i
                j++
            } else {
                j++
            }
        }
    }

}

const __main = () => {
    let nums = [2, 0, 3, 0, 4]

    moveZeroes(nums)

    console.log(nums)
}
__main()
