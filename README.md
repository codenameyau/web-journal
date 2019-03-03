# web-journal

- Website: https://codenameyau.github.io/web-journal
- Web Resources: https://github.com/codenameyau/web-journal/blob/master/docs/web-resources.md
- Styled Components: https://github.com/codenameyau/web-journal/blob/master/docs/styled-components.md
- Webpack: https://github.com/codenameyau/web-journal/blob/master/docs/webpack.md

## Table of Contents
- [web-journal](#web-journal)
  - [Table of Contents](#table-of-contents)
  - [Commands](#commands)
  - [Console Tricks](#console-tricks)
    - [Copy variables to clipboard](#copy-variables-to-clipboard)
    - [Access global and third-party variables.](#access-global-and-third-party-variables)

## Commands
```bash
# Install dependencies.
yarn install

# Starts the storybook app.
yarn storybook

# Deploys updates on master to gh-pages.
yarn deploy
```

## Console Tricks

### Copy variables to clipboard
```js
copy(temp1)

// Copy JSON object.
copy(JSON.stringify(temp1))
```

### Access global and third-party variables.
```
window.frames
```
