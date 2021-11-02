import { createStore, action, Action, createTypedHooks } from 'easy-peasy'

interface StoreModel {
  cryptoList: string[]
  crypto: string
  timeData: any
  cryptoMetrics: any

  changeCrypto: Action<StoreModel, string>
}


export const store = createStore<StoreModel>({
  // state
  cryptoList: ['aave', 'uniswap', 'curve', 'bancor'],
  crypto: 'aave',
  timeData: undefined,
  cryptoMetrics: undefined,

  // Actions
  changeCrypto: action((state, payload) => {
    state.crypto = payload
  }),
})


const typedHooks = createTypedHooks<StoreModel>()

export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState
