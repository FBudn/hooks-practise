/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { Suspense, lazy } from "react";
import { ButtonStyled, Tilediv } from "../styles/styles";
import Informator from "./Informator";

const LazyComponent = lazy(() => delayForDemo(import("./LazyComponent")));

const FiringLazyComp = () => {
  const loadLazyComponent = () => {
    const element: any = document.getElementById(`lazy-component`);
    if (element.style.display === "none") element.style.display = "flex";
    else element.style.display = "none";
  };
  return (
    <>
      <Tilediv>React.lazy and Suspence</Tilediv>
      <ButtonStyled type="button" onClick={loadLazyComponent}>
        Load lazy component
      </ButtonStyled>
      <div id="lazy-component" style={{ display: "none" }}>
        <Suspense fallback="Loading...">
          <LazyComponent />
        </Suspense>
      </div>
      <Informator />
    </>
  );
};

function delayForDemo(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  }).then(() => promise);
}

export default FiringLazyComp;
