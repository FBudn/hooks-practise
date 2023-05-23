import React, { useEffect } from "react";
import {
  ButtonStyled,
  ContextAndMemoContainer,
  TextInfo,
} from "../styles/styles";

export interface CallbackChildProps {
  onClickButton: any;
}

const CallbackChild: React.FC<CallbackChildProps> = ({ onClickButton }) => {
  useEffect(() => {
    console.log("CallbackChildComponent");
  }, []);

  return (
    <ContextAndMemoContainer>
      <TextInfo>I am showing useCallback in action</TextInfo>
      <ButtonStyled type="button" onClick={onClickButton}>
        Show callback argument
      </ButtonStyled>
    </ContextAndMemoContainer>
  );
};

export default CallbackChild;
