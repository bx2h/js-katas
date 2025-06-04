import { describe, it, expect } from 'vitest'
import { altHighestNumber, highestNumber } from './highest-number'

describe('Highest number', () => {
    it('Returns the only number if only one number', () => {
        expect(highestNumber([11])).toEqual(11)
        expect(altHighestNumber([11])).toEqual(11)
    })

    it('Returns the highest number from an array', () => {
        expect(highestNumber([11, 1, 2, 56, 11, 0, -4])).toEqual(56)
        expect(altHighestNumber([11, 1, 2, 56, 11, 0, -4])).toEqual(56)
    })

    it('Returns the highest number from an array or negative values', () => {
        expect(highestNumber([-4, -10, -1])).toEqual(-1)
        expect(altHighestNumber([-4, -10, -1])).toEqual(-1)
    })

    it('Returns 0 if array input is empty', () => {
        expect(highestNumber([])).toEqual(0)
        expect(altHighestNumber([])).toEqual(0)
    })
})
