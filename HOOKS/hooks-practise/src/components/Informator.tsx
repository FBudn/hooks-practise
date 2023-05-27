/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardQuestion,
  faLink,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

const Informator = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faClipboardQuestion} />
      <FontAwesomeIcon icon={faLink} />
      <FontAwesomeIcon icon={faCircleInfo} />
    </div>
  );
};

export default Informator;
