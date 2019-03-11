import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import ClippySmiling from './ClippySmiling';
import ClippySmirking from './ClippySmirking';
import { Appearing, Pulsating } from './keyframes';

const ClippySVG = styled.svg`
	cursor: pointer;
	transition: animation 0.3s ease-out;

	&.appearing {
		animation: ${Appearing};
		animation-duration: 2s;
		animation-iteration-count: 1;
		animation-delay: 0;
	}

	&.smiling {
		animation: ${Pulsating};
		animation-duration: 1s;
		animation-iteration-count: infinite;
		animation-delay: 0.2s; /* psychological delay */
	}

	&.smirking {
		animation: ${Pulsating};
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-delay: 0;
	}

	&.sleeping {
		animation: ${Pulsating};
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-delay: 0;
	}
`;

export const CLIPPY_STATES = {
  appearing: {
    component: ClippySmiling,
  },
  smiling: {
    component: ClippySmiling,
  },
  smirking: {
    component: ClippySmirking,
  },
};

export class Clippy extends React.Component {
  static propTypes = {
    clippyState: PropTypes.string,
  };

  static defaultProps = {
    clippyState: 'smirking',
  };

  render() {
    const { clippyState } = this.props;
    const clippy = CLIPPY_STATES[clippyState];
    const pulsatingDuration = clippy.pulsatingDuration;
    const ClippyComponent = clippy.component;

    return (
      <ClippySVG
        className={clippyState}
        pulsatingDuration={pulsatingDuration}
        xmlns="http://www.w3.org/2000/svg"
        width="88"
        height="84"
        viewBox="0 0 88 84"
        {...this.props}
      >
        <ClippyComponent />
      </ClippySVG>
    );
  }
}

export default Clippy;
