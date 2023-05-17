import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Input from "./components/Input";
import InputRef from "./components/InputRef";
import { MainAppContainer, InputInfo } from "./styles/styles";
import Button from "./components/Button";

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
    </MainAppContainer>
  );
};

export default App;
