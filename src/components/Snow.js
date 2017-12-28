import React from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: absolute;
  background: red;
  width: 100vw;
  height: 100vh;
`;

export class SnowCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.particles = 25;
  }

  componentDidMount() {
    const ctx = this.canvas.getContext('2d');
  }

  draw() {

  }

  render() {
    return (
      <Canvas innerRef={(canvas) => this.canvas = canvas}>
      </Canvas>
    )
  }
}

const CavasContainer = styled.div`
  position: relative;
  z-index: -100;
`;

export const Snow = (props) => {
  return (
    <CavasContainer>
      <SnowCanvas></SnowCanvas>
    </CavasContainer>
  )
};

export default Snow;
