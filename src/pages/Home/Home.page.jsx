import React, { useEffect, useState } from 'react';
import './Home.styles.css';

import { searchVideos } from '../../utils/youtube-api';
import VideoList from '../../components/VideoList/VideoList.component';

function HomePage() {
  const [currentVideos, setCurrentVideos] = useState([]);

  useEffect(() => {
    const videos = searchVideos('wizeline');
    console.log(videos);
    setCurrentVideos(videos);
  }, []);

  return (
    <section className="homepage">
      <VideoList videos={currentVideos} />
    </section>
  );
}

export default HomePage;
