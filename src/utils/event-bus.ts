type BusClass = {
    emit: (name: string) => void;
    on: (name: string, callback: Function) => void
}
type TypeOfKey= string | number | symbol
type Store = {
    [key in TypeOfKey]: Array<Function>
}
class EventBus implements BusClass {
    private store: Store
    constructor() {
        this.store = {}
    }
    // 发布
    emit(name: string, ...args:Array<unknown>) {
        let eventQueue: Array<Function> = this.store[name]
        eventQueue.forEach(fn => {
            fn.apply(this, args)
        })
    }
    // 订阅
    on(name: string, callback: Function) {
        let fn:Array<Function> = this.store[name] || []
        fn.push(callback)
        this.store[name] = fn
    }
}

export default new EventBus()