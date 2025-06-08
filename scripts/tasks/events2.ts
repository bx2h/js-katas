export default class EventEmitter {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    listeners: Map<string, Function[]>
    constructor() {
        this.listeners = new Map()
    }

    on(eventName, listener) {
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, [])
        }

        this.listeners.get(eventName)!.push(listener)

        return {
            off: () => {
                const arr = this.listeners.get(eventName)

                if (!arr) return this

                const index = arr.indexOf(listener)
                if (index !== -1) {
                    arr.splice(index, 1)
                }

                if (arr.length === 0) {
                    this.listeners.delete(eventName)
                }

                return this
            },
        }
    }

    emit(eventName, ...args) {
        const arr = this.listeners.get(eventName)

        if (!arr) return false

        arr.forEach((fn) => fn.apply(this, args))

        return true
    }
}
