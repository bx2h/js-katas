// Given a binary tree, return the sum of all paths to leaf nodes
// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123

// Time: O(n)
// Space: O(1)
const sumNumbers = function (root, partialSum = 0) {
    if (!root) {
        return 0
    }

    partialSum = partialSum * 10 + root.val

    if (!root.left && !root.right) {
        return partialSum
    }

    return (
        sumNumbers(root.left, partialSum) + sumNumbers(root.right, partialSum)
    )
}

export { sumNumbers }
