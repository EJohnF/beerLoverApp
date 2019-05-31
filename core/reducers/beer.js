import { beerAction } from '../types';
import { unionBy } from 'lodash';

const initialState = {
  list: [],
  selected: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case beerAction.ADD_NEW: {
      return {
        ...state,
        list: unionBy(state.list, action.payload, beer => beer.id),
      }
    }
    default:
      return state;
  }
};