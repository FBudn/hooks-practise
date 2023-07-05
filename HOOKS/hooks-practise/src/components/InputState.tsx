import React, { useState } from "react";
import { Tilediv, Input, TextInfo } from "../styles/styles";
import Informator from "./Informator";

export interface InputStateProps {
  id: any;
}
// input oparty na useState zadeklarowanym w App.tsx

const InputState: React.FC<InputStateProps> = ({ id }) => {
  // useState do komponentu InputState
  const [text, setText] = useState("Empty input now");

  const handleInputValue = (e: any) => {
    setText(e.target.value);
  };
  return (
    <>
      <Tilediv>useState</Tilediv>
      <Input
        type="text"
        id={id}
        onChange={handleInputValue}
        placeholder="I am handle by useState"
      />
      <TextInfo>
        <div>Showing state, that is value from input above: </div>
        <div> {text} </div>
      </TextInfo>
      <Informator />
    </>
  );
};

export default InputState;
