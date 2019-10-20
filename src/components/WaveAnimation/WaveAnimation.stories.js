import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import Background from 'addons/Background';
import Container from 'addons/Container';
import GithubLink from 'addons/GithubLink';
import Description from 'addons/Description';
import WaveAnimation from 'components/WaveAnimation';

const stories = storiesOf('WaveAnimation', module);

stories.addDecorator(withKnobs);

stories.add('demo', () => (
  <Background background="#FFC0CB">
    <WaveAnimation color="rgba(255, 255, 255, 0.25)" speed={3} />
  </Background>
));

stories.add('interactive', () => {
  return (
    <Background background="#FFC0CB">
      <WaveAnimation />
    </Background>
  );
});

stories.add('source code', () => (
  <Container>
    <GithubLink url="https://github.com/codenameyau/web-components/blob/master/src/components/WaveAnimation" />
    <Description>
      TBD
    </Description>
  </Container>
));
