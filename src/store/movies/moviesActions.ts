import tmdbService from '../../services/tmdb';
import {
  IMovie,
  MovieActionTypes 
} from './types';

const tmdb = new tmdbService();

export const fetchMovies = () => async (dispatch: any) => {
  dispatch({ type: MovieActionTypes.FetchMovies });

  try {
    const data = await Promise.all([
      tmdb.getGenres(),
      tmdb.getMovies()
    ]);

    // Add a checked prop to each genre
    const genres = data[0].genres.reduce((
      obj: object,
      genre: { id: number, name: string }
    ) => { 
      obj[genre.id] = {
        checked: false,
        id: genre.id,
        name: genre.name,
      };
      return obj;
    }, {});

    const movies: IMovie[] = data[1].results.map((movie: IMovie) => {
      movie.genres = movie.genre_ids.map(id => genres[id]);
      return movie;
    });

    dispatch({
      genres,
      movies,
      type: MovieActionTypes.FetchMoviesSuccess,
    });
  } catch(err) {
    dispatch({ type: MovieActionTypes.FetchMoviesError })
  }

  // setTimeout(() => {
  //   dispatch({ type: FETCH_MOVIES_SUCCESS })
  // }, 2000);
}

export const updateSelectedGenres = (id: number) => ({
  id,
  type: MovieActionTypes.UpdateSelectedGenres,
});

export const updateSelectedRating = (value: number) => ({
  type: MovieActionTypes.UpdateSelectedRating,
  value,
});