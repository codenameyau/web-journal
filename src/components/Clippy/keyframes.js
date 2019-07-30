import { keyframes } from 'styled-components';

export const Pulsating = keyframes`
  50% {
    transform: scale(1.15);
    animation-timing-function: ease;
  }
`;

export const RaiseEyebrows = keyframes`
  0% {
    transform: translateY(0);
  }

  8% {
    transform: translateY(-3px);
  }

  16% {
    transform: translateY(0);
  }

  24% {
    transform: translateY(-3px);
  }

  32% {
    transform: translateY(0);
  }
`;

export const Appearing = keyframes`
  0% {
    transform: scale(0) rotateY(0deg);
    animation-timing-function: ease-out;
  }

  100% {
    transform: scale(1) rotateY(1080deg);
    animation-timing-function: ease-in;
  }
`;
