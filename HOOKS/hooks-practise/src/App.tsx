import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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

  const InputId = useId();

  return (
    <MainAppContainer>
      <InputRef ref={ref} id={InputId} />
      <Input handleInputValue={handleInputValue} id={InputId} />
      <InputInfo>
        <div>Pokazuję state, czyli wartość z powyższego inputa: </div>
        <div> {text} </div>
      </InputInfo>
      <div id={InputId}>ja to </div>
      <div id={InputId}>ja to {InputId}</div>
      <Button />
      <Button />
      <Button />
    </MainAppContainer>
  );
};

export default App;
