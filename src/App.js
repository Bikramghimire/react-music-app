import React, { useEffect, useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import axios from "axios";
import Library from "./components/Library";
const options = {
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/search",
  params: { q: "san holo" },
  headers: {
    "x-rapidapi-key": "2e3ba36e00msh70efad010843a66p1766d6jsn8f2905a0c72d",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
function App() {
  const [songs, setSongs] = useState([]);
  const [current, setCurrent] = useState(null);
  const [init, setInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchData = async () => {
    const result = await axios.request(options);

    setSongs(result?.data?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (songs) {
      setCurrent(songs[0]);
      setInit(true);
    }
  }, [songs]);
  const renderProduct = () => {
    return (
      <div>
        <Song current={current} />
        <Player
          current={current}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <Library songs={songs} setCurrent={setCurrent} isPlaying={isPlaying} />
      </div>
    );
  };

  return init ? <div>{renderProduct()}</div> : <p>Loading</p>;
}

export default App;
