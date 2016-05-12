/* global NodeList */
/* global Node */

let dom = {
  each (els, fn) {
    if (Array.isArray(els) || els instanceof NodeList) {
      for (let i = 0; i < els.length; i++) {
        if (els instanceof Node) fn(els[i], i);
      }
    } else if (els instanceof Node) {
      fn(els, null);
    } else if (typeof els === 'object' && els !== null) {
      let keys = Object.keys(els);
      for (let key of keys) {
        if (els[key] instanceof Node) fn(els[key], key);
      }
    } else {
      console.warn('Not supported:', els);
    }
  },
  addClass (el, className) {
		if (el.classList) {
		  el.classList.add(className);
		} else {
		  el.className += ' ' + className;
		}
		return el;
	},
	removeClass (el, className) {
		if (el.classList) {
		  el.classList.remove(className);
		} else {
		  el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
		return el;
	},
	hasClass (el, className) {
		if (el.classList) {
			return el.classList.contains(className);
		} else {
		  return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		}
	},
  matches (el, selector) {
    const nodes = document.querySelectorAll(selector);
    if (nodes === null) return false;
    for (let i = 0; i < nodes.length; i++) {
      if (el === nodes[i]) return true;
    }
    return false;
  },
  closest (el, selector) {
    while (el && !dom.matches(el, selector)) {
      el = el.parentNode;
    }
    return el === document ? null : el;
  },
  append (els, parent) {
    let fragment = document.createDocumentFragment();
    
    dom.each(els, (el) => {
      fragment.appendChild(el);
    });
    
    return parent.appendChild(fragment);
  },
  isEmpty (el) {
    return el.innerHTML.replace(/<!--.+-->/ig, '').trim() === '';
  }
};

export default {
  dom
};