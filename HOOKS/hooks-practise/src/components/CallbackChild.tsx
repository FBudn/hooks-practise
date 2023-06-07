import React, { useEffect } from "react";
import {
  ButtonStyled,
  CallbackAndMemoContainer,
  TextInfo,
} from "../styles/styles";

export interface CallbackChildProps {
  onClickButton: any;
}

const CallbackChild: React.FC<CallbackChildProps> = ({ onClickButton }) => {
  // useEffect do podglądania kiedy się renderuje ten komponent - wpięty jest do CallbackAndMemo komponentu
  useEffect(() => {
    console.log("CallbackChildComponent");
  }, []);

  return (
    <CallbackAndMemoContainer>
      <TextInfo>I am showing useCallback in action</TextInfo>
      <ButtonStyled type="button" onClick={onClickButton}>
        Show callback argument
      </ButtonStyled>
    </CallbackAndMemoContainer>
  );
};

export default CallbackChild;
