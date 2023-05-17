import React, { forwardRef, useImperativeHandle, useRef } from "react";

const InputRef = forwardRef(function InputRef(props, ref) {
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
      {...props}
      ref={LocalInputRef}
      placeholder="Mam ustawiony focus po renderach(useRef, useImperativeHandle, forwardRef)"
    />
  );
});

export default InputRef;
