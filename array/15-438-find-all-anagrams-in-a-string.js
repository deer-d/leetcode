// 题目大意 #
// 给定一个字符串 s 和一个非空字符串 p，找出 s 中的所有是 p 的 Anagrams 字符串的子串，返回这些子串的起始索引。Anagrams 的意思是和一个字符串的所有字符都一样，只是排列组合不同。
//
// 解题思路 #
// 这道题是一道考“滑动窗口”的题目。和第 3 题，第 76 题，第 567 题类似的。解法也是用 freq[256] 记录每个字符的出现的频次次数。
// 滑动窗口左边界往右滑动的时候，划过去的元素释放次数(即次数 ++)，
// 滑动窗口右边界往右滑动的时候，划过去的元素消耗次数(即次数 --)。
// 右边界和左边界相差 len(p) 的时候，需要判断每个元素是否都用过一遍了。
// 具体做法是:
//   每经过一个符合规范的元素，count 就 --，count 初始值是 len(p)，
//   当每个元素都符合规范的时候，右边界和左边界相差 len(p) 的时候，count 也会等于 0 。
//   当区间内有不符合规范的元素(freq < 0 或者是不存在的元素)，那么当区间达到 len(p) 的时候，count 无法减少到 0，
//   区间右移动的时候，左边界又会开始 count ++，只有当左边界移出了这些不合规范的元素以后，才可能出现 count = 0 的情况，即找到 Anagrams 的情况。
//
// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"
//
// Output:
// [0, 6]

//      a  b  c
// freq[1, 0, 0]
// count = 0
//   l
//   c b a e b a b a c d
//         r

function findAnagrams(s, p) {
    let freq = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0,
    }
    let result = []
    if (s.length === 0 || s.length < p.length) {
        return result
    }

    for (let i = 0; i < p.length; i++) {
        freq[p[i]]++
    }
    console.log('freq', freq)

    let left = 0
    let right = 0
    let count = p.length

    while (right < s.length) {
        if (freq[s[right]] >= 1) {
            count--
        }
        freq[s[right]]--
        right++

        if (count === 0) {
            result.push(left)
        }

        if (right-left === p.length) {
            if (freq[s[left]] >= 0) {
                count++
            }
            freq[s[left]]++
            left++
        }

    }
    return result
}

let s = "cbaebabacd"
let p = "abc"
console.log(findAnagrams(s, p))
