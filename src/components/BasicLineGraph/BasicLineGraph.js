// Source: https://bl.ocks.org/gordlea/27370d1eea8464b04538e6d8ced39e89
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import * as d3 from 'd3';

/***************************************************************
 * Graph Styles
 ****************************************************************/
const POINT_RADIUS = 6;
const THEME_COLOR = '#3D1A85';

const SVG = styled.svg`
  .line {
    fill: none;
    stroke: #ffab00;
    stroke-width: 3;
  }
  .overlay {
    fill: none;
    pointer-events: all;
  }
  .dot {
    fill: #ffab00;
    stroke: #fff;
  }
  .focus circle {
    fill: none;
    stroke: steelblue;
  }
`;

const StyledColorStop = styled.stop`
	stop-color: ${({ color = THEME_COLOR }) => color };
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

/***************************************************************
 * Graph Components
 ****************************************************************/
const initializeGraph = ({ svg, width, height, data }) => {
  const svgEl = d3.select(svg);

  const xScale = d3.scaleLinear().range([0, width]);
  const yScale = d3.scaleLinear().range([height, 0]);

  const xAxis = svg
    .append('g')
    .attr('transform', `translate(0, ${height})`)
    .attr('class', 'x-axis');

  const yAxis = svg.append('g').attr('class', 'y-axis');
  const area = svg.append('path').attr('class', 'area');
  const line = svg.append('path').attr('class', 'line');

	const startPoint = svg
		.append('circle')
		.attr('class', 'circle startPoint')
		.attr('r', POINT_RADIUS);

  const endPointGroup = svg.append('g').attr('class', 'endPointGroup')
};

const GraphComponent = () => {
  return <div>
    Hello
  </div>
};

/***************************************************************
 * D3 Line code
 ****************************************************************/
const datapoints = 21;
const margin = { top: 50, right: 50, bottom: 50, left: 50 };
const width = window.innerWidth - margin.left - margin.right;
const height = window.innerHeight - margin.top - margin.bottom;

const xScale = d3.scaleLinear().domain([0, datapoints - 1]);
const yScale = d3
  .scaleLinear()
  .domain([0, 1])
  .range([height]);

const line = d3
  .line()
  .x((d, i) => xScale(i))
  .y(d => yScale(d.y))
  .curve(d3.curveMonotoneX);

const dataset = d3.range(datapoints).map(d => {
  return { y: d3.randomUniform(1)() };
});


export class BasicLineGraph extends React.Component {
  static propTypes = {
    clippyState: PropTypes.string,
  };

  static defaultProps = {
    aspectRatio: 2,
  };

  render() {
    return <GraphComponent />;
  }
}

export default BasicLineGraph;
