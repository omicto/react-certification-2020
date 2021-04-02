export const actions = {
  SET_VIDEOS: 'SET_VIDEOS',
  SET_CURRENT_VIDEO: 'SET_CURRENT_VIDEO',
  SEARCH: 'SEARCH',
  SET_RELATED_VIDEOS: 'SET_RELATED_VIDEOS',
};

export const initialState = {
  videos: [],
  relatedVideos: [],
  currentVideo: {},
  lastSearch: 'Wizeline',
};

export const videoReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_VIDEOS:
      return { ...state, videos: action.payload };
    case actions.SET_CURRENT_VIDEO:
      return { ...state, currentVideo: action.payload };
    case actions.SET_RELATED_VIDEOS:
      return { ...state, relatedVideos: action.payload };
    case actions.SEARCH:
      return { ...state, lastSearch: action.payload };
    default:
  }
};
