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

const Informator = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <InformatorStyled>
      {isHovering && (
        <OnlyOnHoover>
          <h2>Only visible when hovering div</h2>
          <h2>bobbyhadz.com</h2>
        </OnlyOnHoover>
      )}
      <SoloIconContainer>
        <FontAwesomeIcon
          icon={faClipboardQuestion}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </SoloIconContainer>
      <SoloIconContainer>
        <FontAwesomeIcon icon={faLink} />
      </SoloIconContainer>
      <SoloIconContainer>
        <FontAwesomeIcon icon={faCircleInfo} />
      </SoloIconContainer>
    </InformatorStyled>
  );
};

export default Informator;
