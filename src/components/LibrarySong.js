import React from "react";

function LibrarySong({ song, setCurrent, isPlaying }) {
  const selectSong = () => {
    setCurrent(song);
  };
  return (
    <div className="library-item" onClick={selectSong}>
      <img src={song.album.cover_medium} alt="llo" />
      <div className="library-title">
        <h3>{song.title}</h3>
        <h3>{song.artist.name}</h3>
      </div>
    </div>
  );
}

export default LibrarySong;
