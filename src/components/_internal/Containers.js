import styled from 'styled-components';

export const ResponsiveContainer = styled.div`
	position: relative;
	padding-bottom: ${props => (props.height * 100) / props.width}%;
	vertical-align: top;
	overflow: hidden;
`;
