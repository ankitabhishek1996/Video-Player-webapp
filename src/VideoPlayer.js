import React from 'react';

const VideoPlayer = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="video-player-overlay">
      <div className="video-player">
        <button className="close-btn" onClick={onClose}>×</button>
        <video controls autoPlay>
          <source src={video.videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};


export default VideoPlayer;
