import React from 'react';
import { View, StyleSheet } from 'react-native';

export const beerAction = {
  FETCH_MORE: 'FETCH_MORE',
  ADD_NEW: 'ADD_NEW',
  RESET_LIST: 'RESET_LIST',
  SELECT_BEER: 'SELECT_BEER',
}

export const filterAction = {
  INCREASE_PAGE: 'INCREASE_PAGE',
  SET_NAME_FILTER: 'SET_NAME_FILTER',
  SET_BREW_FILTER: 'SET_BREW_FILTER',
}