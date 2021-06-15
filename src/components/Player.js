import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Player() {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon icon={faAngleLeft} className="skip-left" size="3x" />
        <FontAwesomeIcon icon={faPlay} className="play" size="4x" />
        <FontAwesomeIcon icon={faAngleRight} className="skip-right" size="3x" />
      </div>
    </div>
  );
}

export default Player;
