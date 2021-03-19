import { data } from '../youtube-videos-mock';

function getVideosFromSearchResults(results) {
  console.log('aaaaaaaaaaa', results);
  return results.items.filter((item) => item.id.kind === 'youtube#video');
}

function searchVideos(search) {
  // We'll only log the search for now:
  console.log(search);
  return getVideosFromSearchResults(data);
}

export { searchVideos };
