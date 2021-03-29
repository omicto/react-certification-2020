import React, { useEffect, useState, useContext, useReducer, useCallback } from 'react';
import { useHistory } from 'react-router';
import { searchVideos, relatedVideos } from '../../utils/youtube-api';
import { initialState, videoReducer, actions } from './reducer';

const useGapi = () => {
  const [gapi, setGapi] = useState(null);
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

  return gapi;
};

const YouTubeContext = React.createContext(null);

export const useVideoContext = () => {
  return useContext(YouTubeContext);
};

export const VideoProvider = (props) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(videoReducer, initialState);
  const gapi = useGapi();
  const isGapiLoaded = !!gapi;

  const listVideos = useCallback(
    async (search) => {
      const videos = await searchVideos(gapi)(search);
      dispatch({ type: actions.SET_VIDEOS, payload: videos });
    },
    [gapi]
  );

  const searchRelatedVideos = useCallback(
    async (videoId) => {
      const videos = await relatedVideos(gapi)(videoId);
      dispatch({ type: actions.SET_RELATED_VIDEOS, payload: videos });
    },
    [gapi]
  );

  const doSearch = (search) => {
    dispatch({ type: actions.SEARCH, payload: search });
    history.push('/');
  };

  const value = {
    isGapiLoaded,
    listVideos,
    doSearch,
    searchRelatedVideos,
    ...state,
  };

  return isGapiLoaded ? (
    <YouTubeContext.Provider value={value}>{props.children}</YouTubeContext.Provider>
  ) : (
    <div>Loading...</div>
  );
};
