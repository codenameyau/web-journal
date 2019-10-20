import React from 'react';
import Ink from 'react-ink';
import PropTypes from 'prop-types';
import {
	ChoicePadContainer,
	ChoiceIcon,
	ChoiceText,
	ChoiceInputPositioner,
} from './ChoicePad.styles';
import { RadioInput } from '../_core';

export const ChoicePadRadio = props => {
	const {
		checked,
		disabled,
		icon,
		label,
		hideLabel,
		borderColor,
		checkedColor,
	} = props;

	return (
		<ChoicePadContainer
			checked={checked}
			disabled={disabled}
			borderColor={borderColor}
			checkedColor={checkedColor}
		>
			{!disabled && <Ink duration={300} style={{ zIndex: 1 }} opacity={0.1} />}
			<ChoiceInputPositioner>
				<RadioInput {...props} />
			</ChoiceInputPositioner>
			{icon && (
				<ChoiceIcon
					disabled={disabled}
					alt=""
					src={icon}
					mb={hideLabel ? 0 : 'xxs'}
				/>
			)}
			<ChoiceText disabled={disabled} srOnly={hideLabel}>
				{label}
			</ChoiceText>
		</ChoicePadContainer>
	);
};

ChoicePadRadio.propTypes = {
	label: PropTypes.string.isRequired,
	/** Visually hide the label */
	hideLabel: PropTypes.bool,
	/** Path to image */
	icon: PropTypes.string,
	disabled: PropTypes.bool,
	checked: PropTypes.bool,
	borderColor: PropTypes.string,
	checkedColor: PropTypes.string,
};

ChoicePadRadio.defaultProps = {
	m: 0,
	flexGrow: 1,
	alignItems: 'initial',
};

export default ChoicePadRadio;
