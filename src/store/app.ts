import { defineStore } from 'pinia'

interface IAppStore {
  user: any
}

export const useAppStore = defineStore({
  id: 'app',

  state: (): IAppStore => ({
    user: undefined
  })
})
