import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import './config.css';

// Automatically include every file found in directory.
const req = require.context('../src/components', true, /\.stories.js$/);

function loadStories() {
  // Import these stories first in order.
  require('../src/components/Snow/Snow.stories.js');

  // Import the remaining stories.
  req.keys().forEach(req);
}

setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'github',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: 'https://github.com/codenameyau/web-components',
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  goFullScreen: false,
  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showStoriesPanel: true,
  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showAddonPanel: true,
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: false,
  /**
   * show addon panel as a vertical panel on the right
   * @type {Boolean}
   */
  addonPanelInRight: false,
  /**
   * show panel on the right instead of bottom
   * @type {Boolean}
   */
  downPanelInRight: true,
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: false,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: null,

  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,

  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});

configure(loadStories, module);
