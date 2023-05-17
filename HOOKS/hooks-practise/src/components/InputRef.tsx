import React, { forwardRef, useImperativeHandle, useRef } from "react";

export interface InputRefProps {
  id: any;
}
export type InputReference = any;

const InputRef = forwardRef<InputReference, InputRefProps>(
  ({ id }: InputRefProps, ref) => {
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
      <input
        id={id}
        ref={LocalInputRef}
        placeholder="Mam ustawiony focus po renderach(useRef, useImperativeHandle, forwardRef)"
      />
    );
  },
);

export default InputRef;
