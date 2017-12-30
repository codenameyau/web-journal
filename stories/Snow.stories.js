import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs/react';

import WinterNight from 'assets/bg/winter-night.jpg';
import Background from 'addons/Background';
import Snow from 'components/Snow';

const getBackgroundColor = () => {
  const colors = [
    '#6ea1d4'
  ];

  return '#4e7faf';
};

const stories = storiesOf('Snow', module);

stories.addDecorator(withKnobs);

stories.add('demo', () => (
  <Background background={`url(${WinterNight})`}>
    <Snow particles={50} maxRadius={2} color="rgba(255, 255, 255, 0.1)" />
  </Background>
));

stories.add('basic', () => (
  <Background background={getBackgroundColor()}>
    <Snow />
  </Background>
));
