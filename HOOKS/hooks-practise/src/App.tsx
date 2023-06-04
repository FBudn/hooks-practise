/* eslint-disable import/no-cycle */
/* eslint-disable import/no-named-as-default */
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import InputState from "./components/InputState";
import InputRef from "./components/InputRef";
import {
  MainAppContainer,
  SectionsTile,
  RowContaier,
  Tilediv,
  SectionsTileLong,
} from "./styles/styles";
import ButtonId from "./components/ButtonId";
import ContextConsumer from "./components/ContextConsumer";
import ContextAndMemo from "./components/ContextAndMemo";
import ReactMemo from "./components/ReactMemo";
import TransitionHeavy from "./components/TransitionHeavy";
import ReducerComp from "./components/ReducerComp";
import FiringLazyComp from "./components/FiringLazyComp";
import Query from "./components/Query";
import Informator from "./components/Informator";
import LayoutEffectComp from "./components/LayoutEffectComp";
import ReduxComp from "./components/ReduxComp";

type ColorContextType = string | undefined | null;
export const ColorContext = React.createContext<ColorContextType>("green");

const App: React.FC = () => {
  const [text, setText] = useState("Empty input now");

  const handleInputValue = (e: any) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("Hi I am useEffect");
    return () => {
      console.log("I am clean-up function for useEffect");
    };
  }, []);

  const ref = useRef<any>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);

  useLayoutEffect(() => {
    console.log(`I am useLayoutEffect`);
  }, []);

  return (
    <ColorContext.Provider value="purple">
      <MainAppContainer>
        <SectionsTileLong>
          <LayoutEffectComp />
        </SectionsTileLong>
        <RowContaier>
          <SectionsTile>
            <InputRef ref={ref} id="InputRef" />
          </SectionsTile>
          <SectionsTile>
            <InputState
              handleInputValue={handleInputValue}
              id="Input"
              text={text}
            />
          </SectionsTile>
          <SectionsTile>
            <Tilediv>useId</Tilediv>
            <ButtonId> OnClick I am alerting my id </ButtonId>
            <ButtonId> OnClick I am alerting my id </ButtonId>
            <ButtonId> OnClick I am alerting my id </ButtonId>
            <Informator />
          </SectionsTile>
        </RowContaier>

        <RowContaier>
          <SectionsTile>
            <ContextConsumer />
          </SectionsTile>
          <SectionsTile>
            <ContextAndMemo number1={1} number2={2} />
          </SectionsTile>
          <SectionsTile>
            <ReactMemo />
          </SectionsTile>
        </RowContaier>

        <RowContaier>
          <SectionsTile>
            <TransitionHeavy />
          </SectionsTile>
          <SectionsTile>
            <ReducerComp />
          </SectionsTile>
          <SectionsTile>
            <FiringLazyComp />
          </SectionsTile>
        </RowContaier>
        <SectionsTileLong>
          <Query />
        </SectionsTileLong>
        <SectionsTileLong>
          <ReduxComp />
        </SectionsTileLong>
      </MainAppContainer>
    </ColorContext.Provider>
  );
};

export default App;
