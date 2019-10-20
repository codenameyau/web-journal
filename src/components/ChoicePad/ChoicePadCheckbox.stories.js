import React from 'react';
import { storiesOf } from '@storybook/react';
import ChoicePadCheckbox from './ChoicePadCheckbox';
import ChoiceGroup from './ChoiceGroup';
import Icon from '../../assets/coach.svg';
import { Box } from '../..';

storiesOf('ChoicePad', module).add('ChoicePadCheckbox', () => (
	<Box p="s">
		<ChoiceGroup legend="Who are your favorite Kong?">
			<ChoicePadCheckbox name="kong" value="1" label="Label only" />
			<ChoicePadCheckbox
				name="kong"
				value="2"
				label="Label only checked"
				checked
			/>
			<ChoicePadCheckbox
				name="kong"
				value="3"
				icon={Icon}
				label="Icon only"
				hideLabel
			/>
			<ChoicePadCheckbox
				name="kong"
				value="4"
				icon={Icon}
				label="Icon only checked"
				checked
				hideLabel
			/>
			<ChoicePadCheckbox
				name="kong"
				value="5"
				icon={Icon}
				label="Icon and label"
			/>
			<ChoicePadCheckbox
				name="kong"
				value="6"
				icon={Icon}
				label="Icon and label checked"
				checked
			/>
			<ChoicePadCheckbox
				disabled
				name="kong"
				value="7"
				icon={Icon}
				label="Disabled"
			/>
			<ChoicePadCheckbox
				name="kong"
				value="8"
				disabled
				checked
				icon={Icon}
				label="Disabled checked"
			/>
		</ChoiceGroup>
	</Box>
));
