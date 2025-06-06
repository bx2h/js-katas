/* eslint-disable */
// @ts-nocheck

Array.prototype.myFilter = function (callbackFn, thisArg) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        if (callbackFn.call(thisArg, this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    return newArr
}
