import React, { useEffect } from "react";

export interface CallbackChildProps {
  onClickButton: any;
}

const CallbackChild: React.FC<CallbackChildProps> = ({ onClickButton }) => {
  useEffect(() => {
    console.log("CallbackChildComponent");
  }, []);

  return (
    <div>
      I am showing useCallback in action
      <button type="button" onClick={onClickButton}>
        Show callback argument
      </button>
    </div>
  );
};

export default CallbackChild;
