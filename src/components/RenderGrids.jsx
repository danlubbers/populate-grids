import React from "react";

const RenderGrids = ({ grids }) => {
  return grids.map((num, idx) => {
    let textContent = `Grid #${num}`;
    return (
      <div className="grid" key={`${num} - ${idx}`}>
        <p>{textContent}</p>
      </div>
    );
  });
};

export default RenderGrids;
