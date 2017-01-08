"use strict"
function __commonjs(t,e){return e={exports:{}},t(e,e.exports,__commonjs_global),e.exports}function triggerActiveAnchor(t){var e=t.target
if(e.classList.contains("navigation__list-anchor")&&!e.classList.contains("navigation__list-anchor--active")){var n=navList.querySelector(".navigation__list-anchor--active")
null!==n&&n.classList.remove("navigation__list-anchor--active"),e.classList.add("navigation__list-anchor--active"),hideNav()}}function showNav(){nav.classList.add("navigation--visible"),overlay.classList.add("overlay--visible")}function hideNav(){nav.classList.remove("navigation--visible"),overlay.classList.remove("overlay--visible")}var __commonjs_global="undefined"!=typeof window?window:"undefined"!=typeof global?global:this,smoothScroll_min=__commonjs(function(t,e,n){!function(n,o){"function"==typeof define&&define.amd?define([],o(n)):"object"==typeof e?t.exports=o(n):n.smoothScroll=o(n)}(void 0!==n?n:__commonjs_global.window||__commonjs_global.global,function(t){var e,n,o,a,r,i={},c="querySelector"in document&&"addEventListener"in t,l={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},s=function(){var t={},e=!1,n=0,o=arguments.length
"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++)
for(var a=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e&&"[object Object]"===Object.prototype.toString.call(n[o])?t[o]=s(!0,t[o],n[o]):t[o]=n[o])};o>n;n++){var r=arguments[n]
a(r)}return t},u=function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},f=function(t,e){var n,o,a=e.charAt(0),r="classList"in document.documentElement
for("["===a&&(e=e.substr(1,e.length-2),n=e.split("="),n.length>1&&(o=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));t&&t!==document&&1===t.nodeType;t=t.parentNode){if("."===a)if(r){if(t.classList.contains(e.substr(1)))return t}else if(RegExp("(^|\\s)"+e.substr(1)+"(\\s|$)").test(t.className))return t
if("#"===a&&t.id===e.substr(1))return t
if("["===a&&t.hasAttribute(n[0])){if(!o)return t
if(t.getAttribute(n[0])===n[1])return t}if(t.tagName.toLowerCase()===e)return t}return null}
i.escapeCharacters=function(t){"#"===t.charAt(0)&&(t=t.substr(1))
for(var e,n=t+"",o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(e=n.charCodeAt(a),0===e)throw new InvalidCharacterError("Invalid character: the input contains U+0000.")
r+=e>=1&&31>=e||127==e||0===a&&e>=48&&57>=e||1===a&&e>=48&&57>=e&&45===i?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&57>=e||e>=65&&90>=e||e>=97&&122>=e?n.charAt(a):"\\"+n.charAt(a)}return"#"+r}
var d=function(t,e){var n
return"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=.5>e?2*e*e:-1+(4-2*e)*e),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=.5>e?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=.5>e?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=.5>e?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e},m=function(t,e,n){var o=0
if(t.offsetParent)do o+=t.offsetTop,t=t.offsetParent
while(t)
return o=Math.max(o-e-n,0),Math.min(o,h()-v())},v=function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)},h=function(){return Math.max(t.document.body.scrollHeight,t.document.documentElement.scrollHeight,t.document.body.offsetHeight,t.document.documentElement.offsetHeight,t.document.body.clientHeight,t.document.documentElement.clientHeight)},g=function(t){return t&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(t):{}},p=function(e,n){t.history.pushState&&(n||"true"===n)&&"file:"!==t.location.protocol&&t.history.pushState(null,null,t.location.protocol+"//"+t.location.host+t.location.pathname+t.location.search+e)},b=function(t){return null===t?0:u(t)+t.offsetTop}
i.animateScroll=function(n,i,c){var u=g(i?i.getAttribute("data-options"):null),f=s(e||l,c||{},u),v="[object Number]"===Object.prototype.toString.call(n)?!0:!1,y=v?null:"#"===n?t.document.documentElement:t.document.querySelector(n)
if(v||y){var _=t.pageYOffset
o||(o=t.document.querySelector(f.selectorHeader)),a||(a=b(o))
var S,L,O=v?n:m(y,a,parseInt(f.offset,10)),j=O-_,w=h(),E=0
v||p(n,f.updateURL)
var I=function(e,o,a){var r=t.pageYOffset;(e==o||r==o||t.innerHeight+r>=w)&&(clearInterval(a),v||y.focus(),f.callback(n,i))},H=function(){E+=16,S=E/parseInt(f.speed,10),S=S>1?1:S,L=_+j*d(f.easing,S),t.scrollTo(0,Math.floor(L)),I(L,O,r)},A=function(){clearInterval(r),r=setInterval(H,16)}
0===t.pageYOffset&&t.scrollTo(0,0),A()}}
var y=function(t){if(0===t.button&&!t.metaKey&&!t.ctrlKey){var n=f(t.target,e.selector)
if(n&&"a"===n.tagName.toLowerCase()){t.preventDefault()
var o=i.escapeCharacters(n.hash)
i.animateScroll(o,n,e)}}},_=function(t){n||(n=setTimeout(function(){n=null,a=b(o)},66))}
return i.destroy=function(){e&&(t.document.removeEventListener("click",y,!1),t.removeEventListener("resize",_,!1),e=null,n=null,o=null,a=null,r=null)},i.init=function(n){c&&(i.destroy(),e=s(l,n||{}),o=t.document.querySelector(e.selectorHeader),a=b(o),t.document.addEventListener("click",y,!1),o&&t.addEventListener("resize",_,!1))},i})}),smoothScroll=smoothScroll_min&&"object"==typeof smoothScroll_min&&"default"in smoothScroll_min?smoothScroll_min["default"]:smoothScroll_min,nav=document.querySelector(".navigation"),navList=document.querySelector(".navigation__list"),overlay=document.querySelector(".overlay")
navList.addEventListener("click",triggerActiveAnchor),overlay.addEventListener("click",hideNav),document.querySelector(".toolbar__button").addEventListener("click",showNav),smoothScroll.init()
