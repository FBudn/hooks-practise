/* eslint-disable import/no-cycle */
import React, { useContext } from "react";
import { ColorContext } from "../App";
import { Tilediv, TextInfo } from "../styles/styles";
import Informator from "./Informator";

const ContextConsumer = () => {
  const color = useContext<any>(ColorContext);

  return (
    <>
      <Tilediv>useContext</Tilediv>
      <TextInfo style={{ color }}>
        I am using useContext and Context API to set text color
      </TextInfo>
      <Informator />
    </>
  );
};

export default ContextConsumer;
