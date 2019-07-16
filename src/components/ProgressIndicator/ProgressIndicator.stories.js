import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { number } from '@storybook/addon-knobs';

import Container from 'addons/Container';
import GithubLink from 'addons/GithubLink';
import Description from 'addons/Description';
import ProgressIndicator from 'components/ProgressIndicator';

const stories = storiesOf('ProgressIndicator', module);

const steps = [
  { name: 'Introductions' },
  { name: 'Financial profile' },
  { name: 'Verify your identity' },
  { name: 'Your Stash plan' },
];

stories.addDecorator(withKnobs);

stories.add('demo', () => (
  <Container maxWidth="250px" mx="auto" width="100%">
    <ProgressIndicator steps={steps} completed={2} />
  </Container>
));

stories.add('interactive', () => (
  <Container maxWidth="250px" mx="auto" width="100%">
    <ProgressIndicator steps={steps} completed={number('completed', 4)} />
  </Container>
));

stories.add('source code', () => (
  <Container maxWidth="250px" mx="auto" width="100%">
    <GithubLink url="https://github.com/codenameyau/web-components/blob/master/src/components/ProgressIndicator" />
    <Description>
      This was a project that I worked on during a Stash Hackathon. It uses
      React with animated SVGs using styled components. ProgressIndicator would
      change states based on how long it took a user to complete a step during
      registration. If the user took too long, the star would transition from
      happy to smirking. After a user completed an action the star would
      transition back to its happiest state.
    </Description>
  </Container>
));
