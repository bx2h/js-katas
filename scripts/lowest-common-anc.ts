// Find the lowest common ancestor of two nodes in a binary tree
import { Node } from './utils'

// Time: O(n) as we will need to visit every node in the tree if the nodes are at the bottom of a skewed tree
// Space: O(n) as we store every node in the map
const lowestCommonAncestor = function (
    p: Node | undefined,
    q: Node | undefined
) {
    const map = new Set()

    while (true) {
        if (p) {
            if (map.has(p.val)) {
                return p
            } else {
                map.add(p.val)
                p = p.parent
            }
        }

        if (q) {
            if (map.has(q.val)) {
                return q
            } else {
                map.add(q.val)
                q = q.parent
            }
        }
    }

    return null
}

// Time: O(n) up to 2n steps to align nodes p and q
// Space: O(1) as we only store local nodes
const lowestCommonAncestorRunner = function (p: Node, q: Node) {
    let nodeA: Node | undefined = p
    let nodeB: Node | undefined = q

    while (nodeA?.val !== nodeB?.val) {
        nodeA = nodeA.parent === undefined ? p : nodeA?.parent
        nodeB = nodeB.parent === undefined ? q : nodeB?.parent
    }

    return nodeA
}

export { Node, lowestCommonAncestor, lowestCommonAncestorRunner }
