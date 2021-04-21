import React from 'react';
import './Square.css';

type PropsType = {
  value: "X" | "O" | null
  key: Number
  onClick: () => void
  isActive: "Active" | "" | null
}

const Square = (props: PropsType) => {
  return (
    <button className={`Square${props.isActive ? " " + props.isActive : ""}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;