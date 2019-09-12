import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export class WaveAnimation extends React.Component {
  static propTypes = {
    minRadius: PropTypes.number,
    maxRadius: PropTypes.number,
    color: PropTypes.string,
  };

  static defaultProps = {
    particles: 30,
    minRadius: 2,
    maxRadius: 5,
    color: 'rgba(255, 255, 255, 0.35)',
  };

  render() {
    return <Container>Hello</Container>;
  }
}

export default WaveAnimation;
