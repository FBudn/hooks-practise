import React, { useEffect, useState } from "react";
import ReactMemoChild from "./ReactMemoChild";

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
      <button type="button" onClick={handleCount}>
        Change my state (ReactMemo Parent)
      </button>
      <div>{count}</div>
      <div> I am ReactMemo parent 2</div>
      <ReactMemoChild text="I am React.Memo child" number={2} boolean />
    </>
  );
};
export default ReactMemo;
