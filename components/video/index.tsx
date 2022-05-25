import React, { useEffect, useState, useRef } from "react";
import { BiPause, BiPlay, BiVolumeFull, BiVolumeMute } from "react-icons/bi";
// import "./App.css";

// import video from "./assets/video.mp4";
// import useVideoPlayer from "./hooks/useVideoPlayer";
type Props = {
    video: string
}


const Video = ({video}: Props) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });
  const videoElement = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
      setPlayerState({
        ...playerState,
        isPlaying: !playerState.isPlaying,
      });
    };
  
    useEffect(() => {
        if (videoElement.current!==null) {
            
      playerState.isPlaying
        ? videoElement.current.play()
        : videoElement.current.pause();
    }
    }, [playerState.isPlaying, videoElement]);
  
    const handleOnTimeUpdate = () => {
        if (videoElement.current!==null) {
        const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
        setPlayerState({
          ...playerState,
           progress,
        });
      }
    };
    
      const handleVideoProgress = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (videoElement.current!==null) {
        const manualChange = Number(event.target.value);
        videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
        console.log(videoElement.current.currentTime, videoElement.current.duration, manualChange);
  
        setPlayerState({
          ...playerState,
          progress: manualChange,
        });
        }
      };
    
      const handleVideoSpeed = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (videoElement.current!==null) {
        const speed = Number(event.target.value);
        videoElement.current.playbackRate = speed;
        setPlayerState({
          ...playerState,
          speed,
        });
        }
      };
    
      const toggleMute = () => {
        setPlayerState({
          ...playerState,
          isMuted: !playerState.isMuted,
        });
      };
  
      useEffect(() => {
        if (videoElement.current!==null) {
        playerState.isMuted
          ? (videoElement.current.muted = true)
          : (videoElement.current.muted = false);
        }
      }, [playerState.isMuted, videoElement]);
  

  return (
    <div className=" mt-4 w-full flex justify-center">
      <div className="video-wrapper">
        <video
          src={video}
          autoPlay={true}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
         <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <BiPlay className="text-2xl" />
                ) : ( 
                <BiPause className="text-2xl" />
               )}
            </button>
          </div>
          
          <input
            type="range"
            min="0"
            max="100"
            className="w-2/3"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? (
              <BiVolumeFull className="text-2xl" />
            ) : ( 
              <BiVolumeMute className="text-2xl" />
            )}
          </button>
        </div> 
      </div>
    </div>
  );
};

export default Video;