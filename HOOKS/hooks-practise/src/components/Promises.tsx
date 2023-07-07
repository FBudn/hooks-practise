/* eslint-disable prefer-promise-reject-errors */
import React, { useState, useReducer } from "react";
import axios from "axios";
import { TextInfo, Tilediv } from "../styles/styles";
import ButtonAtom from "./Atoms/ButtonAtom/ButtonAtom";

const Promises = () => {
  const ACTIONS = {
    GET_RACE: "get_RACE",
    GET_ALL: "get_ALL",
    GET_ALL_SETTLED: "get_ALL_SETTLED",
    GET_ANY: "get_ANY",
  };

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case ACTIONS.GET_RACE:
        return { name: state.name };
      case ACTIONS.GET_ALL:
        return { name: state.name };
      case ACTIONS.GET_ALL_SETTLED:
        return { name: state.name };
      case ACTIONS.GET_ANY:
        return { name: state.name };
      default:
        return state;
    }
  };

  const [raceState, dispatch] = useReducer(reducer, {
    name: `button not clicked`,
  });
  const pokemonRace = (pokemon: any) => {
    dispatch({ type: ACTIONS.GET_RACE, payload: pokemon });
  };

  const promise1 = async () => {
    try {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=1`)
        .then((response) => {
          pokemonRace(response.data.results[0].name);
        });
    } catch (error) {
      pokemonRace(error);
      // console.log(error)
    }
  };
  const promise2 = async () => {
    try {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=1`)
        .then((response) => {
          pokemonRace(response.data.results[0].name);
        });
    } catch (error) {
      pokemonRace(error);
      // console.log(error)
    }
  };
  const promise3 = async () => {
    const getMe = axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=1`)
      .then((response) => {
        pokemonRace(response.data.results[0].name);
        console.log(response.data.results[0].name);
      });
    await pokemonRace(getMe);
  };

  //    pokemonRace(response.data.results[0].name);
  /* const test = axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=1`)
    .then((response) => {
      console.log(response.data.results[0].name);
    }); */
  // console.log(test);
  /* const promise2 = new Promise((resolve, reject) => {
    const x = 7;
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
  }); */

  // race
  // const [race, setRace] = useState(``);

  const promiseRace = async () => {
    await Promise.race([promise1, promise2, promise3])
      .then((response: any) => {
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
      <TextInfo>Win the race: {raceState.name}</TextInfo>
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
