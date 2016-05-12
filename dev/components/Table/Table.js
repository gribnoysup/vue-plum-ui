import Icon from '../Icon/Icon.vue';
import Button from '../Button/Button.vue';

export default {
  props : {
    headers : {
      type : Array,
      required : true
    },
    values : {
      type : Array,
      required : true
    },
    pagination : {
      type : Number,
      default : -1
    }
  },
  methods : {
    changeSort (header) {
      if (header.active) {
        header.sort = header.sort * -1;
      } else {
        for (let h of this.parsedHeaders) {
          h.active = false;
          h.sort = 1;
        }
        header.active = true;
      }
      
      this.sortBy = header.key;
      this.order = header.sort;
    }
  },
  computed : {
    paginationLabel () {
      const startNumber = (this.currStep - 1) * this.pagination;
      const stopNumber = startNumber + this.filteredValues.length;
      
      return `${startNumber + 1}-${stopNumber} of ${this.values.length}`;
    },
    filteredValues () {
      
      let data = this.values.slice();
      let sortBy = this.sortBy;
      let order = this.order;
      
      if (sortBy) {
        data = data.sort(function (a, b) {
          a = a[sortBy];
          b = b[sortBy];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      
      if (this.pagination > 0) {
        data = data.slice(this.pagination * (this.currStep - 1), this.pagination * this.currStep);
      }

      return data;
    }
  },
  ready () {
    const defaultHeader = {
      key : '',
      sort : 1,
      active : false,
      editable : false,
      width : 'auto'
    };
    
    for (let header of this.headers) {
      
      let tempHeader;
      let tempValue;
      let colIsNumber;
      
      if (typeof header === 'object' && header !== null) {
        tempHeader = Object.assign({}, header);
      } else {
        tempHeader = { key : header };
      }
      
      tempValue = this.values[0] && this.values[0][tempHeader.key];
      
      colIsNumber = typeof tempValue === 'number' && !isNaN(tempValue);
      
      this.parsedHeaders.push(
        Object.assign({ type : colIsNumber ? 'numeric' : 'text' }, defaultHeader, tempHeader)
      );

    }
    
    if (this.pagination > 0) {
      this.maxSteps = Math.ceil(this.values.length / this.pagination);
      this.currStep = 1;
    }
  },
  data () {
    return {
      sortBy : '',
      order : 1,
      parsedHeaders : [],
      maxSteps : -1,
      currStep : -1
    };
  },
  components : {
    'plum-icon' : Icon,
    'plum-button' : Button
  }
};
