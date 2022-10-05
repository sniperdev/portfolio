import React from "react";

const StackItem = ({ text }) => {
  return (
    <span className={"p-1 mx-2 border-2 rounded-md border-emerald-300"}>
      {text}
    </span>
  );
};

export default StackItem;
