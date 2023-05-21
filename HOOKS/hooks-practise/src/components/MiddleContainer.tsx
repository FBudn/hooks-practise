/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useCallback, useMemo, useState } from "react";
import CallbackChild from "./CallbackChild";

export interface MiddleContainerProps {
  noNeed?: string;
  number1?: number;
  number2?: number;
}

const MiddleContainer: React.FC<MiddleContainerProps> = ({
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
    <>
      <div>Middle component re-render trigger text 1</div>
      <CallbackChild onClickButton={handlerCallback} />
      <button type="button" onClick={handleCount}>
        useMemo Tester: {count}
      </button>
      <div>{handlerMemo}</div>
    </>
  );
};

export default MiddleContainer;
