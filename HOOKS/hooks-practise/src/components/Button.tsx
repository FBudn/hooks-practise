/* eslint-disable import/no-cycle */
import React, { useContext, useId } from "react";
import { ColorContext } from "../App";

export interface ButtonProps {
  children: any;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  const color = useContext<any>(ColorContext);
  const onButtonClick = (event: any) => {
    alert(event.target.id);
  };

  const ButtonId = useId();
  return (
    <button
      id={ButtonId}
      type="button"
      onClick={onButtonClick}
      style={{ color }}
    >
      {children}
    </button>
  );
};

export default Button;
