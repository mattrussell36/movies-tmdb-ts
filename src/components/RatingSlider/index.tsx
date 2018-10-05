import * as React from 'react';
import { FormGroup, Slider } from '@blueprintjs/core';

interface IProps {
  value: number,
  handleChange: (value: number) => void,
}

const RatingSlider: React.SFC<IProps> = ({ handleChange, value }) => (
  <div style={{ marginBottom: 20 }}>
    <FormGroup 
      helperText="Click and drag to select a rating" 
      label="Rating"
      labelFor="rating">
      <Slider
        initialValue={0}
        labelPrecision={0}
        labelStepSize={5}
        stepSize={0.5}
        value={value}
        min={0}
        max={10} 
        onChange={handleChange}
      />
    </FormGroup>
  </div>
);

export default RatingSlider;