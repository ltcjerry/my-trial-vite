import { defineStore } from 'pinia'
import { Names } from './store_name'

export const useTestInfo = defineStore(Names.TEST, {
    state: () => {
        return {
            current: 1,
            name: 'jerry'
        }
    },
    // 计算
    getters: {
        add10(): number {
            return this.current + 10
        }
    },
    // 可以做同步，异步
    actions: {
        setCurrent() {
            this.current = 999
        }
    }
})