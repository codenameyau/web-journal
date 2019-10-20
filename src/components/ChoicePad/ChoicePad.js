import React from 'react';
import Ink from 'react-ink';
import PropTypes from 'prop-types';
import { ChoicePadContainer, ChoiceIcon, ChoiceText } from './ChoicePad.styles';

export const ChoicePad = ({
	label,
	hideLabel,
	icon,
	borderColor,
	checkedColor,
	checked,
	disabled,
	...restProps
}) => {
	return (
		<ChoicePadContainer
			as="button"
			checked={checked}
			disabled={disabled}
			borderColor={borderColor}
			checkedColor={checkedColor}
			{...restProps}
		>
			{!disabled && <Ink duration={300} style={{ zIndex: 1 }} opacity={0.1} />}
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

ChoicePad.propTypes = {
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

export default ChoicePad;
