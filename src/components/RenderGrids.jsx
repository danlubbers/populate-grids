import React from "react";

const RenderGrids = ({ grids, inputList, setInputList }) => {
  const changeTextContent = (e, idx) => {
    const { value } = e.target;
    return grids.filter((word, i) => {
      if (i === idx) {
        let insertValue = inputList.splice(i, 1, value);
        setInputList([...inputList, insertValue]);
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
