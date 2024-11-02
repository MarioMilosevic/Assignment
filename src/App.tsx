import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const incrementInterval = useRef<number>(0)
  const holdTimeout = useRef<number>(0)

  const incrementCount = () => {
    console.log('render')
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };


   const startHoldIncrement = () => {
     holdTimeout.current = setTimeout(() => {
       incrementInterval.current = setInterval(incrementCount, 100);
     }, 500);
   };
  
    const stopHold = () => {
      clearTimeout(holdTimeout.current);
      clearInterval(incrementInterval.current);
      // clearInterval(decrementInterval.current);
    };
  
  return (
    <div className="container">
      <div className="mario">
        <button
          onMouseDown={decrementCount}
          onMouseUp={stopHold}
          onMouseLeave={stopHold}
          // onMouseDownCapture={startHoldDecrement}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onMouseDown={incrementCount}
          onMouseUp={stopHold}
          onMouseLeave={stopHold}
          onMouseDownCapture={startHoldIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;

// onMouseDown=
// onMouseUp=
// onMouseLeave=
// onMouseDownCapture=
