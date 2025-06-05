// Given an array of integer nums, return the k most frequent numbers

// Time: O(n log n)
// Space: O(n)
const topKFrequent = function (nums: number[], k: number) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    const kvPairs = Array.from(map)

    kvPairs.sort((a, b) => a[1] - b[1])

    return kvPairs.slice(kvPairs.length - k).map((kv) => kv[0])
}

export { topKFrequent }
