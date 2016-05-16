import utils from '../utils/utils.js';

export default {
  params : ['container', 'handle', 'top', 'left', 'dragDisabled', 'dragAxis'],
  paramWatchers : {
    dragDisabled (val) {
      if (val) {
        utils.dom.addClass(this.el, 'plum-draggable--disabled');
      } else {
        utils.dom.removeClass(this.el, 'plum-draggable--disabled');
      }
    }
  },
  bind () {

    function checkBounds (value, min, max) {
      return Math.min(Math.max(value, min), max);
    }
    
    function getBounds (container, el) {
      const contRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const contStyle = getComputedStyle(container);
      const styles = ['borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
      
      let borderSizes = {
        borderLeftWidth : 0,
        borderRightWidth : 0,
        borderTopWidth : 0,
        borderBottomWidth : 0
      };
      
      for (let style of styles) {
        let val = parseFloat(contStyle[style]);
        borderSizes[style] = isNaN(val) ? 0 : val;
      }
      
      return {
        minX : contRect.left - elRect.left + borderSizes.borderLeftWidth,
        maxX : contRect.right - elRect.right - borderSizes.borderRightWidth,
        minY : contRect.top - elRect.top + borderSizes.borderTopWidth,
        maxY : contRect.bottom - elRect.bottom - borderSizes.borderBottomWidth
      };
    }
    
    let startX = 0;
    let startY = 0;
    let diffX = 0;
    let diffY = 0;
    
    let toggleDraggingCSS = _ => {
      let val = '';
      
      if (this.dragging) {
        val = 'none';
        utils.dom.addClass(this.el, 'plum-draggable--dragging');
      } else {
        utils.dom.removeClass(this.el, 'plum-draggable--dragging');
      }
      
      requestAnimationFrame(_ => {
        document.body.style.webkitUserSelect = val;
        document.body.style.MozUserSelect = val;
        document.body.style.msUserSelect = val;
      });
      
    };
    
    let top = parseInt(this.params.top, 10) || 0;
    let left = parseInt(this.params.left, 10) || 0;
    
    if (typeof this.params.dragAxis === 'undefined') {
      this.params.dragAxis = 'xy';
    }
    
    if (typeof this.params.dragDisabled === 'undefined') {
      this.params.dragDisabled = false;
    }

    this.bounds = null;
    
    this.dragging = false;
    
    this.elStyle = getComputedStyle(this.el);
    this.handleEl = this.el.querySelector(this.params.handle) || this.el;
    
    if (this.elStyle.position != 'relative' && this.elStyle.position != 'absolute') {
      this.el.style.position = 'relative';
    }
    
    this.el.style.float = 'left';
    this.el.style.top = `${top}px`;
    this.el.style.left = `${left}px`;
    
    this.startDrag = (event) => {
      if (this.params.dragDisabled) return;
      
      startX = event.clientX;
      startY = event.clientY;
      diffX = 0;
      diffY = 0;

      if (this.params.container) {
        this.containerEl = utils.dom.closest(this.el, this.params.container);

        if (this.containerEl !== null) {
          this.bounds = getBounds(this.containerEl, this.el);
        }
      }
      
      this.dragging = true;
      toggleDraggingCSS();
      
      this.el.style.willChange = 'transform';
      
      window.addEventListener('mousemove', this.onDrag);
      window.addEventListener('mouseup', this.stopDrag);
    };
    
    this.stopDrag = (event) => {
      top += diffY;
      left += diffX;
      
      this.dragging = false;
      toggleDraggingCSS();

      requestAnimationFrame(_ => {
        this.el.style.transform = '';
        this.el.style.left = `${left}px`;
        this.el.style.top = `${top}px`;
        this.el.style.willChange = '';
      });
      
      window.removeEventListener('mousemove', this.onDrag);
      window.removeEventListener('mouseup', this.stopDrag);
    };
    
    this.onDrag = (event) => {
      if (this.params.dragAxis.match('x')) diffX = event.clientX - startX;
      if (this.params.dragAxis.match('y')) diffY = event.clientY - startY;
      
      if (this.bounds !== null) {
        if (this.params.dragAxis.match('x')) diffX = checkBounds(diffX, this.bounds.minX, this.bounds.maxX);
        if (this.params.dragAxis.match('y')) diffY = checkBounds(diffY, this.bounds.minY, this.bounds.maxY);
      }
      
      requestAnimationFrame(_ => {
        this.el.style.transform = `translate3d(${diffX}px, ${diffY}px, 0)`;
      });
    };
    
    this.handleEl.addEventListener('mousedown', this.startDrag);
    
    utils.dom.addClass(this.el, 'plum-draggable');
  },
  unbind : function () {
    this.handleEl.removeEventListener('mousedown', this.startDrag);
    utils.dom.removeClass(this.el, 'plum-draggable');
  }
};
