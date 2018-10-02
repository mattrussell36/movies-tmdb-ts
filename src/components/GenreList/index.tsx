import * as React from 'react';
import { IGenre } from '../../store/movies/types';

interface IProps {
  genres: IGenre[],
  updateSelectedGenres: (id: number) => void,
};

const GenreList: React.SFC<IProps> = ({ genres, updateSelectedGenres }) => (
  <div style={{ marginBottom: 20 }}>
    <ul>
      {genres.map((genre: any) => (
          <li key={genre.id} style={{ marginBottom: 10 }}>
            <label htmlFor={genre.name}>
              <input 
                type="checkbox" 
                id={genre.name} 
                name={genre.name} 
                checked={genre.checked}
                onChange={() => updateSelectedGenres(genre.id)}
                style={{ marginRight: 10 }}
              />
              {genre.name} ({genre.id})
            </label>
          </li>
      ))}
    </ul>
  </div>
);

export default GenreList;