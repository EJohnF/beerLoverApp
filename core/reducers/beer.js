import { unionBy, find } from 'lodash';
import { beerAction } from '../types';

const initialState = {
  list: [],
  selected: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case beerAction.ADD_NEW:
      return {
        ...state,
        list: unionBy(state.list, action.payload, beer => beer.id),
      };
    case beerAction.RESET_LIST:
      return {
        ...state,
        list: [],
      };
    case beerAction.SELECT_BEER:
      return {
        ...state,
        selected: find(state.list, beer => beer.id === action.payload)
      };
    default:
      return state;
  }
};
