/* eslint-disable prefer-promise-reject-errors */
import React, { useState } from "react";
import { TextInfo, Tilediv } from "../styles/styles";
import ButtonAtom from "./Atoms/ButtonAtom/ButtonAtom";

const Promises = () => {
  const promise1 = new Promise((resolve, reject) => {
    const x = 5;
    if (x > 4) {
      resolve(`Succes1`);
    } else {
      reject(`Error promise1`);
    }
  });

  const promise2 = new Promise((resolve, reject) => {
    const x = 3;
    if (x > 4) {
      resolve(`Succes2`);
    } else {
      reject(`Error promise2`);
    }
  });

  const promise3 = new Promise((resolve, reject) => {
    const x = 10;
    if (x > 4) {
      resolve(`Succes3`);
    } else {
      reject(`Error promise3`);
    }
  });

  // race
  const [race, setRace] = useState(``);

  const promiseRace = async () => {
    try {
      const response: any = await Promise.race([promise1, promise2, promise3]);
      setRace(response);
    } catch (error: any) {
      console.log(error);
    }
  };
  // any
  const [any, setAny] = useState(``);

  const promiseAny = async () => {
    try {
      await Promise.any([promise1, promise2, promise3]).then((result: any) => {
        setAny(result);
      });
    } catch (error: any) {
      setAny(error);
    }
  };
  // all
  const [all, setAll] = useState(``);

  const promiseAll = async () => {
    try {
      await Promise.all([promise1, promise2, promise3]).then((result: any) => {
        setAll(result);
      });
    } catch (error: any) {
      setAll(error);
    }
  };

  // allSettled
  const [allSettled, setAllSettled] = useState(``);

  const promiseAllSettled = async () => {
    try {
      await Promise.allSettled([promise1, promise2, promise3]).then(
        (result: any) => {
          const showResult = result
            .map((value: object) => Object.entries(value))
            .flat()
            .toString();

          setAllSettled(showResult);
        },
      );
    } catch (error: any) {
      setAllSettled(error);
    }
  };

  // for Loop
  // const [forLoop, setForLoop] = useState(``);
  /*
  const tabPromises = [promise1, promise2, promise3];
  const resolveGetter = (promise: any) => {
    promise
      .then((resolve: any) => {
        console.log(resolve);
      })
      .catch((err: any) => console.log(err));
  };
  const asyncFor = async () => {
    console.log(`start`);
    for (let i = 0; i < tabPromises.length; i++) {
      await resolveGetter(tabPromises[i]);
    }
    console.log(`end`);
  };
  // asyncFor(); */

  return (
    <>
      <Tilediv> Promises </Tilediv>
      <ButtonAtom testId="test-button-id" onButtonClick={promiseRace}>
        Start race
      </ButtonAtom>
      <TextInfo>Win the race: {race}</TextInfo>
      <ButtonAtom testId="test-button-id" onButtonClick={promiseAll}>
        Show all
      </ButtonAtom>
      <TextInfo>All Pokemons: {all}</TextInfo>
      <ButtonAtom testId="test-button-id" onButtonClick={promiseAllSettled}>
        Show all settled
      </ButtonAtom>
      <TextInfo>All settled Pokemons: {allSettled}</TextInfo>
      <ButtonAtom testId="test-button-id" onButtonClick={promiseAny}>
        Show any
      </ButtonAtom>
      <TextInfo>Any Pokemon: {any}</TextInfo>
      <ButtonAtom
        testId="test-button-id"
        onButtonClick={() => {
          console.log(`klik`);
        }}
      >
        Start loop
      </ButtonAtom>
      <TextInfo>Pokemons in loop:</TextInfo>
      <TextInfo>Fetched Pokemons: </TextInfo>
    </>
  );
};

export default Promises;
