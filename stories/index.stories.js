import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export const Welcome = () => {
  return (
    <div class="">
      Hello World
    </div>
  );
}

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />);
