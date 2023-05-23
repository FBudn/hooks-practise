import React, { useEffect, memo } from "react";
import { ReactMemoChildStyled, TextInfo } from "../styles/styles";

export interface ReactMemoChildProps {
  text: string;
  number: number;
  boolean: boolean;
}

const ReactMemoChild: React.FC<ReactMemoChildProps> = ({
  text,
  number,
  boolean,
}) => {
  useEffect(() => {
    console.log(`ReactMemoChild: I have just rendered `);
  });
  return (
    <ReactMemoChildStyled>
      <TextInfo> I am showing props from my React.Memo parent: </TextInfo>
      <TextInfo style={{ color: "black", fontStyle: "italic" }}>
        {text}, {number}, {boolean.toString()}
      </TextInfo>
    </ReactMemoChildStyled>
  );
};

export default memo(ReactMemoChild);
