import * as React from 'react';
import { IGenre, IMovie } from '../../store/movies/types';
import Card from '../Card';

import { Grid } from 'mauerwerk';
import styled from 'styled-components';

interface IProps {
  movies: IMovie[];
}

const Pill = styled.li`
  display: inline-block;
  margin: 0 5px 5px 0;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: white;
`;

const maxGenresToDisplay = 4;

const MovieList: React.SFC<IProps> = ({ movies }) => {
  if (!movies.length) {
    return <div>No Movies!</div>
  }

  return (
    <Grid
      data={movies}
      keys={(d: IMovie) => d.id}
      heights={(d: IMovie) => 195}
      columns={2}
      margin={20}
      transitionMount={true}
    >
      {(movie: IMovie) => {
        // Only show the first four genres to help ensure equal card heights.
        const firstFourGenres: IGenre[] = movie.genres.slice(0, maxGenresToDisplay);
        return (
          <Card title={movie.title} img={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}>
            <ul>
              {firstFourGenres
                .map(genre => <Pill key={genre.id}>{genre.name}</Pill>)}
              {movie.genres.length > maxGenresToDisplay && 
                <Pill>{'+ ' + (movie.genres.length - maxGenresToDisplay)}</Pill>}
            </ul>
            <p><strong>Popularity:</strong> {movie.popularity}</p>
            <p style={{ marginBottom: 0 }}><strong>Rating:</strong> {movie.vote_average}</p>
          </Card>
        );
      }}
    </Grid>
  )
}

export default MovieList;