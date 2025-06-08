// Given an array of integers return (any) index where it's value is greater than its neighbours

// Time: O(log2(n))
// Space: O(1)

const findPeakElement = function (nums: number[]) {
    // binary search / divide an conquer
    let l = 0,
        r = nums.length - 1

    while (l < r) {
        const mid = Math.floor((l + r) / 2)
        if (nums[mid] > nums[mid + 1]) r = mid
        else l = mid + 1
    }

    return l
}

export { findPeakElement }
