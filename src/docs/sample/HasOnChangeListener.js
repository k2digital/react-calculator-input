import React, { useState } from 'react';
import { render } from 'react-dom';
import NumericInput from '../../../';

const makeMessage = (count, value) => `changeCount: ${count}, value: ${value}`;

export default function HasOnChangeListener() {
  const initialValue = 10;
  const [count, setCount] = React.useState(0);
  const [message, setMessage] = React.useState(makeMessage(count, initialValue));
  const handleChange = (event) => {
    setCount(count + 1);
    setMessage(makeMessage(count + 1, event.target.value));
  };

  return (
    <div className="sample">
      <h2>OnChange example</h2>
      <p>{message}</p>
      <NumericInput
        id="simple"
        label="Label"
        name="changeSample"
        initialValue={initialValue}
        onChange={handleChange}
      />
    </div>
  );
}
