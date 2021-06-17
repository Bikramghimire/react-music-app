import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Player({ initial, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);
  const handlePlayRef = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon icon={faAngleLeft} className="skip-left" size="3x" />
        <FontAwesomeIcon
          icon={faPlay}
          onClick={handlePlayRef}
          className="play"
          size="4x"
        />
        <FontAwesomeIcon icon={faAngleRight} className="skip-right" size="3x" />
      </div>
      <audio src={initial.preview} ref={audioRef} />
    </div>
  );
}

export default Player;
