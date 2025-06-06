// Given the root of a binary tree, collect a tree's nodes as if you were doing this:
// Collect all the leaf nodes.
// Remove all the leaf nodes.
// Repeat until the tree is empty.

// Time: O(n)
// Space: O(n)

const findLeaves = function (root: Node) {
    const res = {}
    const dfs = (node) => {
        if (!node) return 0
        const depth = Math.max(dfs(node.left), dfs(node.right))

        if (res[depth]) {
            res[depth].push(node.val)
        } else {
            res[depth] = [node.val]
        }

        return depth + 1
    }
    dfs(root)
    return Object.values(res)
}

export { findLeaves }
