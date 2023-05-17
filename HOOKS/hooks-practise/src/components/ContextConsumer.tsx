/* eslint-disable import/no-cycle */
import React, { useContext } from "react";
import { ColorContext } from "../App";

const ContextConsumer = () => {
  const color = useContext<any>(ColorContext);

  return (
    <div style={{ color }}>
      I am using useContext and Context API to set text color
    </div>
  );
};

export default ContextConsumer;
