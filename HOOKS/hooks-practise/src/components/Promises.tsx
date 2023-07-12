/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-promise-reject-errors */
import React, { useState } from "react";
import axios from "axios";
import { TextInfo, Tilediv } from "../styles/styles";
import ButtonAtom from "./Atoms/ButtonAtom/ButtonAtom";

const Promises = () => {
  const promiseFunction1 = async () => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1`);
    return result.data.results[0].name;
  };

  const promiseFunction2 = async () => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=2`);
    return result.data.results[1].name;
  };
  const promise3 = new Promise((resolve, reject) => {
    try {
      const getPokemon = async () => {
        const result = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=3`,
        );
        return result.data.results[2].name;
      };
      resolve(getPokemon());
    } catch {
      reject(`promise3 error`);
    }
  });

  // race
  const [race, setRace] = useState(``);
  const promiseRace = () => {
    Promise.race([promiseFunction1(), promiseFunction2(), promise3])
      .then((response) => {
        setRace(response);
      })
      .catch((error) => {
        setRace(error);
      });
  };

  // any
  const [any, setAny] = useState(``);

  const promiseAny = async () => {
    try {
      await Promise.any([
        promiseFunction1(),
        promiseFunction2(),
        promise3,
      ]).then((result: any) => {
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
      await Promise.all([
        promiseFunction1(),
        promiseFunction2(),
        promise3,
      ]).then((result: any) => {
        setAll(result.join(` | `));
      });
    } catch (error: any) {
      setAll(error);
    }
  };

  // allSettled
  const [allSettled, setAllSettled] = useState(``);

  const promiseAllSettled = async () => {
    try {
      await Promise.allSettled([
        promiseFunction1(),
        promiseFunction2(),
        promise3,
      ]).then((result: any) => {
        const test = result.map((el: any) =>
          Object.entries(el).flat().join(" "),
        );
        setAllSettled(test.join(" | "));
      });
    } catch (error: any) {
      setAllSettled(error);
    }
  };

  // async for loop

  const tabPromises = [promiseFunction1(), promiseFunction2(), promise3];
  const resolveGetter = (promise: any) => {
    promise
      .then((resolve: any) => {
        console.log(resolve);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  const asyncFor = async () => {
    console.log(`start`);
    for (let i = 0; i < tabPromises.length; i++) {
      await resolveGetter(tabPromises[i]);
    }
    console.log(`end`);
  };

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
      <ButtonAtom testId="test-button-id" onButtonClick={asyncFor}>
        Start loop
      </ButtonAtom>

      <TextInfo>Pokemons in loop:</TextInfo>
      <TextInfo>Fetched Pokemons: </TextInfo>
    </>
  );
};

export default Promises;
