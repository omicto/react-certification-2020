import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Video from '../../components/Video/Video';
import VideoSideBar from '../../components/Video/VideoSideBar/VideoSideBar.component';
import { useVideoContext } from '../../providers/video';

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

const VideoDetailsContainer = styled.div`
  max-width: 640px;
  p {
    font-size: 0.8rem;
  }

  h1 {
    font-size: 1.2rem;
    margin: 0.2rem 0;
  }
`;

const VideoPage = () => {
  const { id } = useParams();
  const { searchRelatedVideos, setCurrentVideoById, currentVideo } = useVideoContext();

  useEffect(() => {
    setCurrentVideoById(id);
    searchRelatedVideos(id);
    console.log(currentVideo);
    // eslint-disable-next-line
  }, [id]);

  return (
    <Flex>
      <VideoDetailsContainer>
        <Video id={id} />
        <h1>{currentVideo.title}</h1>
        <small>{currentVideo.channelTitle}</small>
        <p>{currentVideo.description}</p>
      </VideoDetailsContainer>

      <VideoSideBar />
    </Flex>
  );
};

export default VideoPage;
