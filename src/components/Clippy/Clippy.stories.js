import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, select
} from '@storybook/addon-knobs/react';

import Container from 'addons/Container';
import GithubLink from 'addons/GithubLink';
import Description from 'addons/Description';
import Clippy from 'components/Clippy';

const ClippyContainer = styled.div`
  position: fixed;
  top: 25%;
  left: 50%;
`;

const stories = storiesOf('Clippy', module);

stories.addDecorator(withKnobs);

stories.add('demo', () => (
  <ClippyContainer>
    <Clippy />
  </ClippyContainer>
));

stories.add('interactive', () => {
  const clippyStates = [
    'appearing',
    'smiling',
    'smirking',
  ];

  const smirking = 'smiling';

  return (
    <ClippyContainer>
      <Clippy
        clippyState={select('Clippy State', clippyStates, smirking)}
      />
    </ClippyContainer>
  )
});

stories.add('source code', () => (
  <Container>
    <GithubLink url="https://github.com/codenameyau/web-components/blob/master/src/components/Clippy" />
    <Description>
      This was a project that I worked on during a Stash Hackathon. It uses React
      with animated SVGs using styled components. Clippy would change states
      based on how long it took a user to complete a step during registration.
      If the user took too long, the star would transition from happy to smirking.
      After a user completed an action the star would transition back to its happiest state.
    </Description>
  </Container>
));
