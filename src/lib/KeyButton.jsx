import React from 'react'
import classnames from 'classnames';

var KeyButton = ({
  backgroundColor,
  className,
  onClick = () => {},
  text,
}) => {
  return (
    <div className={classnames("button", className)} role="button" onClick={() => {onClick(text)}} style={{backgroundColor: backgroundColor}} > 
      <p>{text}</p>
    </div>
  )
}

export default KeyButton;
