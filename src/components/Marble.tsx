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
        onMouseLeave={() => stopCounter()}
      >
        -
      </button>
      <button className={styles.button}>{count}</button>
      <button
        className={styles.button}
        onClick={() => incrementMarble(id)}
        onMouseDown={() => startCountUp(id)}
        onMouseLeave={() => stopCounter()}
      >
        +
      </button>
      <FaTrashAlt className={styles.button} onClick={() => deleteMarble(id)} />
    </div>
  );
};

export default Marble;
