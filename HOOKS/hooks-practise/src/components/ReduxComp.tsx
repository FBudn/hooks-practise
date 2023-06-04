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
import { incrementSaga } from "./ReduxSaga";
import { incrementThunkFn } from "./ReduxThunk";
import Informator from "./Informator";

const ReduxComp = () => {
  const count = useSelector((state: any) => state.counter.count);
  const countThunk = useSelector((state: any) => state.counterThunk.countThunk);
  const countSaga = useSelector((state: any) => state.counterSaga.countSaga);

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
            Increment with thunk (2 sec delay)
          </ButtonStyled>
          <div>{countThunk}</div>
        </InsideSectionDivColumn>
        <InsideSectionDivColumn>
          <ButtonStyled onClick={() => dispatch(incrementSaga())}>
            Increment with saga (2 sec delay)
          </ButtonStyled>
          <h6 style={{ marginTop: -5 }}>& takeEvery</h6>
          <div>{countSaga}</div>
        </InsideSectionDivColumn>
      </RowInsideSectionDiv>
      <Informator />
    </MainRowInsideSectionDiv>
  );
};

export default ReduxComp;
