import { describe, it, expect } from 'vitest'
import { createBinaryTree } from './utils.ts'
import { sumNumbers } from './sum-root-to-leaf.ts'

describe('Sum root to leaf nodes', () => {
    it('Test 1', () => {
        const nodes = [1, 2, 3]
        const root = createBinaryTree(nodes)
        expect(sumNumbers(root)).toEqual(25)
    })

    it('Test 1', () => {
        const nodes = [4, 9, 0, 5, 1]
        const root = createBinaryTree(nodes)
        expect(sumNumbers(root)).toEqual(1026)
    })
})
