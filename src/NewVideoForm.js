import React, { useState } from 'react';

const NewVideoForm = ({ onAddVideo }) => {
  const [videoData, setVideoData] = useState({
    title: '',
    thumbnail: '',
    videoPath: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData({ ...videoData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVideo(videoData);
    setVideoData({ title: '', thumbnail: '', videoPath: '' }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={videoData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        name="thumbnail"
        value={videoData.thumbnail}
        onChange={handleChange}
        placeholder="Thumbnail URL"
        required
      />
      <input
        name="videoPath"
        value={videoData.videoPath}
        onChange={handleChange}
        placeholder="Video URL"
        required
      />
      <button type="submit">Add Video</button>
    </form>
  );
};

export default NewVideoForm;
