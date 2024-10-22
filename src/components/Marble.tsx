import { MarbleType } from "../types";
import styles from "./Marble.module.css";
import { FaTrashAlt } from "react-icons/fa";

const Marble = ({ count, deleteMarble, id }: MarbleType) => {
  return (
    <div className={styles.marble}>
      <button className={styles.button}>-</button>
      <button className={styles.button}>{count}</button>
      <button className={styles.button}>+</button>
      <FaTrashAlt
        className={styles.button}
        onClick={() => deleteMarble(id)} 
      />
    </div>
  );
};

export default Marble;
