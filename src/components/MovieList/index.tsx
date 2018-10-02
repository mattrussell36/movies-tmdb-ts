import * as React from 'react';
import styled from 'styled-components';
import { IMovie } from '../../store/movies/types';

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
            <div style={{ padding: 20, minHeight: '100%', background: '#f8f8f8' }}>
              <h3 style={{ marginTop: 0 }}>{movie.title}</h3>
              <p>Genre IDs: {movie.genres.map(genre => genre.name).join(', ')}</p>
              <p>Popularity: {movie.popularity}</p>
              <p style={{ marginBottom: 0 }}>Rating: {movie.vote_average}</p>
            </div>
          </GridItem>
      ))}
    </Grid>
  )
}

export default MovieList;