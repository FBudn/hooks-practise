/* eslint-disable react-hooks/rules-of-hooks */
import { useReducer } from "react";

export const ACTIONS = {
  GET_RACE: "get_RACE",
  GET_ALL: "get_ALL",
  GET_ALL_SETTLED: "get_ALL_SETTLED",
  GET_ANY: "get_ANY",
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.GET_RACE:
      return { name: action };
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

export const [raceState, dispatch] = useReducer(reducer, {
  name: `button not clicked`,
});
