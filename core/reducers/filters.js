import { filterAction, beerAction } from '../types';

const initialState = {
  name: null,
  brew: null,
  currentPage: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case filterAction.INCREASE_PAGE:
    case beerAction.ADD_NEW:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case filterAction.SET_NAME_FILTER:
      if (action.payload !== state.name) {
        return {
          ...state,
          currentPage: 0,
          name: action.payload,
        };
      }
      return state;

    case filterAction.SET_BREW_FILTER:
      return {
        ...state,
        currentPage: 0,
        brew: action.payload
      };

    default:
      return state;
  }
};
