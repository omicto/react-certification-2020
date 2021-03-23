import React from 'react';
import { Link } from 'react-router-dom';
import VideoCard from '../VideoCard/VideoCard.component';

const getVideoDetails = (video) => {
  const {
    id: { videoId },
    snippet: { title, description, thumbnails, channelTitle },
  } = video;
  const thumbnailUrl = thumbnails.medium.url;
  return { videoId, title, description, channelTitle, thumbnailUrl };
};

const VideoList = ({ videos }) => {
  return videos.map((video) => {
    const videoDetails = getVideoDetails(video);
    return (
      <Link to={`/${videoDetails.videoId}`} key={videoDetails.videoId}>
        <VideoCard {...videoDetails} />
      </Link>
    );
  });
};

export default VideoList;
