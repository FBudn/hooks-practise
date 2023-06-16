/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useState } from "react";
import { TextInfo } from "../styles/styles";

export interface RecursionComponentProps {
  familyTree: any;
}

const RecursionComponent: React.FC<RecursionComponentProps> = ({
  familyTree,
}) => {
  // spacja

  const [visible, setVisible] = useState(false);
  const changeVisibility = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <TextInfo onClick={changeVisibility}>{familyTree.name}</TextInfo>
        {visible ? (
          familyTree?.children?.map((child: any) => {
            return (
              <div>
                <RecursionComponent familyTree={child} />
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default RecursionComponent;
