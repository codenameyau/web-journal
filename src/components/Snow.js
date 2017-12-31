import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const clamp = (num, min, max) => {
  return Math.max(Math.min(num, max), min);
};

export const randomInclusive = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomNormal = (min, max) => {
  var valueA = randomInclusive(min, max);
  var valueB = randomInclusive(min, max);
  return parseInt((valueA + valueB) / 2, 10);
};

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

    this._maxParticles = 30;
    this._minRadius = 1;
    this._maxRadius = 6;
    this._360Deg = Math.PI * 2;
    this._color = 'rgba(255, 255, 255, 0.25)';

    this.particles = [];
    this.angle = 0; // wind oscillation
    this.maxWind = 5; // wind strength
    this.wind = randomNormal(0, this.maxWind); // wind factor

    this.resize = this.resize.bind(this);
    this.reset = this.reset.bind(this);
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    window.addEventListener('resize', this.resize, false);

    this.reset();
    this.draw();
    this.update();
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
    const maxParticles = this.props.particles || this._maxParticles;
    const minRadius = this.props.minRadius || this._minRadius;
    const maxRadius = this.props.maxRadius || this._maxRadius;

    for (var i=0; i < maxParticles; i++) {
      const radius = clamp(Math.random() * maxRadius, minRadius, maxRadius);

      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: radius,
        speed: (radius / 2.5) + (1 * Math.random())
      });
    }
  }

  draw() {
    const canvas = this.canvas;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = this.props.color || this._color;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    this.particles.forEach((particle) => {
      ctx.moveTo(particle.x, particle.y);
      ctx.arc(particle.x, particle.y, particle.radius, 0, this._360Deg);
      ctx.fill();
    });
  }

  update() {
    if (!this.canvas) { return; }

    const {width, height} = this.canvas;

    // Completed one full wind oscillation.
    if (this.angle > this._360Deg) {
      this.wind = randomNormal(0, this.maxWind);
      this.angle = 0;
    } else {
      this.angle += Math.random() * 0.01; // wind oscillation factor
    }

    this.particles.forEach((particle) => {
      // Particle has passed bottom of screen, so draw new particle from top.
      if (particle.y > height) {
        particle.x = Math.random() * width;
        particle.y = 0;
      }

      // Particle has passed left of screen, so draw new particle from right.
      else if (particle.x < 0) {
        particle.x = width;
        particle.y = Math.random() * height;
      }

      // Particle has passed right of screen, so draw new particle from right.
      else if (particle.x > width) {
        particle.x = 0;
        particle.y = Math.random() * height;
      }

      // Move particle normally.
      else {
        particle.x = particle.x + (this.wind * Math.sin(this.angle));
        particle.y = particle.y + particle.speed;
      }
    });

    this.draw();
    window.requestAnimationFrame(this.update);
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

SnowCanvas.propTypes = {
  particles: PropTypes.number,
  minRadius: PropTypes.number,
  maxRadius: PropTypes.number,
  color: PropTypes.string,
};

export const Snow = (props) => {
  return (
    <CavasContainer>
      <SnowCanvas {...props}></SnowCanvas>
    </CavasContainer>
  )
};

export default Snow;
