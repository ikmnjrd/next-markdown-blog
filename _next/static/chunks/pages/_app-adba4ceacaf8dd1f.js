(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4142)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},c=r(6273),l=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),a=i.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,h=a.as,m=e.children,p=e.replace,v=e.shallow,y=e.scroll,g=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var b=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,x=o(u.useIntersection({rootMargin:"200px"}),2),w=x[0],j=x[1],_=i.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);i.default.useEffect((function(){var e=j&&r&&c.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,o=s[d+"%"+h+(t?"%"+t:"")];e&&!o&&f(n,d,h,{locale:t})}),[h,d,j,g,r,n]);var E={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:i}))}(e,n,d,h,p,v,y,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof g?g:n&&n.locale,S=n&&n.isLocaleDomain&&c.getDomainLocale(h,k,n&&n.locales,n&&n.domainLocales);E.href=S||c.addBasePath(c.addLocale(h,k,n&&n.defaultLocale))}return i.default.cloneElement(t,E)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,u=a.useRef(),s=o(a.useState(!1),2),f=s[0],d=s[1],h=o(a.useState(t?t.current:null),2),m=h[0],p=h[1],v=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{root:m,rootMargin:r}))}),[n,m,r,f]);return a.useEffect((function(){if(!c&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&p(t.current)}),[t]),[v,f]};var a=r(7294),i=r(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map},4142:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),o=r(9008),a=r(1664),i=r(7294);function c(e){var t=e.className,r=(0,i.useState)(!1),o=r[0],a=r[1];(0,i.useEffect)((function(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(a(!0),document.documentElement.classList.add("dark")):(a(!1),document.documentElement.classList.remove("dark"))}),[o]);return(0,n.jsx)("button",{onClick:function(){o?(localStorage.theme="light",a(!1)):(localStorage.theme="dark",a(!0))},className:t,"aria-label":"Toggle Theme",children:(0,n.jsx)("img",{width:"24px",height:"24px",className:"svg-icon md:w-10 hover:opacity-50 active:opacity-30",src:"/".concat(o?"nights_stay_white_24dp":"light_mode_white_24dp",".svg"),alt:"Dark Mode Status is "+o,"aria-hidden":"true"})})}function l(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,n.jsx)("header",{children:(0,n.jsxs)("div",{className:"mb-4 p-4 md:px-8 flex items-end justify-between",children:[(0,n.jsxs)("h1",{className:"col-start-1 col-end-6",children:[(0,n.jsx)(a.default,{href:"/",passHref:!0,children:(0,n.jsx)("a",{alt:"Home",className:"header-text md:text-5xl text-3xl font-serif decoration-dotted hover:opacity-50 hover:underline active:opacity-30",children:"ikmnjrd.github.io"})}),(0,n.jsx)(c,{className:"md:ml-3 ml-2"})]}),(0,n.jsx)("div",{className:"col-start-6 col-end-7",children:(0,n.jsx)(a.default,{href:"/tags",passHref:!0,children:(0,n.jsx)("a",{alt:"tag\u4e00\u89a7",className:"header-text md:text-3xl text-2xl font-serif decoration-dotted hover:opacity-50 hover:underline active:opacity-30",children:"Tags"})})})]})})}var u=function(e){e.children;var t=new Date;return(0,n.jsx)("footer",{className:"text-center py-5 text-sm text-newmo-300",role:"contentinfo",children:(0,n.jsxs)("p",{children:["\xa9\ufe0eikmnjrd - ",(0,n.jsx)("time",{dateTime:t.toString(),children:t.getFullYear()})]})})};r(906);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}var d=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,minimum-scale=1.0"})}),(0,n.jsx)(l,{}),(0,n.jsx)("main",{className:"max-w-2xl md:mx-auto mx-4",children:(0,n.jsx)(t,f({},r))}),(0,n.jsx)(u,{})]})}},906:function(){},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var r=e.O();_N_E=r}]);