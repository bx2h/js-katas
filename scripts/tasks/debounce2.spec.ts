/* eslint-disable */
// @ts-nocheck

import { describe, it, expect } from 'vitest'
import { debounce } from './debounce2'

describe('debounce', () => {
    it('can be initialized', () => {
        const increment = debounce(() => 1, 50)

        expect(increment).toBeTruthy()
    })

    describe('basic functionality', () => {
        it('executes after duration', (done) => {
            let i = 0
            const increment = debounce(() => {
                i++
            }, 10)

            expect(i).toBe(0)
            increment()
            expect(i).toBe(0)

            setTimeout(() => {
                expect(i).toBe(1)
                done()
            }, 20)
        })

        describe('uses arguments', () => {
            it('called once', (done) => {
                let i = 21
                const increment = debounce((a: number, b: number) => {
                    i += a * b
                }, 10)

                expect(i).toBe(21)
                increment(3, 7)
                expect(i).toBe(21)

                setTimeout(() => {
                    expect(i).toBe(42)
                    done()
                }, 20)
            })

            it('uses arguments of latest invocation', (done) => {
                let i = 21
                const increment = debounce((a: number, b: number) => {
                    i += a * b
                }, 10)

                expect(i).toBe(21)
                increment(3, 7)
                increment(4, 5)
                expect(i).toBe(21)

                setTimeout(() => {
                    expect(i).toBe(41)
                    done()
                }, 20)
            })
        })

        it('execute once even after calling it multiple times', (done) => {
            let i = 0
            const increment = debounce(() => {
                i++
            }, 20)

            expect(i).toBe(0)
            increment()
            increment()
            increment()
            increment()
            expect(i).toBe(0)

            // Should not fire yet.
            setTimeout(() => {
                expect(i).toBe(0)
            }, 10)

            setTimeout(() => {
                expect(i).toBe(1)
                done()
            }, 30)
        })

        it('duration extended if called again during window', (done) => {
            let i = 0
            const increment = debounce(() => {
                i++
            }, 100)

            expect(i).toBe(0)
            increment()
            increment()
            expect(i).toBe(0)

            // Should not fire yet.
            setTimeout(() => {
                expect(i).toBe(0)
                increment()
                expect(i).toBe(0)
            }, 50)

            setTimeout(() => {
                // Still 0 because we fired again at t=50, increment will only happen at t=150
                expect(i).toBe(0)
            }, 125)

            setTimeout(() => {
                expect(i).toBe(1)
                done()
                // Add a longer delay because the browser timer is unreliable.
            }, 1500)
        })

        it('callbacks can access `this`', (done) => {
            const increment = debounce(function (this: any, delta: number) {
                this.val += delta
            }, 10)

            const obj = {
                val: 2,
                increment,
            }

            expect(obj.val).toBe(2)
            obj.increment(3)
            expect(obj.val).toBe(2)

            setTimeout(() => {
                expect(obj.val).toBe(5)
                done()
            }, 20)
        })
    })

    describe('cancel', () => {
        it('immediately cancel', (done) => {
            let i = 0
            const increment = debounce(() => {
                i++
            }, 10)

            expect(i).toBe(0)
            increment()
            increment()
            expect(i).toBe(0)
            increment.cancel()

            setTimeout(() => {
                expect(i).toBe(0)
                done()
                // Add a longer delay because the browser timer is unreliable.
            }, 20)
        })

        it('cancel after a while', (done) => {
            let i = 0
            const increment = debounce(() => {
                i++
            }, 20)

            expect(i).toBe(0)
            increment()
            expect(i).toBe(0)

            setTimeout(() => {
                expect(i).toBe(0)
                increment.cancel()
                expect(i).toBe(0)
            }, 10)

            setTimeout(() => {
                expect(i).toBe(0)
                done()
                // Add a longer delay because the browser timer is unreliable.
            }, 100)
        })

        it('cancel after callback has fired should not crash', (done) => {
            let i = 0
            const increment = debounce(() => {
                i++
            }, 10)

            expect(i).toBe(0)
            increment()
            increment()
            expect(i).toBe(0)

            setTimeout(() => {
                expect(i).toBe(1)
                increment.cancel()
                expect(i).toBe(1)
                done()
                // Add a longer delay because the browser timer is unreliable.
            }, 100)
        })
    })

    describe('flush', () => {
        it('immediately flush', (done) => {
            let i = 0
            const increment = debounce(() => {
                i++
            }, 10)

            expect(i).toBe(0)
            increment()
            increment.flush()
            expect(i).toBe(1)

            setTimeout(() => {
                expect(i).toBe(1)
                done()
                // Add a longer delay because the browser timer is unreliable.
            }, 100)
        })

        it('flush after a while', (done) => {
            let i = 0
            const increment = debounce(() => {
                i++
            }, 30)

            expect(i).toBe(0)
            increment()
            expect(i).toBe(0)

            setTimeout(() => {
                expect(i).toBe(0)
                increment.flush()
                expect(i).toBe(1)
            }, 10)

            setTimeout(() => {
                expect(i).toBe(1)
                done()
                // Add a longer delay because the browser timer is unreliable.
            }, 100)
        })

        it('flush uses arguments of latest invocation', (done) => {
            let i = 0
            const increment = debounce((val: number) => {
                i += val
            }, 30)

            expect(i).toBe(0)
            increment(3)
            increment(5)
            expect(i).toBe(0)

            setTimeout(() => {
                expect(i).toBe(0)
                increment.flush()
                expect(i).toBe(5)
            }, 10)

            setTimeout(() => {
                expect(i).toBe(5)
                done()
                // Add a longer delay because the browser timer is unreliable.
            }, 100)
        })

        it('flush after callback has fired should not execute', (done) => {
            let i = 0
            const increment = debounce(() => {
                i++
            }, 10)

            expect(i).toBe(0)
            increment()
            expect(i).toBe(0)

            setTimeout(() => {
                expect(i).toBe(1)
            }, 20)

            setTimeout(() => {
                expect(i).toBe(1)
                increment.flush()
                expect(i).toBe(1)
                done()
                // Add a longer delay because the browser timer is unreliable.
            }, 100)
        })

        it('callbacks can access `this`', (done) => {
            const increment = debounce(function (this: any, delta: number) {
                this.val += delta
            }, 10)

            const obj = {
                val: 2,
                increment,
            }

            expect(obj.val).toBe(2)
            obj.increment(3)
            expect(obj.val).toBe(2)
            obj.increment.flush()
            expect(obj.val).toBe(5)

            setTimeout(() => {
                expect(obj.val).toBe(5)
                done()
            }, 100)
        })

        describe('flush should not be invoked without any delayed callbacks', () => {
            it('invoked after delay', (done) => {
                let i = 0
                const increment = debounce(() => {
                    i++
                }, 10)

                expect(i).toBe(0)
                increment()
                expect(i).toBe(0)

                setTimeout(() => {
                    expect(i).toBe(1)
                    increment.flush()
                    expect(i).toBe(1)
                    done()
                    // Add a longer delay because the browser timer is unreliable.
                }, 100)
            })

            it('already flushed', (done) => {
                let i = 0
                const increment = debounce(() => {
                    i++
                }, 10)

                expect(i).toBe(0)
                increment.flush()
                expect(i).toBe(0)

                setTimeout(() => {
                    increment.flush()
                    expect(i).toBe(0)
                    done()
                    // Add a longer delay because the browser timer is unreliable.
                }, 100)
            })

            it('already cancelled', (done) => {
                let i = 0
                const increment = debounce(() => {
                    i++
                }, 50)

                expect(i).toBe(0)
                increment()
                increment.cancel()
                expect(i).toBe(0)

                setTimeout(() => {
                    increment.flush()
                    expect(i).toBe(0)
                    done()
                }, 20)
            })
        })
    })
})
