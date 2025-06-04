import { describe, it, expect } from 'vitest'
import { SparseVector, AltSparseVector } from './dot-product-sparse'

describe('Dot Product sparse vector', () => {
    it('Creates dot product of two single vectors', () => {
        let ans = new SparseVector([2]).dotProduct(new SparseVector([3]))
        expect(ans).toEqual(6)

        ans = new AltSparseVector([2]).dotProduct(new AltSparseVector([3]))
        expect(ans).toEqual(6)
    })

    it('Creates dot product of two vectors', () => {
        let ans = new SparseVector([1, 2, 3, 4]).dotProduct(
            new SparseVector([1, 2, 3, 5])
        )
        expect(ans).toEqual(1 + 4 + 9 + 20)

        ans = new AltSparseVector([1, 2, 3, 4]).dotProduct(
            new AltSparseVector([1, 2, 3, 5])
        )
        expect(ans).toEqual(1 + 4 + 9 + 20)
    })

    it('Creates dot product of two sparse vectors', () => {
        let ans = new SparseVector([1, 0, 0, 2, 3]).dotProduct(
            new SparseVector([0, 3, 0, 4, 0])
        )
        expect(ans).toEqual(8)

        ans = new SparseVector([0, 1, 0, 0, 0]).dotProduct(
            new SparseVector([0, 0, 0, 0, 2])
        )
        expect(ans).toEqual(0)

        ans = new SparseVector([0, 1, 0, 0, 2, 0, 0]).dotProduct(
            new SparseVector([1, 0, 0, 0, 3, 0, 4])
        )
        expect(ans).toEqual(6)

        ans = new AltSparseVector([1, 0, 0, 2, 3]).dotProduct(
            new AltSparseVector([0, 3, 0, 4, 0])
        )
        expect(ans).toEqual(8)

        ans = new AltSparseVector([0, 1, 0, 0, 0]).dotProduct(
            new AltSparseVector([0, 0, 0, 0, 2])
        )
        expect(ans).toEqual(0)

        ans = new AltSparseVector([0, 1, 0, 0, 2, 0, 0]).dotProduct(
            new AltSparseVector([1, 0, 0, 0, 3, 0, 4])
        )
        expect(ans).toEqual(6)
    })

    it('Creates dot product of one empty vector', () => {
        let ans = new SparseVector([4]).dotProduct(new SparseVector([]))
        expect(ans).toEqual(0)

        ans = new AltSparseVector([4]).dotProduct(new AltSparseVector([]))
        expect(ans).toEqual(0)
    })

    it('Creates dot product of two empty vectors', () => {
        let ans = new SparseVector([]).dotProduct(new SparseVector([]))
        expect(ans).toEqual(0)

        ans = new AltSparseVector([]).dotProduct(new AltSparseVector([]))
        expect(ans).toEqual(0)
    })
})
