import { describe, it, expect } from 'vitest'
import { depthSum } from './nested-list-depth-sum'
import { NestedInteger } from './utils'

describe('Nested List Depth Sum', () => {
    it('Test 1', () => {
        const input = [[1, 1], 2, [1, 1]]
        const nestedList = new NestedInteger(input).getList()!
        expect(depthSum(nestedList)).toEqual(10)
    })

    it('Test 2', () => {
        const input = [1, [4, [6]]]
        const nestedList = new NestedInteger(input).getList()!
        expect(depthSum(nestedList)).toEqual(27)
    })

    it('Test 3', () => {
        const input = [0]
        const nestedList = new NestedInteger(input).getList()!
        expect(depthSum(nestedList)).toEqual(0)
    })
})
