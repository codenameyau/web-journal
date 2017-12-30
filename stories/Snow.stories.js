import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs/react';

import Background from 'addons/Background';
import Snow from 'components/Snow';

const getBackgroundColor = () => {
  return '#6b92b9';
};

const stories = storiesOf('Snow', module);

stories.addDecorator(withKnobs);

stories.add('demo', () => (
  <Background background={getBackgroundColor()}>
    <Snow />
  </Background>
));

stories.add('basic', () => (
  <Background background={getBackgroundColor()}>
    <Snow />
  </Background>
));
