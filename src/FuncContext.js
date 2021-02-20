import React, { useContext } from "react";
import { AppContext } from "./Context";

const FuncContext = () => {
  const context = useContext(AppContext);
  return <div>{context.name}</div>;
};

export default FuncContext;
