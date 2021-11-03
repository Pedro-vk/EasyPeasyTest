import { createStore, action, thunk, thunkOn, Action, Thunk, ThunkOn, createTypedHooks } from 'easy-peasy'
import { massariService } from 'src/shared'

interface StoreModel {
  cryptoList: string[]
  crypto: string
  timePeriod: 'month' | 'week'
  timeData: any
  cryptoMetrics: any

  initialize: Action<StoreModel>
  changeCrypto: Action<StoreModel, string>
  changeTimePeriod: Action<StoreModel, 'month' | 'week'>
  setMetrics: Action<StoreModel, any>
  setTimeData: Action<StoreModel, any>

  fetchMetrics: Thunk<StoreModel>

  fetchMetricsOnChange: ThunkOn<StoreModel>
}


export const store = createStore<StoreModel>({
  // state
  cryptoList: ['aave', 'uniswap', 'curve', 'bancor'],
  crypto: 'aave',
  timePeriod: 'month',
  timeData: undefined,
  cryptoMetrics: undefined,

  // Actions
  initialize: action((state, payload) => {}),
  changeCrypto: action((state, payload) => {
    state.crypto = payload
  }),
  changeTimePeriod: action((state, payload) => {
    state.timePeriod = payload
  }),
  setMetrics: action((state, payload) => {
    state.cryptoMetrics = payload
  }),
  setTimeData: action((state, payload) => {
    state.timeData = payload
  }),

  // Thunks
  fetchMetrics: thunk(async (actions, payload, {getState}) => {
    actions.setMetrics(undefined)
    const state = getState()
    const result = await massariService.getMetrics(state.crypto)
    actions.setMetrics(result.data)
  }),

  // Side effects
  fetchMetricsOnChange: thunkOn(
    actions => [actions.initialize, actions.changeCrypto],
    (actions, target) => {
      actions.fetchMetrics()
    }
  )
})

const typedHooks = createTypedHooks<StoreModel>()

export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState
