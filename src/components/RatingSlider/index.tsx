import * as React from 'react';

interface IProps {
  value: number,
  handleChange: (value: number) => void,
}

const RatingSlider: React.SFC<IProps> = ({ handleChange, value }) => (
  <div style={{ marginBottom: 20 }}>
    <label htmlFor="rating">Rating ({value})</label>
    <div>
      <input
        value={value}
        onChange={(e: React.FormEvent<HTMLInputElement>) => 
          handleChange(parseFloat(e.currentTarget.value))}
        type="range" 
        min="1" 
        max="10" 
        step="0.5"
        name="rating"
        id="rating"
        style={{ display: 'block', width: '100%' }}
      />
    </div>
  </div>
);

export default RatingSlider;