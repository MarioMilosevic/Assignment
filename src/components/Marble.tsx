import { MarbleProps } from "../types";
import styles from "./Marble.module.css";
import { FaTrashAlt } from "react-icons/fa";

const Marble = ({
  count,
  deleteMarble,
  id,
  incrementMarble,
  decrementMarble,
  startCountUp,
  startCountDown,
  stopCounter,
}: MarbleProps) => {
  return (
    <div className={styles.marble}>
      <button
        className={styles.button}
        onClick={() => decrementMarble(id)}
        onMouseDown={() => startCountDown(id)}
        onMouseUp={stopCounter} 
        onMouseLeave={stopCounter} 
      >
        -
      </button>
      <button className={styles.button}>{count}</button>
      <button
        className={styles.button}
        onClick={() => incrementMarble(id)}
        onMouseDown={() => startCountUp(id)}
        onMouseUp={stopCounter} 
        onMouseLeave={stopCounter} 
      >
        +
      </button>
      <FaTrashAlt className={styles.button} onClick={() => deleteMarble(id)} />
    </div>
  );
};

export default Marble;


// const intervalRef = useRef<number | null>(null);

  // const startCountUp = (id: string) => {
  //   intervalRef.current = setInterval(() => {
  //     incrementMarble(id);
  //   }, 500);
  // };

  // const startCountDown = (id: string) => {
  //   intervalRef.current = setInterval(() => {
  //     decrementMarble(id);
  //   }, 500);
  // };

  // const stopCounter = () => {
  //   if (intervalRef.current) {
  //     clearInterval(intervalRef.current);
  //     intervalRef.current = null;
  //   }
  // };

  
//   const incrementMarble = (id: string) => {
//     setMarbles((prevMarbles) =>
//       prevMarbles.map((marble) =>
//         marble.id === id ? { ...marble, count: marble.count + 1 } : marble
//   )
// );
// };

// const decrementMarble = (id: string) => {
//   setMarbles((prevMarbles) =>
//     prevMarbles.map((marble) =>
//       marble.id === id ? { ...marble, count: marble.count - 1 } : marble
// )
// );
// };
// const addNewMarble = () => {
//   const newMarble = { id: nanoid(), count: 0 };
//   setMarbles((prev) => [...prev, newMarble]);
// };

//   const deleteMarble = (id: string) => {
//     setMarbles((prev) => prev.filter((marble) => marble.id !== id));
//   };

//   const totalMarbleCount = marbles.reduce(
//     (total, marble) => total + marble.count,
//     0
//   );


{
  /* <div className="countDiv">
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
      )} */
}