/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TextInfo, Tilediv } from "../styles/styles";
import Informator from "./Informator";

// tutaj tylko komponent informacja, że użyty jest useLayoutEffect

const LayoutEffectComp = () => {
  return (
    <>
      <Tilediv>LayoutEffect</Tilediv>
      <TextInfo>
        Click: mouse's right button {`>`} "Inspect" {`>`} Console
      </TextInfo>
      <TextInfo>Then refresh the page and check when I am fired.</TextInfo>
      <TextInfo>It happens before rendering and before useEffect ;)</TextInfo>
      <Informator />
    </>
  );
};

export default LayoutEffectComp;
