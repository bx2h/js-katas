interface SparseVectorInstance {
    nums: Map<number, number>
    dotProduct(vec: SparseVectorInstance): number
}

interface SparseVectorConstructor {
    new (nums: number[]): SparseVectorInstance
    prototype: SparseVectorInstance
}

const SparseVector = function (nums: number[]) {
    this.nums = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            this.nums.set(i, nums[i])
        }
    }
} as unknown as SparseVectorConstructor

SparseVector.prototype.dotProduct = function (vec: SparseVectorInstance) {
    let sum = 0
    const [mostSparse, leastSparse] =
        this.nums.size <= vec.nums.size ? [this, vec] : [vec, this]

    for (const [key, value] of mostSparse.nums) {
        if (!leastSparse.nums.has(key)) continue
        sum += value * leastSparse.nums.get(key)
    }

    return sum
}

export { SparseVector }

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
