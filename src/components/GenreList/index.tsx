import * as React from 'react';
import { IGenre } from '../../store/movies/types';

import { Checkbox } from '@blueprintjs/core';

interface IProps {
  genres: IGenre[],
  updateSelectedGenres: (id: number) => void,
};

const GenreList: React.SFC<IProps> = ({ genres, updateSelectedGenres }) => (
  <div style={{ marginBottom: 20 }}>
    {genres.map((genre: any) => (
      <Checkbox 
        label={genre.name}
        checked={genre.checked}
        onChange={() => updateSelectedGenres(genre.id)}
      />
    ))}
  </div>
);

export default GenreList;