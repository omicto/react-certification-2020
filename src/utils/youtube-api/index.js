export function searchVideos(gapi) {
  return async (search) => {
    const {
      result: { items },
    } = await gapi?.client.youtube.search.list({
      part: ['id', 'snippet'],
      maxResults: 25,
      q: search,
      type: ['video'],
    });
    return items;
  };
}

export function relatedVideos(gapi) {
  return async (videoId) => {
    const {
      result: { items },
    } = await gapi?.client.youtube.search.list({
      relatedToVideoId: videoId,
      part: ['id', 'snippet'],
      maxResults: 10,
      type: ['video'],
    });
    return items.filter((i) => i.snippet);
  };
}

export function getVideo(gapi) {
  return async (videoId) => {
    const {
      result: { items },
    } = await gapi?.client.youtube.videos.list({
      id: videoId,
      part: ['snippet'],
    });
    return items[0]?.snippet;
  };
}
