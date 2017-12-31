import React from 'react';
import styled from 'styled-components';

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${({background}) => background || '#fff'};
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Background;
