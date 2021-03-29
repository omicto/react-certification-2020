import React from 'react';
import styled from 'styled-components';
import VideoList from '../VideoList/VideoList.component';
import { useVideoContext } from '../../../providers/video';

const FlexNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const VideoSideBar = () => {
  const { relatedVideos } = useVideoContext();
  return (
    <FlexNav>
      <VideoList videos={relatedVideos} />
    </FlexNav>
  );
};

export default VideoSideBar;
