import "./App.css";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import Marble from "./components/Marble";
import { MarbleType } from "./types";
function App() {
  const [marbles, setMarbles] = useState<MarbleType[]>([]);
  const intervalRef = useRef<number | null>(null);

  const startCountUp = (id: string) => {
    intervalRef.current = setInterval(() => {
      incrementMarble(id);
    }, 500);
  };
  const startCountDown = (id: string) => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      decrementMarble(id);
    }, 500);
  };

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const addNewMarble = () => {
    const newMarble = { id: nanoid(), count: 0 };
    setMarbles((prev) => [...prev, newMarble]);
  };

  const incrementMarble = (id: string) => {
    setMarbles((prevMarbles) =>
      prevMarbles.map((marble) =>
        marble.id === id ? { ...marble, count: marble.count + 1 } : marble
      )
    );
  };

  const decrementMarble = (id: string) => {
    setMarbles((prevMarbles) =>
      prevMarbles.map((marble) =>
        marble.id === id ? { ...marble, count: marble.count - 1 } : marble
      )
    );
  };

  const deleteMarble = (id: string) => {
    setMarbles((prev) => prev.filter((marble) => marble.id !== id));
  };

  const totalMarbleCount = marbles.reduce(
    (total, marble) => total + marble.count,
    0
  );

  return (
    <div className="container">
      <div className="countDiv">
        <span>Boxes count {marbles.length}</span>
        <span>Marbles count {totalMarbleCount}</span>
      </div>
      <button className="addNewMarble" onClick={addNewMarble}>
        ADD NEW BOX
      </button>
      {marbles.length === 0 ? (
        <span>No marble boxes, yet</span>
      ) : (
        marbles.map((marble) => (
          <Marble
            key={marble.id}
            id={marble.id}
            count={marble.count}
            deleteMarble={deleteMarble}
            incrementMarble={incrementMarble}
            decrementMarble={decrementMarble}
            startCountUp={startCountUp}
            startCountDown={startCountDown}
            stopCounter={stopCounter}
          />
        ))
      )}
    </div>
  );
}

export default App;
