import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [grids, setGrids] = useState([]);

  const createGrids = (value) => {
    setGrids([]);
    for (let i = 1; i <= value; i++) {
      setGrids((grids) => [...grids, i]);
    }
  };

  const renderGrids = grids.map((e, i) => {
    return (
      <div className="grid" key={i}>
        Grid #{e}
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
