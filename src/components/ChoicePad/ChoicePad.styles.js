import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import { Text, screenReaderOnly } from '../_core';

export const ChoicePadContainer = styled.label`
	width: 10em;
	position: relative;
	background: none;
	margin: ${({ theme }) => theme.space.xxs};
	padding: ${({ theme }) => theme.space.s};
	border-radius: 0.5em;
	border: 2px solid;
	border-color: ${({ theme }) => theme.colors.grayDivider};
	box-sizing: border-box;
	cursor: pointer;
	font-family: ${({ theme }) => theme.settings.baseFontFamily};
	user-select: none;
	display: flex;
	align-items: center;
	flex-basis: 10em;
	flex-grow: 1;
	flex-direction: column;
	${space}

	${({ checked }) =>
		checked &&
		css`
			border: 2px solid;
			border-color: ${({ borderColor, theme }) =>
				borderColor || theme.colors.purple};
			background-color: ${({ checkedColor, theme }) =>
				checkedColor || theme.colors.lightPurple};
		`}

	${({ disabled }) =>
		disabled &&
		css`
			cursor: not-allowed;
		`}

	&::before {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 0;
		opacity: 0;
		box-shadow: ${({ theme }) => theme.shadows.one};
		transition: opacity 0.3s;
	}

	&:hover:not(:disabled)::before {
		opacity: 1;

		&:focus {
			outline: none;
		}
	}

	&:focus-within {
		box-shadow: ${({ theme }) => theme.shadows.input};
	}
`;

export const ChoiceIcon = styled.img`
	height: 3em;
	width: auto;
	${space}

	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.5;
		`}
`;

export const ChoiceText = styled(Text).attrs({ as: 'span' })`
	text-align: center;
	color: ${({ disabled, theme }) =>
		disabled ? theme.colors.lightGray : theme.colors.mediumGray};
	${props => props.srOnly && screenReaderOnly};
`;

export const ChoiceInputPositioner = styled.div`
	position: absolute;
	top: 9px;
	right: 9px;
`;

export const HiddenRadioInput = styled.input.attrs({ type: 'radio' })`
	${screenReaderOnly}
`;
