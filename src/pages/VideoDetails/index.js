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

const VideoPage = () => {
  const { id } = useParams();
  const { searchRelatedVideos } = useVideoContext();

  useEffect(() => {
    searchRelatedVideos(id);
  }, [id, searchRelatedVideos]);

  return (
    <Flex>
      <div>
        <Video id={id} />
        <p>Hola hola</p>
      </div>

      <VideoSideBar />
    </Flex>
  );
};

export default VideoPage;
