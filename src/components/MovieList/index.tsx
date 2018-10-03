import * as React from 'react';
import { IMovie } from '../../store/movies/types';
import Card from '../Card';

import { Grid } from 'mauerwerk';
import styled from 'styled-components';

interface IProps {
  movies: IMovie[]
}

const Pill = styled.li`
  display: inline-block;
  margin: 0 5px 5px 0;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: white;
`;

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
      {(movie: IMovie) => (
        <Card title={movie.title} img={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}>
          <ul>
            {movie.genres.map(genre => <Pill key={genre.id}>{genre.name}</Pill>)}
          </ul>
          <p><strong>Popularity:</strong> {movie.popularity}</p>
          <p style={{ marginBottom: 0 }}><strong>Rating:</strong> {movie.vote_average}</p>
        </Card>
      )}
    </Grid>
  )
}

export default MovieList;