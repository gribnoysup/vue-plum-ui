import Draggable from '../../directives/Draggable.js';

export default {
  data () {
    return {
      scroller : {
        width : 0,
        height : 0
      },
      content : {
        width : 0,
        height : 0
      },
      offset : {
        width : 0,
        height : 0
      },
      dragging : false,
      hovered : false
    };
  },
  ready () {
    
    let startOffset = 0;
    let startPos = 0;
    
    let toggleUserSelect = (val) => {
      let el = this.$el;
      
      requestAnimationFrame(_ => {
        el.style.webkitUserSelect = val;
        el.style.MozUserSelect = val;
        el.style.msUserSelect = val;
      });
    };
    
    let minMax = (val, min, max) => {
      val = Math.min(Math.max(val, min), max);
      return val;
    };
    
    let checkRect = (el, prev) => {
      let rect = el.getBoundingClientRect();
      if (prev.width !== rect.width) prev.width = rect.width;
      if (prev.height !== rect.height) prev.height = rect.height;
    };
    
    let checkRects = () => {
      if (this.$el) checkRect(this.$el, this.scroller);
      if (this.$els.scrollerContent) checkRect(this.$els.scrollerContent, this.content);
      requestAnimationFrame(checkRects);
    };
    
    let startMove = (event) => {
      this.dragging = true;
      this.$els.scrollerContent.style.willChange = 'transform';
      if (event.target === this.$els.verticalThumb) {
        startOffset = event.clientY;
        startPos = this.offset.height;
        window.addEventListener('mousemove', calcOffsetY);
      }
      if (event.target === this.$els.horizontalThumb) {
        startOffset = event.clientX;
        startPos = this.offset.width;
        window.addEventListener('mousemove', calcOffsetX);
      }
      window.addEventListener('mouseup', stopMove);
      toggleUserSelect('none');
    };
    
    let stopMove = (event) => {
      this.dragging = false;
      this.$els.scrollerContent.style.willChange = '';
      window.removeEventListener('mousemove', calcOffsetY);
      window.removeEventListener('mousemove', calcOffsetX);
      window.removeEventListener('mouseup', stopMove);
      toggleUserSelect('');
    };
    
    let calcOffsetX = (event) => {
      const newOffset = startPos + (event.clientX - startOffset) / this.scroller.width;
      this.offset.width = minMax(newOffset, 0, 1 - this.scroller.width / this.content.width);
    };
    
    let calcOffsetY = (event) => {
      const newOffset = startPos + (event.clientY - startOffset) / this.scroller.height;
      this.offset.height = minMax(newOffset, 0, 1 - this.scroller.height / this.content.height);
    };
    
    let onMouseEnter = () => {
      this.hovered = true;
    };
    
    let onMouseLeave = () => {
      this.hovered = false;
    };
    
    let calcClickOffsetX = (event) => {
      const rect = this.$els.horizontalTrack.getBoundingClientRect();
      const newOffset = (event.clientX - rect.left) / this.scroller.width;
      this.offset.width = minMax(newOffset, 0, 1 - this.scroller.width / this.content.width);
    };
    
    let calcClickOffsetY = (event) => {
      const rect = this.$els.verticalTrack.getBoundingClientRect();
      const newOffset = (event.clientY - rect.top) / this.scroller.height;
      this.offset.height = minMax(newOffset, 0, 1 - this.scroller.height / this.content.height);
    };
    
    let calcWheelOffsetX = (event) => {
      
      if (Math.abs(event.deltaX) === 0) return;
      
      const newOffset = minMax(this.offset.width + (event.deltaX / this.content.width), 0, 1 - this.scroller.width / this.content.width);

      if (newOffset !== this.offset.width) {
        event.preventDefault();
        event.stopPropagation();
        this.offset.width = newOffset;
      }
    };
    
    let calcWheelOffsetY = (event) => {
      
      if (Math.abs(event.deltaY) === 0) return;
      
      const newOffset = minMax(this.offset.height + (event.deltaY / this.content.height), 0, 1 - this.scroller.height / this.content.height);

      if (newOffset !== this.offset.height) {
        event.preventDefault();
        event.stopPropagation();
        this.offset.height = newOffset;
      }
    };
    
    this.$els.verticalThumb.addEventListener('mousedown', startMove);
    this.$els.horizontalThumb.addEventListener('mousedown', startMove);
    
    this.$els.verticalTrack.addEventListener('click', calcClickOffsetY);
    this.$els.horizontalTrack.addEventListener('click', calcClickOffsetX);
    
    this.$el.addEventListener('mouseenter', onMouseEnter);
    this.$el.addEventListener('mouseleave', onMouseLeave);
    
    this.$el.addEventListener('wheel', calcWheelOffsetY);
    this.$el.addEventListener('wheel', calcWheelOffsetX);
    
    checkRects();
  
  },
  computed : {
    verticalThumbStyles () {
      let height = 100 * this.scroller.height / this.content.height;
      let top = this.offset.height * 100;
      
      if (isNaN(height)) height = 0;
      if (isNaN(top)) top = 0;
      
      return {
        height : `${height}%`,
        top : `${top}%`
      };
    },
    horizontalThumbStyles () {
      let width = 100 * this.scroller.width / this.content.width;
      let left = this.offset.width * 100;
      
      if (isNaN(width)) width = 0;
      if (isNaN(left)) left = 0;
      
      return {
        width : `${width}%`,
        left : `${left}%`
      };
    },
    verticalScrollClass () {
      let cls = '';
      if ((this.scroller.height < this.content.height) && (this.dragging || this.hovered)) {
        cls += ' plum-scroller__track--active';
      } else {
        cls += ' plum-scroller__track--hidden';
      }
      if ((this.scroller.height < this.content.height) && (this.scroller.width >= this.content.width)) {
        cls += ' plum-scroller__track--single';
      }
      return cls.trim();
    },
    horisontalScrollClass () {
      let cls = '';
      if ((this.scroller.width < this.content.width) && (this.dragging || this.hovered)) {
        cls += ' plum-scroller__track--active';
      } else {
        cls += ' plum-scroller__track--hidden';
      }
      if ((this.scroller.width < this.content.width) && (this.scroller.height >= this.content.height)) {
        cls += ' plum-scroller__track--single';
      }
      return cls.trim();
    },
    contentStyle () {
      let top = this.content.height * this.offset.height;
      let left = this.content.width * this.offset.width;
      
      return {
        top : `-${top}px`,
        left : `-${left}px`
      };
    }
  }
};
