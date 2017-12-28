import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Background from 'addons/Background';
import Snow from 'components/Snow';

const getBackgroundColor = () => {
  return '#6b92b9';
};

const BackgroundDecorator = (storyFn) => (
  <Background background={getBackgroundColor()}>
    {storyFn()}
  </Background>
);

storiesOf('Snow', module)
  .addDecorator(BackgroundDecorator)
  .add('demo', () => (
    <Snow onClick={action('clicked')}>
      Hello Snow
    </Snow>
  ))
