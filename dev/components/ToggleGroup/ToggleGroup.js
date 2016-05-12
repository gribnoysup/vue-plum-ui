import Button from '../Button/Button.vue';
import utils from '../../utils/utils.js';

export default {
  props : {
    values : {
      required : true
    },
    selected : {
      required : true,
      twoWay : true,
      default : ''
    },
    group : {
      type : Boolean,
      default : false
    },
    multiple : {
      default : false
    },
    name : {
      default () {
        return `toggle-${Date.now().toString(16).slice(-8)}`;
      }
    }
  },
  computed : {
    type () {
      return this.multiple ? 'checkbox' : 'radio';
    }
  },
  methods : {
    groupPosition (index) {
      if (this.group) {
        if (index == 0) {
          return 'first';
        } else if (index == this.values.length - 1) {
          return 'last';
        } else {
          return '';
        }
      }
      return null;
    },
    simClick (event) {
      let input = utils.dom.closest(event.target, '.plum-toggle-group__toggle').querySelector('input');
      input.click();
    }
  },
  components : {
    'plum-button' : Button
  }
};
