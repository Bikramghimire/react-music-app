import React, { useEffect, useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import axios from "axios";
const options = {
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/search",
  params: { q: "eminem" },
  headers: {
    "x-rapidapi-key": "2e3ba36e00msh70efad010843a66p1766d6jsn8f2905a0c72d",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
function App() {
  const [songs, setSongs] = useState([]);
  const [init, setInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchData = async () => {
    const result = await axios.request(options);
    console.log(result);
    setSongs(result.data.data);
    if (songs) {
      setInit(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const renderProduct = () => {
    return (
      <div>
        <Song initial={songs[0]} />
        <Player
          initial={songs[0]}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    );
  };

  return init ? <div>{renderProduct()}</div> : <p>Loading</p>;
}

export default App;
