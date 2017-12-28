import { configure } from '@storybook/react';

import './storybook.css';

// Automatically include every file found in directory.
const req = require.context('../stories', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
