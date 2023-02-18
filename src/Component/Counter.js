import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };

  const Reset = () => {
    setCounter(counter - counter);
  };
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {counter}</h2>
        <div className="card__btns">
          <button
            onClick={Increment}
            className="btn card__btn"
            disabled={counter === 5 ? true : false}
          >
            +
          </button>
          <button
            onClick={Decrement}
            className="btn card__btn"
            disabled={counter === -5 ? true : false}
          >
            -
          </button>
          <button onClick={Reset} className="btn card__btn">
            0
          </button>
        </div>
      </div>
    </div>
  );
}
