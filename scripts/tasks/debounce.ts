const debounce = function (func, wait = 0) {
    let handle: NodeJS.Timeout

    return function (...args) {
        clearTimeout(handle)

        handle = setTimeout(() => {
            handle = func.apply(this, args)
        }, wait)
    }
}

let i = 0
const increment = () => {
    i++
    console.log(i)
}
const debouncedIncrement = debounce(increment, 1000)

debouncedIncrement()
debouncedIncrement()
debouncedIncrement()
debouncedIncrement()

export { debounce }
