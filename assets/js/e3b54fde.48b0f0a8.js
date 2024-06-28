"use strict";(self.webpackChunkgp_doc_github_io=self.webpackChunkgp_doc_github_io||[]).push([[1815],{3064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(6070),i=n(5710);const s={sidebar_position:7},a="\u5c0f\u7ed3",o={id:"tutorial/summary",title:"\u5c0f\u7ed3",description:"\u622a\u81f3\u76ee\u524d\u4e3a\u6b62, \u4ece\u9879\u76ee\u7684\u521d\u59cb\u5316\u5f00\u59cb, \u4f9d\u6b21\u4ecb\u7ecd\u4e86\u7c7b\u578b\u5b9a\u4e49, \u589e\u5220\u6539\u67e5(CURD), \u63a7\u5236\u5c42(GPI), \u6301\u4e45\u5c42(GPA), \u5df2\u7ecf\u53ef\u4ee5\u6ee1\u8db3\u7cfb\u7edf\u5f00\u53d1\u7684\u57fa\u672c\u9700\u6c42",source:"@site/docs/tutorial/summary.md",sourceDirName:"tutorial",slug:"/tutorial/summary",permalink:"/docs/tutorial/summary",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"GPA(GraphQL Persistence API)",permalink:"/docs/tutorial/graphql-persistence-api"},next:{title:"\u4f01\u4e1a\u7ea7Java",permalink:"/docs/category/\u4f01\u4e1a\u7ea7java"}},c={},l=[];function d(e){const t={a:"a",h1:"h1",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u5c0f\u7ed3",children:"\u5c0f\u7ed3"}),"\n",(0,r.jsx)(t.p,{children:"\u622a\u81f3\u76ee\u524d\u4e3a\u6b62, \u4ece\u9879\u76ee\u7684\u521d\u59cb\u5316\u5f00\u59cb, \u4f9d\u6b21\u4ecb\u7ecd\u4e86\u7c7b\u578b\u5b9a\u4e49, \u589e\u5220\u6539\u67e5(CURD), \u63a7\u5236\u5c42(GPI), \u6301\u4e45\u5c42(GPA), \u5df2\u7ecf\u53ef\u4ee5\u6ee1\u8db3\u7cfb\u7edf\u5f00\u53d1\u7684\u57fa\u672c\u9700\u6c42"}),"\n",(0,r.jsx)(t.p,{children:"\u7cfb\u7edf\u9690\u85cf\u4e86\u6240\u6709\u7684\u7ec6\u679d\u672b\u8282, \u53ea\u9700\u5b9a\u4e49 GraphQL \u7c7b\u578b, \u7cfb\u7edf\u4f1a\u57fa\u4e8e\u6700\u4f73\u5b9e\u8df5\u81ea\u52a8\u521b\u5efa\u6570\u636e\u5e93, \u6784\u5efa\u53c2\u6570, \u521b\u5efa\u6620\u5c04\u5173\u7cfb\u7b49. \u5f53\u7136\u4e5f\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u573a\u666f\u8c03\u6574\u6784\u5efa\u8fc7\u7a0b, \u5728\u6307\u5357\u4e2d\u4f1a\u5177\u4f53\u4ecb\u7ecd\u8be6\u7ec6\u914d\u7f6e"}),"\n",(0,r.jsx)(t.p,{children:"\u6b63\u5982 GraphQL \u4e3b\u9875\u4e0a\u7684\u4ecb\u7ecd\u7684\u90a3\u6837"}),"\n",(0,r.jsx)(t.mermaid,{value:'flowchart LR\n    A["Describe your data"] --\x3e B["Ask for what you want"] --\x3e C["Get predictable results"]\n'}),"\n",(0,r.jsx)(t.p,{children:"\u63a5\u4e0b\u6765\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u9700\u8981\u9009\u62e9\u7279\u6027\u8fdb\u884c\u4e86\u89e3"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/category/%E4%BC%81%E4%B8%9A%E7%BA%A7java",children:"\u4f9d\u8d56\u6ce8\u5165(IOC) \u5207\u9762(AOP) \u914d\u7f6e(Config)"}),": \u4f01\u4e1a\u7ea7 Java(Jakarta EE)"]}),"\n",(0,r.jsx)(t.li,{children:"\u540c\u6b65\u548c\u5f02\u6b65: \u57fa\u4e8e Reactor \u7684 Async \u548c Await"}),"\n",(0,r.jsx)(t.li,{children:"\u5fae\u670d\u52a1\u548c gRPC: \u5355\u4f53\u548c\u5fae\u670d\u52a1\u53ef\u5207\u6362\u7684\u96c6\u88c5\u7bb1\u67b6\u6784"}),"\n",(0,r.jsx)(t.li,{children:"\u8ba2\u9605: \u57fa\u4e8e\u6d88\u606f\u961f\u5217\u7684\u548c SSE \u7684 GraphQL \u8ba2\u9605"}),"\n",(0,r.jsx)(t.li,{children:"\u9a8c\u8bc1: \u57fa\u4e8e JSON Schema \u534f\u8bae\u7684\u9a8c\u8bc1"}),"\n",(0,r.jsx)(t.li,{children:"\u9274\u6743\u548c\u6388\u6743: \u57fa\u4e8e JWT \u7684\u9274\u6743\u548c\u57fa\u4e8e Casbin \u7684\u6388\u6743"}),"\n",(0,r.jsx)(t.li,{children:"UI: \u57fa\u4e8e Svelte \u548c Tailwind CSS \u7684 UI \u7ec4\u4ef6"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5710:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(758);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);