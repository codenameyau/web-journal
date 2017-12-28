import React from 'react';
import styled from 'styled-components';

export const Background = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${({background}) => background || '#fff'};
`;

export default Background;
