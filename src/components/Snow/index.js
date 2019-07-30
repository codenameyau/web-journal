import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const clamp = (num, min, max) => {
  return Math.max(Math.min(num, max), min);
};

export const pickRandomly = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const randomRadius = (min = 1, max = 5) => {
  return clamp((Math.random() * max), min, max);
};

export const calcSpeed = (radius) => {
  return (radius / 2.5) + (1 * Math.random());
};

const CavasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export class SnowCanvas extends React.Component {

  static propTypes = {
    minRadius: PropTypes.number,
    maxRadius: PropTypes.number,
    color: PropTypes.string,
  }

  static defaultProps = {
    particles: 30,
    minRadius: 2,
    maxRadius: 5,
    color: 'rgba(255, 255, 255, 0.35)'
  }

  constructor(props) {
    super(props);

    this._360Deg = Math.PI * 2;
    this._animationId = 0;
    this._particles = [];
    this._oscillation = 0.01; // wind oscillation factor
    this._angle = 0; // wind oscillation step
    this._winds = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 4, 5];
    this._wind = pickRandomly(this._winds);

    this.resize = this.resize.bind(this);
    this.initialize = this.initialize.bind(this);
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    window.addEventListener('resize', this.resize, false);

    this.initialize();
    this.animate();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize, false);
    window.cancelAnimationFrame(this._animationId);
  }

  animate() {
    this.draw();
    this.update();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.draw();
  }

  initialize() {
    const { particles, minRadius, maxRadius } = this.props;
    window.cancelAnimationFrame(this._animationId);
    this._particles.length = 0;

    for (var i=0; i < particles; i++) {
      const radius = randomRadius(minRadius, maxRadius);
      const particle = {
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: radius,
        speed: calcSpeed(radius)
      }
      this._particles.push(particle);
    }
  }

  draw() {
    const canvas = this.canvas;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = this.props.color;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    this._particles.forEach((particle) => {
      ctx.moveTo(particle.x, particle.y);
      ctx.arc(particle.x, particle.y, particle.radius, 0, this._360Deg);
      ctx.fill();
    });
  }

  update() {
    if (!this.canvas) { return; }

    const {minRadius, maxRadius} = this.props;
    const {width, height} = this.canvas;

    // Completed one full wind oscillation.
    if (this._angle > this._360Deg) {
      this._wind = pickRandomly(this._winds);
      this._angle = 0;
    } else {
      this._angle += Math.random() * this._oscillation;
    }

    this._particles.forEach((particle) => {
      // Particle has passed bottom of screen, so draw new particle from top.
      if (particle.y > height) {
        particle.x = Math.random() * width;
        particle.y = 0;
        particle.radius = randomRadius(minRadius, maxRadius);
        particle.speed = calcSpeed(particle.radius);
      }

      // Particle has passed left of screen, so draw new particle from right.
      else if (particle.x < 0) {
        particle.x = width;
        particle.y = Math.random() * height;
        particle.radius = randomRadius(minRadius, maxRadius);
        particle.speed = calcSpeed(particle.radius);
      }

      // Particle has passed right of screen, so draw new particle from right.
      else if (particle.x > width) {
        particle.x = 0;
        particle.y = Math.random() * height;
        particle.radius = randomRadius(minRadius, maxRadius);
        particle.speed = calcSpeed(particle.radius);
      }

      // Move particle normally.
      else {
        particle.x = particle.x + (this._wind * Math.sin(this._angle));
        particle.y = particle.y + particle.speed;
      }
    });

    this.draw();
    this._animationId = window.requestAnimationFrame(this.update);
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
      <SnowCanvas {...props}></SnowCanvas>
    </CavasContainer>
  )
};

export default Snow;
