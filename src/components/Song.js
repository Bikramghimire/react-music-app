import React, { useState } from "react";

function Song({ current }) {
  console.log(current);

  return (
    <div>
      {current ? (
        <div className="song-container">
          <img src={current.album.cover_medium} alt="" />
          <h1>{current.title}</h1>
          <h1>{current.artist.name}</h1>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}

export default Song;
