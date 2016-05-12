import utils from '../utils/utils.js';
import './Resizable.css';

export default {
  params : ['width', 'height', 'resDisabled', 'resAxis'],
  paramWatchers : {
    resAxis (val) {
      utils.dom.each(this.hitboxes, (el, idx) => {
        if (!val.match(el.getAttribute('plum-axis'))) {
          utils.dom.addClass(el, 'plum-resizable__hitbox--hidden');
        } else {
          utils.dom.removeClass(el, 'plum-resizable__hitbox--hidden');
        }
      });
    },
    resDisabled (val) {
      if (val) {
        utils.dom.removeClass(this.el, 'plum-resizable--disabled');
      } else {
        utils.dom.addClass(this.el, 'plum-resizable--disabled');
      }
    }
  },
  bind () {
    let startX = 0;
    let startY = 0;
    let startWidth = 0;
    let startHeigth = 0;
    let axis = '';

    let toggleResizingCSS = _ => {
      let val = '';
      
      if (this.resizing) {
        val = 'none';
        utils.dom.addClass(this.el, 'plum-resizable--resizing');
      } else {
        utils.dom.removeClass(this.el, 'plum-resizable--resizing');
      }
      
      requestAnimationFrame(_ => {
        document.body.style.webkitUserSelect = val;
        document.body.style.MozUserSelect = val;
        document.body.style.msUserSelect = val;
      });
    };
    
    this.resizing = false;
    
    this.hitboxes = {
      right : document.createElement('div'),
      bottom : document.createElement('div'),
      corner : document.createElement('div')
    };
      
    this.startResize = (event) => {
      
      if (this.params.resDisabled) return;
      
      startX = event.clientX;
      startY = event.clientY;
      startWidth = this.width;
      startHeigth = this.height;
      
      axis = event.target.getAttribute('plum-axis') || '';
      
      this.resizing = true;
      toggleResizingCSS();
      
      window.addEventListener('mousemove', this.onResize);
      window.addEventListener('mouseup', this.endResize);
    };
    
    this.endResize = (event) => {
      this.resizing = false;
      toggleResizingCSS();
      
      window.removeEventListener('mousemove', this.onResize);
      window.removeEventListener('mouseup', this.endResize);
    };

    this.onResize = (event) => {
      if (axis.match('x')) this.width = startWidth + (event.clientX - startX);
      if (axis.match('y')) this.height = startHeigth + (event.clientY - startY);

      requestAnimationFrame(_ => {
        this.el.style.width = `${this.width}px`;
        this.el.style.height = `${this.height}px`;
      });
    };
    
    if (this.params.resDisabled) {
      utils.dom.addClass(this.el, 'plum-resizable--disabled');
    } else {
      utils.dom.removeClass(this.el, 'plum-resizable--disabled');
    }
    
    utils.dom.each(this.hitboxes, (el, idx) => {
      
      let axis = '';
      
      utils.dom.addClass(el, 'plum-resizable__hitbox');
      utils.dom.addClass(el, `plum-resizable__hitbox--${idx}`);
      
      switch (idx) {
        case  'right': axis = 'x'; break;
        case 'bottom': axis = 'y'; break;
        case 'corner': axis = 'xy'; break;
      }

      el.setAttribute('plum-axis', axis);
      el.addEventListener('mousedown', this.startResize);
      
      if (!this.params.resAxis.match(axis)) {
        utils.dom.addClass(el, 'plum-resizable__hitbox--hidden');
      }
    });

    utils.dom.addClass(this.el, 'plum-resizable');
    utils.dom.append(this.hitboxes, this.el);
    
    this.vm.$nextTick(_ => {
      let elRect = this.el.getBoundingClientRect();
      
      this.width = parseFloat(this.params.width) || elRect.width;
      this.height = parseFloat(this.params.height) || elRect.height;
      
      this.el.style.width = `${this.width}px`;
      this.el.style.height = `${this.height}px`;
    });
    
  },
  unbind () {
    utils.dom.removeClass(this.el, 'plum-resizable');
    utils.dom.each(this.hitboxes, (el, idx) => {
      el.removeEventListener('mousedown', this.startResize);
      this.el.removeChild(el);
    });
  }
};
