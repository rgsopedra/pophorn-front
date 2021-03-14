import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action)
  console.log('prev state', store.getState())
  const result = next(action)
  console.log('next state', store.getState())
  return result
}

export const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)
