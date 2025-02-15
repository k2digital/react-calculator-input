import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Calculator from './Calculator';
import calc from './calc';

const keyCodeSelectorMap = {
  Backspace: '.num-key-right',
  '.': '.num-key-left',
  '=': '.confirmbutton',
  Enter: '.confirmbutton',
  enter: '.confirmbutton',
  '+': '.num-op-plus',
  '-': '.num-op-minus',
  '*': '.num-op-times',
  '/': '.num-op-divide',
  //"F9": "+/-",
  //"A": "AC",
  //"a": "AC",
  Escape: '.close button',
  //"C": "CE",
  //"c": "CE",
  0: '.num-key-zero',
  1: '.num-key-one',
  2: '.num-key-two',
  3: '.num-key-three',
  4: '.num-key-four',
  5: '.num-key-five',
  6: '.num-key-six',
  7: '.num-key-seven',
  8: '.num-key-eight',
  9: '.num-key-nine',
};

class NumericInput extends Component {
  constructor(props) {
    super(props);
    const initialValue = `${this.props.initialValue}`;
    this.state = {
      isVisible: false,
      inputValue: initialValue,
      internalValue: initialValue,
      displayValue: initialValue,
    };
    this.inputRef = React.createRef();
    this.calcRef = React.createRef();
    this.hydrateCalcBuffer(initialValue);
  }

  componentDidMount() {
    document.body.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keyup', this.onKeyUp);
    clearTimeout(this.blurTimeout);
  }

  blurTimeout = 0;
  handleBlur = () => {
    this.blurTimeout = setTimeout(() => {
      var active = document.activeElement;
      if (!active.classList.contains('calculator-wrapper') || active.id == this.props.id) {
        this.setState({ isVisible: false });
      }
    }, 1);

    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event);
    }
  };

  handleChange = (val) => {
    this.setState({
      displayValue: calc.getSteps(),
    });
  };

  handleClose = () => {
    const inputEl = this.inputRef.current;
    inputEl.blur();
    this.setState({ isVisible: false });
  };

  handleComplete = () => {
    calc['=']();
    this.setState(
      {
        isVisible: false,
        inputValue: calc.getResult(),
        displayValue: calc.getSteps(),
      },
      () => {
        this.proxyOnChangeOnRefWithValue(this.inputRef, this.state.inputValue);
      },
    );

    const inputEl = this.inputRef.current;
    inputEl.blur();
  };

  handleFocus = (event) => {
    var parsedValue = parseFloat(event.target.value);
    this.hydrateCalcBuffer(parsedValue);
    this.setState({
      isVisible: true,
    });

    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(event);
    }
  };

  hydrateCalcBuffer(value) {
    calc['AC']();
    let calcBuffer = [...`${value}`];
    while (calcBuffer.length) calc[calcBuffer.shift()]();
  }

  moveCursorToEnd(state) {
    const length = 1 + new String(state.inputValue).length;
    this.inputRef.current.setSelectionRange(length, length);
  }

  onKeyUp = (event) => {
    if (!this.state.isVisible) {
      return;
    }

    var keyCode = event.key;
    if (keyCode in keyCodeSelectorMap) {
      event.preventDefault();

      const el = this.calcRef.current.querySelector(keyCodeSelectorMap[keyCode]);
      if (!el) {
        throw new Error('react-calculator-input: Key binding missing!');
      }

      const clickEvent = new Event('click', {
        bubbles: true,
        target: { value: el, enumerable: true, writable: true },
      });
      el.dispatchEvent(clickEvent);
    }
  };

  proxyOnChangeOnRefWithValue = (ref, value) => {
    if (typeof this.props.onChange !== 'function') return;
    const event = new Event('change', { bubbles: true });
    Object.defineProperty(event, 'target', {
      value: ref.current,
      enumerable: true,
      writable: true,
    });
    event.target.value = value.toString();
    this.props.onChange(event);
  };

  sanitizeRenderProps = ({ ...props }) => {
    delete props.ref;
    delete props.type;
    delete props.onFocus;
    delete props.onChange;
    delete props.onBlur;
    delete props.initialValue;
    return props;
  };

  render() {
    const props = Object.assign({}, this.props);
    const {
      label: labelProps,
      labelPosition: labelPosition,
      className,
      ...inputProps
    } = this.sanitizeRenderProps(props);

    this.sanitizeRenderProps(props);

    const label = (
      <label className={classnames('label', props.labelClassName)} htmlFor={props.id}>
        {props.label}
      </label>
    );

    return (
      <div className={classnames('numeric-input-component', className)}>
        {props.label && props.labelPosition == 'top' && label}
        <input
          className={props.className}
          id={props.id}
          name={props.name}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          readOnly
          ref={this.inputRef}
          type="text"
          value={this.state.inputValue}
          {...inputProps}
        />
        {props.label && props.labelPosition == 'bottom' && label}
        <div
          ref={this.calcRef}
          className={classnames('calculator-wrapper', {
            dflex: this.state.isVisible,
            dnone: !this.state.isVisible,
          })}
          tabIndex="-1"
        >
          <Calculator
            onClose={this.handleClose}
            displayValue={this.state.displayValue}
            onChange={this.handleChange}
            onComplete={this.handleComplete}
          />
        </div>
      </div>
    );
  }
}

NumericInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  initialValue: PropTypes.number,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  labelPosition: PropTypes.oneOf(['top', 'bottom']),
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

NumericInput.defaultProps = {
  labelPosition: 'top',
  initialValue: 0,
};

export default NumericInput;
