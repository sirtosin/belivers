import React from 'react'

const Button = ({ onPress,className, disabled,text}) => {
  return (
    <button onClick={onPress} className={className} disabled={disabled} type="button">
      {text}
    </button>
  );
};

export default Button