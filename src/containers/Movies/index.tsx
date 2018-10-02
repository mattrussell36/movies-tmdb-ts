import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import GenreList from '../../components/GenreList';
import MovieList from '../../components/MovieList';
import RatingSlider from '../../components/RatingSlider';
import Wrapper from '../../components/Wrapper';
import { IRootState } from '../../store/index'
import { 
  fetchMovies,
  updateSelectedGenres,
  updateSelectedRating,
} from '../../store/movies/moviesActions';
import { selectGenres, selectMovies } from '../../store/movies/moviesReducer';
import { 
  IGenre,
  IMovie,
  IMovieActions
} from '../../store/movies/types';

interface IProps {
  fetchMovies: () => void,
  isError: boolean,
  isPending: boolean,
  list: IMovie[],
  genres: IGenre[],
  updateSelectedGenres: (id: number) => void,
  updateSelectedRating: (value: number) => void,
  selectedRating: number,
};

class Movies extends React.Component<IProps> {
  public componentDidMount(): void {
    this.props.fetchMovies();
  }

  public render() {
    const { 
      isError, 
      isPending,
      genres,
      list,
      selectedRating,
      updateSelectedGenres,
      updateSelectedRating,
    } = this.props;

    if (isError) {
      return <div>Could not fetch movies!</div>
    }

    return (
      <div>
        <div style={{ position: 'relative' }}>
          <Wrapper style={{ position: 'absolute', top: 0, left: 0, width: 250 }}>
            <RatingSlider 
              handleChange={updateSelectedRating}
              value={selectedRating}
            />
            <GenreList 
              genres={genres}
              updateSelectedGenres={updateSelectedGenres}
            />
          </Wrapper>
          <Wrapper style={{ marginLeft: 250 }}>
            {isPending
              ? <h4>Loading...</h4> 
              : <MovieList movies={list} />}
          </Wrapper>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (rootState: IRootState) => {
  const { genres, isError, isPending, list, selectedGenres, selectedRating } = rootState.movies;
  return {
    genres: selectGenres(list, genres),
    isError,
    isPending,
    list: selectMovies(list, selectedGenres, selectedRating),
    selectedRating,
  }
};

const mapDispatchToProps = (dispatch: Dispatch<IMovieActions>) => bindActionCreators({
  fetchMovies,
  updateSelectedGenres,
  updateSelectedRating,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);