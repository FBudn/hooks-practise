/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React from "react";
import { TextInfo, Tilediv } from "../styles/styles";

const Recursion = () => {
  // spacja
  const recursionFn: any = (arrayBasic: any) => {
    // const arrayBasic = [1, 2, 3, 4, 5, 6];
    const index = 0;
    // const sum = arrayBasic.reduce((total, accumulator) => total + accumulator);
    if (arrayBasic[index] === undefined) {
      return 0;
    }
    return recursionFn(arrayBasic[index] + arrayBasic[index - 1]);
  };
  return (
    <>
      <Tilediv>Rcursion component and recursion function </Tilediv>
      <Tilediv>Recursion component: </Tilediv>
      <TextInfo>
        Write a JavaScript program to compute the sum of an array of integers.
        Example : var array = [1, 2, 3, 4, 5, 6] Expected Output : 21
      </TextInfo>
      <TextInfo>Function code: </TextInfo>
      <div>function code</div>
      <TextInfo>Function result:</TextInfo>
      <TextInfo>{recursionFn([1, 2, 3, 4, 5, 6], 6)}</TextInfo>
    </>
  );
};

export default Recursion;
