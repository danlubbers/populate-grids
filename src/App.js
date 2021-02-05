import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [grids, setGrids] = useState([]);

  const createGrids = (value) => {
    // clear the grids for additional user input
    setGrids([]);

    // loop to the value of user input. 'i' value starts at 1 instead of 0 because our grid starts at 1, instead where the array index starts at 0
    for (let i = 1; i <= value; i++) {
      // callback function needed to get the previous grids state, then spread previous state and add the value of i ( increment )
      setGrids((grids) => [...grids, i]);
    }
  };

  // loop over grids array and render "Grid with the incremented numbers"
  const renderGrids = grids.map((num, idx) => {
    return (
      <div className="grid" key={`${num} - ${idx}`}>
        Grid #{num}
      </div>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <section>
        <div>
          <input type="number" onChange={(e) => setValue(e.target.value)} />
          <button onClick={() => createGrids(value)}>Populate Grids</button>
        </div>
        <div className="gridContainer">{renderGrids}</div>
      </section>
    </div>
  );
}

export default App;
