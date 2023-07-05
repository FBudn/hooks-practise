/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable prefer-template */
import React, { useState } from "react";
import { TextInfo, Tilediv } from "../styles/styles";
import ButtonAtom from "./Atoms/ButtonAtom/ButtonAtom";

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
      resolve(`Succes3`);
    } else {
      reject(new Error(`Error promise3`));
    }
  });

  // race
  const [race, setRace] = useState(``);

  const promiseRace = async () => {
    console.log(`start race`);
    Promise.race([promise1, promise2, promise3])
      .then((result: any) => {
        console.log(`race succes`);
        setRace(result);
      })
      .catch((message) => {
        console.log(`race failed`);
        return setRace(message);
      });
  };
  // any
  const [any, setAny] = useState(``);

  const promiseAny = async () => {
    Promise.any([promise1, promise2, promise3])
      .then((result: any) => {
        return setAny(result);
      })
      .catch((message) => {
        return setAny(message);
      });
  };
  // all
  const [all, setAll] = useState(``);

  const promiseAll = async () => {
    Promise.all([promise1, promise2, promise3])
      .then((result: any) => {
        return setAll(result);
      })
      .catch((error) => {
        const { message } = error;
        return setAll(message);
      });
  };

  // allSettled
  const [allSettled, setAllSettled] = useState(``);

  const promiseAllSettled = async () => {
    Promise.allSettled([promise1, promise2, promise3])
      .then((result: any) => {
        const showResult = result
          .map((value: object) => Object.entries(value))
          .flat()
          .toString();

        return setAllSettled(showResult);
      })
      .catch((error) => {
        const { message } = error;
        return setAllSettled(message);
      });
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
        Show any
      </ButtonAtom>
      <TextInfo>All Pokemons: {all}</TextInfo>
      <ButtonAtom testId="test-button-id" onButtonClick={promiseAllSettled}>
        Show any
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
