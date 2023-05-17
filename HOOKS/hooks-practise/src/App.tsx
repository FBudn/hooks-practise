import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Input from "./components/Input";
import InputRef from "./components/InputRef";
import { MainAppContainer, InputInfo } from "./styles/styles";

const App: React.FC = () => {
  const [text, setText] = useState("useState: aktualnie pusty input");

  const handleInputValue = (e: any) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("Hej");
    return () => {
      console.log("Pa pa2");
    };
  }, []);

  const ref = useRef<any>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);

  useLayoutEffect(() => {
    console.log(`test`);
  }, []);

  return (
    <MainAppContainer>
      <InputRef ref={ref} />
      <Input handleInputValue={handleInputValue} />
      <InputInfo>
        <div>Pokazuję state, czyli wartość z powyższego inputa: </div>
        <div> {text} </div>
      </InputInfo>
    </MainAppContainer>
  );
};

export default App;
