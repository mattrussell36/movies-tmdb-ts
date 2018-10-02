export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const TMDB_GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`;
export const TMDB_NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

class TMDBService {
  public getMovies(): Promise<any> {
    return fetch(TMDB_NOW_PLAYING).then(res => res.json());
  }

  public getGenres(): Promise<any> {
    return fetch(TMDB_GENRES_URL).then(res => res.json());
  }
}

export default TMDBService;