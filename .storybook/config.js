import { configure } from '@storybook/react';

function loadStories() {
  require('../app/stories/index.js');  //eslint-disable-line
  // You can require as many stories as you need.
}

configure(loadStories, module);
