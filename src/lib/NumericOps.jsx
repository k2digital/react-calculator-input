import React from 'react'
import KeyButton from './KeyButton'

const numericOpsClassMap = {
  '+': 'plus',
  '*': 'times',
  '-': 'minus',
  '/': 'divide',
};

var NumericOps = ({onOperationClick, backgroundColor}) => {
  const keys = Object.entries(numericOpsClassMap).map(([sign, string]) => (
    <KeyButton
      key={`numeric-ops-${string}`}
      text={sign}
      onClick={onOperationClick}
      className={`num-op-${string}`}
      backgroundColor={backgroundColor}
    />
  ));

  var rows = [], size = 2;

  while (keys.length > 0)
    rows.push(keys.splice(0, size));

  return (
    <div className="numericops">
      <div className="numericops-row">
          {rows[0]}
      </div>

      <div className="numericops-row">
          {rows[1]}
      </div>

    </div>
  )
}

export default NumericOps;
