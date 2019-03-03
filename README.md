# web-components

- Website: https://codenameyau.github.io/web-components
- [Web Components Storybook](https://codenameyau.github.io/web-components)
- [Web Resources and Links](https://github.com/codenameyau/web-components/blob/master/RESOURCES.md)

- [web-components](#web-components)
    - [Commands](#commands)
  - [Code Snippets](#code-snippets)
    - [Webpack Config](#webpack-config)
    - [Styled Components with CSSTransition](#styled-components-with-csstransition)

### Commands
```bash
# Install dependencies.
yarn install

# Starts the storybook app.
yarn storybook

# Deploys updates on master to gh-pages.
yarn deploy
```

## Code Snippets

### Webpack Config
```js
const resolve = require('path').resolve;
const join = require('path').join;
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // bundle app.js and everything it imports, recursively.
  entry: {
    app: resolve('./src/main.js')
  },

  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    // Make src files outside of this dir resolve modules in our node_modules folder
    modules: [resolve(__dirname, '.'), resolve(__dirname, 'node_modules'), 'node_modules'],

    // Make directories resolve to 'index.js' or 'index.jsx'
    mainFiles: ['index'],

    // Allow alias imports.
    alias: {
      Source: path.resolve(__dirname, 'src'),
      Actions: path.resolve(__dirname, 'src/redux/actions'),
      Sagas: path.resolve(__dirname, 'src/redux/sagas'),
      Components: path.resolve(__dirname, 'src/components'),
      Data: path.resolve(__dirname, 'src/data'),
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: join(__dirname, 'src'),
        exclude: [/node_modules/]
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: [/node_modules/]
      }
    ]
  },

  node: {
    fs: 'empty'
  },

  plugins: [
    // Copies 'index.html' injected template and 'favicon' to build.
    new HtmlWebpackPlugin({
      favicon: './favicon.ico',
      template: './index.html',
      filename: 'index.html'
    })
  ]
};
```

### Styled Components with CSSTransition

```javascript
import React from 'react';
import styled from 'styled-components/macro';
import { CSSTransition } from 'react-transition-group';

const CSSTransitionFactory = (Transition, transitionName) => {
  return ({ children, ...props }) => {
    return (
      <Transition
        classNames={transitionName}
        {...props}
        timeout={props.timeout || 0}
      >
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

