interface Node {
    val: number
    left?: Node
    right?: Node
    parent?: Node
}

const createBinaryTree = function (
    values: (number | null)[],
    p: number,
    q: number
): [Node, Node] {
    if (values.length === 0 || values[0] === null) {
        throw new Error('Invalid tree structure')
    }

    // Create all nodes first
    const nodes: (Node | null)[] = values.map((val) =>
        val !== null
            ? { val, left: undefined, right: undefined, parent: undefined }
            : null
    )

    // Build the tree structure and set parent pointers
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        if (!node) continue

        const leftIndex = 2 * i + 1
        const rightIndex = 2 * i + 2

        if (leftIndex < nodes.length && nodes[leftIndex]) {
            node.left = nodes[leftIndex]!
            nodes[leftIndex]!.parent = node
        }

        if (rightIndex < nodes.length && nodes[rightIndex]) {
            node.right = nodes[rightIndex]!
            nodes[rightIndex]!.parent = node
        }
    }

    // Find nodes with values p and q
    let nodeP: Node | null = null
    let nodeQ: Node | null = null

    for (const node of nodes) {
        if (node?.val === p) nodeP = node
        if (node?.val === q) nodeQ = node
    }

    if (!nodeP || !nodeQ) {
        throw new Error(`Could not find nodes with values ${p} and ${q}`)
    }

    return [nodeP, nodeQ]
}

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

export {
    Node,
    lowestCommonAncestor,
    lowestCommonAncestorRunner,
    createBinaryTree,
}
