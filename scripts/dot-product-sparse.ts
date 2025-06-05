// Given two sparse vectors (a sparse vector contains mostly zeros) calculate the dot product of them

// Time: O(n) worst case
// O(n) - for constructor
// O(L) where L is number of non-zero elements

// Space: O(L) worst case
// O(L) for creating the hash map
// O(1) for calculating the dot product

// Due to the potential complexity and storage of the Hash function in a map
// We could instead store nums as [key, value] pairs, excluding 0 values
// Then during dotProduct, we use two indexes to move through each SparseVector independelty.
// See AltSparseVector

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

interface AltSparseVectorInstance {
    nums: number[][]
    dotProduct(vec: AltSparseVectorInstance): number
}

interface AltSparseVectorConstructor {
    new (nums: number[]): AltSparseVectorInstance
    prototype: AltSparseVectorInstance
}

const AltSparseVector = function (nums: number[]) {
    this.nums = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            this.nums.push([i, nums[i]])
        }
    }
} as unknown as AltSparseVectorConstructor

AltSparseVector.prototype.dotProduct = function (vec: AltSparseVectorInstance) {
    let sum = 0
    let q = 0
    let p = 0

    while (q < this.nums.length && p < vec.nums.length) {
        if (this.nums[q][0] === vec.nums[p][0]) {
            sum += this.nums[q][1] * vec.nums[p][1]
            p++
            q++
        } else if (this.nums[q][0] < vec.nums[p][0]) {
            q++
        } else {
            p++
        }
    }

    return sum
}

export { SparseVector, AltSparseVector }
