import React from 'react';
import Ink from 'react-ink';
import ChoicePad from './ChoicePad';
import { ChoicePadContainer, ChoiceIcon, ChoiceText } from './ChoicePad.styles';
import { shallow } from 'enzyme';

describe('ChoicePad', () => {
	const icon =
		'https://www.stashinvest.com/assets/images/investments/coach.svg';

	it('should render component', () => {
		const wrapper = shallow(
			<ChoicePad
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
	});

	it('should not render Ink when disabled', () => {
		const wrapper = shallow(
			<ChoicePad
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
			<ChoicePad disabled={true} checked={false} label="Hello World" />
		);
		expect(wrapper.find(ChoiceIcon).length).toBe(0);
	});

});
