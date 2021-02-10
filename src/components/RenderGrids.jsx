import React from "react";

const RenderGrids = ({ grids, inputList, setInputList }) => {
  const changeTextContent = (e, idx) => {
    const { value } = e.target;
    return grids.filter((_, i) => {
      if (i === idx) {
        inputList.splice(i, 1, value);
        setInputList((inputList) => [...inputList]);
      }
    });
  };
  console.log("out", inputList);

  return grids.map((gridNum, idx) => {
    return (
      <div className="grid" key={`${gridNum} - ${idx}`}>
        <input
          type="text"
          placeholder={gridNum}
          onBlur={(e) => changeTextContent(e, idx)}
        />
        <p>{inputList[idx]}</p>
      </div>
    );
  });
};

export default RenderGrids;
