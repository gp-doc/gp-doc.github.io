"use strict";(self.webpackChunkgp_doc_github_io=self.webpackChunkgp_doc_github_io||[]).push([[5002],{9858:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var r=i(6070),s=i(5710);const t={sidebar_position:1},c="\u8ba4\u8bc1(Authentication)",o={id:"auth/authentication",title:"\u8ba4\u8bc1(Authentication)",description:"\u8ba4\u8bc1\uff08Authentication\uff09\u662f\u4e00\u4e2a\u9a8c\u8bc1\u7528\u6237\u8eab\u4efd\u7684\u8fc7\u7a0b, \u7528\u4e8e\u786e\u8ba4\u7528\u6237\u662f\u5426\u4e3a\u5176\u58f0\u79f0\u7684\u4e3b\u4f53, \u7528\u4ee5\u786e\u4fdd\u540e\u7eed\u64cd\u4f5c\u7684\u5b89\u5168\u6027\u548c\u5408\u6cd5\u6027.",source:"@site/docs/auth/authentication.md",sourceDirName:"auth",slug:"/auth/authentication",permalink:"/docs/auth/authentication",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u8ba4\u8bc1\u548c\u6388\u6743",permalink:"/docs/category/\u8ba4\u8bc1\u548c\u6388\u6743"},next:{title:"\u6388\u6743(Authorization)",permalink:"/docs/auth/authorization"}},a={},l=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u521d\u59cb\u5316\u7ba1\u7406\u5458(\u5f00\u53d1\u73af\u5883)",id:"\u521d\u59cb\u5316\u7ba1\u7406\u5458\u5f00\u53d1\u73af\u5883",level:2},{value:"\u8ba4\u8bc1\u62e6\u622a",id:"\u8ba4\u8bc1\u62e6\u622a",level:2},{value:"\u767b\u9646",id:"\u767b\u9646",level:2},{value:"JWT \u8ba4\u8bc1",id:"jwt-\u8ba4\u8bc1",level:2},{value:"JWT \u914d\u7f6e",id:"jwt-\u914d\u7f6e",level:2},{value:"Basic \u8ba4\u8bc1",id:"basic-\u8ba4\u8bc1",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u8ba4\u8bc1authentication",children:"\u8ba4\u8bc1(Authentication)"}),"\n",(0,r.jsx)(e.p,{children:"\u8ba4\u8bc1\uff08Authentication\uff09\u662f\u4e00\u4e2a\u9a8c\u8bc1\u7528\u6237\u8eab\u4efd\u7684\u8fc7\u7a0b, \u7528\u4e8e\u786e\u8ba4\u7528\u6237\u662f\u5426\u4e3a\u5176\u58f0\u79f0\u7684\u4e3b\u4f53, \u7528\u4ee5\u786e\u4fdd\u540e\u7eed\u64cd\u4f5c\u7684\u5b89\u5168\u6027\u548c\u5408\u6cd5\u6027."}),"\n",(0,r.jsxs)(e.p,{children:["Graphoenix \u7ed3\u5408 GraphQL \u7279\u6027\u5bf9\u8ba4\u8bc1\u548c\u6388\u6743\u7b49\u5b89\u5168\u7279\u6027\u63d0\u4f9b\u5168\u9762\u652f\u6301, \u57fa\u4e8e ",(0,r.jsx)(e.a,{href:"https://github.com/jakartaee/inject",children:"JWT"})," \u548c ",(0,r.jsx)(e.a,{href:"https://casbin.org/",children:"Casbin"})," \u5b9e\u73b0\u8f7b\u91cf\u7ea7\u5b89\u5168\u6846\u67b6: ",(0,r.jsx)(e.a,{href:"https://github.com/doukai/graphence",children:(0,r.jsx)(e.strong,{children:"Graphence"})})]}),"\n",(0,r.jsx)(e.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,r.jsx)(e.p,{children:"\u6dfb\u52a0\u4f9d\u8d56"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-gradle",children:"repositories {\r\n    mavenCentral()\r\n    // highlight-start\r\n    jcenter()\r\n    // highlight-end\r\n}\r\n\r\ndependencies {\r\n    // highlight-start\r\n    implementation 'org.graphoenix:graphence-core:0.1.2'\r\n    implementation 'org.graphoenix:graphence-security:0.1.2'\r\n    // highlight-end\r\n\r\n    // highlight-start\r\n    annotationProcessor 'org.graphoenix:graphence-core:0.1.2'\r\n    // highlight-end\r\n\r\n    // ...\r\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u521d\u59cb\u5316\u7ba1\u7406\u5458\u5f00\u53d1\u73af\u5883",children:"\u521d\u59cb\u5316\u7ba1\u7406\u5458(\u5f00\u53d1\u73af\u5883)"}),"\n",(0,r.jsxs)(e.p,{children:["\u5f00\u53d1\u73af\u5883\u4e0b\u9700\u8981\u7ba1\u7406\u5458\u8d26\u53f7\u521d\u59cb\u5316\u89d2\u8272\u548c\u7528\u6237, \u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"security.rootUser"})," \u548c ",(0,r.jsx)(e.code,{children:"security.rootPassword"})," \u914d\u7f6e\u7ba1\u7406\u5458\u8d26\u6237\u548c\u5bc6\u7801"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-conf",children:'security {\r\n  rootUser = "root"\r\n  rootPassword = "root"\r\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u8ba4\u8bc1\u62e6\u622a",children:"\u8ba4\u8bc1\u62e6\u622a"}),"\n",(0,r.jsx)(e.p,{children:"\u6ca1\u6709 JWT \u4ee4\u724c\u7684\u8bf7\u6c42\u90fd\u4f1a\u88ab Graphence \u62e6\u622a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:"{\r\n  userList {\r\n    id\r\n    name\r\n  }\r\n}\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\r\n  "errors": [\r\n    {\r\n      "message": "-40100: unauthorized",\r\n      "locations": null,\r\n      "path": null,\r\n      "extensions": {\r\n        "timestamp": "2024-08-09T16:27:43.179284",\r\n        "code": -40100\r\n      }\r\n    }\r\n  ]\r\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u767b\u9646",children:"\u767b\u9646"}),"\n",(0,r.jsxs)(e.p,{children:["\u4f7f\u7528\u53d8\u66f4 ",(0,r.jsx)(e.code,{children:"login"})," \u65b9\u6cd5\u767b\u9646, \u4f20\u5165\u8d26\u6237(login)\u548c\u5bc6\u7801(password)"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:'mutation {\r\n  login(login: "root", password: "root")\r\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u8ba4\u8bc1\u6210\u529f\u540e\u5c06\u8fd4\u56de JWT \u4ee4\u724c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "login": "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZ3JhcGhvZW5peC5pbyIsInN1YiI6IjEiLCJmdWxsX25hbWUiOiJyb290IiwiZ3JvdXBzIjpbXSwicm9sZXMiOlsiMSJdLCJwZXJtaXNzaW9uX3R5cGVzIjpbXSwiaXNfcm9vdCI6dHJ1ZSwiaWF0IjoxNzIzMTkyOTEwLCJleHAiOjE3MjMxOTY1MTB9.6GVW3owkqGoxw3F3SwAmQwEtzV__8ly4PAv03uAri90"\r\n  }\r\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"jwt-\u8ba4\u8bc1",children:"JWT \u8ba4\u8bc1"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728 Headers \u4e2d\u52a0\u5165 JWT \u4ee4\u724c: ",(0,r.jsx)(e.code,{children:"Authorization: Bearer YOUR-JWT-TOKEN"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\r\n  "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZ3JhcGhvZW5peC5pbyIsInN1YiI6IjEiLCJmdWxsX25hbWUiOiJyb290IiwiZmFtaWx5X25hbWUiOiIyIiwiZ3JvdXBzIjpbXSwicm9sZXMiOlsiMSIsIjIiXSwicGVybWlzc2lvbl90eXBlcyI6W10sImlzX3Jvb3QiOnRydWUsImlhdCI6MTcyMzIxMjA3NiwiZXhwIjoxNzIzMjE1Njc2fQ.P-Z9rt3NEpKDaPG_QG_n3Nah2sKedAEy35b2k62GW58"\r\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"jwt-\u914d\u7f6e",children:"JWT \u914d\u7f6e"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-conf",children:'jwt {\r\n  issuer = "http://graphoenix.org"  # \u7b7e\u53d1\u4eba\r\n  algorithm = "HS256"               # HS256 / HS384 / HS512\r\n  validityPeriod = 3600             # \u6709\u6548\u671f(\u79d2)\r\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"basic-\u8ba4\u8bc1",children:"Basic \u8ba4\u8bc1"}),"\n",(0,r.jsxs)(e.p,{children:["\u4f7f\u7528\u914d\u7f6e ",(0,r.jsx)(e.code,{children:"security.basicAuthentication"})," \u5f00\u542f Basic \u8ba4\u8bc1"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-conf",children:"security {\r\n  basicAuthentication = true\r\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5728 Headers \u4e2d\u52a0\u5165 Basic \u4ee4\u724c: ",(0,r.jsx)(e.code,{children:"Authorization: Basic YOUR-BASIC-TOKEN"})]}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u8d26\u53f7: ",(0,r.jsx)(e.code,{children:"root"})," \u5bc6\u7801: ",(0,r.jsx)(e.code,{children:"root"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u4ee4\u724c\u5185\u5bb9: ",(0,r.jsx)(e.code,{children:"root:root"})]}),"\n",(0,r.jsxs)(e.li,{children:["Base64 \u7f16\u7801\u4ee4\u724c\u5185\u5bb9: ",(0,r.jsx)(e.code,{children:"cm9vdDpyb290"})]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\r\n  "Authorization": "Basic cm9vdDpyb290"\r\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},5710:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>o});var r=i(758);const s={},t=r.createContext(s);function c(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);