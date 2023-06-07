/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useCallback, useMemo, useState } from "react";
import CallbackChild from "./CallbackChild";
import {
  ButtonStyled,
  CallbackAndMemoContainer,
  TextInfo,
  Tilediv,
} from "../styles/styles";
import Informator from "./Informator";

export interface CallbackAndMemoProps {
  noNeed?: string;
  number1?: number;
  number2?: number;
}
// propsy zbędne
const CallbackAndMemo: React.FC<CallbackAndMemoProps> = ({
  number1,
  number2,
  noNeed,
}) => {
  // tu argument do zmieniania ale widzę, że muszę poprawić i dodać zmianę inputem np.
  const [callbackArgument, setCallbackArgument] = useState("Argument 1");
  const alertCallback = () => {
    alert(callbackArgument);
  };
  const handlerCallback = useCallback(alertCallback, [callbackArgument]);

  // tu tak samo jak wyżej
  const [useMemoState, setUseMemoState] = useState(9);

  const sqrtFn = (num: any) => {
    console.log(`useMemo running`);
    const sum = Math.sqrt(num);
    return sum;
  };
  const handlerMemo = useMemo(() => {
    return sqrtFn(useMemoState);
  }, [useMemoState]);

  // useState do zmieniania state komponentu i sprawdzania czy się triggeruje useCallback albo useMemo
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <CallbackAndMemoContainer>
      <Tilediv>useCallback and useMemo </Tilediv>
      <CallbackChild onClickButton={handlerCallback} />
      <ButtonStyled type="button" onClick={handleCount}>
        useMemo Tester: {count}
      </ButtonStyled>
      <TextInfo>{handlerMemo}</TextInfo>
      <Informator />
    </CallbackAndMemoContainer>
  );
};

export default CallbackAndMemo;
