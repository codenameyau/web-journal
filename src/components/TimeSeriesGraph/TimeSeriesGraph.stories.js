import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs/react';

import Container from 'addons/Container';
import GithubLink from 'addons/GithubLink';
import Description from 'addons/Description';
import TimeSeriesGraph from 'components/TimeSeriesGraph/TimeSeriesGraph';

const stories = storiesOf('TimeSeriesGraph', module);

stories.addDecorator(withKnobs);

stories.add('demo', () => (
  <Container>
    <TimeSeriesGraph />
  </Container>
));

stories.add('source code', () => (
  <Container>
    <GithubLink url="https://github.com/codenameyau/web-components/blob/master/src/components/TimeSeriesGraph" />
    <Description>
      This is a simple React and D3 line graph template.
    </Description>
  </Container>
));
