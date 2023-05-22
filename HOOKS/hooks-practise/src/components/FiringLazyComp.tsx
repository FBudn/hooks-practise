/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => delayForDemo(import("./LazyComponent")));

const FiringLazyComp = () => {
  const loadLazyComponent = () => {
    const element: any = document.getElementById(`lazy-component`);
    if (element.style.display === "none") element.style.display = "flex";
    else element.style.display = "none";
  };
  return (
    <>
      <button type="button" onClick={loadLazyComponent}>
        Load lazy component
      </button>
      <div id="lazy-component" style={{ display: "none" }}>
        <Suspense fallback="Loading...">
          <LazyComponent />
        </Suspense>
      </div>
    </>
  );
};

function delayForDemo(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  }).then(() => promise);
}

export default FiringLazyComp;
