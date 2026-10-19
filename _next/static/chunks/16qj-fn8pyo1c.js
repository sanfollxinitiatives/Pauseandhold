(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,63491,e=>{"use strict";var o=e.i(43476),r=e.i(71645);e.s(["default",0,function({error:e,reset:t}){return(0,r.useEffect)(()=>{console.error("Global layout error caught:",e)},[e]),(0,o.jsxs)("html",{lang:"en",children:[(0,o.jsxs)("head",{children:[(0,o.jsx)("title",{children:"Pause & Hold — Reconnecting"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("style",{children:`
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
        `})]}),(0,o.jsx)("body",{children:(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)("svg",{className:"heart-icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:(0,o.jsx)("path",{d:"M12 21s-7.5-4.6-10-9.3C.3 8.2 2.3 4 6.3 4c2.2 0 3.7 1.3 4.6 2.6.3.4.9.4 1.2 0C13 5.3 14.5 4 16.7 4c4 0 6 4.2 4.3 7.7C19.5 16.4 12 21 12 21z"})}),(0,o.jsx)("p",{className:"brand",children:"Pause & Hold"}),(0,o.jsxs)("h1",{className:"title",children:["Reconnecting to ",(0,o.jsx)("br",{}),(0,o.jsx)("em",{children:"your memories."})]}),(0,o.jsx)("p",{className:"desc",children:"A temporary browser cache or network update occurred. Click below to load the latest version."}),e?.message?(0,o.jsxs)("div",{className:"diagnostic",children:[(0,o.jsx)("strong",{children:"Notice:"})," ",e.message,e.digest?(0,o.jsxs)("div",{children:["Digest: ",e.digest]}):null]}):null,(0,o.jsxs)("div",{className:"btn-group",children:[(0,o.jsx)("button",{type:"button",className:"btn-primary",onClick:()=>{try{sessionStorage.clear(),localStorage.clear()}catch{}window.location.href=window.location.pathname+"?v="+Date.now()},children:"Refresh Page"}),(0,o.jsx)("a",{href:"/",className:"btn-secondary",children:"Go to Homepage"})]})]})})]})}])}]);