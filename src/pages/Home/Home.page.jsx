import React, { useEffect } from 'react';
import './Home.styles.css';

import VideoList from '../../components/Video/VideoList/VideoList.component';
import { useVideoContext } from '../../providers/video';

function HomePage() {
  const { listVideos, videos, lastSearch } = useVideoContext();

  useEffect(() => {
    listVideos(lastSearch);
    // eslint-disable-next-line
  }, [lastSearch]);

  return (
    <section className="homepage">
      <VideoList videos={videos} />
    </section>
  );
}

export default HomePage;
