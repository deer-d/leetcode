// 题目大意 #
//     找出数组中第 K 大的元素。这一题非常经典。可以用 O(n) 的时间复杂度实现。
//
// 解题思路 #
//     在快排的 partition 操作中，每次 partition 操作结束都会返回一个点，这个标定点的下标和最终排序之后有序数组中这个元素所在的下标是一致的。
//     利用这个特性，我们可以不断的划分数组区间，最终找到第 K 大的元素。
//     执行一次 partition 操作以后，
//     如果这个元素的下标比 K 小，那么接着就在后边的区间继续执行 partition 操作；
//     如果这个元素的下标比 K 大，那么就在左边的区间继续执行 partition 操作；
//     如果相等就直接输出这个下标对应的数组元素即可。

// 解法一 排序，排序的方法反而速度是最快的

//  解法二 这个方法的理论依据是 partition 得到的点的下标就是最终排序之后的下标，根据这个下标，我们可以判断第 K 大的数在哪里
function findKthLargest(nums, k) {
    let len = nums.length;
    let left = 0;
    let right = len - 1;

    // 转换一下，第 k 大元素的索引是 len - k
    let target = len - k;

    while (true) {
        let index = partition(nums, left, right);
        if (index == target) {
            return nums[index];
        } else if (index < target) {
            left = index + 1;
        } else {
            right = index - 1;
        }
    }

}
function partition(nums, left, right) {
    let pivot = nums[left];
    let j = left;
    for (let i = left + 1; i <= right; i++) {
        if (nums[i] < pivot) {
            // 小于 pivot 的元素都被交换到前面
            j++;
            swap(nums, j, i);
        }
    }
    // 在之前遍历的过程中，满足 [left + 1, j] < pivot，并且 (j, i] >= pivot
    swap(nums, j, left);
    // 交换以后 [left, j - 1] < pivot, nums[j] = pivot, [j + 1, right] >= pivot
    return j;
}

function swap(nums, index1, index2) {
    let temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}

let nums = [0, 2, 1, 2, 8, 6]
console.log(findKthLargest(nums, 4))
