import React from "react";
import { Tilediv, Input, TextInfo } from "../styles/styles";
import Informator from "./Informator";

export interface InputStateProps {
  handleInputValue: (e: any) => void;
  id: any;
  text: any;
}
// input oparty na useState zadeklarowanym w App.tsx

const InputState: React.FC<InputStateProps> = ({
  handleInputValue,
  id,
  text,
}) => {
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
