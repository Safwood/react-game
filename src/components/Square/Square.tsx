import React from 'react';
import './Square.css';

type PropsType = {
  value: "X" | "O" | null
  key: Number
  onClick: () => void
  isActive: "Active" | "" | null
}

const Square = ({value, key, onClick, isActive}: PropsType) => {
  return (
    <div  className="Square">
      {/* <svg  className="Cross">
        <line  className="FirstLine" x1='20' y1='20' x2='85' y2='85'stroke='red' strokeWidth='10' fill='none' strokeLinecap='round'/>
        <line className="SecondLine" x1='85' y1='20' x2='20' y2='85'stroke='red' strokeWidth='10' fill='none' strokeLinecap='round'/>
      </svg> */}
        <button className={`Square${isActive ? " " + isActive : ""}`} onClick={onClick}>
          {!value 
          ? null
          : value === "X"
          ?
          <svg  className="Cross">
            <line  className="FirstLine" x1='20' y1='20' x2='85' y2='85'stroke='red' strokeWidth='10' fill='none' strokeLinecap='round'/>
            <line className="SecondLine" x1='85' y1='20' x2='20' y2='85'stroke='red' strokeWidth='10' fill='none' strokeLinecap='round'/>
          </svg>
          : 
          <svg  className="Circle">
            <circle r='38' cx='52' cy='52' stroke='blue' strokeWidth='10' fill='none' strokeLinecap='round'/>
          </svg>
          }
       </button>
    </div>
  );
}

export default Square;