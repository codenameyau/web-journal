import React from 'react';
import { storiesOf } from '@storybook/react';

import Background from 'addons/Background';
import Snow from 'components/Snow';

const getBackgroundColor = () => {
  return '#6b92b9';
};

// const BackgroundDecorator = (storyFn) => (
//   <Background background={getBackgroundColor()}>
//     {storyFn()}
//     Hello World
//   </Background>
// );

storiesOf('Snow', module)
  .add('demo', () => (
    <Background background={getBackgroundColor()}>
      <Snow />
      Hellow
    </Background>
  ))
