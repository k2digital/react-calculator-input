import React from 'react';
import { render } from 'react-dom';
import NumericInput from '../../../lib';

export default function Simple() {
  return (
    <div className="sample">
      <h2>Basic example</h2>
      <NumericInput id="simple" label="Simple" name="simple" initialValue={10} />
    </div>
  );
}
