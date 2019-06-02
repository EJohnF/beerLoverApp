import {
  put, takeLatest, all, select
} from 'redux-saga/effects';
import { beerAction, filterAction } from '../types';

const lastId = -1;
const baseURL = 'https://api.punkapi.com/v2/beers';
const perPage = 10;
function* fetchAsync() {
  try {
    const { name, brew, currentPage } = (yield select()).filters;
    let url = `${baseURL}?page=${currentPage + 1}&per_page=${perPage}`;
    if (name) {
      url += `&beer_name=${name}`;
    }
    if (brew) {
      url += `&brewed_after=${brew}`;
    }
    const response = yield (yield fetch(url)).json();
    if (response && response.length > 0) {
      if (response[response.length - 1] !== lastId) {
        yield put({ type: beerAction.ADD_NEW, payload: response });
      }
    }
  } catch (e) {
    console.warn(e);
  }
}

function* setFilterAsync() {
  yield put({ type: beerAction.RESET_LIST });
  yield fetchAsync();
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    yield takeLatest(beerAction.FETCH_MORE, fetchAsync),
    yield takeLatest(filterAction.SET_NAME_FILTER, setFilterAsync),
    yield takeLatest(filterAction.SET_BREW_FILTER, setFilterAsync)
  ]);
}
