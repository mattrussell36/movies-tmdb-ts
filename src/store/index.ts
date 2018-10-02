import { 
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import thunk from 'redux-thunk';
import { IMovieState } from './movies/types';
import { IThemeState } from './theme/types';

import movies from './movies/moviesReducer';
import theme from './theme/themeReducer';

export interface IRootState {
  movies: IMovieState;
  theme: IThemeState;
}

const rootReducer = combineReducers({
  movies,
  theme,
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);