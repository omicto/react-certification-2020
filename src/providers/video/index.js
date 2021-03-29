import React, { useEffect, useState, useContext, useReducer } from 'react';
import { useHistory } from 'react-router';
import { searchVideos } from '../../utils/youtube-api';
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

  const listVideos = async (search) => {
    const videos = await searchVideos(gapi)(search);
    dispatch({ type: actions.SET_VIDEOS, payload: videos });
  };

  const doSearch = (search) => {
    dispatch({ type: actions.SEARCH, payload: search });
    history.push('/');
  };

  const value = {
    isGapiLoaded,
    listVideos,
    doSearch,
    ...state,
  };

  return isGapiLoaded ? (
    <YouTubeContext.Provider value={value}>{props.children}</YouTubeContext.Provider>
  ) : (
    <div>Loading...</div>
  );
};
