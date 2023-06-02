import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonStyled, SectionsTile, Tilediv } from "../styles/styles";
import { decrement, increment } from "./ReduxSlice";
import { incrementThunkFn } from "./ReduxThunk";

const ReduxComp = () => {
  const count = useSelector((state: any) => state.counter.count);
  const countThunk = useSelector((state: any) => state.counterThunk.countThunk);
  // const countThunk = useSelector((state: any) => state.counterThunk.countThunk);
  const dispatch = useDispatch<any>();
  return (
    <SectionsTile>
      <Tilediv>Redux</Tilediv>
      <ButtonStyled onClick={() => dispatch(increment())}>
        Increment
      </ButtonStyled>
      <div>{count} </div>
      <ButtonStyled onClick={() => dispatch(decrement())}>
        Decrement
      </ButtonStyled>
      <ButtonStyled onClick={() => dispatch(incrementThunkFn())}>
        Increment with thunk
      </ButtonStyled>
      <div>{countThunk}</div>
    </SectionsTile>
  );
};

export default ReduxComp;
