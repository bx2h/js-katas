// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const debounce = (func: Function, wait: number = 0) => {
    let handle: number | undefined = undefined
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let context: any = undefined
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let argsToInvoke: any[] | undefined = undefined

    function clearTimer() {
        clearTimeout(handle)
        handle = undefined
    }

    function invoke() {
        if (handle === undefined) {
            return
        }

        clearTimer()
        func.apply(context, argsToInvoke)
    }

    function fn(...args) {
        clearTimer()
        argsToInvoke = args
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        context = this
        handle = setTimeout(function () {
            invoke()
        }, wait)
    }

    fn.cancel = clearTimer
    fn.flush = invoke

    return fn
}

export { debounce }
