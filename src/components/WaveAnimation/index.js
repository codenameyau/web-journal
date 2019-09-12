import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import waveImage from './wave.png';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const MoveLeft = keyframes`
  0% {
    background-position: 1360px;
  }

  100% {
    background-position: 0;
  }
`;

export const MoveRight = keyframes`
  0% {
    background-position: 0;
  }

  100% {
    background-position: 1360px;
  }
`;

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 143px;
  width: 100%;
  background: url(${waveImage}) repeat-x;
  opacity: ${({ opacity }) => opacity || 1};
  animation: ${({ animation }) => animation || MoveLeft } 10s linear infinite;
`;


export class WaveAnimation extends React.Component {
  static propTypes = {
    speed: PropTypes.number,
    color: PropTypes.string,
  };

  static defaultProps = {
    speed: 30,
    color: 'rgba(255, 255, 255, 0.35)',
  };

  render() {
    return (
      <Container>
        <Wave animation={MoveRight} opacity=".75" />
        <Wave animation={MoveLeft} opacity=".5" />
      </Container>
    );
  }
}

export default WaveAnimation;
