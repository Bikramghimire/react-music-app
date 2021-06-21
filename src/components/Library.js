import React from "react";
import LibrarySong from "./LibrarySong";

function Library({ songs }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <LibrarySong songs={songs} />
    </div>
  );
}

export default Library;
