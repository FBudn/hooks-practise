/* eslint-disable import/no-cycle */
/* eslint-disable import/no-named-as-default */
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Input from "./components/Input";
import InputRef from "./components/InputRef";
import { MainAppContainer, InputInfo } from "./styles/styles";
import Button from "./components/Button";
import ContextConsumer from "./components/ContextConsumer";
import MiddleContainer from "./components/MiddleContainer";
import ReactMemo from "./components/ReactMemo";
import TransitionHeavy from "./components/TransitionHeavy";
import ReducerComp from "./components/ReducerComp";
import FiringLazyComp from "./components/FiringLazyComp";

type ColorContextType = string | undefined | null;
export const ColorContext = React.createContext<ColorContextType>("green");

const App: React.FC = () => {
  const [text, setText] = useState("useState: aktualnie pusty input");

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
        <InputRef ref={ref} id="InputRef" />
        <Input handleInputValue={handleInputValue} id="Input" />
        <InputInfo>
          <div>Showing state, that is value from input above: </div>
          <div> {text} </div>
        </InputInfo>
        <Button> OnClick I am alerting my id </Button>
        <Button> OnClick I am alerting my id </Button>
        <Button> OnClick I am alerting my id </Button>
        <ContextConsumer />
        <MiddleContainer number1={1} number2={2} />
        <ReactMemo />
        <TransitionHeavy />
        <ReducerComp />
        <FiringLazyComp />
      </MainAppContainer>
    </ColorContext.Provider>
  );
};

export default App;
