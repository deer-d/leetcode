// 题目大意 #
//     合并两个已经有序的数组，结果放在第一个数组中，第一个数组假设空间足够大。
//     要求算法时间复杂度足够低。
//
// 解题思路 #
//     为了不大量移动元素，就要从2个数组长度之和的最后一个位置开始，依次选取两个数组中大的数，
//     从第一个数组的尾巴开始往头放，只要循环一次以后，就生成了合并以后的数组了。

function mergeSortedArray(nums1, m, nums2, n) {
    let p = m - 1
    let q = n - 1
    let tail = m + n - 1

    while (q >= 0) {
        if (nums1[p] >= nums2[q]) {
            nums2[tail] = nums1[p]
            p--
        } else {
            nums2[tail] = nums2[q]
            q--
        }
        tail--
    }

    while(p >= 0) {
        nums2[tail] = nums1[p]
        tail--
        p--
    }
    console.log(nums2)

}

// m = 4
//           p
// [1, 2, 5, 7]

// n = 3
//        q
// [2, 4, 8]

//  0  1  2  3  4  5  6
// [0, 0, 0, 0, 0, 0, 0]

let nums1 = [1, 2, 5, 7]
let m = 4
let nums2 = [2, 4, 8]
let n = 3
mergeSortedArray(nums1, m, nums2, n)
