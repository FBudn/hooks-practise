import React, { useEffect } from "react";
import {
  ButtonStyled,
  CallbackAndMemoContainer,
  TextInfo,
} from "../styles/styles";

export interface CallbackChildProps {
  onClickButton: any;
  children: any;
}

const CallbackChild: React.FC<CallbackChildProps> = ({
  onClickButton,
  children,
}) => {
  // useEffect do podglądania kiedy się renderuje ten komponent - wpięty jest do CallbackAndMemo komponentu
  useEffect(() => {
    console.log("CallbackChild useEffect");
  }, [onClickButton]);

  return (
    <CallbackAndMemoContainer>
      <TextInfo> {children} </TextInfo>
      <ButtonStyled type="button" onClick={onClickButton}>
        I call useCallback function
      </ButtonStyled>
    </CallbackAndMemoContainer>
  );
};

export default CallbackChild;
