import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './createReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, createLogger({ collapsed: true })),
  )
  sagaMiddleware.run(rootSaga)

  return store
}
