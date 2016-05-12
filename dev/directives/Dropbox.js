import utils from '../utils/utils.js';

export default {
  twoWay : true,
  bind () {
    
    let events = 'drag dragstart dragend dragover dragenter dragleave drop'.split(' ');
    let enter = 'dragenter';
    let leave = 'dragleave dragend drop';
    let drop = 'drop';
    let count = 0;
    
    this.stopPrevent = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };
    
    this.toggleDragover = (event) => {
      
      if (enter.match(event.type)) {
        count++;
      } else if (leave.match(event.type)) {
        count--;
      }
      
      if (count > 0) {
        this.dragover = true;
        utils.dom.addClass(this.el, 'plum-dropbox--dragover');
      } else if (count == 0) {
        this.dragover = false;
        utils.dom.removeClass(this.el, 'plum-dropbox--dragover');
      }

    };
    
    this.handleDrop = (event) => {
      if (event.dataTransfer.files.length > 0) {
        this.set(event.dataTransfer.files);
      }
    };
    
    this.dragover = false;
    
    utils.dom.addClass(this.el, 'plum-dropbox');

    for (let event of events) {
      this.el.addEventListener(event, this.stopPrevent);
      
      if (enter.match(event) || leave.match(event)) {
        this.el.addEventListener(event, this.toggleDragover);
      }
      
      if (event === drop) {
        this.el.addEventListener(event, this.handleDrop);
      }
    }
    
  },
  unbind () {
    let events = 'drag dragstart dragend dragover dragenter dragleave drop'.split(' ');
    let enter = 'dragenter';
    let leave = 'dragleave dragend drop';
    let drop = 'drop';
    
    for (let event of events) {
      this.el.removeEventListener(event, this.stopPrevent);
      
      if (enter.match(event) || leave.match(event)) {
        this.el.removeEventListener(event, this.toggleDragover);
      }
      
      if (event === drop) {
        this.el.removeEventListener(event, this.handleDrop);
      }
    }
  }
};
