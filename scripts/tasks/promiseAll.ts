/* eslint-disable */
// @ts-nocheck

export default function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
        const results = new Array(iterable.length)
        let unresolved = iterable.length

        if (iterable.length === 0) {
            resolve(results)
            return
        }

        iterable.forEach(async (item, index) => {
            try {
                const value = await item
                results[index] = value
                unresolved--

                if (unresolved === 0) {
                    resolve(results)
                }
            } catch (err) {
                reject(err)
            }
        })
    })
}
