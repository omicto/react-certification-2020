import { getVideosFromSearchResults } from './youtube-api';

const mockSearchResults = {
  items: [
    {
      kind: 'youtube#searchResult',
      id: {
        kind: 'youtube#channel',
      },
      snippet: {
        publishedAt: '2014-09-27T01:39:18Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Wizeline',
        description:
          "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
        thumbnails: {},
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'upcoming',
        publishTime: '2014-09-27T01:39:18Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      id: {
        kind: 'youtube#video',
      },
      snippet: {
        publishedAt: '2019-09-30T23:54:32Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Video Tour | Welcome to Wizeline Guadalajara',
        description:
          'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
        thumbnails: {},
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2019-09-30T23:54:32Z',
      },
    },
  ],
};

describe('getVideosFromSearchResults', () => {
  it('should return an empty array when given an empty array', () => {
    const emptyMockSearchResults = { items: [] };
    const videos = getVideosFromSearchResults(emptyMockSearchResults);
    expect(videos.length).toBe(0);
  });

  it('should only return video results', () => {
    const videos = getVideosFromSearchResults(mockSearchResults);
    expect(videos.length).toBe(1);
  });
});
