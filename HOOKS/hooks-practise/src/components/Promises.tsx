/* eslint-disable prefer-promise-reject-errors */
import React, { useState } from "react";
import axios from "axios";
import { TextInfo, Tilediv } from "../styles/styles";
import ButtonAtom from "./Atoms/ButtonAtom/ButtonAtom";
import { ACTIONS, dispatch } from "./PromisesReducer";

const Promises = () => {
  const pokemonRace = (pokemon: any) => {
    dispatch({ type: ACTIONS.GET_RACE, payload: pokemon });
  };

  const promise1 = new Promise((resolve, reject) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=1`,
      );
      resolve(response.data.results[0].name);
    } catch {
      reject(`Race error`);
    }
  });

  const promise2 = new Promise((resolve, reject) => {
    const x = 3;
    if (x > 4) {
      resolve(`Succes2`);
    } else reject(`Error promise2`);
  });

  const promise3 = new Promise((resolve, reject) => {
    const x = 10;
    if (x > 4) {
      resolve(`Succes3`);
    }

    reject(`Error promise3`);
  });

  // race
  const [race, setRace] = useState(``);

  const promiseRace = async () => {
    await Promise.race([promise1, promise2, promise3])
      .then((response: any) => {
        pokemonRace(response);
      })
      .catch((error) => {
        setRace(error);
      });
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
