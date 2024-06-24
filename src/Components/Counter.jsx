import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { GiMagicBroom } from "react-icons/gi";
import "./Counter.css";

const step = [1, 5, 10, 20, 50, 100];

const Counter = () => {
  const [count, setCount] = useState(0);
  const [stepValue, setStepValue] = useState(0);
  const [stepIndex, setStepIndex] = useState(null);

  const minusClickHandler = () => {
    setCount(count - stepValue);
  };

  const plusClickHandler = () => {
    setCount(count + stepValue);
  };

  const broomClickHandler = () => {
    setCount(0);
    setStepIndex(null);
  };

  const stepClickHandler = (newStep, i) => {
    setStepValue(newStep);
    setStepIndex(i);
  };

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <h2 className="counterSum">{count}</h2>
      <div className="button">
        <div className="button__calc">
          <button className="button__calc_icon" onClick={minusClickHandler}>
            <CiCircleMinus />
          </button>
          <button className="button__calc_icon" onClick={plusClickHandler}>
            <CiCirclePlus />
          </button>
          <button className="button__calc_icon" onClick={broomClickHandler}>
            <GiMagicBroom />
          </button>
        </div>
        <div className="button__step">
          {step.map((el, i) => (
            <button
              key={i}
              className={`button__step_icon ${
                i === stepIndex ? "button__step_click" : ""
              }`}
              onClick={() => stepClickHandler(el, i)}
            >
              {el}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
