import { describe, it, expect } from 'vitest'
import { findLeaves } from './find-leaves-binary-tree'
import { createBinaryTree } from './utils'

describe('Find Leaves', () => {
    it('Test 1', () => {
        const tree = [1, 2, 3, 4, 5]
        const root = createBinaryTree(tree)
        expect(findLeaves(root as unknown as Node)).toEqual([
            [4, 5, 3],
            [2],
            [1],
        ])
    })

    it('Test 2', () => {
        const tree = [1]
        const root = createBinaryTree(tree)
        expect(findLeaves(root as unknown as Node)).toEqual([[1]])
    })
})
