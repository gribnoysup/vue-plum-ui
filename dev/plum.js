import Button from './components/Button/Button.vue';
import FileSelect from './components/FileSelect/FileSelect.vue';
import Icon from './components/Icon/Icon.vue';
import Input from './components/Input/Input.vue';
import Range from './components/Range/Range.vue';
import Scroller from './components/Scroller/Scroller.vue';
import Table from './components/Table/Table.vue';
import ToggleGroup from './components/ToggleGroup/ToggleGroup.vue';
import Window from './components/Window/Window.vue';

import Draggable from './directives/Draggable.js';
import Resizable from './directives/Resizable.js';
import Dropbox from './directives/Dropbox.js';

export const directives = {
  Draggable,
  Resizable,
  Dropbox
};

export const components = {
  Button,
  FileSelect,
  Icon,
  Input,
  Range,
  Scroller,
  Table,
  ToggleGroup,
  Window
};
