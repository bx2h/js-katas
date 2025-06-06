/* eslint-disable */
// @ts-nocheck

import { describe, it, expect } from 'vitest'
import './reduce'

const add = (prev: any, curr: any) => prev + curr
const multiplyByIndex = (prev: number, curr: number, index: number) =>
    prev + curr * index
const subtract = (prev: number, curr: number) => prev - curr
const sumOfSquares = (prev: any, curr: any, index: number, array: Array<any>) =>
    prev + curr * array[index]
const combineObj = (prev: Object, curr: Object) => ({ ...prev, ...curr })
const combineArr = (prev: Array<any>, curr: any) => [...prev, curr]

describe('Array.prototype.myReduce', () => {
    it('empty array equals initial value', () => {
        expect([].myReduce(add, 0)).toEqual(0)
        expect([].myReduce(subtract, 0)).toEqual(0)
    })

    it('one value', () => {
        expect([1].myReduce(add, 0)).toEqual(1)
        expect(['a'].myReduce(add, '')).toEqual('a')
    })

    it('two values', () => {
        expect([-4, 10].myReduce(add, 0)).toEqual(6)
        expect(['b', 'c', 'd'].myReduce(add, '')).toEqual('bcd')
    })

    it('multiple values', () => {
        expect([1, 2, 3].myReduce(add, 0)).toEqual(6)
        expect(['a', 'b', 'c', 'd'].myReduce(add, '')).toEqual('abcd')
    })

    it('object values', () => {
        expect([{ foo: 1 }, { bar: 2 }].myReduce(combineObj)).toEqual({
            foo: 1,
            bar: 2,
        })
        expect([{ foo: 1 }, { bar: 2 }].myReduce(combineObj, {})).toEqual({
            foo: 1,
            bar: 2,
        })
    })

    it('array values', () => {
        expect([1, 2, 3].myReduce(combineArr, [])).toEqual([1, 2, 3])
    })

    it('reducer uses index argument when provided', () => {
        expect([1, 2, 3].myReduce(multiplyByIndex, 0)).toEqual(8)
        expect([-1, -3, 4].myReduce(multiplyByIndex, 0)).toEqual(5)
    })

    it('reducer uses array argument when provided', () => {
        expect([1, 2, 3, 4].myReduce(sumOfSquares, 0)).toEqual(30)
        expect([-1, -3, 4].myReduce(sumOfSquares, 0)).toEqual(26)
    })

    it('no initial value provided and array is empty', () => {
        expect(() => {
            ;[].myReduce(add)
        }).toThrow()
    })

    it('no initial value provided and array is non-empty', () => {
        expect([1, 2, 3].myReduce(add)).toEqual(6)
        expect([-1, -3, 4].myReduce(sumOfSquares, 0)).toEqual(26)
    })

    it('sparse arrays', () => {
        expect([1, 2, , 3].myReduce(add)).toEqual(6)
        expect([-1, -3, 4, , ,].myReduce(sumOfSquares, 0)).toEqual(26)
    })
})
