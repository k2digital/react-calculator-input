import React from 'react';
import { render } from 'react-dom';
import NumericInput from '../../../lib';
import './styled.css';

export default function Styled() {
  return (
    <div className="sample">
      <h2>Styled example</h2>
      <NumericInput
        className="styled"
        id="myinput"
        label={'Sample'}
        name="styledSample"
        initialValue={Math.PI.toFixed(5)}
      />
    </div>
  );
}
