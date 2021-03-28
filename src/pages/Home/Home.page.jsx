import React, { useEffect, useState } from 'react';
import './Home.styles.css';

import VideoList from '../../components/VideoList/VideoList.component';
import { useYoutube } from '../../providers/gapi';

function HomePage() {
  const [currentVideos, setCurrentVideos] = useState([]);
  const { listVideos } = useYoutube();

  useEffect(() => {
    const doSearch = async () => {
      const videos = await listVideos('tool');
      setCurrentVideos(videos);
    };
    doSearch();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="homepage">
      <VideoList videos={currentVideos} />
    </section>
  );
}

export default HomePage;
