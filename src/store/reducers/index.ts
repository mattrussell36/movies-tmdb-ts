import { combineReducers } from 'redux';
import movies from '../movies/moviesReducer';
import counter from './counterReducer';

export default combineReducers({
  counter,
  movies,
});