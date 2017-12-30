import React from 'react';
import styled from 'styled-components';

const CavasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export class SnowCanvas extends React.Component {
  constructor(props) {
    super(props);

    this._maxParticles = 10;
    this._maxRadius = 5;
    this._360Deg = Math.PI * 2;
    this._color = 'rgba(255, 255, 255, 0.8)';

    this.particles = [];

    this.resize = this.resize.bind(this);
    this.reset = this.reset.bind(this);
    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    window.addEventListener('resize', this.resize, false);

    this.reset();
    this.draw();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize, false);
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.draw();
  }

  reset() {
    const maxParticles = this.props.max || this._maxParticles;
    const maxRadius = this.props.radius || this._maxRadius;

    for (var i=0; i < maxParticles; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: maxRadius
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
    const styles = {
      display: 'block' // removes scrollbar
    };

    return (
      <canvas style={styles} ref={(canvas) => this.canvas = canvas}>
      </canvas>
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
