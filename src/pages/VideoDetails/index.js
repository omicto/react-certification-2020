import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Video from '../../components/Video/Video';
import VideoSideBar from '../../components/Video/VideoSideBar/VideoSideBar.component';
import { useVideoContext } from '../../providers/video';

const VideoPage = () => {
  const { id } = useParams();
  const { searchRelatedVideos } = useVideoContext();

  useEffect(() => {
    searchRelatedVideos(id);
  }, [id, searchRelatedVideos]);

  return (
    <div>
      <div>
        <Video id={id} />
      </div>
      <VideoSideBar />
    </div>
  );
};

export default VideoPage;
