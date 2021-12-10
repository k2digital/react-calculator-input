import React from 'react'
import NumericKeys from './NumericKeys'
import NumericOps from './NumericOps'
import ConfirmButton from './ConfirmButton'
import CalculatorDisplay from './CalculatorDisplay'
import calc from './calc';

const Calculator = ({close, displayValue, onChange, onComplete, backgroundColor, keyColor}) => {
  function handleNumberClick(number) {
    calc[number]();
    onChange()
  }

  function handleOperationClick(op) {
    calc[op]();
    onChange();
  }

  return (
      <div className="calculator" style={{backgroundColor: backgroundColor}}>
        <div className="close">
          <button onClick={close}>X</button>
        </div>
        <div className="calculator-display">
          <CalculatorDisplay text={displayValue} />
        </div>
        <div className="calculator-keyboard">
          <NumericKeys backgroundColor={keyColor} onNumberClick={handleNumberClick} />
          <div className="calculator-right">
            <ConfirmButton confirmText="OK" onComplete={onComplete}  backgroundColor={keyColor}/>
            <NumericOps backgroundColor={keyColor} onOperationClick={handleOperationClick} />
          </div>
        </div>

      </div>
    );
  }

export default Calculator;
