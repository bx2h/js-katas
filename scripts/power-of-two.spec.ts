import { describe, it, expect } from 'vitest'
import { powerOfTwo } from './power-of-two'

describe('Power of two', () => {
    it('Squares a single element in the array', () => {
        expect(powerOfTwo([2])).toEqual([4])
    })

    it('Squares all elements in the array', () => {
        expect(powerOfTwo([1, 2, 3])).toEqual([1, 4, 9])
    })

    it('Squares negative elements in the array', () => {
        expect(powerOfTwo([-1, -2, -3])).toEqual([1, 4, 9])
    })
})
