import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function Player({ initial, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);
  const [showTimer, setTimer] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });
  const conversion = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandle = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const handleTimeUpdate = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
    setTimer(true);
  };
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
      {showTimer ? (
        <div className="time-control">
          <p>{conversion(songInfo.currentTime)}</p>
          <input
            type="range"
            onChange={dragHandle}
            min={0}
            max={songInfo.duration}
            value={songInfo.currentTime}
          />
          <p>{conversion(songInfo.duration)}</p>
        </div>
      ) : (
        ""
      )}
      <div className="play-control">
        <FontAwesomeIcon icon={faAngleLeft} className="skip-left" size="3x" />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          onClick={handlePlayRef}
          className="play"
          size="4x"
        />
        <FontAwesomeIcon icon={faAngleRight} className="skip-right" size="3x" />
      </div>
      <audio
        onTimeUpdate={handleTimeUpdate}
        src={initial.preview}
        ref={audioRef}
      />
    </div>
  );
}

export default Player;
