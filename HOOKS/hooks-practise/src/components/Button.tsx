import React, { useId } from "react";

export interface ButtonProps {
  children: any;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  const onButtonClick = (event: any) => {
    alert(event.target.id);
  };

  const ButtonId = useId();
  return (
    <button id={ButtonId} type="button" onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Button;
