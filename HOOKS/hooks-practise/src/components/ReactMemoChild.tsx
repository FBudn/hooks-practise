import React, { useEffect, memo } from "react";

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
    <>
      <div> I am showing props from my React.Memo parent </div>
      <div>
        {text}, {number}, {boolean.toString()}
      </div>
    </>
  );
};

export default memo(ReactMemoChild);
