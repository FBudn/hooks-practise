/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useReducer } from "react";
import { ButtonStyled, TextInfo, Tilediv } from "../styles/styles";

const ReducerComp = () => {
  const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
  };

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

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <>
      <Tilediv>useReducer</Tilediv>
      <ButtonStyled type="button" onClick={increment}>
        INCREMENT
      </ButtonStyled>
      <TextInfo> {state.count} </TextInfo>
      <ButtonStyled type="button" onClick={decrement}>
        DECREMENT
      </ButtonStyled>
    </>
  );
};

export default ReducerComp;
