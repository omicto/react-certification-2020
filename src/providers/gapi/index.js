import React, { useEffect, useState, useContext } from 'react';
import { searchVideos } from '../../utils/youtube-api';

const YouTubeContext = React.createContext(null);

export const useYoutube = () => {
  return useContext(YouTubeContext);
};

export const YouTubeApiProvider = (props) => {
  const [gapi, setGapi] = useState(null);
  const [latestSearchResults, setLatestSearchResults] = useState([]);

  const listVideos = async (search) => {
    const videos = await searchVideos(gapi)(search);
    setLatestSearchResults(videos);
    return videos;
  };

  const value = {
    isGapiLoaded: !!gapi,
    listVideos,
    latestSearchResults,
  };

  useEffect(() => {
    async function init() {
      try {
        await window.gapi.client.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
        await window.gapi.client.load(
          'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
        );
        setGapi(window.gapi);
      } catch (e) {
        console.error('gapi error:', e);
      }
    }

    window.gapi.load('client:auth2', init);
  }, []);

  return (
    <YouTubeContext.Provider value={value}>{props.children}</YouTubeContext.Provider>
  );
};
