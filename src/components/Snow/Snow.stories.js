import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, color, boolean, number
} from '@storybook/addon-knobs/react';

import WinterNight from 'assets/bg/winter-night.jpg';
import Background from 'addons/Background';
import GithubLinks from 'addons/GithubLinks';
import Snow from 'components/Snow/Snow';

const stories = storiesOf('Snow', module);

stories.addDecorator(withKnobs);

stories.add('demo', () => (
  <Background background={`url(${WinterNight})`}>
    <Snow
      color="rgba(255, 255, 255, 0.25)"
      particles={40}
      maxRadius={3}
    />
  </Background>
));

stories.add('interactive', () => {
  const numberOptions = {
    range: true,
    min: 1,
    max: 80,
    step: 2
  };

  return (
    <Background background={color('BG Color', '#4f98de')}>
      <Snow
        color={color('Color', 'rgba(255, 255, 255, 0.25)')}
        particles={number('Particles', 20, numberOptions)}
      />
    </Background>
  )
});

stories.add('source code', () => (
  <GithubLinks
    snow="src/components/Snow"
  />
));
