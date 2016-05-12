import Button from '../Button/Button.vue';
import Input from '../Input/Input.vue';
import Icon from '../Icon/Icon.vue';

export default {
  props : {
    min : {
      type : Number,
      default : -Infinity
    },
    label : {
      type : String
    },
    disabled : {
      type : Boolean,
      default : false
    },
    max : {
      type : Number,
      default : Infinity
    },
    unit : {
      type : String,
      default : '%'
    },
    step : {
      type : Number,
      default : 1
    },
    type : {
      type : String,
      default : 'stepper' // 'slider'
    },
    value : {
      type : Number
    }
  },
  ready () {
    if (typeof this.value === 'undefined') {
      this.value = this.min;
    }
  },
  methods : {
    increase () {
      this.value = Math.min(this.value + this.step, this.max);
    },
    decrease () {
      this.value = Math.max(this.value - this.step, this.min);
    },
    checkInput () {
      this.value = Math.min(this.value, this.max);
      this.value = Math.max(this.value, this.min);
    }
  },
  computed : {
    inputWidth () {
      let len;
      
      len = Math.max(this.max.toString().length, this.min.toString().length);
      len += this.step.toString().replace('.', '').length;

      return len;
    },
    rangeClasses () {
      let cls = '';
      cls += `plum-range--${this.type}`;
      if (this.disabled) cls += ' plum-range--disabled';
      return cls.trim();
    },
    containerClasses () {
      let cls = '';
      cls += `plum-range__value-container--${this.type}`;
      return cls.trim();
    }
  },
  components : {
    'plum-icon' : Icon,
    'plum-input' : Input,
    'plum-button' : Button
  }
};
