import React from 'react';
import './button.css';

const Button = ({label, className, sendMessage}) => {
    return (
      <button
        className={["Button", className].join(" ")}
        onSubmit = {sendMessage}
      >
        {label}
      </button>
    );
  };
  
  export default Button