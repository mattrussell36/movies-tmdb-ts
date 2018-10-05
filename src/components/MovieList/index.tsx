import * as React from 'react';
import { IMovie } from '../../store/movies/types';
import Card from '../Card';

import styled from 'styled-components';

// import { OverflowList, Boundary, Popover } from '@blueprintjs/core';

interface IProps {
  movies: IMovie[];
}

const Grid = styled.div`
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const GridItem = styled.div`
  min-width: 0;
  margin-bottom: 20px;

  @media (min-width: 900px) {
    margin-bottom: 0;
  }
`;

const Pill = styled.div`
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
    <Grid>
      {movies.map((movie: IMovie) => (
        <GridItem key={movie.id}>
          <Card title={movie.title} img={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}>
            {/* <OverflowList 
              collapseFrom={Boundary.END}
              items={movie.genres}
              minVisibleItems={1}
              overflowRenderer={(items) => {
                return (
                  <Popover>
                    <PillButton>+ {items.length}</PillButton>
                    <div style={{ padding: 20 }}>
                      {items.map(g => g.name).join(', ')}
                    </div>
                  </Popover>
                )
              }}
              visibleItemRenderer={(g) => <Pill key={g.id}>{g.name}</Pill>}
            /> */}
            <div>
              {movie.genres.map(g => <Pill key={g.id}>{g.name}</Pill>)}
            </div>
            <p><strong>Popularity:</strong> {movie.popularity}</p>
            <p style={{ marginBottom: 0 }}><strong>Rating:</strong> {movie.vote_average}</p>
          </Card>
        </GridItem>
      ))}
    </Grid>
  )
}

export default MovieList;