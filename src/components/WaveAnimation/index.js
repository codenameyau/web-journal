import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import waveImage from './wave.png';

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const MoveLeft = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(1360px);
  }
`;

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: url(${waveImage}) repeat-x;
  height: 100%;
  width: 100%;
  animation: ${MoveLeft};
  animation-iteration-count: infinite;
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
        <Wave />
      </Container>
    );
  }
}

export default WaveAnimation;
