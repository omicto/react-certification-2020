import React from 'react';

const Video = ({ id }) => {
  return (
    <iframe
      title="video"
      width="640px"
      height="480px"
      src={`https://www.youtube.com/embed/${id}`}
    />
  );
};

export default Video;
