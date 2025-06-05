import { describe, it, expect } from 'vitest'
import {
    lowestCommonAncestor,
    lowestCommonAncestorRunner,
    createBinaryTree,
} from './lowest-common-anc'

describe('Lowest Common Ancestor', () => {
    it('Find common ancestor - test 1', () => {
        const values = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
        const p = 5
        const q = 1
        const [nodeA, nodeB] = createBinaryTree(values, p, q)

        expect(lowestCommonAncestor(nodeA, nodeB)?.val).toEqual(3)
        expect(lowestCommonAncestorRunner(nodeA, nodeB).val).toEqual(3)
    })

    it('Find common ancestor - test 2', () => {
        const values = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
        const p = 5
        const q = 4

        const [nodeA, nodeB] = createBinaryTree(values, p, q)

        expect(lowestCommonAncestor(nodeA, nodeB)?.val).toEqual(5)
        expect(lowestCommonAncestorRunner(nodeA, nodeB).val).toEqual(5)
    })

    it('Find common ancestor - test 3', () => {
        const values = [1, 2]
        const p = 1
        const q = 2

        const [nodeA, nodeB] = createBinaryTree(values, p, q)

        expect(lowestCommonAncestor(nodeA, nodeB)?.val).toEqual(1)
        expect(lowestCommonAncestorRunner(nodeA, nodeB).val).toEqual(1)
    })
})
