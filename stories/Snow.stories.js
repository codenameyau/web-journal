import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Snow from 'components/Snow';

storiesOf('Snow', module)
  .add('with text', () => <Snow onClick={action('clicked')}>Hello Snow</Snow>)
  .add('with some emoji', () => <Snow onClick={action('clicked')}>😀 😎 👍 💯</Snow>);
