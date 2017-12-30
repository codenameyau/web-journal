import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs/react';

import WinterNight from 'assets/bg/winter-night.jpg';
import Background from 'addons/Background';
import GithubLinks from 'addons/GithubLinks';
import Snow from 'components/Snow';

const getBackgroundColor = () => {
  // TODO: Dynamically change bg color based on time of day.
  const colors = [
    '#6ea1d4'
  ];

  return '#4e7faf';
};

const stories = storiesOf('Snow', module);

stories.addDecorator(withKnobs);

stories.add('demo', () => (
  <Background background={`url(${WinterNight})`}>
    <Snow particles={40} maxRadius={3} color="rgba(255, 255, 255, 0.1)" />
  </Background>
));

stories.add('interactive', () => (
  <Background background={getBackgroundColor()}>
    <Snow />
  </Background>
));

stories.add('source code', () => (
  <GithubLinks
    componentLink="src/components/Snow.js"
    storyLink="stories/Snow.stories.js"
  />
));
