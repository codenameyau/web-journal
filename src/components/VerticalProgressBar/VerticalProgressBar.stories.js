import React from 'react';
import Cartesian from 'react-cartesian';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { number } from '@storybook/addon-knobs';

import Container from 'addons/Container';
import GithubLink from 'addons/GithubLink';
import Description from 'addons/Description';
import VerticalProgressBar from 'components/VerticalProgressBar';

const stories = storiesOf('VerticalProgressBar', module);

const steps = [
  { name: 'Introductions' },
  { name: 'Financial profile' },
  { name: 'Verify your identity' },
  { name: 'Your Stash plan' },
];

stories.addDecorator(withKnobs);

stories.add('demo', () => (
  <Container maxWidth="250px" mx="auto" width="100%">
    <VerticalProgressBar steps={steps} completed={2} />
  </Container>
));

stories.add('cartesian', () => (
  <Cartesian
    cols={4}
    component={VerticalProgressBar}
    showCopy={false}
    props={{
      steps: [steps],
      completed: [0, 1, 2, 3],
    }}
  />
));

stories.add('interactive', () => (
  <Container maxWidth="250px" mx="auto" width="100%">
    <VerticalProgressBar steps={steps} completed={number('completed', 4)} />
  </Container>
));

stories.add('source code', () => (
  <Container>
    <GithubLink url="https://github.com/codenameyau/web-components/blob/master/src/components/VerticalProgressBar" />
    <Description>
      This was a project that I worked on at Stash.
    </Description>
  </Container>
));
