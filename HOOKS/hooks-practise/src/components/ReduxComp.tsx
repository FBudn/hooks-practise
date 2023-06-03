import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonStyled,
  InsideSectionDivColumn,
  MainRowInsideSectionDiv,
  RowInsideSectionDiv,
  Tilediv,
} from "../styles/styles";
import { decrement, increment } from "./ReduxSlice";
import { incrementThunkFn } from "./ReduxThunk";

const ReduxComp = () => {
  const count = useSelector((state: any) => state.counter.count);
  const countThunk = useSelector((state: any) => state.counterThunk.countThunk);
  // const countThunk = useSelector((state: any) => state.counterThunk.countThunk);
  const dispatch = useDispatch<any>();
  return (
    <MainRowInsideSectionDiv>
      <Tilediv>Redux + Thunk + Saga</Tilediv>
      <RowInsideSectionDiv>
        <InsideSectionDivColumn>
          <ButtonStyled onClick={() => dispatch(increment())}>
            Increment
          </ButtonStyled>
          <div>{count} </div>
          <ButtonStyled onClick={() => dispatch(decrement())}>
            Decrement
          </ButtonStyled>
        </InsideSectionDivColumn>
        <InsideSectionDivColumn>
          <ButtonStyled onClick={() => dispatch(incrementThunkFn())}>
            Increment with thunk
          </ButtonStyled>
          <div>{countThunk}</div>
        </InsideSectionDivColumn>
      </RowInsideSectionDiv>
      \
    </MainRowInsideSectionDiv>
  );
};

export default ReduxComp;
