import React, { useEffect, useState } from 'react';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import './App.css'; 
import Navbar from './Navbar';
import Footer from './Footer';
import NewVideoForm from './NewVideoForm';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]); // This is your list of videos

  useEffect(()=>{
    fetch('/video.json').then(res=>res.json()).then(s=>setVideos(s));
  },[]);

  const addNewVideo = (videoData) => {
    // Create a new video object with an ID
    const newVideo = { ...videoData, id: videos.length + 1 };
    // Update the state to include the new video
    setVideos(videos.concat(newVideo)); // or [...videos, newVideo]
  };
  

  // This function is used to close the video player
  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="app">
      <Navbar />    
      <VideoList videos={videos} onSelectVideo={setSelectedVideo} />

      {selectedVideo && <VideoPlayer video={selectedVideo} onClose={closeVideoPlayer} />}
      <NewVideoForm onAddVideo={addNewVideo} /> 
      <Footer />
    </div>
  );
};

export default App;
