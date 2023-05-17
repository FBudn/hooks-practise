import React from "react";

export interface InputProps {
  handleInputValue: (e: any) => void;
}
const Input: React.FC<InputProps> = ({ handleInputValue }) => {
  return (
    <input
      type="text"
      onChange={handleInputValue}
      placeholder="Jestem zarządzany przez useState"
    />
  );
};

export default Input;
