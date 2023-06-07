import React, { useEffect, useState } from "react";
import ReactMemoChild from "./ReactMemoChild";
import { ButtonStyled, TextInfo, Tilediv } from "../styles/styles";
import Informator from "./Informator";

const ReactMemo = () => {
  // counter do zmieniania stanu tego komponentu i sprawdzaniu czy triggeruje ReactMemoChild do renderu
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  // pewnie chciałem się upewnić, że ten komponent się renderuje
  useEffect(() => {
    console.log(`ReactMemo parent rendering`);
  });
  return (
    // propsy są w ReactMemoChild żeby sprawdzać czy zmiana triggeruje render
    <>
      <Tilediv> I am ReactMemo parent </Tilediv>
      <ButtonStyled type="button" onClick={handleCount}>
        Change my state (ReactMemo Parent)
      </ButtonStyled>
      <TextInfo>{count}</TextInfo>
      <ReactMemoChild text="String-prop" number={123} boolean />
      <Informator />
    </>
  );
};
export default ReactMemo;
