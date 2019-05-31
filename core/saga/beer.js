import { put, takeEvery, all } from 'redux-saga/effects'
import { beerAction } from '../types';

let page = 1
let lastId = -1

function* fetchAsync() {
  try {
    const response = yield (yield fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)).json()
    page += 1
    if (response && response.length > 0) {
      if (response[ response.length - 1 ] !== lastId) {
        yield put({type: beerAction.ADD_NEW, payload: response})
      }
    }
  } catch (e) {
    console.warn(e)
  }

}

function* watchIncrementAsync() {
  yield takeEvery(beerAction.FETCH_MORE, fetchAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ])
}