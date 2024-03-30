import React, { useState, useEffect } from "react";

const VideoList = ({ videos, onSelectVideo }) => {
  // const [videos, setVideos] = useState([]);



  return (
    <div className="video-list">
      {videos.map((video) => (
        <div key={video.id} className="video-thumbnail" onClick={() => onSelectVideo(video)}>
          <img src={video.thumbnail} alt={video.title} />
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
