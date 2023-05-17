import React from "react";

export interface InputProps {
  handleInputValue: (e: any) => void;
  id: any;
}
const Input: React.FC<InputProps> = ({ handleInputValue, id }) => {
  return (
    <input
      type="text"
      id={id}
      onChange={handleInputValue}
      placeholder="Jestem zarządzany przez useState"
    />
  );
};

export default Input;
