'use strict';

var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports, __commonjs_global), module.exports; }

var smoothScroll_min = __commonjs(function (module, exports, global) {
  /*! smooth-scroll v9.1.4 | (c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
  !function (e, t) {
    "function" == typeof define && define.amd ? define([], t(e)) : "object" == typeof exports ? module.exports = t(e) : e.smoothScroll = t(e);
  }("undefined" != typeof global ? global : __commonjs_global.window || __commonjs_global.global, function (e) {
    "use strict";
    var t,
        n,
        r,
        o,
        a,
        c = {},
        u = "querySelector" in document && "addEventListener" in e,
        i = { selector: "[data-scroll]", selectorHeader: "[data-scroll-header]", speed: 500, easing: "easeInOutCubic", offset: 0, updateURL: !0, callback: function () {} },
        l = function () {
      var e = {},
          t = !1,
          n = 0,
          r = arguments.length;"[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], n++);for (var o = function (n) {
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t && "[object Object]" === Object.prototype.toString.call(n[r]) ? e[r] = l(!0, e[r], n[r]) : e[r] = n[r]);
      }; r > n; n++) {
        var a = arguments[n];o(a);
      }return e;
    },
        s = function (e) {
      return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
    },
        f = function (e, t) {
      var n,
          r,
          o = t.charAt(0),
          a = "classList" in document.documentElement;for ("[" === o && (t = t.substr(1, t.length - 2), n = t.split("="), n.length > 1 && (r = !0, n[1] = n[1].replace(/"/g, "").replace(/'/g, ""))); e && e !== document && 1 === e.nodeType; e = e.parentNode) {
        if ("." === o) if (a) {
          if (e.classList.contains(t.substr(1))) return e;
        } else if (new RegExp("(^|\\s)" + t.substr(1) + "(\\s|$)").test(e.className)) return e;if ("#" === o && e.id === t.substr(1)) return e;if ("[" === o && e.hasAttribute(n[0])) {
          if (!r) return e;if (e.getAttribute(n[0]) === n[1]) return e;
        }if (e.tagName.toLowerCase() === t) return e;
      }return null;
    };c.escapeCharacters = function (e) {
      "#" === e.charAt(0) && (e = e.substr(1));for (var t, n = String(e), r = n.length, o = -1, a = "", c = n.charCodeAt(0); ++o < r;) {
        if (t = n.charCodeAt(o), 0 === t) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a += t >= 1 && 31 >= t || 127 == t || 0 === o && t >= 48 && 57 >= t || 1 === o && t >= 48 && 57 >= t && 45 === c ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t ? n.charAt(o) : "\\" + n.charAt(o);
      }return "#" + a;
    };var d = function (e, t) {
      var n;return "easeInQuad" === e && (n = t * t), "easeOutQuad" === e && (n = t * (2 - t)), "easeInOutQuad" === e && (n = .5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t), "easeInCubic" === e && (n = t * t * t), "easeOutCubic" === e && (n = --t * t * t + 1), "easeInOutCubic" === e && (n = .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e && (n = t * t * t * t), "easeOutQuart" === e && (n = 1 - --t * t * t * t), "easeInOutQuart" === e && (n = .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e && (n = t * t * t * t * t), "easeOutQuint" === e && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e && (n = .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), n || t;
    },
        m = function (e, t, n) {
      var r = 0;if (e.offsetParent) do r += e.offsetTop, e = e.offsetParent; while (e);return r = Math.max(r - t - n, 0), Math.min(r, p() - h());
    },
        h = function () {
      return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    },
        p = function () {
      return Math.max(e.document.body.scrollHeight, e.document.documentElement.scrollHeight, e.document.body.offsetHeight, e.document.documentElement.offsetHeight, e.document.body.clientHeight, e.document.documentElement.clientHeight);
    },
        g = function (e) {
      return e && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(e) : {};
    },
        b = function (t, n) {
      e.history.pushState && (n || "true" === n) && "file:" !== e.location.protocol && e.history.pushState(null, null, [e.location.protocol, "//", e.location.host, e.location.pathname, e.location.search, t].join(""));
    },
        v = function (e) {
      return null === e ? 0 : s(e) + e.offsetTop;
    };c.animateScroll = function (n, c, u) {
      var s = g(c ? c.getAttribute("data-options") : null),
          f = l(t || i, u || {}, s),
          h = "[object Number]" === Object.prototype.toString.call(n) ? !0 : !1,
          y = h ? null : "#" === n ? e.document.documentElement : e.document.querySelector(n);if (h || y) {
        var O = e.pageYOffset;r || (r = e.document.querySelector(f.selectorHeader)), o || (o = v(r));var S,
            I,
            H = h ? n : m(y, o, parseInt(f.offset, 10)),
            E = H - O,
            j = p(),
            w = 0;h || b(n, f.updateURL);var C = function (t, r, o) {
          var a = e.pageYOffset;(t == r || a == r || e.innerHeight + a >= j) && (clearInterval(o), h || y.focus(), f.callback(n, c));
        },
            L = function () {
          w += 16, S = w / parseInt(f.speed, 10), S = S > 1 ? 1 : S, I = O + E * d(f.easing, S), e.scrollTo(0, Math.floor(I)), C(I, H, a);
        },
            A = function () {
          clearInterval(a), a = setInterval(L, 16);
        };0 === e.pageYOffset && e.scrollTo(0, 0), A();
      }
    };var y = function (e) {
      if (0 === e.button && !e.metaKey && !e.ctrlKey) {
        var n = f(e.target, t.selector);if (n && "a" === n.tagName.toLowerCase()) {
          e.preventDefault();var r = c.escapeCharacters(n.hash);c.animateScroll(r, n, t);
        }
      }
    },
        O = function (e) {
      n || (n = setTimeout(function () {
        n = null, o = v(r);
      }, 66));
    };return c.destroy = function () {
      t && (e.document.removeEventListener("click", y, !1), e.removeEventListener("resize", O, !1), t = null, n = null, r = null, o = null, a = null);
    }, c.init = function (n) {
      u && (c.destroy(), t = l(i, n || {}), r = e.document.querySelector(t.selectorHeader), o = v(r), e.document.addEventListener("click", y, !1), r && e.addEventListener("resize", O, !1));
    }, c;
  });
});

var smoothScroll = smoothScroll_min && typeof smoothScroll_min === 'object' && 'default' in smoothScroll_min ? smoothScroll_min['default'] : smoothScroll_min;

var nav = document.querySelector('.navigation');
var navList = document.querySelector('.navigation__list');

var overlay = document.querySelector('.overlay');

function triggerActiveAnchor(event) {
  var target = event.target;
  if (target.classList.contains('navigation__list-anchor')) {
    if (!target.classList.contains('navigation__list-anchor--active')) {
      var currActive = navList.querySelector('.navigation__list-anchor--active');
      if (currActive !== null) {
        currActive.classList.remove('navigation__list-anchor--active');
      }
      target.classList.add('navigation__list-anchor--active');
      hideNav();
    }
  }
}

function showNav() {
  nav.classList.add('navigation--visible');
  overlay.classList.add('overlay--visible');
}

function hideNav() {
  nav.classList.remove('navigation--visible');
  overlay.classList.remove('overlay--visible');
}

navList.addEventListener('click', triggerActiveAnchor);
overlay.addEventListener('click', hideNav);

document.querySelector('.toolbar__button').addEventListener('click', showNav);

smoothScroll.init();
