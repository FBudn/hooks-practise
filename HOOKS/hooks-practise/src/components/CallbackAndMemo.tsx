/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useState } from "react";
import CallbackChild from "./CallbackChild";
import {
  ButtonStyled,
  CallbackAndMemoContainer,
  Input,
  TextInfo,
  Tilediv,
} from "../styles/styles";
import Informator from "./Informator";

const CallbackAndMemo: React.FC = () => {
  // tu argument do zmieniania ale widzę, że muszę poprawić i dodać zmianę inputem np.
  const [callbackArgument, setCallbackArgument] = useState(
    "I am useCallback dependency. Type and inspect.",
  );
  const alertCallback = (arg: any) => {
    alert(arg);
  };
  const handleInputValue = (e: any) => {
    setCallbackArgument(e.target.value);
  };
  const handlerCallback = useCallback(() => {
    alertCallback(callbackArgument);
  }, [callbackArgument]);

  // tu tak samo jak wyżej
  const [useMemoState, setUseMemoState] = useState(9);

  const sqrtFn = (num: any) => {
    console.log(`function from useMemo running`);
    const sum = Math.sqrt(num);
    return sum;
  };
  const memoFunction = useMemo(() => {
    return sqrtFn(useMemoState);
  }, [useMemoState]);

  // useState do zmieniania state komponentu i sprawdzania czy się triggeruje useCallback albo useMemo
  const handleCountMemo = () => {
    setUseMemoState(useMemoState * 3);
  };
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <CallbackAndMemoContainer>
      <Tilediv>useCallback and useMemo </Tilediv>
      <Input value={callbackArgument} onChange={handleInputValue} />
      <CallbackChild onClickButton={handlerCallback}>
        CallbackChild component
      </CallbackChild>
      <ButtonStyled type="button" onClick={handleCount}>
        Inspect: useMemo & useCallback Trigger Test: {count}
      </ButtonStyled>
      <ButtonStyled type="button" onClick={handleCountMemo}>
        Inspect: useMemo Trigger: {useMemoState}
      </ButtonStyled>
      <TextInfo>Result from function inside useMemo: {memoFunction}</TextInfo>
      <Informator />
    </CallbackAndMemoContainer>
  );
};

export default CallbackAndMemo;
