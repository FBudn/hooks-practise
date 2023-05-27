/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardQuestion,
  faLink,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { InformatorStyled } from "../styles/styles";

const Informator = () => {
  return (
    <InformatorStyled>
      <FontAwesomeIcon
        style={{ cursor: "pointer" }}
        icon={faClipboardQuestion}
      />
      <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faLink} />
      <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faCircleInfo} />
    </InformatorStyled>
  );
};

export default Informator;
