import React from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { Rating } from 'semantic-ui-react';

const CardBorder = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 3px;
  background-color: #fff;
`;

const UpperCard = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px #f1f2f6;
`;

const Title = styled.h1`
  margin: 0;
  padding: 8px 0 0 0;
  color: #0d1a26;
  font-weight: 500;
  font-familly: 'Courier New', 'Courier';
`;

const UnderCard = styled.h1`
  margin-top: 0;
  padding: 0 8px 0 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const AlbumCover = styled.img`
  width: 100px;
`;

const AlbumInfos = styled.div`
  width: 200px;
  color: #57606f;
  padding-left: 30px;
  font-size: 10px;
`;

const Rate = styled.div`
  font-weight: 500;
  font-size: 11px;
  color: #57606f;
`;

// const Stars = styled.div`
//   font-size: 12px;
// `;

const Info = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

const Card = () => {
  return (
    <CardBorder>
      <UpperCard>
        <AlbumCover
          src='https://www.graphicdesignforum.com/uploads/default/original/2X/d/d3c4e744046205a49d06beb874df3b39da7c9c73.jpeg'
          alt='album cover'
        />
        <AlbumInfos>
          <Title>IGOR</Title>
          <Info>Tyler, the Creator</Info>
          <Info>(2019)</Info>
        </AlbumInfos>
      </UpperCard>
      <UnderCard>
        <Rate>Rate this album</Rate>
        <Rating icon='star' defaultRating={0} maxRating={5} />
      </UnderCard>
    </CardBorder>
  );
};

export default Card;
