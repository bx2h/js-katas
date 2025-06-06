interface Node {
    val: number
    left?: Node
    right?: Node
    parent?: Node
}

const createBinaryTree = function (
    values: (number | null)[],
    p?: number,
    q?: number
): [Node, Node] | Node {
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

    if (p && q) {
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

    return nodes[0]!
}

export { Node, createBinaryTree }
