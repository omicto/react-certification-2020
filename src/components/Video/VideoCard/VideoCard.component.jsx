import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  border-radius: 5px;
  background-color: #f7f7f7;
  border: solid #dfdfdf 2px;
  margin: 0.5rem 0.5rem;
  padding: 0;
  max-width: 320px;
  height: 400px;
  box-sizing: content-box;
  color: #181818;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardBody = styled.div`
  padding: 0 0.6rem;

  * {
    margin: 0;
  }

  h1 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

const VideoCard = ({ title, channelTitle, description, thumbnailUrl }) => {
  return (
    <CardWrapper>
      <div>
        <img src={thumbnailUrl} alt={`Thumbnail of ${title}`} />
      </div>
      <CardBody>
        <h1>{title}</h1>
        <small>{channelTitle}</small>
        <p>{description}</p>
      </CardBody>
    </CardWrapper>
  );
};

export default VideoCard;
