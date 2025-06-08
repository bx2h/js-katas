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
        return this
    }

    off(eventName, listener) {
        const arr = this.listeners.get(eventName)
        if (!arr) return this

        const idx = arr.indexOf(listener)
        if (idx !== -1) arr.splice(idx, 1)

        if (arr.length === 0) {
            this.listeners.delete(eventName)
        }
        return this
    }

    emit(eventName, ...args) {
        const listeners = this.listeners.get(eventName)
        if (!listeners || listeners.length === 0) return false
        ;[...listeners].forEach((fn) => fn.apply(this, args))

        return true
    }
}
