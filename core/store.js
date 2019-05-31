import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import beerSaga from './saga/beer'

const sagaMiddleware = createSagaMiddleware()
export default createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(beerSaga)