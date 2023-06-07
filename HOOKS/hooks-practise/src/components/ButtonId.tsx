/* eslint-disable import/no-cycle */
import React, { useContext, useId } from "react";
import { ColorContext } from "../App";
import { ButtonStyled } from "../styles/styles";

export interface ButtonIdProps {
  children: any;
}

const ButtonId: React.FC<ButtonIdProps> = ({ children }) => {
  // useContext tu jest dodatkowo
  const color = useContext<any>(ColorContext);

  const onButtonClick = (event: any) => {
    alert(event.target.id);
  };
  // chodzi o użycie useId tu
  const ButtonIdHook = useId();

  return (
    <ButtonStyled
      id={ButtonIdHook}
      type="button"
      onClick={onButtonClick}
      style={{ color }}
    >
      {children}
    </ButtonStyled>
  );
};

export default ButtonId;
