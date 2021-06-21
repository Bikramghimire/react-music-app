import React from "react";

function LibrarySong({ songs }) {
  return (
    <div className="library-items">
      {songs.map((item) => {
        return (
          <div className="library-item" key={item.id}>
            <img src={item.album.cover_medium} alt="llo" />
            <div className="library-title">
              <h3>{item.title}</h3>
              <h3>{item.artist.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LibrarySong;
