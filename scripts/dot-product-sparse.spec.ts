import { describe, it, expect } from 'vitest'
import { SparseVector } from './dot-product-sparse'

describe('Dot Product sparse vector', () => {
    it('Creates dot product of two single vectors', () => {
        const v1 = new SparseVector([2])
        const v2 = new SparseVector([3])
        const ans = v1.dotProduct(v2)
        expect(ans).toEqual(6)
    })

    it('Creates dot product of two vectors', () => {
        const v1 = new SparseVector([1, 2, 3, 4])
        const v2 = new SparseVector([1, 2, 3, 5])
        const ans = v1.dotProduct(v2)
        expect(ans).toEqual(1 + 4 + 9 + 20)
    })

    it('Creates dot product of two sparse vectors', () => {
        let v1 = new SparseVector([1, 0, 0, 2, 3])
        let v2 = new SparseVector([0, 3, 0, 4, 0])
        let ans = v1.dotProduct(v2)
        expect(ans).toEqual(8)

        v1 = new SparseVector([0, 1, 0, 0, 0])
        v2 = new SparseVector([0, 0, 0, 0, 2])
        ans = v1.dotProduct(v2)
        expect(ans).toEqual(0)

        v1 = new SparseVector([0, 1, 0, 0, 2, 0, 0])
        v2 = new SparseVector([1, 0, 0, 0, 3, 0, 4])
        ans = v1.dotProduct(v2)
        expect(ans).toEqual(6)
    })

    it('Creates dot product of one empty vector', () => {
        const v1 = new SparseVector([4])
        const v2 = new SparseVector([])
        const ans = v1.dotProduct(v2)
        expect(ans).toEqual(0)
    })

    it('Creates dot product of two empty vectors', () => {
        const v1 = new SparseVector([])
        const v2 = new SparseVector([])
        const ans = v1.dotProduct(v2)
        expect(ans).toEqual(0)
    })
})
