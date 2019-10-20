import React from 'react';
import { storiesOf } from '@storybook/react';
import ChoicePadRadio from './ChoicePadRadio';
import ChoiceGroup from './ChoiceGroup';
import Icon from '../../assets/coach.svg';
import { Box } from '../..';

storiesOf('ChoicePad', module).add('ChoicePadRadio', () => (
	<Box p="s">
		<ChoiceGroup legend="Who’s your favorite Kong?">
			<ChoicePadRadio
				name="kong"
				value="1"
				disabled={false}
				checked={false}
				label="Label only"
			/>
			<ChoicePadRadio
				name="kong"
				value="2"
				disabled={false}
				checked={true}
				label="Label only checked"
			/>
			<ChoicePadRadio
				name="kong"
				value="3"
				disabled={false}
				checked={false}
				icon={Icon}
				label="Icon only"
				hideLabel
			/>
			<ChoicePadRadio
				name="kong"
				value="4"
				disabled={false}
				checked={true}
				icon={Icon}
				label="Icon only checked"
				hideLabel
			/>
			<ChoicePadRadio
				name="kong"
				value="5"
				disabled={false}
				checked={false}
				icon={Icon}
				label="Icon and label"
			/>
			<ChoicePadRadio
				name="kong"
				value="6"
				disabled={false}
				checked={true}
				icon={Icon}
				label="Icon and label checked"
			/>
			<ChoicePadRadio
				name="kong"
				value="7"
				disabled={true}
				checked={false}
				icon={Icon}
				label="Disabled"
			/>
			<ChoicePadRadio
				name="kong"
				value="8"
				disabled={true}
				checked={true}
				icon={Icon}
				label="Disabled checked"
			/>
		</ChoiceGroup>
	</Box>
));
