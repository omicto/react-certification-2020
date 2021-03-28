import React from 'react';
import { useParams } from 'react-router';
import Video from '../../components/Video/Video';
import VideoSideBar from '../../components/Video/VideoSideBar/VideoSideBar.component';

const VideoPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Video id={id} />
      <VideoSideBar />
    </div>
  );
};

export default VideoPage;
