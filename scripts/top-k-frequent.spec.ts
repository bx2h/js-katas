import { describe, it, expect } from 'vitest'
import { topKFrequent } from './top-k-frequent'

describe('Top K Frequent', () => {
    it('Top frequent from list', () => {
        const input = [1, 1, 1, 2, 2, 3]
        // Should really accept either [2, 1] or [1, 2]
        expect(topKFrequent(input, 2)).toEqual([2, 1])
    })

    it('Top frequent from list with negative', () => {
        const input = [-1, 1, -1, 2, 2, 4, 5]
        expect(topKFrequent(input, 2)).toEqual([-1, 2])
    })

    it('Top frequent single value', () => {
        const input = [1]
        expect(topKFrequent(input, 1)).toEqual([1])
    })
})
