import React from 'react';
import styled from 'styled-components/macro';
import { storiesOf } from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs/react';

import GithubLink from 'addons/GithubLink';
import Clippy from 'components/Clippy/Clippy';

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

stories.add('source code', () => (
  <div>
    <GithubLink url="https://github.com/codenameyau/web-components/blob/master/src/components/Clippy" />
  </div>
));
