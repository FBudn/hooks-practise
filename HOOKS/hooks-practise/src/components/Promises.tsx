/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable prefer-template */
import React, { useState } from "react";
import { TextInfo, Tilediv } from "../styles/styles";

const Promises = () => {
  const promise1 = new Promise((resolve, reject) => {
    const x = 5;
    if (x > 4) {
      resolve(`Succes1`);
    } else {
      reject(new Error(`Error promise1`));
    }
  });

  const promise2 = new Promise((resolve, reject) => {
    const x = 3;
    if (x > 4) {
      resolve(`Succes1`);
    } else {
      reject(new Error(`Error promise2`));
    }
  });

  const promise3 = new Promise((resolve, reject) => {
    const x = 10;
    if (x > 4) {
      resolve(`Succes1`);
    } else {
      reject(new Error(`Error promise3`));
    }
  });

  // race
  const [race, setRace] = useState(``);

  Promise.race([promise1, promise2, promise3])
    .then((result: any) => {
      return setRace(result);
    })
    .catch((message) => {
      return setRace(message);
    });

  return (
    <>
      <Tilediv> Promises </Tilediv>
      <TextInfo>Win the race: {race}</TextInfo>
      <TextInfo>All Pokemons: </TextInfo>
      <TextInfo>All settled Pokemons: </TextInfo>
      <TextInfo>Any Pokemon: </TextInfo>
      <TextInfo>Pokemons in loop: </TextInfo>
      <TextInfo>Fetched Pokemons: </TextInfo>
    </>
  );
};

export default Promises;
