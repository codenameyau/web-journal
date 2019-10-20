# web-journal
Hello this is my collection of web development knowledge that I have
accumulated. It contains console tips and tricks, reusable styled components,
documentation, and much more.

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
    - [See all event listeners](#see-all-event-listeners)
    - [Grab all images from a page](#grab-all-images-from-a-page)
    - [Access third-party variables](#access-third-party-variables)

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
// Copy variable.
copy(temp1)

// Copy JSON object.
copy(JSON.stringify(temp1))
```

### See all event listeners
```js
getEventListeners(document)

// JSON format.
copy(getEventListeners(document))
```

### Grab all images from a page
```js
Array.from(document.images).map(img => img.src)

// JSON format.
copy(Array.from(document.images).map(img => img.getAttribute('src')).filter(img => !!img))

// List format.
copy(Array.from(document.images).reduce((acc, img) => acc + img.src + '\n', ''))
```

### Access third-party variables
```
window.frames
```
