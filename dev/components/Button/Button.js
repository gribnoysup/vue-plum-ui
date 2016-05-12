export default {
  props : {
    toggled : {
      type : Boolean,
      default : false
    },
    group : {
      type : String,
      default : null
    },
    disabled : {
      type : Boolean,
      default : false
    }
  },
  computed : {
    computedClasses () {
      let cls = '';
      
      cls += this.toggled ? ' plum-button--toggled' : '';
      
      if (this.group !== null) {
        cls += ' plum-button--group';
        if (/(first|last)/.test(this.group)) {
          cls += ` plum-button--group-${this.group}`;
        }
      }
      
      return cls.trim();
    }
  }
};
