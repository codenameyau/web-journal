import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import { Legend } from '../..';

export const StyledChoiceGroup = styled.fieldset`
	max-width: ${({ width }) => width || '28rem'};
	${space}
`;

export const ChoiceGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: -${({ theme }) => theme.space.xxs};
`;

export const ChoiceGroup = ({ children, legend, hideLegend, ...props }) => {
	return (
		<StyledChoiceGroup {...props}>
			<Legend screenReaderOnly={hideLegend} mb="s">
				{legend}
			</Legend>
			<ChoiceGrid>
				{children}
			</ChoiceGrid>
		</StyledChoiceGroup>
	);
};

ChoiceGroup.propTypes = {
	legend: PropTypes.string.isRequired,
	hideLegend: PropTypes.bool,
};

ChoiceGroup.defaultProps = {
	hideLegend: false,
};

export default ChoiceGroup;
