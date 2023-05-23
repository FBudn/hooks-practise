import React from "react";
import { Tilediv, Input } from "../styles/styles";

export interface InputStateProps {
  handleInputValue: (e: any) => void;
  id: any;
}
const InputState: React.FC<InputStateProps> = ({ handleInputValue, id }) => {
  return (
    <>
      <Tilediv>useState</Tilediv>
      <Input
        type="text"
        id={id}
        onChange={handleInputValue}
        placeholder="I am handle by useState"
      />
    </>
  );
};

export default InputState;
