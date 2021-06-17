import React, { useState } from "react";

function Song({ initial }) {
  return (
    <div className="song-container">
      <img src={initial.album.cover_medium} alt="" />
      <h1>{initial.title}</h1>
      <h1>{initial.artist.name}</h1>
    </div>
  );
}

export default Song;
