"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[947],{2705:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(3943).A)("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]])},5244:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(3943).A)("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]])},6715:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(3943).A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},6459:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(3943).A)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},8041:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(3943).A)("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]])},6897:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(3943).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},9510:(e,t,n)=>{n.d(t,{bm:()=>ti,UC:()=>tr,VY:()=>ta,hJ:()=>tn,ZL:()=>tt,bL:()=>e7,hE:()=>to,l9:()=>te});var r,o,a,i=n(6540),u=n.t(i,2);function c(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}var l=n(1071),s=n(4848),d=globalThis?.document?i.useLayoutEffect:()=>{},f=u["useId".toString()]||(()=>void 0),p=0;function m(e){let[t,n]=i.useState(f());return d(()=>{e||n(e=>e??String(p++))},[e]),e||(t?`radix-${t}`:"")}function v(e){let t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...e)=>t.current?.(...e),[])}var h=n(961),y=n(3362),g=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=i.forwardRef((e,n)=>{let{asChild:r,...o}=e,a=r?y.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,s.jsx)(a,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),b="dismissableLayer.update",E=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),w=i.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:u,onInteractOutside:d,onDismiss:f,...p}=e,m=i.useContext(E),[h,y]=i.useState(null),w=h?.ownerDocument??globalThis?.document,[,x]=i.useState({}),k=(0,l.s)(t,e=>y(e)),M=Array.from(m.layers),[S]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),R=M.indexOf(S),A=h?M.indexOf(h):-1,O=m.layersWithOutsidePointerEventsDisabled.size>0,D=A>=R,P=function(e,t=globalThis?.document){let n=v(e),r=i.useRef(!1),o=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!r.current){let r=function(){N("dismissableLayer.pointerDownOutside",n,a,{discrete:!0})},a={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=r,t.addEventListener("click",o.current,{once:!0})):r()}else t.removeEventListener("click",o.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...m.branches].some(e=>e.contains(t));!D||n||(a?.(e),d?.(e),e.defaultPrevented||f?.())},w),L=function(e,t=globalThis?.document){let n=v(e),r=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!r.current&&N("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...m.branches].some(e=>e.contains(t))||(u?.(e),d?.(e),e.defaultPrevented||f?.())},w);return!function(e,t=globalThis?.document){let n=v(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{A!==m.layers.size-1||(r?.(e),!e.defaultPrevented&&f&&(e.preventDefault(),f()))},w),i.useEffect(()=>{if(h)return n&&(0===m.layersWithOutsidePointerEventsDisabled.size&&(o=w.body.style.pointerEvents,w.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(h)),m.layers.add(h),C(),()=>{n&&1===m.layersWithOutsidePointerEventsDisabled.size&&(w.body.style.pointerEvents=o)}},[h,w,n,m]),i.useEffect(()=>()=>{h&&(m.layers.delete(h),m.layersWithOutsidePointerEventsDisabled.delete(h),C())},[h,m]),i.useEffect(()=>{let e=()=>x({});return document.addEventListener(b,e),()=>document.removeEventListener(b,e)},[]),(0,s.jsx)(g.div,{...p,ref:k,style:{pointerEvents:O?D?"auto":"none":void 0,...e.style},onFocusCapture:c(e.onFocusCapture,L.onFocusCapture),onBlurCapture:c(e.onBlurCapture,L.onBlurCapture),onPointerDownCapture:c(e.onPointerDownCapture,P.onPointerDownCapture)})});function C(){let e=new CustomEvent(b);document.dispatchEvent(e)}function N(e,t,n,{discrete:r}){let o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&o.addEventListener(e,t,{once:!0}),r)?o&&h.flushSync(()=>o.dispatchEvent(a)):o.dispatchEvent(a)}w.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(E),r=i.useRef(null),o=(0,l.s)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,s.jsx)(g.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var x="focusScope.autoFocusOnMount",k="focusScope.autoFocusOnUnmount",M={bubbles:!1,cancelable:!0},S=i.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...u}=e,[c,d]=i.useState(null),f=v(o),p=v(a),m=i.useRef(null),h=(0,l.s)(t,e=>d(e)),y=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let e=function(e){if(y.paused||!c)return;let t=e.target;c.contains(t)?m.current=t:O(m.current,{select:!0})},t=function(e){if(y.paused||!c)return;let t=e.relatedTarget;null===t||c.contains(t)||O(m.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&O(c)});return c&&n.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,c,y.paused]),i.useEffect(()=>{if(c){D.add(y);let e=document.activeElement;if(!c.contains(e)){let t=new CustomEvent(x,M);c.addEventListener(x,f),c.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(O(r,{select:t}),document.activeElement!==n)return}(R(c).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&O(c))}return()=>{c.removeEventListener(x,f),setTimeout(()=>{let t=new CustomEvent(k,M);c.addEventListener(k,p),c.dispatchEvent(t),t.defaultPrevented||O(e??document.body,{select:!0}),c.removeEventListener(k,p),D.remove(y)},0)}}},[c,f,p,y]);let b=i.useCallback(e=>{if(!n&&!r||y.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=R(e);return[A(t,e),A(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&O(a,{select:!0})):(e.preventDefault(),n&&O(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,y.paused]);return(0,s.jsx)(g.div,{tabIndex:-1,...u,ref:h,onKeyDown:b})});function R(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function A(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function O(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}S.displayName="FocusScope";var D=function(){let e=[];return{add(t){let n=e[0];t!==n&&n?.pause(),(e=P(e,t)).unshift(t)},remove(t){e=P(e,t),e[0]?.resume()}}}();function P(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var L=i.forwardRef((e,t)=>{let{container:n,...r}=e,[o,a]=i.useState(!1);d(()=>a(!0),[]);let u=n||o&&globalThis?.document?.body;return u?h.createPortal((0,s.jsx)(g.div,{...r,ref:t}),u):null});L.displayName="Portal";var T=e=>{let{present:t,children:n}=e,r=function(e){var t,n;let[r,o]=i.useState(),a=i.useRef({}),u=i.useRef(e),c=i.useRef("none"),[l,s]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},i.useReducer((e,t)=>n[e][t]??e,t));return i.useEffect(()=>{let e=j(a.current);c.current="mounted"===l?e:"none"},[l]),d(()=>{let t=a.current,n=u.current;if(n!==e){let r=c.current,o=j(t);e?s("MOUNT"):"none"===o||t?.display==="none"?s("UNMOUNT"):n&&r!==o?s("ANIMATION_OUT"):s("UNMOUNT"),u.current=e}},[e,s]),d(()=>{if(r){let e;let t=r.ownerDocument.defaultView??window,n=n=>{let o=j(a.current).includes(n.animationName);if(n.target===r&&o&&(s("ANIMATION_END"),!u.current)){let n=r.style.animationFillMode;r.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=n)})}},o=e=>{e.target===r&&(c.current=j(a.current))};return r.addEventListener("animationstart",o),r.addEventListener("animationcancel",n),r.addEventListener("animationend",n),()=>{t.clearTimeout(e),r.removeEventListener("animationstart",o),r.removeEventListener("animationcancel",n),r.removeEventListener("animationend",n)}}s("ANIMATION_END")},[r,s]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:i.useCallback(e=>{e&&(a.current=getComputedStyle(e)),o(e)},[])}}(t),o="function"==typeof n?n({present:r.isPresent}):i.Children.only(n),a=(0,l.s)(r.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(o));return"function"==typeof n||r.isPresent?i.cloneElement(o,{ref:a}):null};function j(e){return e?.animationName||"none"}T.displayName="Presence";var I=0;function F(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var _=function(){return(_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function W(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create,Object.create;var B=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),U="width-before-scroll-bar";function $(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var K="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,X=new WeakMap;function Y(e){return e}var H=function(e){void 0===e&&(e={});var t,n,r,o=(void 0===t&&(t=Y),n=[],r=!1,{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return o.options=_({async:!0,ssr:!1},e),o}(),Z=function(){},z=i.forwardRef(function(e,t){var n,r,o,a,u=i.useRef(null),c=i.useState({onScrollCapture:Z,onWheelCapture:Z,onTouchMoveCapture:Z}),l=c[0],s=c[1],d=e.forwardProps,f=e.children,p=e.className,m=e.removeScrollBar,v=e.enabled,h=e.shards,y=e.sideCar,g=e.noIsolation,b=e.inert,E=e.allowPinchZoom,w=e.as,C=e.gapMode,N=W(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=(n=[u,t],r=function(e){return n.forEach(function(t){return $(t,e)})},(o=(0,i.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,K(function(){var e=X.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||$(e,null)}),r.forEach(function(e){t.has(e)||$(e,o)})}X.set(a,n)},[n]),a),k=_(_({},N),l);return i.createElement(i.Fragment,null,v&&i.createElement(y,{sideCar:H,removeScrollBar:m,shards:h,noIsolation:g,inert:b,setCallbacks:s,allowPinchZoom:!!E,lockRef:u,gapMode:C}),d?i.cloneElement(i.Children.only(f),_(_({},k),{ref:x})):i.createElement(void 0===w?"div":w,_({},k,{className:p,ref:x}),f))});z.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},z.classNames={fullWidth:U,zeroRight:B};var V=function(e){var t=e.sideCar,n=W(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return i.createElement(r,_({},n))};V.isSideCarExport=!0;var q=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=a||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,i;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},J=function(){var e=q();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},G=function(){var e=J();return function(t){return e(t.styles,t.dynamic),null}},Q={left:0,top:0,right:0,gap:0},ee=function(e){return parseInt(e||"",10)||0},et=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[ee(n),ee(r),ee(o)]},en=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return Q;var t=et(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},er=G(),eo="data-scroll-locked",ea=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(eo,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(B," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(U," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(B," .").concat(B," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(U," .").concat(U," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(eo,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},ei=function(){var e=parseInt(document.body.getAttribute(eo)||"0",10);return isFinite(e)?e:0},eu=function(){i.useEffect(function(){return document.body.setAttribute(eo,(ei()+1).toString()),function(){var e=ei()-1;e<=0?document.body.removeAttribute(eo):document.body.setAttribute(eo,e.toString())}},[])},ec=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;eu();var a=i.useMemo(function(){return en(o)},[o]);return i.createElement(er,{styles:ea(a,!t,o,n?"":"!important")})},el=!1;if("undefined"!=typeof window)try{var es=Object.defineProperty({},"passive",{get:function(){return el=!0,!0}});window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch(e){el=!1}var ed=!!el&&{passive:!1},ef=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ep=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),em(e,r)){var o=ev(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},em=function(e,t){return"v"===e?ef(t,"overflowY"):ef(t,"overflowX")},ev=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eh=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,c=n.target,l=t.contains(c),s=!1,d=u>0,f=0,p=0;do{var m=ev(e,c),v=m[0],h=m[1]-m[2]-i*v;(v||h)&&em(e,c)&&(f+=h,p+=v),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(p)||!o&&-u>p)&&(s=!0),s},ey=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eg=function(e){return[e.deltaX,e.deltaY]},eb=function(e){return e&&"current"in e?e.current:e},eE=0,ew=[];let eC=(r=function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(eE++)[0],a=i.useState(G)[0],u=i.useRef(e);i.useEffect(function(){u.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eb),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var c=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!u.current.allowPinchZoom;var o,a=ey(e),i=n.current,c="deltaX"in e?e.deltaX:i[0]-a[0],l="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=ep(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ep(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var p=r.current||o;return eh(p,t,e,"h"===p?c:l,!0)},[]),l=i.useCallback(function(e){if(ew.length&&ew[ew.length-1]===a){var n="deltaY"in e?eg(e):ey(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(eb).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?c(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=i.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=i.useCallback(function(e){n.current=ey(e),r.current=void 0},[]),f=i.useCallback(function(t){s(t.type,eg(t),t.target,c(t,e.lockRef.current))},[]),p=i.useCallback(function(t){s(t.type,ey(t),t.target,c(t,e.lockRef.current))},[]);i.useEffect(function(){return ew.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",l,ed),document.addEventListener("touchmove",l,ed),document.addEventListener("touchstart",d,ed),function(){ew=ew.filter(function(e){return e!==a}),document.removeEventListener("wheel",l,ed),document.removeEventListener("touchmove",l,ed),document.removeEventListener("touchstart",d,ed)}},[]);var m=e.removeScrollBar,v=e.inert;return i.createElement(i.Fragment,null,v?i.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,m?i.createElement(ec,{gapMode:e.gapMode}):null)},H.useMedium(r),V);var eN=i.forwardRef(function(e,t){return i.createElement(z,_({},e,{ref:t,sideCar:eC}))});eN.classNames=z.classNames;var ex=new WeakMap,ek=new WeakMap,eM={},eS=0,eR=function(e){return e&&(e.host||eR(e.parentNode))},eA=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eR(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eM[n]||(eM[n]=new WeakMap);var a=eM[n],i=[],u=new Set,c=new Set(o),l=function(e){!e||u.has(e)||(u.add(e),l(e.parentNode))};o.forEach(l);var s=function(e){!e||c.has(e)||Array.prototype.forEach.call(e.children,function(e){if(u.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,c=(ex.get(e)||0)+1,l=(a.get(e)||0)+1;ex.set(e,c),a.set(e,l),i.push(e),1===c&&o&&ek.set(e,!0),1===l&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),u.clear(),eS++,function(){i.forEach(function(e){var t=ex.get(e)-1,o=a.get(e)-1;ex.set(e,t),a.set(e,o),t||(ek.has(e)||e.removeAttribute(r),ek.delete(e)),o||e.removeAttribute(n)}),--eS||(ex=new WeakMap,ex=new WeakMap,ek=new WeakMap,eM={})}},eO=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]),a=t||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),eA(o,a,n,"aria-hidden")):function(){return null}},eD="Dialog",[eP,eL]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>i.createContext(e));return function(n){let r=n?.[e]||t;return i.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=i.createContext(r),a=n.length;n=[...n,r];let u=t=>{let{scope:n,children:r,...u}=t,c=n?.[e]?.[a]||o,l=i.useMemo(()=>u,Object.values(u));return(0,s.jsx)(c.Provider,{value:l,children:r})};return u.displayName=t+"Provider",[u,function(n,u){let c=u?.[e]?.[a]||o,l=i.useContext(c);if(l)return l;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(eD),[eT,ej]=eP(eD),eI=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:u=!0}=e,c=i.useRef(null),l=i.useRef(null),[d=!1,f]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=i.useState(e),[r]=n,o=i.useRef(r),a=v(t);return i.useEffect(()=>{o.current!==r&&(a(r),o.current=r)},[r,o,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,u=a?e:r,c=v(n);return[u,i.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else o(t)},[a,e,o,c])]}({prop:r,defaultProp:o,onChange:a});return(0,s.jsx)(eT,{scope:t,triggerRef:c,contentRef:l,contentId:m(),titleId:m(),descriptionId:m(),open:d,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(e=>!e),[f]),modal:u,children:n})};eI.displayName=eD;var eF="DialogTrigger",e_=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(eF,n),a=(0,l.s)(t,o.triggerRef);return(0,s.jsx)(g.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e4(o.open),...r,ref:a,onClick:c(e.onClick,o.onOpenToggle)})});e_.displayName=eF;var eW="DialogPortal",[eB,eU]=eP(eW,{forceMount:void 0}),e$=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=ej(eW,t);return(0,s.jsx)(eB,{scope:t,forceMount:n,children:i.Children.map(r,e=>(0,s.jsx)(T,{present:n||a.open,children:(0,s.jsx)(L,{asChild:!0,container:o,children:e})}))})};e$.displayName=eW;var eK="DialogOverlay",eX=i.forwardRef((e,t)=>{let n=eU(eK,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=ej(eK,e.__scopeDialog);return a.modal?(0,s.jsx)(T,{present:r||a.open,children:(0,s.jsx)(eY,{...o,ref:t})}):null});eX.displayName=eK;var eY=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(eK,n);return(0,s.jsx)(eN,{as:y.DX,allowPinchZoom:!0,shards:[o.contentRef],children:(0,s.jsx)(g.div,{"data-state":e4(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eH="DialogContent",eZ=i.forwardRef((e,t)=>{let n=eU(eH,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=ej(eH,e.__scopeDialog);return(0,s.jsx)(T,{present:r||a.open,children:a.modal?(0,s.jsx)(ez,{...o,ref:t}):(0,s.jsx)(eV,{...o,ref:t})})});eZ.displayName=eH;var ez=i.forwardRef((e,t)=>{let n=ej(eH,e.__scopeDialog),r=i.useRef(null),o=(0,l.s)(t,n.contentRef,r);return i.useEffect(()=>{let e=r.current;if(e)return eO(e)},[]),(0,s.jsx)(eq,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:c(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:c(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:c(e.onFocusOutside,e=>e.preventDefault())})}),eV=i.forwardRef((e,t)=>{let n=ej(eH,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return(0,s.jsx)(eq,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eq=i.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...u}=e,c=ej(eH,n),d=i.useRef(null),f=(0,l.s)(t,d);return i.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??F()),document.body.insertAdjacentElement("beforeend",e[1]??F()),I++,()=>{1===I&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),I--}},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(S,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:(0,s.jsx)(w,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":e4(c.open),...u,ref:f,onDismiss:()=>c.onOpenChange(!1)})}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e8,{titleId:c.titleId}),(0,s.jsx)(e9,{contentRef:d,descriptionId:c.descriptionId})]})]})}),eJ="DialogTitle",eG=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(eJ,n);return(0,s.jsx)(g.h2,{id:o.titleId,...r,ref:t})});eG.displayName=eJ;var eQ="DialogDescription",e0=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(eQ,n);return(0,s.jsx)(g.p,{id:o.descriptionId,...r,ref:t})});e0.displayName=eQ;var e1="DialogClose",e2=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(e1,n);return(0,s.jsx)(g.button,{type:"button",...r,ref:t,onClick:c(e.onClick,()=>o.onOpenChange(!1))})});function e4(e){return e?"open":"closed"}e2.displayName=e1;var e3="DialogTitleWarning",[e5,e6]=function(e,t){let n=i.createContext(t),r=e=>{let{children:t,...r}=e,o=i.useMemo(()=>r,Object.values(r));return(0,s.jsx)(n.Provider,{value:o,children:t})};return r.displayName=e+"Provider",[r,function(r){let o=i.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}(e3,{contentName:eH,titleName:eJ,docsSlug:"dialog"}),e8=({titleId:e})=>{let t=e6(e3),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&!document.getElementById(e)&&console.error(n)},[n,e]),null},e9=({contentRef:e,descriptionId:t})=>{let n=e6("DialogDescriptionWarning"),r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;return i.useEffect(()=>{let n=e.current?.getAttribute("aria-describedby");t&&n&&!document.getElementById(t)&&console.warn(r)},[r,e,t]),null},e7=eI,te=e_,tt=e$,tn=eX,tr=eZ,to=eG,ta=e0,ti=e2}}]);