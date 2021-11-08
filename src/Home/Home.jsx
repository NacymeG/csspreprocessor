import React from 'react';
import Card from '../Component/Card';
import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

const Home = () => {
  return (
    <Body>
      <Card />
    </Body>
  );
};

export default Home;
