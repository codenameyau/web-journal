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
const TOOLTIP_OPACITY = `opacity 250ms 150ms linear`;

const D3SVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: all;
  cursor: pointer;

  .line {
    fill: none;
    stroke: ${({ color = THEME_COLOR }) => color};
    stroke-width: 3px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .area {
    fill: url(#grad1);
    stroke: none;
  }

  .circle {
    fill: ${({ color = THEME_COLOR }) => color};
    stroke: ${({ color }) => color || 'white'};
    stroke-width: 2.25px;
    transition: ${TOOLTIP_OPACITY};
  }

  .endPointGroup {
    transition: ${TOOLTIP_OPACITY};
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
`;

const StyledColorStop = styled.stop`
  stop-color: ${({ color = THEME_COLOR }) => color};
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

  const endPointGroup = svg.append('g').attr('class', 'endPointGroup');
};

const GraphComponent = props => {
  return <D3SVG {...props} />;
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

export class TimeSeriesGraph extends React.Component {
  static propTypes = {
    clippyState: PropTypes.string,
    data: PropTypes.array,
  };

  static defaultProps = {
    aspectRatio: 2,
    data: [],
  };

  renderNoData() {
    return <div>No data...</div>;
  }

  render() {
    const { data, ...rest } = this.props;

    return data && data.length ? (
      <GraphComponent data={data} {...rest} />
    ) : (
      this.renderNoData()
    );
  }
}

export default TimeSeriesGraph;
