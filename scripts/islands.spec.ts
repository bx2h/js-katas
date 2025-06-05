import { describe, it, expect } from 'vitest'
import { numIslands } from './islands'

describe('Islands', () => {
    it('Test 1', () => {
        const world = [
            ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
        ]

        expect(numIslands(world)).toEqual(1)
    })

    it('Test 2', () => {
        const world = [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1'],
        ]

        expect(numIslands(world)).toEqual(3)
    })
})
