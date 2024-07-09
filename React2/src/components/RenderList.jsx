import React from "react";

function RenderList({ animals }) {
  return (
    <>
      {animals.map((each, index) => {
        return <li key={index}>{each.label}</li>;
      })}
    </>
  );
}

export default RenderList;
