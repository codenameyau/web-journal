import React from 'react';
import styled from 'styled-components';

const CavasContainer = styled.div`
  position: relative;
`;

const Canvas = styled.canvas`
  position: absolute;
  background: red;
  width: 500px;
  height: 500px;
`;

export class SnowCanvas extends React.Component {
  constructor(props) {
    super(props);

    this._maxParticles = 25;
    this._maxRadius = 5;
    this._360Deg = Math.PI * 2;
    this._color = 'rgba(255, 255, 255, 0.8)';

    this.particles = [];
    this.initParticles = this.initParticles.bind(this);
    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    this.initParticles();
    this.draw();
  }

  initParticles() {
    const maxParticles = this.props.max || this._maxParticles;
    const maxRadius = this.props.radius || this._maxRadius;

    for (var i=0; i < maxParticles; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * maxRadius
      });
    }
  }

  draw() {
    const ctx = this.canvas.getContext('2d');
    ctx.fillStyle = this.props.color || this._color;
    ctx.beginPath();

    this.particles.forEach((particle) => {
      ctx.moveTo(particle.x, particle.y);
      ctx.arc(particle.x, particle.y, particle.radius, 0, this._360Deg);
      ctx.fill();
    });
  }

  render() {
    return (
      <Canvas innerRef={(canvas) => this.canvas = canvas}>
      </Canvas>
    )
  }
}

export const Snow = (props) => {
  return (
    <CavasContainer>
      <SnowCanvas></SnowCanvas>
    </CavasContainer>
  )
};

export default Snow;
