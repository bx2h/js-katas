// Given an array arr, return a new array where all values in arr are squared

// Time: O(n)
// Space: O(n)
const powerOfTwo = (arr: number[]): number[] => {
    const squared = Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        squared[i] = Math.pow(arr[i], 2)
    }
    return squared
}

export { powerOfTwo }
