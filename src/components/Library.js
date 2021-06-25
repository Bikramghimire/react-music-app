import React from "react";
import LibrarySong from "./LibrarySong";

function Library({ songs, setCurrent, isPlaying }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-items">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            key={song.id}
            setCurrent={setCurrent}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
