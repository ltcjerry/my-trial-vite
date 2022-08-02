import { defineStore } from 'pinia'
import { store } from '@/store'

interface KeepAliveState {
    list: string[]
}
export const useKeepAliveStore = defineStore({
    id: 'keep-alive',
    state: (): KeepAliveState => ({list: []}),
    actions: {
        add(value: string | string[]) {
            if (typeof value === 'string') {
                !this.list.includes(value) && this.list.push(value)
            } else {
                value.forEach(item => {
                    item && !this.list.includes(item) && this.list.push(item)
                })
            }
        },
        remove(value: string | string[]) {
            if (typeof value === 'string') {
                this.list = this.list.filter(item => item !== value)
            } else {
                this.list = this.list.filter(item => !value.includes(item))
            }
        },
        clear() {
            this.list = []
        }
    }
})

export function useKeepAliveStoreOut() {
    return useKeepAliveStore(store)
}