/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardQuestion,
  faLink,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import {
  InformatorStyled,
  OnlyOnHoover,
  SoloIconContainer,
} from "../styles/styles";

// tu się bawię bo chce po najechaniu na ikonki pokazywać info czym jest hook jak działa + link do dokumentacji

const Informator = () => {
  const [isHovering, setIsHovering] = useState(false);

  /* const hide = () => {
    const left: any = document.getElementById(`left-icon-id`);
    const middle: any = document.getElementById(`middle-icon-id`);
    const right: any = document.getElementById(`right-icon-id`);
    if (isHovering) {
      middle.style.dispay = "none";
      right.style.dispplay = "none";
    }
    if (middle.isHovering === true) {
      left.style.dispay = "none";
      right.style.dispplay = "none";
    }
    if (right.isHovering === true) {
      middle.style.dispay = "none";
      left.style.dispplay = "none";
    }
  }; */

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <InformatorStyled>
      {isHovering && (
        <OnlyOnHoover id="hover-id">
          <h2>Only visible when hovering div</h2>
          <h2>bobbyhadz.com</h2>
        </OnlyOnHoover>
      )}
      <SoloIconContainer id="left-icon-id">
        <FontAwesomeIcon
          icon={faClipboardQuestion}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </SoloIconContainer>
      <SoloIconContainer>
        <FontAwesomeIcon id="middle-icon-id" icon={faLink} />
      </SoloIconContainer>
      <SoloIconContainer id="right-icon-id">
        <FontAwesomeIcon icon={faCircleInfo} />
      </SoloIconContainer>
    </InformatorStyled>
  );
};

export default Informator;
