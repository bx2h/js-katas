import { describe, it, expect } from 'vitest'
import { findPeakElement } from './find-peak'

describe('Find Leaves', () => {
    it('Test 1', () => {
        expect(findPeakElement([1, 2, 3, 1])).toEqual(2)
    })

    it('Test 2', () => {
        expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toEqual(5)
    })
})
