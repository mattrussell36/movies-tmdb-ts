import { Reducer } from 'redux';
import { 
  IGenre,
  IMovie,
  IMovieActions,
  IMovieState,
  MovieActionTypes,
} from './types';

const initialState: IMovieState = {
  genres: [],
  isError: false,
  isPending: false,
  list: [],
  selectedGenres: [],
  selectedRating: 3,
}

const moviesReducer: Reducer<IMovieState, IMovieActions> = (
  state: IMovieState = initialState, 
  action: IMovieActions
) => {
  switch(action.type) {
    case MovieActionTypes.FetchMovies:
      return {
        ...state,
        isPending: true,
      }
      break;

    case MovieActionTypes.FetchMoviesSuccess:
      return {
        ...state,
        genres: action.genres,
        isPending: false,
        list: action.movies,
      };
      break;
    
    case MovieActionTypes.UpdateSelectedGenres:
      const { id } = action;
      const genres = { ...state.genres };

      genres[id].checked = !genres[id].checked;

      const selectedGenres = Object.keys(genres)
        .filter(genre => genres[genre].checked)
        .map(genre => genres[genre].id);

      return {
        ...state,
        genres,
        selectedGenres,
      }
      break;
    
    case MovieActionTypes.UpdateSelectedRating:
      return {
        ...state,
        selectedRating: action.value,
      }
      break;
    
    default:
      return state;
  }
}

// TODO: Use reselect or other to memoize
export function selectMovies<
  M extends ReadonlyArray<IMovie>,
  G extends ReadonlyArray<number> // array of selected genre ids
>(movies: M, selectedGenres: G, rating: number) {
  return movies
    // movies is already typed as IMovie
    .filter(movie => {
      if (!selectedGenres.length) {
        return true;
      }

      // Array.includes not working with typescript
      return selectedGenres.every((id: number) => movie.genre_ids.indexOf(id) >= 0);
    })
    .filter(movie => movie.vote_average && movie.vote_average >= rating)
    .sort((a, b) => b.popularity - a.popularity);
}

// Only show genres for the current displaying movies
export function selectGenres<
  M extends ReadonlyArray<IMovie>,
>(movies: M, genres: { [g: number]: IGenre }) {
  return movies
    // Get array of all genre_ids for all movies
    .reduce((arr: number[], movie: IMovie) => arr.concat(movie.genre_ids), [])
    
    // Remote duplicates from the array
    .filter((id: number, i: number, arr: number[]) => arr.indexOf(id) === i)

    // Find the genre for the given id
    .map((id: number) => genres[id])
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0
    });
}

export default moviesReducer;