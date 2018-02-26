# web-components

- [Web Components Storybook](https://codenameyau.github.io/web-components)
- [Web Resources and Links](https://github.com/codenameyau/web-components/blob/master/RESOURCES.md)

### Installation and Setup
```bash
npm install
npm run storybook
npm run deploy
```

## Code Snippets

- [React CSSTransition with Styled Components](#react-csstransition-with-styled-components)

### React CSSTransition with Styled Components

```javascript
import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const CSSTransitionFactory = (Transition, transitionName) => {
  return ({ children, ...props }) => {
    return (
      <Transition classNames={transitionName} {...props} timeout={props.timeout || 0}>
        {children}
      </Transition>
    )
  }
};

const FadeCSSTransition = styled(CSSTransition)`
  transition: opacity ${({ duration }) => duration || 1000}ms;

  &.fade-enter {
    opacity: 0.01;
  }

  &.fade-enter-active {
    opacity: 1;
  }
`;

export const Fade = CSSTransitionFactory(FadeCSSTransition, 'fade');
```

```javascript
<Fade key={tweet.messageId} duration={1000} timeout={0}>
  <Component />
</Fade>
```

