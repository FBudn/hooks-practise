/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useReducer } from "react";
import { ButtonStyled, TextInfo, Tilediv } from "../styles/styles";
import Informator from "./Informator";

const ReducerComp = () => {
  // akcje zadeklarowane w wygodniejszy sposób, potem autouzupełnianie działa
  const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
  };

  // prosty reducer klasycznie do countera
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  // główna konstrukcja useReducera
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // owinięcie w funkcję dispatcha
  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    // counter do stestowania działania
    <>
      <Tilediv>useReducer</Tilediv>
      <ButtonStyled type="button" onClick={increment}>
        INCREMENT
      </ButtonStyled>
      <TextInfo> {state.count} </TextInfo>
      <ButtonStyled type="button" onClick={decrement}>
        DECREMENT
      </ButtonStyled>
      <Informator />
    </>
  );
};

export default ReducerComp;
