import React from 'react';
import styled from 'styled-components/macro';
import { body, caption } from '../Mixins/Mixins';

const StyledColorStop = styled.stop`
	stop-color: ${({ theme }) => theme.colors.stashPurple};
`;

export const SvgDefs = () => (
	<defs>
		<linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
			<StyledColorStop offset="0%" style={{ stopOpacity: '0.8' }} />
			<StyledColorStop offset="90%" style={{ stopOpacity: '0.05' }} />
			<StyledColorStop offset="100%" style={{ stopOpacity: '0' }} />
		</linearGradient>

		<filter id="whiteHalo" x="0" y="0">
			<feMorphology
				in="SourceAlpha"
				result="MORPH"
				operator="dilate"
				radius="2"
			/>
			<feColorMatrix
				in="MORPH"
				result="WHITENED"
				type="matrix"
				values="-1 1 1 1 1, 1 -1 1 1 1, 1 1 -1 1 1, 0 0 0 1 0"
			/>
			<feMerge>
				<feMergeNode in="WHITENED" />
				<feMergeNode in="SourceGraphic" />
			</feMerge>
		</filter>
	</defs>
);

const tooltipOpacityTransition = `opacity 250ms 150ms linear`;

export const StyledTooltip = styled.div`
	transform-origin: 0 0;
	box-shadow: 0 1px 6px hsla(0, 0%, 0%, 0.2);
	border-radius: ${({ theme }) => theme.settings.borderRadius};
	display: inline-block;
	padding: ${({ theme }) => theme.space.xxs};
	line-height: 1.2;
	position: absolute;
	top: 0.75rem;
	left: 1rem;
	min-width: 6rem;
	z-index: 1;
	background-color: ${({ theme }) => theme.colors.white};
	transition: transform 250ms ease-out, ${tooltipOpacityTransition};
	pointer-events: none;
	opacity: 0;
	font-size: 15px;
	b {
		font-weight: bold;
	}
`;

export const ResponsiveContainer = styled.div`
	position: relative;
	padding-bottom: ${props => (props.height * 100) / props.width}%;
	vertical-align: top;
	overflow: hidden;
`;

export const StyledSvg = styled.svg`
	position: absolute;
	top: 0;
	left: 0;
	pointer-events: all;
	cursor: pointer;

	.line {
		fill: none;
		stroke: ${({ theme }) => theme.colors.stashPurple};
		stroke-width: 3px;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.area {
		fill: url(#grad1);
		stroke: none;
	}

	.circle {
		fill: ${({ theme }) => theme.colors.stashPurple};
		stroke: ${({ theme }) => theme.colors.white};
		stroke-width: 2.25px;
		transition: ${tooltipOpacityTransition};
	}

	.endPointGroup {
		transition: ${tooltipOpacityTransition};
	}

	.y-axis .domain {
		display: none;
	}

	.y-axis .tick text {
		transform: translateX(-12px);
	}

	.overlay {
		fill: none;
		pointer-events: all;
	}

	.x-axis .domain {
		display: none;
	}

	.x-axis .tick {
		line {
			display: none;
		}
		text {
			transform: translateY(10px);
		}
	}

	text {
		color: ${({ theme }) => theme.colors.mediumGray};
		${body};
		${({ theme }) => theme.mediaQueries.tablet} {
			${caption}
		}

		color: ${({ theme }) => theme.colors.softBlack};
	}
`;
