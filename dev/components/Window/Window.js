import utils from '../../utils/utils.js';

import Icon from '../Icon/Icon.vue';
import Button from '../Button/Button.vue';
import Draggable from '../../directives/Draggable.js';
import Resizable from '../../directives/Resizable.js';

export default {
  props : {
    draggable : {
      type : Boolean,
      default : true
    },
    resizable : {
      type : Boolean,
      default : true
    }
  },
  data () {
    return {
      hidden : false,
      fullscreen : false,
      active : false,
      dragAxis : 'xy'
    };
  },
  computed : {
    windowClasses () {
      let cls = 'plum-window';
      
      if (this.hidden) cls += ' plum-window--hidden';
      if (this.active) cls += ' plum-window--active';
      if (this.fullscreen && !this.hidden) cls += ' plum-window--fullscreen';
      
      return cls.trim();
    },
    hiddenIcon () {
      let icon = this.hidden ? 'ic_arrow_drop_down_white_24px' : 'ic_arrow_drop_up_white_24px';
      return icon;
    },
    fullscreenIcon () {
      let icon = this.fullscreen ? 'ic_fullscreen_exit_white_24px' : 'ic_fullscreen_white_24px';
      return icon;
    },
    resAxis () {
      return this.hidden ? '' : 'xy';
    }
  },
  methods : {
    close (event) {
      this.$emit('close');
    },
    toggleHidden () {
      this.hidden = !this.hidden;
    }
  },
  directives : {
    draggable : Draggable,
    resizable : Resizable
  },
  components : {
    'plum-button' : Button,
    'plum-icon' : Icon
  }
};
