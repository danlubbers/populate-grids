import React, { useState } from "react";
import RenderGrids from "./components/RenderGrids";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [grids, setGrids] = useState([]);
  const [inputList, setInputList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // clear the grids for additional user input
    setGrids([]);
    setInputList([]);

    if (Math.sign(value) !== 1)
      alert(
        `${value} is a negative number. Please input a positive number to populate grids!`
      );

    // loop to the value of user input. 'i' value starts at 1 instead of 0 because our grid starts at 1, instead where the array index starts at 0
    for (let i = 1; i <= value; i++) {
      // callback function needed to get the previous grids state, then spread previous state and add the value of i ( increment )
      setGrids((grids) => [...grids, `Grid #${i}`]);
      setInputList((grids) => [...grids, ""]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            onChange={(e) => setValue(parseInt(e.target.value))}
          />
          <button>Populate Grids</button>
        </form>
        <div className="gridContainer">
          <RenderGrids
            grids={grids}
            setGrids={setGrids}
            inputList={inputList}
            setInputList={setInputList}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
