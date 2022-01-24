import React from 'react';
import { render } from 'react-dom';
import NumericInput from '../../lib';
import '../../lib/index.scss';
import './styles.css';
import HasOnFocusListener from './sample/HasOnFocusListener';
import HasOnChangeListener from './sample/HasOnChangeListener';
import Simple from './sample/Simple';
import Styled from './sample/Styled';

function Demo() {
  return (
    <div className="calculator-input-container">
      <h1>React Calculator Input</h1>
      <div className="samples">
        <Simple />
        <Styled />
        <HasOnChangeListener />
        <HasOnFocusListener />
      </div>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
