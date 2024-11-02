import { useState, useRef } from "react";
const Rjesenje = () => {
  const [count, setCount] = useState(0);
  const incrementInterval = useRef(null);
  const decrementInterval = useRef(null);
  const holdTimeout = useRef(null);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const startHoldIncrement = () => {
    holdTimeout.current = setTimeout(() => {
      incrementInterval.current = setInterval(handleIncrement, 100);
    }, 500);
  };

  const startHoldDecrement = () => {
    holdTimeout.current = setTimeout(() => {
      decrementInterval.current = setInterval(handleDecrement, 100);
    }, 500);
  };

  const stopHold = () => {
    clearTimeout(holdTimeout.current);
    clearInterval(incrementInterval.current);
    clearInterval(decrementInterval.current);
  };

  return (
    <div className="container">
      <div className="mario">
        <button
          onMouseDown={handleDecrement}
          onMouseUp={stopHold}
          onMouseLeave={stopHold}
          onMouseDownCapture={startHoldDecrement}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onMouseDown={handleIncrement}
          onMouseUp={stopHold}
          onMouseLeave={stopHold}
          onMouseDownCapture={startHoldIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Rjesenje;
