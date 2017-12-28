import React from 'react';
import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({background}) => background || '#fff'};
`;

export default Background;
