import * as React from 'react';
import styled from 'styled-components';
import { IMovie } from '../../store/movies/types';
import Card from '../Card';

interface IProps {
  movies: IMovie[]
}

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const GridItem = styled.li`
  padding: 10px;
`;

const MovieList: React.SFC<IProps> = ({ movies }) => {
  if (!movies.length) {
    return <div>No Movies!</div>
  }

  return (
    <Grid>
      {movies.map((movie: IMovie) => (
          <GridItem key={movie.id}>
            <Card title={movie.title}>
              <p>Genre IDs: {movie.genres.map(genre => genre.name).join(', ')}</p>
              <p>Popularity: {movie.popularity}</p>
              <p style={{ marginBottom: 0 }}>Rating: {movie.vote_average}</p>
            </Card>
          </GridItem>
      ))}
    </Grid>
  )
}

export default MovieList;