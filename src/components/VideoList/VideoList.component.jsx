import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import VideoCard from '../VideoCard/VideoCard.component';

const getVideoDetails = (video) => {
  const {
    id: { videoId },
    snippet: { title, description, thumbnails, channelTitle },
  } = video;
  const thumbnailUrl = thumbnails.medium.url;
  return { videoId, title, description, channelTitle, thumbnailUrl };
};

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const VideoList = ({ videos }) => {
  return (
    <Flex>
      {videos.map((video) => {
        const videoDetails = getVideoDetails(video);
        return (
          <Link to={`/${videoDetails.videoId}`}>
            <VideoCard {...videoDetails} />
          </Link>
        );
      })}
    </Flex>
  );
};

export default VideoList;
