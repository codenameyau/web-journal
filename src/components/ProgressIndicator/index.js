import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { colors, fonts, fontWeights } from 'components/_internal/Theme';
import { ResponsiveContainer } from 'components/_internal/Containers';
import * as d3 from 'd3';

export const StyledSvg = styled.svg`
	position: absolute;
	top: 0;
	left: 0;

	.line {
		fill: none;
		stroke: ${colors.purple};
		stroke-width: 2px;
	}

	.circle {
		fill: ${colors.white};
		stroke: ${colors.purple};
		stroke-width: 1.5px;
	}
`;

const initializeGraph = ({ svg, steps, height }) => {
	svg = d3.select(svg);

	const yScale = d3
		.scaleLinear()
		.domain([0, steps.length - 1])
		.range([0, height]);

	const text = svg
		.selectAll('text')
		.data(steps)
		.attr('class', 'text')
		.enter()
		.append('text');

	const line = svg
		.append('line')
		.attr('class', 'line')
		.attr('x1', 0)
		.attr('x2', 0)
		.attr('y1', height)
		.attr('y2', 0)
		.attr('stroke-dasharray', height);

	const circles = svg
		.selectAll('circle')
		.data(steps)
		.enter()
		.append('circle')
		.attr('r', 6)
		.attr('cy', (d, index) => yScale(index))
		.attr('class', 'circle');

	return {
		svg,
		yScale,
		line,
		circles,
		text,
	};
};

const calculateDashOffset = ({ height, completed, steps }) => {
	if (completed >= steps.length) return 0;
	return -height * ((steps.length - completed - 1) / (steps.length - 1));
};

const drawGraph = ({
	yScale,
	line,
	circles,
	text,
	steps,
	completed,
	height,
}) => {
	if (!completed) {
		line.attr('stroke-dashoffset', -height);
	} else {
		line
			.attr(
				'stroke-dashoffset',
				calculateDashOffset({ height, completed: completed - 1, steps })
			)
			.transition()
			.duration(750)
			.attr(
				'stroke-dashoffset',
				calculateDashOffset({ height, completed, steps })
			);
	}

	circles
		.style('fill', (d, i) => (i < completed ? colors.purple : colors.white))
		.transition()
		.duration(300)
		.delay(750)
		.style('fill', (d, i) => (i < completed + 1 ? colors.purple : colors.white));

	text
		.attr('x', 20)
		.attr('y', (d, index) => yScale(index) + 5)
		.text(d => d.name)
		.attr('font-family', fonts.heading)
		.attr('font-weight', fontWeights.bold)
		.attr('font-size', '16px')
		.attr('fill', colors.purple);
};

function VerticalProgressBar({ steps, completed }) {
	const graphEl = useRef(null);
	const graphComponents = useRef({});

	const margin = { top: 50, right: 50, bottom: 50, left: 50 };

	const outerWidth = 250;
	const outerHeight = 400;
	const innerWidth = outerWidth - margin.left - margin.right;
	const innerHeight = outerHeight - margin.top - margin.bottom;

	useEffect(() => {
		if (!Object.keys(graphComponents.current).length) {
			graphComponents.current = initializeGraph({
				svg: graphEl.current,
				steps,
				width: innerWidth,
				height: innerHeight,
			});
		}
		drawGraph({
			steps,
			completed,
			height: innerHeight,
			...graphComponents.current,
		});
	}, [steps, completed, innerWidth, innerHeight]);

	return (
		<ResponsiveContainer
			width={outerWidth}
			height={outerHeight}
			key={JSON.stringify(steps)}
		>
			<StyledSvg
				preserveAspectRatio="xMinYMin meet"
				viewBox={`0 0 ${outerWidth} ${outerHeight}`}
			>
				<g
					transform={`translate(${margin.left}, ${margin.top})`}
					ref={graphEl}
				/>
			</StyledSvg>
		</ResponsiveContainer>
	);
}

const propTypes = {
	/**
	 * Number of completed steps
	 */
	completed: PropTypes.number,
	/**
	 * Array of steps with the name attribute
	 */
	steps: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
		})
	),
};

VerticalProgressBar.propTypes = propTypes;

export default VerticalProgressBar;
