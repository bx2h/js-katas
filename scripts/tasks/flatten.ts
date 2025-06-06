/* eslint-disable */
// @ts-nocheck

export default function flatten(value) {
    return value.flatMap((element) => {
        if (element instanceof Array) {
            return flatten(element)
        } else {
            return element
        }
    })
}
