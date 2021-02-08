import React, { useState } from "react";

const RenderGrids = ({ grids, setGrids }) => {
  const [textContent, setTextContent] = useState("");

  const changeGridText = (e, idx) => {
    const { value } = e.target;
    console.log("Grid", value);
    setTextContent(value);
  };

  return grids.map((num, idx) => {
    let placeHolderText = `Grid #${num}`;
    return (
      <div className="grid" key={`${num} - ${idx}`}>
        <input
          key={`${num} - ${idx}`}
          placeholder={placeHolderText}
          onChange={(e) => changeGridText(e, idx)}
        />
      </div>
    );
  });
};

export default RenderGrids;
