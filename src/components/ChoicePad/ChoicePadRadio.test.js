import React from 'react';
import Ink from 'react-ink';
import { ChoicePadRadio } from './ChoicePadRadio';
import { ChoicePadContainer, ChoiceIcon, ChoiceText, ChoiceInputPositioner } from './ChoicePad.styles';
import { RadioInput } from '../_core';
import { shallow } from 'enzyme';

describe('ChoicePadRadio', () => {
	const icon =
		'https://www.stashinvest.com/assets/images/investments/coach.svg';

	it('should render component', () => {
		const wrapper = shallow(
			<ChoicePadRadio
				disabled={false}
				checked={false}
				icon={icon}
				label="Hello World"
			/>
		);
		expect(wrapper.find(Ink).length).toBe(1);
		expect(wrapper.find(ChoicePadContainer).length).toBe(1);
		expect(wrapper.find(ChoiceText).length).toBe(1);
		expect(wrapper.find(ChoiceIcon).length).toBe(1);
		expect(wrapper.find(ChoiceInputPositioner).length).toBe(1);
		expect(wrapper.find(RadioInput).length).toBe(1);
	});

	it('should not render Ink when disabled', () => {
		const wrapper = shallow(
			<ChoicePadRadio
				disabled={true}
				checked={false}
				icon={icon}
				label="Hello World"
			/>
		);
		expect(wrapper.find(Ink).length).toBe(0);
	});

	it('should not render ChoiceIcon when undefined', () => {
		const wrapper = shallow(
			<ChoicePadRadio
				disabled={true}
				checked={false}
				label="Hello World"
			/>
		);
		expect(wrapper.find(ChoiceIcon).length).toBe(0);
	});

});
