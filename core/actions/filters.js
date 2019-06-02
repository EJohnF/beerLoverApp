import { filterAction, beerAction } from '../types';

export const setBrewFilter = (date) => ({
  type: filterAction.SET_BREW_FILTER,
  payload: date
})