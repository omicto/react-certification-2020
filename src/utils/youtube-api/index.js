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
