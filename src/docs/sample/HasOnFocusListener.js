import React, { useState } from 'react';
import { render } from 'react-dom';
import NumericInput from '../../../';

export default function HasOnFocusListener() {
  const initialValue = 10;
  const [hasFocus, setHasFocus] = React.useState(0);
  const handleFocus = () => {
    setHasFocus(true);
  };

  const handleBlur = () => {
    setHasFocus(false);
  };

  return (
    <div className="sample">
      <h2>Has focus example</h2>
      <p>{hasFocus ? 'Has focus' : 'Does not have focus'}</p>
      <NumericInput
        id="simple"
        label="Label"
        name="focusSample"
        initialValue={initialValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}
