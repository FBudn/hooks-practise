import React, { useEffect, useState, useTransition } from "react";
import { ButtonStyled, TextInfo, Tilediv } from "../styles/styles";
import Informator from "./Informator";

const TransitionHeavy = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [visible, setVisible] = useState(`none`);

  setVisible = () => {
    const element: any = document.getElementById(`heavy-list`);
    visible = element.style.display;
    if (element.style.display === "none") {
      element.style.display = "flex";
    } else element.style.display = "none";
  };

  const [isPending, startTransition] = useTransition();

  const showList = () => {
    // const element: any = document.getElementById(`heavy-list`);
    startTransition(() => {
      setTimeout(setVisible, 5000);
    });
  };

  /* startTransition(() => {
      setPage(url);
    }); */
  const showShortList = () => {
    const element: any = document.getElementById(`light-component`);
    if (element.style.display === "none") {
      element.style.display = "flex";
    } else element.style.display = "none";
  };

  const showIsPending = () => {
    const element: any = document.getElementById(`pending`);
    if (isPending) {
      element.style.display = "flex";
    } else
      setTimeout(() => {
        element.style.display = "none";
      }, 5000);
  };

  useEffect(showIsPending, [isPending]);
  return (
    <>
      <Tilediv>useTransition</Tilediv>
      <ButtonStyled type="button" onClick={showList} disabled={isPending}>
        Show long loading list
      </ButtonStyled>
      <TextInfo
        id="pending"
        style={{
          display: "none",
        }}
      >
        Transition is in progress
      </TextInfo>
      <ul
        id="heavy-list"
        style={{
          display: `${visible}`,
          flexDirection: "column",
        }}
      >
        <li>Heavy List</li>
        <li>Heavy List</li>
        <li>Heavy List</li>
        <li>Heavy List</li>
        <li>Heavy List</li>
        <li>Heavy List</li>
        <li>Heavy List</li>
        <li>Heavy List</li>
        <li>Heavy List</li>
        <li>Heavy List</li>
        <li>Heavy List</li>
        <li>Heavy List</li>
      </ul>
      <ButtonStyled type="button" onClick={showShortList}>
        Show hidden light component
      </ButtonStyled>
      <TextInfo
        id="light-component"
        style={{
          display: "none",
        }}
      >
        I am hidden component
      </TextInfo>
      <Informator />
    </>
  );
};

export default TransitionHeavy;
