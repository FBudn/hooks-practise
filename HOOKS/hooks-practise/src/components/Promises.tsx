/* eslint-disable prefer-promise-reject-errors */
import React, { useState } from "react";
import axios from "axios";
import { TextInfo, Tilediv } from "../styles/styles";
import ButtonAtom from "./Atoms/ButtonAtom/ButtonAtom";

const Promises = () => {
  const promise1 = async () => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1`);
    return result.data.results[0].name;
  };

  const promise2 = async () => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=2`);
    return result.data.results[1].name;
  };
  const promise3 = new Promise((resolve, reject) => {
    const x = 6;
    if (x > 4) {
      const xx = async () => {
        const result = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=3`,
        );
        return result.data.results[2].name;
      };
      resolve(xx());
    } else reject(`promise3 error`);
  });

  const promiseRace = () => {
    Promise.race([promise1(), promise2(), promise3])
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // any
  const [any, setAny] = useState(``);

  const promiseAny = async () => {
    try {
      await Promise.any([promise1(), promise2(), promise3]).then(
        (result: any) => {
          setAny(result);
        },
      );
    } catch (error: any) {
      setAny(error);
    }
  };
  // all
  const [all, setAll] = useState(``);

  const promiseAll = async () => {
    try {
      await Promise.all([promise1(), promise2(), promise3]).then(
        (result: any) => {
          setAll(result);
        },
      );
    } catch (error: any) {
      setAll(error);
    }
  };

  // allSettled
  const [allSettled, setAllSettled] = useState(``);

  const promiseAllSettled = async () => {
    try {
      await Promise.allSettled([promise1(), promise2(), promise3]).then(
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
  const tabPromises = [promise1(), promise2(), promise3];
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
      <TextInfo>Win the race: </TextInfo>
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
