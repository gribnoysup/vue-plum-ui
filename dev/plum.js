import PlmButton from './components/Button/Button.vue';
import PlmFileSelect from './components/FileSelect/FileSelect.vue';
import PlmIcon from './components/Icon/Icon.vue';
import PlmInput from './components/Input/Input.vue';
import PlmRange from './components/Range/Range.vue';
import PlmScroller from './components/Scroller/Scroller.vue';
import PlmTable from './components/Table/Table.vue';
import PlmToggleGroup from './components/ToggleGroup/ToggleGroup.vue';
import PlmWindow from './components/Window/Window.vue';

import PlmDraggable from './directives/Draggable.js';
import PlmResizable from './directives/Resizable.js';
import PlmDropbox from './directives/Dropbox.js';

export const components = {
  PlmButton,
  PlmFileSelect,
  PlmIcon,
  PlmInput,
  PlmRange,
  PlmScroller,
  PlmTable,
  PlmToggleGroup,
  PlmWindow
};

export const directives = {
  PlmDraggable,
  PlmResizable,
  PlmDropbox
};

export default {
  install (Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name]);
    });
    Object.keys(directives).forEach((name) => {
      Vue.directive(name, directives[name]);
    });
  }
};

export {
  // directives
  PlmDraggable,
  PlmResizable,
  PlmDropbox,
  // components
  PlmButton,
  PlmFileSelect,
  PlmIcon,
  PlmInput,
  PlmRange,
  PlmScroller,
  PlmTable,
  PlmToggleGroup,
  PlmWindow
};
