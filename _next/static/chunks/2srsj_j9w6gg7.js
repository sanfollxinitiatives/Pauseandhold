(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28298,(e,t,r)=>{e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useRouterBFCache",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t,r){let[o,a]=(0,n.useState)(()=>({tree:e,renderTree:t,stateKey:r,next:null}));if(o.tree===e)return o;let l={tree:e,renderTree:t,stateKey:r,next:null},u=1,i=o,d=l;for(;null!==i&&u<1;){if(i.stateKey===r){d.next=i.next;break}{u++;let e={tree:i.tree,renderTree:i.renderTree,stateKey:i.stateKey,next:null};d.next=e,d=e}i=i.next}return a(l),l}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},15783,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var n={createClientParams:function(){return a.createRenderParamsFromClient},createClientSearchParams:function(){return l.createRenderSearchParamsFromClient}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(97689),l=e.r(66996);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},47257,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ClientPageRoot",{enumerable:!0,get:function(){return d}});let n=e.r(43476),o=e.r(8372),a=e.r(71645),l=e.r(33906),u=e.r(61994),i=e.r(15783);function d({Component:e,serverProvidedParams:t}){let r,s;if(null!==t)r=t.searchParams,s=t.params;else{let e=(0,a.use)(o.LayoutRouterContext);s=null!==e?e.parentParams:{},r=(0,l.urlSearchParamsToParsedUrlQuery)((0,a.use)(u.SearchParamsContext))}let c=(0,i.createClientSearchParams)(r),f=(0,i.createClientParams)(s);return(0,n.jsx)(e,{params:f,searchParams:c})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},92825,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ClientSegmentRoot",{enumerable:!0,get:function(){return u}});let n=e.r(43476),o=e.r(8372),a=e.r(71645),l=e.r(15783);function u({Component:e,slots:t,serverProvidedParams:r}){let i;if(null!==r)i=r.params;else{let e=(0,a.use)(o.LayoutRouterContext);i=null!==e?e.parentParams:{}}let d=(0,l.createClientParams)(i);return(0,n.jsx)(e,{...t,params:d})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},68017,(e,t,r)=>{e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"HTTPAccessFallbackBoundary",{enumerable:!0,get:function(){return s}});let n=e.r(90809),o=e.r(43476),a=n._(e.r(71645)),l=e.r(90373),u=e.r(54394),i=e.r(8372);class d extends a.default.Component{constructor(e){super(e),this.state={triggeredStatus:void 0,previousPathname:e.pathname}}componentDidCatch(){}static getDerivedStateFromError(e){if((0,u.isHTTPAccessFallbackError)(e))return{triggeredStatus:(0,u.getAccessFallbackHTTPStatus)(e)};throw e}static getDerivedStateFromProps(e,t){return e.pathname!==t.previousPathname&&t.triggeredStatus?{triggeredStatus:void 0,previousPathname:e.pathname}:{triggeredStatus:t.triggeredStatus,previousPathname:e.pathname}}render(){let{notFound:e,forbidden:t,unauthorized:r,children:n}=this.props,{triggeredStatus:a}=this.state,l={[u.HTTPAccessErrorStatus.NOT_FOUND]:e,[u.HTTPAccessErrorStatus.FORBIDDEN]:t,[u.HTTPAccessErrorStatus.UNAUTHORIZED]:r};if(a){let i=a===u.HTTPAccessErrorStatus.NOT_FOUND&&e,d=a===u.HTTPAccessErrorStatus.FORBIDDEN&&t,s=a===u.HTTPAccessErrorStatus.UNAUTHORIZED&&r;return i||d||s?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"robots",content:"noindex"}),!1,l[a]]}):n}return n}}function s({notFound:e,forbidden:t,unauthorized:r,children:n}){let u=(0,l.useUntrackedPathname)(),c=(0,a.useContext)(i.MissingSlotContext);return e||t||r?(0,o.jsx)(d,{pathname:u,notFound:e,forbidden:t,unauthorized:r,missingSlots:c,children:n}):(0,o.jsx)(o.Fragment,{children:n})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},77694,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var n={InstantValidationBoundaryContext:function(){return a.InstantValidationBoundaryContext},PlaceValidationBoundaryBelowThisLevel:function(){return a.PlaceValidationBoundaryBelowThisLevel},RenderValidationBoundaryAtThisLevel:function(){return a.RenderValidationBoundaryAtThisLevel},SlotMarker:function(){return a.SlotMarker}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(22976);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},22976,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var n={InstantValidationBoundaryContext:function(){return a},PlaceValidationBoundaryBelowThisLevel:function(){return l},RenderValidationBoundaryAtThisLevel:function(){return u},SlotMarker:function(){return i}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=null,l=null,u=null,i=null;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},39756,(e,t,r)=>{e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={LoadingBoundaryProvider:function(){return _},default:function(){return C}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(90809),l=e.r(43476),u=a._(e.r(71645)),i=e.r(8372),d=e.r(1244),s=e.r(72383),c=e.r(91915),f=e.r(58442),p=e.r(68017);e.r(77694);let m=e.r(27828),b=e.r(28298);e.r(74180);let g=e.r(61994),h=e.r(33906),y=e.r(24988);function x(e,t,r){let n=e.getClientRects();if(0===n.length)return 0;let o=1/0;for(let e=0;e<n.length;e++){let t=n[e];t.top<o&&(o=t.top)}return o>=r()&&o<=t?1:2}function j(e){let t=u.default.useRef(null);return(0,u.useLayoutEffect)(()=>{let{scrollRef:r,renderTree:n}=e,o=r.forceScroll?r.scrollRef:n.data.scrollRef;if(null===o||!o.current)return;let a=null,l=r.hashFragment;if(l){if(null===(a="top"===l?document.body:document.getElementById(l)??document.getElementsByName(l)[0]??null)){o.current=!1,r.onlyHashChange=!1,r.hashFragment=null;return}}else a=t.current;if(null===a)return;let u=!1;(0,c.disableSmoothScrollDuringRouteTransition)(()=>{let e=document.documentElement,t=null,r=null,n=null,i=()=>{var r;let o,a;return null===n&&(r=t,n=!Number.isFinite(a=Number.parseFloat(o=getComputedStyle(e).scrollPaddingTop))||a<0?0:o.endsWith("px")?a:o.endsWith("%")?a/100*r:0),n};(l||(t=e.clientHeight,0!==(r=x(a,t,i))))&&((u=!0,o.current=!1,l)?a.scrollIntoView():1!==r&&(e.scrollTop=0,2===x(a,t,i)&&a.scrollIntoView()))},{dontForceLayout:!0,onlyHashChange:r.onlyHashChange}),u&&(r.onlyHashChange=!1,r.hashFragment=null)},void 0),(0,l.jsx)(u.Fragment,{ref:t,children:e.children})}function v({children:e,renderTree:t}){let r=(0,u.useContext)(i.GlobalLayoutRouterContext);if(!r)throw Error("invariant global layout router not mounted");return(0,l.jsx)(j,{scrollRef:r.scrollRef,renderTree:t,children:e})}function P({tree:e,segmentPath:t,debugNameContext:r,renderTree:n,params:o,url:a,isActive:s}){let c,f=(0,u.useContext)(i.GlobalLayoutRouterContext);if((0,u.useContext)(g.NavigationPromisesContext),!f)throw Error("invariant global layout router not mounted");let p=null!==n.data.prefetchRsc?n.data.prefetchRsc:n.data.rsc,m=(0,u.useDeferredValue)(n.data.rsc,p);if((0,y.isDeferredRsc)(m)){let e=(0,u.use)(m);null===e&&(0,u.use)(d.unresolvedThenable),c=e}else null===m&&(0,u.use)(d.unresolvedThenable),c=m;let b=c;return(0,l.jsx)(i.LayoutRouterContext.Provider,{value:{parentTree:e,parentRenderTree:n,parentSegmentPath:t,parentParams:o,parentLoadingData:null,debugNameContext:r,url:a,isActive:s},children:b})}function _({loading:e,children:t}){let r=(0,u.use)(i.LayoutRouterContext);return null===r?t:(0,l.jsx)(i.LayoutRouterContext.Provider,{value:{parentTree:r.parentTree,parentRenderTree:r.parentRenderTree,parentSegmentPath:r.parentSegmentPath,parentParams:r.parentParams,parentLoadingData:e,debugNameContext:r.debugNameContext,url:r.url,isActive:r.isActive},children:t})}function O({name:e,loading:t,children:r}){if(null!==t){let n=t[0],o=t[1],a=t[2];return(0,l.jsx)(u.Suspense,{name:e,fallback:(0,l.jsxs)(l.Fragment,{children:[o,a,n]}),children:r})}return(0,l.jsx)(l.Fragment,{children:r})}function C({parallelRouterKey:e,error:t,errorStyles:r,errorScripts:n,templateStyles:o,templateScripts:a,template:c,notFound:g,forbidden:y,unauthorized:x,segmentViewBoundaries:j}){let _=(0,u.useContext)(i.LayoutRouterContext);if(!_)throw Error("invariant expected layout router to be mounted");let{parentTree:T,parentRenderTree:M,parentSegmentPath:R,parentParams:S,parentLoadingData:F,url:w,isActive:B,debugNameContext:E}=_,k=T[0],N=null===R?[e]:R.concat([k,e]),A=T[1][e],D=M.slots?.get(e);(void 0===A||void 0===D)&&(0,u.use)(d.unresolvedThenable);let H=A[0],L=(0,m.createSegmentKey)(H),V=(0,b.useRouterBFCache)(A,D,L),I=[];do{let e=V.tree,u=V.renderTree,d=V.stateKey,m=e[0],b=S;if(Array.isArray(m)){let e=m[0],t=m[1],r=m[2],n=(0,h.getParamValueFromCacheKey)(t,r);null!==n&&(b={...S,[e]:n})}let j=function(e){if("/"===e)return"/";if("string"==typeof e)if("(__SLOT__)"===e)return;else return e+"/";return e[1]+"/"}(m),_=j??E,C=void 0===j?void 0:E,T=(0,l.jsxs)(v,{renderTree:u,children:[(0,l.jsx)(s.ErrorBoundary,{errorComponent:t,errorStyles:r,errorScripts:n,children:(0,l.jsx)(O,{name:C,loading:F,children:(0,l.jsx)(p.HTTPAccessFallbackBoundary,{notFound:g,forbidden:y,unauthorized:x,children:(0,l.jsxs)(f.RedirectBoundary,{children:[(0,l.jsx)(P,{url:w,tree:e,params:b,renderTree:u,segmentPath:N,debugNameContext:_,isActive:B&&d===L}),null]})})})}),null]}),M=(0,l.jsxs)(i.TemplateContext.Provider,{value:T,children:[o,a,c]},d);I.push(M),V=V.next}while(null!==V)return I}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},37457,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return u}});let n=e.r(90809),o=e.r(43476),a=n._(e.r(71645)),l=e.r(8372);function u(){let e=(0,a.useContext)(l.TemplateContext);return(0,o.jsx)(o.Fragment,{children:e})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},97689,(e,t,r)=>{e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"createRenderParamsFromClient",{enumerable:!0,get:function(){return n}});let n=e.r(6831).createRenderParamsFromClient;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},6831,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"createRenderParamsFromClient",{enumerable:!0,get:function(){return o}});let n=new WeakMap;function o(e){let t=n.get(e);if(t)return t;let r=Promise.resolve(e);return r.status="fulfilled",r.value=e,n.set(e,r),r}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},66996,(e,t,r)=>{e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"createRenderSearchParamsFromClient",{enumerable:!0,get:function(){return n}});let n=e.r(93504).createRenderSearchParamsFromClient;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},93504,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"createRenderSearchParamsFromClient",{enumerable:!0,get:function(){return o}});let n=new WeakMap;function o(e){let t=n.get(e);if(t)return t;let r=Promise.resolve(e);return r.status="fulfilled",r.value=e,n.set(e,r),r}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},27201,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"IconMark",{enumerable:!0,get:function(){return o}});let n=e.r(43476),o=()=>"u">typeof window?null:(0,n.jsx)("meta",{name:"«nxt-icon»"})},91915,(e,t,r)=>{function n(e,t={}){if(t.onlyHashChange)return void e();let r=document.documentElement;if("smooth"!==r.dataset.scrollBehavior)return void e();let o=r.style.scrollBehavior;r.style.scrollBehavior="auto",t.dontForceLayout||r.getClientRects(),e(),r.style.scrollBehavior=o}e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"disableSmoothScrollDuringRouteTransition",{enumerable:!0,get:function(){return n}})},63491,e=>{var t=e.i(43476),r=e.i(71645);e.s(["default",0,function({error:e,reset:n}){return(0,r.useEffect)(()=>{console.error("Global layout error caught:",e)},[e]),(0,t.jsxs)("html",{lang:"en",children:[(0,t.jsxs)("head",{children:[(0,t.jsx)("title",{children:"Pause & Hold — Reconnecting"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("style",{children:`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: #F8F6EF;
            color: #292C25;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            text-align: center;
          }
          .card {
            max-width: 520px;
            padding: 40px 32px;
            background: #ffffff;
            border: 1px solid #E4E2D8;
            border-radius: 28px;
            box-shadow: 0 10px 40px rgba(41, 44, 37, 0.05);
          }
          .heart-icon {
            width: 48px;
            height: 48px;
            margin: 0 auto 20px;
            color: #53664B;
          }
          .brand {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.35em;
            color: #53664B;
            font-weight: 600;
            margin-bottom: 12px;
          }
          .title {
            font-size: 32px;
            line-height: 1.15;
            font-weight: 300;
            color: #292C25;
            margin-bottom: 16px;
          }
          .title em {
            font-style: normal;
            color: #53664B;
          }
          .desc {
            font-size: 14px;
            line-height: 1.6;
            color: #575A51;
            margin-bottom: 24px;
          }
          .diagnostic {
            background: rgba(83, 102, 75, 0.08);
            border: 1px solid rgba(83, 102, 75, 0.2);
            border-radius: 12px;
            padding: 12px 16px;
            font-size: 12px;
            color: #3F4F39;
            margin-bottom: 24px;
            text-align: left;
            font-family: monospace;
            word-break: break-all;
          }
          .btn-group {
            display: flex;
            gap: 12px;
            justify-content: center;
            flex-wrap: wrap;
          }
          .btn-primary {
            background-color: #53664B;
            color: #F8F6EF;
            border: none;
            padding: 14px 28px;
            border-radius: 9999px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
            text-decoration: none;
          }
          .btn-primary:hover {
            background-color: #3F4F39;
          }
          .btn-secondary {
            background-color: transparent;
            color: #292C25;
            border: 1px solid rgba(41, 44, 37, 0.2);
            padding: 14px 28px;
            border-radius: 9999px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
            text-decoration: none;
          }
          .btn-secondary:hover {
            background-color: #EEEDE5;
          }
        `})]}),(0,t.jsx)("body",{children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("svg",{className:"heart-icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M12 21s-7.5-4.6-10-9.3C.3 8.2 2.3 4 6.3 4c2.2 0 3.7 1.3 4.6 2.6.3.4.9.4 1.2 0C13 5.3 14.5 4 16.7 4c4 0 6 4.2 4.3 7.7C19.5 16.4 12 21 12 21z"})}),(0,t.jsx)("p",{className:"brand",children:"Pause & Hold"}),(0,t.jsxs)("h1",{className:"title",children:["Reconnecting to ",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"your memories."})]}),(0,t.jsx)("p",{className:"desc",children:"A temporary browser cache or network update occurred. Click below to load the latest version."}),e?.message?(0,t.jsxs)("div",{className:"diagnostic",children:[(0,t.jsx)("strong",{children:"Notice:"})," ",e.message,e.digest?(0,t.jsxs)("div",{children:["Digest: ",e.digest]}):null]}):null,(0,t.jsxs)("div",{className:"btn-group",children:[(0,t.jsx)("button",{type:"button",className:"btn-primary",onClick:()=>{try{sessionStorage.clear(),localStorage.clear()}catch{}window.location.href=window.location.pathname+"?v="+Date.now()},children:"Refresh Page"}),(0,t.jsx)("a",{href:"/",className:"btn-secondary",children:"Go to Homepage"})]})]})})]})}])}])})();