/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useCallback, useMemo, useState } from "react";
import CallbackChild from "./CallbackChild";
import {
  ButtonStyled,
  ContextAndMemoContainer,
  TextInfo,
  Tilediv,
} from "../styles/styles";
import Informator from "./Informator";

export interface ContextAndMemoProps {
  noNeed?: string;
  number1?: number;
  number2?: number;
}

const ContextAndMemo: React.FC<ContextAndMemoProps> = ({
  number1,
  number2,
  noNeed,
}) => {
  const [callbackArgument, setCallbackArgument] = useState("Argument 1");
  const handleCallback = () => {
    alert(callbackArgument);
  };
  const handlerCallback = useCallback(handleCallback, [callbackArgument]);

  const [useMemoState, setUseMemoState] = useState(9);

  const sqrtFn = (num: any) => {
    console.log(`useMemo running`);
    const sum = Math.sqrt(num);
    return sum;
  };
  const handlerMemo = useMemo(() => {
    return sqrtFn(useMemoState);
  }, [useMemoState]);

  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <ContextAndMemoContainer>
      <Tilediv>useCallback and useMemo </Tilediv>
      <CallbackChild onClickButton={handlerCallback} />
      <ButtonStyled type="button" onClick={handleCount}>
        useMemo Tester: {count}
      </ButtonStyled>
      <TextInfo>{handlerMemo}</TextInfo>
      <Informator />
    </ContextAndMemoContainer>
  );
};

export default ContextAndMemo;
