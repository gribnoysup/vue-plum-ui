import Icon from '../Icon/Icon.vue';
import Button from '../Button/Button.vue';
import Dropbox from '../../directives/Dropbox.js';

export default {
  props : {
    placeholder : {
      type : String,
      default : 'No file chosen'
    },
    dropbox : {
      type : Boolean,
      default : false
    },
    multiple : {
      type : Boolean,
      default : false
    },
    accept : {
      type : String,
      default : false
    }
  },
  data () {
    return {
      filename : '',
      files : null
    };
  },
  components : {
    'plum-button' : Button,
    'plum-icon' : Icon
  },
  directives : {
    'dropbox' : Dropbox
  },
  watch : {
    files (val, oldVal) {

      if (val.length == 0) {
        this.filename = '';
      } else if (val.length == 1) {
        this.filename = val[0].name;
      } else if (val.length > 1) {
        this.filename = `${val.length} files`;
      }
      
      this.$emit('file-change', val);
    }
  },
  methods : {
    simClick () {
      this.$els.fileInput.click();
    },
    fileEvent ($event) {
      this.files = $event.target.files;
    }
  }
};
