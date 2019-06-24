import React, { useRef, useMemo, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { Flex, Box } from '../../index';
import {
	isToday,
	compareAsc,
	differenceInSeconds,
	addSeconds,
	differenceInYears,
} from 'date-fns';
import { interpolatePath } from 'd3-interpolate-path';
import {
	SvgDefs,
	StyledTooltip,
	ResponsiveContainer,
	StyledSvg,
} from './Styles';
import Loading from './Loading';

const axisColor = '#dcdcdc';
const pointRadius = 6;
const bisectDate = d3.bisector(({ x }) => x).right;
const formatMonth = d3.timeFormat('%b %Y');
const formatYear = d3.timeFormat('%Y');
const formatFullDate = d3.timeFormat('%b %d, %Y');
// reformat large numbers only, e.g.: 1000000 to 1M
const humanReadableNumberFormat = d3.format('~s');

const initializeGraph = ({ svg, width, height, data }) => {
	svg = d3.select(svg);

	const xScale = d3.scaleTime().range([0, width]);
	const yScale = d3.scaleLinear().range([height, 0]);

	const xAxis = svg
		.append('g')
		.attr('transform', 'translate(0,' + height + ')')
		.attr('class', 'x-axis');

	const yAxis = svg.append('g').attr('class', 'y-axis');

	const area = svg.append('path').attr('class', 'area');
	const line = svg.append('path').attr('class', 'line');

	const startPoint = svg
		.append('circle')
		.attr('class', 'circle startPoint')
		.attr('r', pointRadius);

	const endPointGroup = svg.append('g').attr('class', 'endPointGroup');

	endPointGroup
		.append('circle')
		.attr('class', 'circle')
		.attr('r', pointRadius);

	endPointGroup
		.append('text')
		.attr('x', 10)
		.attr('y', 5);

	const tooltipPoint = svg
		.append('circle')
		.attr('class', 'circle tooltipPoint')
		.attr('r', pointRadius)
		.style('opacity', 0);

	return {
		svg,
		xAxis,
		yAxis,
		yScale,
		xScale,
		line,
		area,
		startPoint,
		endPointGroup,
		tooltipPoint,
	};
};

const sortData = data => {
	return data.sort((a, b) => {
		return compareAsc(a.x, b.x);
	});
};

const createXAxis = ({
	g,
	xScale,
	isInitialRender,
	data,
	informativeXAxis,
}) => {
	if (!isInitialRender) g = g.transition();

	const firstDate = data[0].x;
	const lastDate = data[data.length - 1].x;

	const showMonths = differenceInYears(lastDate, firstDate) <= 3;

	const format = d =>
		isToday(d) ? 'Today' : showMonths ? formatMonth(d) : formatYear(d);

	const drawAxis = d3
		.axisBottom(xScale)
		.tickSizeOuter(0)
		.tickFormat(format);

	drawAxis.tickValues([firstDate, lastDate]);
	if (data.length > 5 && informativeXAxis) {
		const totalSeconds = Math.abs(differenceInSeconds(firstDate, lastDate));
		drawAxis.tickValues([
			firstDate,
			addSeconds(firstDate, totalSeconds / 3),
			addSeconds(firstDate, (2 * totalSeconds) / 3),
			lastDate,
		]);
	}

	drawAxis(g);

	g.select('.domain')
		.attr('stroke', axisColor)
		.attr('stroke-dasharray', '2,3');
};

const createYAxis = ({ g, yScale, innerWidth, isInitialRender, data }) => {
	if (!isInitialRender) g = g.transition();

	const maxYVal = d3.max(data, d => d.y);
	const minYVal = d3.min(data, d => d.y);
	const midpointYVal = (maxYVal - minYVal) / 2 + minYVal;
	const drawAxis = d3
		.axisLeft(yScale)
		.tickSize(innerWidth)
		.tickValues([
			Math.ceil(minYVal),
			Math.ceil(midpointYVal),
			Math.ceil(maxYVal),
		])
		.tickFormat(d => `$${humanReadableNumberFormat(d)}`);

	drawAxis(g);

	g.select('.domain').remove();
	g.selectAll('.tick line')
		.attr('stroke', axisColor)
		.attr('stroke-dasharray', '2,3')
		.attr('transform', `translate(${innerWidth},0)`);

	g.selectAll('.tick text').attr('x', -4);
};

const setPointPosition = ({
	point,
	xScale,
	yScale,
	transition = false,
} = {}) => {
	if (transition) point = point.transition();
	point.attr('cx', d => xScale(d.x)).attr('cy', d => yScale(d.y));
};

const setSvgElementTransform = ({ element, xScale, yScale, transition }) => {
	if (transition) element = element.transition();
	element.attr('transform', d => `translate(${xScale(d.x)}, ${yScale(d.y)})`);
};

const drawGraph = ({
	xAxis,
	yAxis,
	xScale,
	yScale,
	startPoint,
	endPointGroup,
	tooltipPoint,
	line,
	area,
	data,
	innerWidth,
	isInitialRender,
	tooltipEl,
	informativeXAxis,
}) => {
	xScale.domain(d3.extent(data.map(d => d.x)));
	yScale.domain(d3.extent(data.map(d => d.y))).nice();

	// (for mobile) ensure tooltip is hidden
	tooltipEl.style.opacity = 0;
	tooltipPoint.attr('opacity', 0);

	const lineRenderer = d3
		.line()
		.x(d => xScale(d.x))
		.y(d => yScale(d.y));

	const areaRenderer = d3
		.area()
		.x(d => xScale(d.x))
		.y0(yScale.range()[0])
		.y1(d => yScale(d.y));

	createXAxis({ g: xAxis, xScale, isInitialRender, data, informativeXAxis });
	createYAxis({ g: yAxis, yScale, innerWidth, isInitialRender, data });

	area.datum(data);
	line.datum(data);
	startPoint.datum(data[0]);
	endPointGroup.datum(data[data.length - 1]);

	endPointGroup.select('text').text(d => `$${humanReadableNumberFormat(d.y)}`);

	if (isInitialRender) {
		area.attr('d', areaRenderer(data));
		line.attr('d', lineRenderer(data));
		setPointPosition({ point: startPoint, xScale, yScale });
		setSvgElementTransform({ element: endPointGroup, xScale, yScale });
	} else {
		area
			.transition()
			.attrTween('d', d => interpolatePath(area.attr('d'), areaRenderer(d)));
		line
			.transition()
			.attrTween('d', d => interpolatePath(line.attr('d'), lineRenderer(d)));
		setPointPosition({
			point: startPoint,
			transition: true,
			xScale,
			yScale,
		});
		setSvgElementTransform({
			element: endPointGroup,
			xScale,
			yScale,
			transition: true,
		});
	}
};

const setHTMLElementTransform = ({
	x,
	y,
	margin,
	outerHeight,
	outerWidth,
	containerEl,
}) => {
	const { width, height } = containerEl.getBoundingClientRect();
	const translateX = ((x + margin.left) / outerWidth) * width;
	const translateY = ((y + margin.top) / outerHeight) * height;
	return `translate(${translateX}px, ${translateY}px)`;
};

const onFinishUserInteraction = ({
	tooltipEl,
	endPointGroup,
	tooltipPoint,
}) => () => {
	tooltipEl.style.opacity = 0;
	tooltipPoint.style('opacity', 0);
	endPointGroup.style('opacity', 1);
};

const onUserInteraction = ({
	tooltipEl,
	xScale,
	yScale,
	data,
	margin,
	outerHeight,
	outerWidth,
	endPointGroup,
	tooltipPoint,
	containerEl,
}) => {
	// return regular function instead of arrow function to get proper this binding
	return function() {
		tooltipPoint.style('opacity', 1);
		endPointGroup.style('opacity', 0);
		const mouse = d3.mouse(this);
		const mouseDate = xScale.invert(mouse[0]);
		const index = bisectDate(data, mouseDate);
		const value = data[index] || data[data.length - 1];
		tooltipEl.querySelector('[data-x-axis]').innerText = formatFullDate(
			value.x
		);
		tooltipEl.querySelector('[data-y-axis]').innerText = humanReadableNumberFormat(value.y);

		tooltipEl.style.opacity = 1;
		tooltipEl.style.transform = setHTMLElementTransform({
			y: yScale(value.y),
			x: xScale(value.x),
			margin,
			outerHeight,
			outerWidth,
			containerEl,
		});

		tooltipPoint
			.transition()
			.duration(30)
			.attr('cy', yScale(value.y))
			.attr('cx', xScale(value.x));
	};
};

const GraphComponent = ({
	data: unsortedData,
	aspectRatio,
	informativeXAxis,
}) => {
	const data = useMemo(() => sortData(unsortedData), [unsortedData]);
	const graphEl = useRef(null);
	const containerEl = useRef(null);
	const graphInteractionEl = useRef(null);
	const tooltipEl = useRef(null);
	const graphComponents = useRef({});

	const margin = { top: 40, right: 70, bottom: 50, left: 60 };

	const base = 700;
	const outerWidth = base;
	const outerHeight = base / aspectRatio;
	const innerWidth = outerWidth - margin.left - margin.right;
	const innerHeight = outerHeight - margin.top - margin.bottom;

	useLayoutEffect(() => {
		const graphInitialized = Object.keys(graphComponents.current).length;
		if (!graphInitialized) {
			graphComponents.current = initializeGraph({
				svg: graphEl.current,
				width: innerWidth,
				height: innerHeight,
				data: data,
			});
		}
		drawGraph({
			data,
			innerWidth,
			...graphComponents.current,
			isInitialRender: !graphInitialized,
			tooltipEl: tooltipEl.current,
			informativeXAxis,
		});

		const generalUserInteractionArgs = {
			tooltipEl: tooltipEl.current,
			xScale: graphComponents.current.xScale,
			yScale: graphComponents.current.yScale,
			endPointGroup: graphComponents.current.endPointGroup,
			tooltipPoint: graphComponents.current.tooltipPoint,
			data,
		};

		d3.select(graphInteractionEl.current)
			.on(
				'mouseout touchend',
				onFinishUserInteraction(generalUserInteractionArgs)
			)
			.on(
				'mousemove touchmove',
				onUserInteraction({
					...generalUserInteractionArgs,
					margin,
					outerHeight,
					outerWidth,
					containerEl: containerEl.current,
				})
			);

		return () => {
			d3.select(graphInteractionEl.current).on(
				'mousemove touchmove mouseout touchend',
				null
			);
		};
	}, [data, innerWidth, innerHeight]);

	return (
		<Box position="relative">
			<ResponsiveContainer
				width={outerWidth}
				height={outerHeight}
				ref={containerEl}
			>
				<StyledSvg
					preserveAspectRatio="xMinYMin meet"
					viewBox={`0 0 ${outerWidth} ${outerHeight}`}
				>
					<SvgDefs />
					<g transform={`translate(${margin.left}, ${margin.top})`}>
						<g ref={graphEl} />
						<rect
							ref={graphInteractionEl}
							className="overlay"
							x={-margin.left}
							y={-margin.top}
							width={outerWidth}
							height={outerHeight}
						/>
					</g>
				</StyledSvg>
			</ResponsiveContainer>
			<StyledTooltip ref={tooltipEl}>
				<Flex>
					<div data-x-axis />
				</Flex>
				<Flex>
					<b>Price:</b>
					&nbsp;$
					<div data-y-axis />
				</Flex>
			</StyledTooltip>
		</Box>
	);
};

GraphComponent.defaultProps = {
	aspectRatio: 2.25,
	informativeXAxis: false,
};

const propTypes = {
	/**
	 * Size the width to height ratio of the responsive graph container
	 */
	aspectRatio: PropTypes.number,
	/**
	 * Show 4 ticks on the x axis instead of 2
	 */
	informativeXAxis: PropTypes.bool,
	/**
	 * TimeSeriesGraph expects the data to be provided in this form
	 */
	data: PropTypes.arrayOf(
		PropTypes.shape({
			x: PropTypes.instanceOf(Date),
			y: PropTypes.number,
		})
	),
};

GraphComponent.propTypes = propTypes;

const TimeSeriesGraph = ({ data, ...rest }) => {
	if (!data || data.length === 0) return <Loading />;
	return <GraphComponent data={data} {...rest} />;
};

TimeSeriesGraph.defaultProps = GraphComponent.defaultProps;
TimeSeriesGraph.propTypes = propTypes;

export default TimeSeriesGraph;
