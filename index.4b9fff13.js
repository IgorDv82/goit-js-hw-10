!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return u.default(e)||a.default(e)||l.default(e)||c.default()};var u=s(o("kMC0W")),a=s(o("7AJDX")),c=s(o("8CtQK")),l=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}var d="live_lQr2iV4ee1A2z34XnxsZz5Wmd8jzWg4IDxhs0mOad38EhpdGsyjrQkfwvoB8cSCV",f="https://api.thecatapi.com/v1";var p=document.querySelector(".breed-select"),y=document.querySelector(".cat-info");document.querySelector(".loader");function v(e){var t=e.url,r=e.breeds;y.innerHTML=r.map((function(e){var r=e.description,n=e.name;return'<div><img class="image" src="'.concat(t,'" alt="cat ').concat(n,'" style="max-width: 480px"></div><div><h2>').concat(n,'</h2><p class="info">').concat(r,"</p></div>")})).join("")}y.setAttribute("style","width: 100%; display: flex; gap: 15px "),p.setAttribute("style","display: none"),fetch("".concat(f,"/breeds?").concat(d)).then((function(e){return e.json()})).then((function(e){return function(e){p.innerHTML=e.map((function(e){var t=e.id,r=e.name;return'<option value="'.concat(t,'">').concat(r,"</option>")})).join("")}(e)})),p.setAttribute("style","display: block"),p.addEventListener("input",(function(t){var r,n=t.currentTarget.value;(r=n,fetch("".concat(f,"/images/search?api_key=").concat(d,"&breed_ids=").concat(r)).then((function(e){return e.json()}))).then((function(t){v.apply(void 0,e(i)(t))}))}))}();
//# sourceMappingURL=index.4b9fff13.js.map