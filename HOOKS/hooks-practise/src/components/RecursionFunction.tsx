/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React from "react";
import { TextInfo, Tilediv } from "../styles/styles";

const RecursionFunction = () => {
  // spacja
  const recursionFn: any = (arrayBasic: any) => {
    // przypadek bazowy: gdy mam jeden element w tablicy to go zwracam
    if (arrayBasic.length === 1) {
      return arrayBasic[0];
    }
    // .pop() usuwa i zwraca ostatni element z tablicy więc gdy ją dostaję z argumenty funkcji
    // i tablica ma więcej niż 1 element, jej ostatni element jest usuwany i zwrócony
    // czyli najpierw 6 + kolejne wywołanie funkcji, które da (5 + kolejne wywołanie funkcji) itd.
    return arrayBasic.pop() + recursionFn(arrayBasic);
  };

  return (
    <>
      <Tilediv>Recursion function </Tilediv>
      <TextInfo>
        Write a JavaScript program to compute the sum of an array of integers.
        Example : var array = [1, 2, 3, 4, 5, 6] Expected Output : 21
      </TextInfo>
      <div>function code: </div>
      <TextInfo>
        `const recursionFn: any = (arrayBasic: any) ={">"} {"{"} <br /> if
        (arrayBasic.length === 1) return arrayBasic[0]; <br /> return
        arrayBasic.pop() + recursionFn(arrayBasic); {"}"}`
      </TextInfo>
      <TextInfo>Function result:</TextInfo>
      <TextInfo>{recursionFn([1, 2, 3, 4, 5, 6], 6)}</TextInfo>
    </>
  );
};

export default RecursionFunction;
