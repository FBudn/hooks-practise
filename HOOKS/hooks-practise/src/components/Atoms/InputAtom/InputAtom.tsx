import React from "react";
import { Input } from "./InputAtom.style";

export interface InputAtomProps {
  onChangeInput: any;
  id: any;
  placeholder: string;
  type: string;
}
// input oparty na useState zadeklarowanym w App.tsx

const InputAtom: React.FC<InputAtomProps> = ({
  onChangeInput,
  id,
  placeholder,
  type,
}) => {
  return (
    <Input
      type={type}
      data-testid={id}
      onChange={onChangeInput}
      placeholder={placeholder}
    />
  );
};

export default InputAtom;
