// Time: O(n) due to Math.max iterating through n length
// Space: O(n) due to spread operator
const highestNumber = (arr: number[]): number => {
    if (!arr.length) return 0
    return Math.max(...arr)
}

// Time: O(n) due to iterating through n length
// Space: O(1) due to single value assignment
const altHighestNumber = (arr: number[]): number => {
    if (!arr.length) return 0
    let highest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        highest = Math.max(highest, arr[i])
    }
    return highest
}

export { highestNumber, altHighestNumber }
