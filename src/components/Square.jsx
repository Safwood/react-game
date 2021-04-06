import React from 'react';

const Square = (props) => {
  return (
    <button className={`Square${props.isActive ? " " + props.isActive : ""}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;