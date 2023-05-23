import React, { useEffect, useState } from "react";
import ReactMemoChild from "./ReactMemoChild";
import { ButtonStyled, TextInfo, Tilediv } from "../styles/styles";

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`ReactMemo parent rendering`);
  });
  return (
    <>
      <Tilediv> I am ReactMemo parent </Tilediv>
      <ButtonStyled type="button" onClick={handleCount}>
        Change my state (ReactMemo Parent)
      </ButtonStyled>
      <TextInfo>{count}</TextInfo>
      <ReactMemoChild text="String-prop" number={123} boolean />
    </>
  );
};
export default ReactMemo;
