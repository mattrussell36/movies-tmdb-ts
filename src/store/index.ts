import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { IMovieState } from './movies/types';
import rootReducer from './reducers';

export interface IRootState {
  movies: IMovieState;
}

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);