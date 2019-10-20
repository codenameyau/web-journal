import React from 'react';
import { storiesOf } from '@storybook/react';
import ChoicePad from './ChoicePad';
import ChoiceGroup from './ChoiceGroup';
import Icon from '../../assets/coach.svg';
import { Box } from '../..';

storiesOf('ChoicePad', module).add('ChoicePad', () => (
	<Box p="s">
		<ChoiceGroup legend="Who’s your dadda?" hideLegend={false}>
			<ChoicePad
				name="dadda"
				disabled={false}
				checked={false}
				label="Label only"
			/>
			<ChoicePad
				name="dadda"
				disabled={false}
				checked={true}
				label="Label only checked"
			/>
			<ChoicePad
				name="dadda"
				disabled={false}
				checked={false}
				icon={Icon}
				label="Icon only"
				hideLabel
			/>
			<ChoicePad
				name="dadda"
				disabled={false}
				checked={true}
				icon={Icon}
				label="Icon only checked"
				hideLabel
			/>
			<ChoicePad
				name="dadda"
				disabled={false}
				checked={false}
				icon={Icon}
				label="Icon and label"
			/>
			<ChoicePad
				name="dadda"
				disabled={false}
				checked={true}
				icon={Icon}
				label="Icon and label checked"
			/>
			<ChoicePad
				name="dadda"
				disabled={true}
				checked={false}
				icon={Icon}
				label="Disabled"
			/>
			<ChoicePad
				name="dadda"
				disabled={true}
				checked={true}
				icon={Icon}
				label="Disabled checked"
			/>
		</ChoiceGroup>
	</Box>
));
