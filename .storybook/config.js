import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/imports/stories/Related');
  require('../src/imports/stories/Standard');
}

configure(loadStories, module);
