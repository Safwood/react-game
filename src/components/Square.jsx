import React from 'react';

const Square = (props) => {
  return (
    <button className="Square" onClick={props.onClick} onChange={props.onChange}>
      {props.value}
    </button>
  );
}

export default Square;