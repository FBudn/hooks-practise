import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonStyled, SectionsTile, Tilediv } from "../styles/styles";
import { decrement, increment } from "./ReduxSlice";

const ReduxComp = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();
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
    </SectionsTile>
  );
};

export default ReduxComp;
