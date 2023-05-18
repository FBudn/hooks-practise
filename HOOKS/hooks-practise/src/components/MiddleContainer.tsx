/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useCallback, useState } from "react";
import CallbackChild from "./CallbackChild";

export interface MiddleContainerProps {
  callbackArgument?: string;
}

const MiddleContainer: React.FC<MiddleContainerProps> = () => {
  const [callbackArgument, setCallbackArgument] = useState("Argument 3");
  const handleCallback = (callbackArgument: string | number) => {
    alert(callbackArgument);
  };
  const handlerCallback = useCallback(() => handleCallback, [callbackArgument]);
  return (
    <>
      <div>Middle component re-render trigger text 4</div>
      <CallbackChild onClickButton={handlerCallback} />;
    </>
  );
};

export default MiddleContainer;
