import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Marble from "./components/Marble";
import { MarbleType } from "./types";
function App() {
  const [marbles, setMarbles] = useState<MarbleType[]>([]);


  const addNewMarble = () => {
    const newMarble = {id: nanoid(), count:0 }
    setMarbles((prev) => [...prev, newMarble])
  }


  const deleteMarble = (id: string) => {
    console.log(id)
    setMarbles((prev) => prev.filter((marble) => marble.id !== id))
  };


  return (
    <div className="container">
      <div className="countDiv">
        <span>Boxes count </span>
        <span>Marbles count </span>
      </div>
      <button className="addNewMarble" onClick={addNewMarble}>
        ADD NEW BOX
      </button>
      {marbles.length === 0 ? (
        <span>No marble boxes, yet</span>
      ) : (
        marbles.map((marble) => (
          <Marble key={marble.id} id={marble.id} count={marble.count} deleteMarble={deleteMarble} />
        ))
      )}
    </div>
  );
}

export default App;
