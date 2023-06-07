import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Input, TiledivLong } from "../styles/styles";
import Informator from "./Informator";

export interface InputRefProps {
  id: any;
}
export type InputReference = any;

const InputRef = forwardRef<InputReference, InputRefProps>(
  ({ id }: InputRefProps, ref) => {
    // tu po prostu input oparty na referencjach z useEffectem w App.tsx
    const LocalInputRef = useRef<any>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          focus() {
            LocalInputRef?.current?.focus();
          },
        };
      },
      [],
    );

    return (
      <>
        <TiledivLong>
          useRef, useImperativeHandle, forwardRef and useEffect
        </TiledivLong>
        <Input
          id={id}
          ref={LocalInputRef}
          placeholder="Look at my focus after renders"
        />
        <Informator />
      </>
    );
  },
);

export default InputRef;
