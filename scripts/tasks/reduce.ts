/* eslint-disable */
// @ts-nocheck

Array.prototype.myReduce = function (callbackFn, initialValue) {
    if (!this.length) {
        if (initialValue !== undefined) {
            return initialValue
        } else {
            throw new TypeError()
        }
    }

    const startIndex = initialValue === undefined ? 1 : 0
    let acc = initialValue ?? this[0]

    for (let i = startIndex; i < this.length; i++) {
        if (i in this) {
            acc = callbackFn(acc, this[i], i, this)
        }
    }

    return acc
}
