import { describe, expect, it } from 'vitest'
import { fibonacci } from './fibonacci'

describe('Fibonacci', () => {
    it('Handle n = 0', () => {
        expect(fibonacci(0)).toEqual([])
    })

    it('Handle n = 1', () => {
        expect(fibonacci(1)).toEqual([0])
    })

    it('Handle n = 2', () => {
        expect(fibonacci(2)).toEqual([0, 1])
    })

    it('Handle n = 3', () => {
        expect(fibonacci(3)).toEqual([0, 1, 1])
    })

    it('Handle n = 4', () => {
        expect(fibonacci(4)).toEqual([0, 1, 1, 2])
    })

    it('Handle n = 10', () => {
        expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
    })
})
