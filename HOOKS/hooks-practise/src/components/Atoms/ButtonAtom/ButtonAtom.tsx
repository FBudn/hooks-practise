/* eslint-disable import/no-cycle */
import React from "react";
import { ButtonStyled } from "./ButtonAtom.style";

export interface ButtonAtomProps {
  children: any;
  onButtonClick: any;
  testId: string;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({
  children,
  onButtonClick,
  testId,
}) => {
  return (
    <ButtonStyled data-testid={testId} type="button" onClick={onButtonClick}>
      {children}
    </ButtonStyled>
  );
};

export default ButtonAtom;
