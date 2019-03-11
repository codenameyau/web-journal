import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, color, number
} from '@storybook/addon-knobs/react';

import WinterNight from 'assets/bg/winter-night.jpg';
import Background from 'addons/Background';
import GithubLink from 'addons/GithubLink';
import Description from 'addons/Description';
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
  <div>
    <GithubLink url="https://github.com/codenameyau/web-components/blob/master/src/components/Snow" />
    <Description>
      This was a project that I worked on during Newsela.
    </Description>
  </div>
));
