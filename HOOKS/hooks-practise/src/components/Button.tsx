import React, { useId } from "react";

const Button: React.FC = () => {
  const onButtonClick = (event: any) => {
    alert(event.target.id);
  };

  const ButtonId = useId();
  return (
    <button id={ButtonId} type="button" onClick={onButtonClick}>
      Click me
    </button>
  );
};

export default Button;
