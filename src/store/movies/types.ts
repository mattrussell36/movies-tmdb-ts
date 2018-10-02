
// A single movie from a response from TMDB api
export interface IMovie {
  vote_count?: number,
  id: number,
  video?: boolean,
  vote_average?: number,
  title: string,
  popularity: number,
  poster_path?: string,
  original_language?: string,
  original_title?: string,
  genres: IGenre[],
  genre_ids: number[],
  backdrop_path?: string,
  adult?: boolean,
  overview?: string,
  release_date?: string
}

// A single genre from TMDB api with an extra checked property 
export interface IGenre {
  checked: boolean,
  id: number,
  name: string,
}

// Movie container state
export interface IMovieState {
  // Use readonly to ensure immutability at compile time
  // Use ReadonlyArray to ensure deep immutability at compile time
  readonly genres: {
    [g: number]: IGenre,
  },
  readonly isError: boolean,
  readonly isPending: boolean,
  readonly list: ReadonlyArray<IMovie>,
  readonly selectedGenres: ReadonlyArray<number>,
  readonly selectedRating: number,
}

// Actions
export enum MovieActionTypes {
  FetchMovies = '@movies/FETCH_MOVIES',
  FetchMoviesSuccess = '@movies/FETCH_MOVIES_SUCCESS',
  FetchMoviesError = '@movies/FETCH_MOVIES_ERROR',
  UpdateSelectedGenres = '@movies/UPDATE_SELECTED_GENRES',
  UpdateSelectedRating = '@movies/UPDATE_SELECTED_RATING',
}

export type IMovieActions =
  IFetchMoviesActionType<MovieActionTypes.FetchMovies>
  | IFetchMovieErrorActionType<MovieActionTypes.FetchMoviesError>
  | IFetchMovieSuccessActionType<MovieActionTypes.FetchMoviesSuccess>
  | IUpdateSelectedGenresActionType<MovieActionTypes.UpdateSelectedGenres>
  | IUpdateSelectedRatingActionType<MovieActionTypes.UpdateSelectedRating>;

export interface IFetchMoviesActionType<Type> {
  type: Type,
}

export interface IFetchMovieErrorActionType<Type> {
  type: Type,
}

export interface IFetchMovieSuccessActionType<Type> {
  type: Type,
  movies: IMovie[],
  genres: IGenre[],
}

export interface IUpdateSelectedGenresActionType<Type> {
  type: Type,
  id: number,
}

export interface IUpdateSelectedRatingActionType<Type> {
  type: Type,
  value: number,
}
