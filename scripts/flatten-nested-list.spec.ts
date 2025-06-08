import { describe, it, expect } from 'vitest'
import { NestedIterator } from './flatten-nested-list'
import { NestedInteger } from './utils'

describe('Flatten nested list', () => {
    it('Test 1', () => {
        const input = [[1, 1], 2, [1, 1]]
        const nestedList = new NestedInteger(input)

        const i = new NestedIterator(nestedList.getList()),
            a: number[] = []
        while (i.hasNext()) a.push(i.next())

        expect(a).toEqual([1, 1, 2, 1, 1])
    })

    it('Test 2', () => {
        const input = [1, [4, [6]]]
        const nestedList = new NestedInteger(input)

        const i = new NestedIterator(nestedList.getList()),
            a: number[] = []
        while (i.hasNext()) a.push(i.next())

        expect(a).toEqual([1, 4, 6])
    })
})
