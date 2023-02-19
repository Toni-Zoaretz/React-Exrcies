import React, { useState, useRef } from "react";
import video from "./assets/recordspinning.mp4";
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const playHandle = () => {
    setIsPlaying(true);

    videoRef.current.play();
  };

  const pauseHandle = () => {
    setIsPlaying(false);

    videoRef.current.pause();
  };

  return (
    <div>
      <h1>youtube</h1>
      <video width="400px" height="400px" ref={videoRef}>
        <source src={video} type="video/mp4" />
      </video>
      <button onClick={playHandle}>play</button>
      <button onClick={pauseHandle}>pause</button>
    </div>
  );
}

export default App;
