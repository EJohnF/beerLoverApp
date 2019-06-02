import { combineReducers } from 'redux';
import beer from './beer';
import filters from './filters';

export default combineReducers({
  beer,
  filters,
});
