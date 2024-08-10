"use strict";(self.webpackChunkgp_doc_github_io=self.webpackChunkgp_doc_github_io||[]).push([[6053],{631:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var s=n(6070),i=n(5710);const t={sidebar_position:4},o="\u9519\u8bef\u5904\u7406",d={id:"guide/errors",title:"\u9519\u8bef\u5904\u7406",description:"GraphQL \u7684\u9519\u8bef\u5904\u7406\u673a\u5236\u901a\u8fc7\u6807\u51c6\u5316\u7684\u9519\u8bef\u5bf9\u8c61(Errors)\u7ed3\u6784, \u786e\u4fdd\u4e86\u5ba2\u6237\u7aef\u53ef\u4ee5\u4e00\u81f4\u4e14\u53ef\u9760\u5730\u89e3\u6790\u548c\u5904\u7406\u6765\u81ea\u670d\u52a1\u5668\u7684\u9519\u8bef\u4fe1\u606f",source:"@site/docs/guide/errors.md",sourceDirName:"guide",slug:"/guide/errors",permalink:"/docs/guide/errors",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5173\u7cfb\u6620\u5c04",permalink:"/docs/guide/relationship"}},c={},l=[{value:"<strong>\u9519\u8bef\u5bf9\u8c61\u5b9a\u4e49</strong>",id:"\u9519\u8bef\u5bf9\u8c61\u5b9a\u4e49",level:2},{value:"Errors",id:"errors",level:3},{value:"Location",id:"location",level:3},{value:"Extensions",id:"extensions",level:3},{value:"GraphQL Errors \u6ce8\u518c",id:"graphql-errors-\u6ce8\u518c",level:2},{value:"HTTP \u5f02\u5e38\u72b6\u6001\u7801\u6ce8\u518c",id:"http-\u5f02\u5e38\u72b6\u6001\u7801\u6ce8\u518c",level:2}];function h(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...r.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u9519\u8bef\u5904\u7406",children:"\u9519\u8bef\u5904\u7406"}),"\n",(0,s.jsxs)(e.p,{children:["GraphQL \u7684\u9519\u8bef\u5904\u7406\u673a\u5236\u901a\u8fc7\u6807\u51c6\u5316\u7684",(0,s.jsx)(e.a,{href:"https://spec.graphql.org/October2021/#sec-Errors",children:"\u9519\u8bef\u5bf9\u8c61(Errors)"}),"\u7ed3\u6784, \u786e\u4fdd\u4e86\u5ba2\u6237\u7aef\u53ef\u4ee5\u4e00\u81f4\u4e14\u53ef\u9760\u5730\u89e3\u6790\u548c\u5904\u7406\u6765\u81ea\u670d\u52a1\u5668\u7684\u9519\u8bef\u4fe1\u606f"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9519\u8bef\u5bf9\u8c61\u5b9a\u4e49",children:(0,s.jsx)(e.strong,{children:"\u9519\u8bef\u5bf9\u8c61\u5b9a\u4e49"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728 GraphQL \u4e2d, \u6240\u6709\u7684\u9519\u8bef\u4fe1\u606f\u90fd\u4f1a\u88ab\u5305\u542b\u5728\u4e00\u4e2a\u540d\u4e3a errors \u7684\u5b57\u6bb5\u4e2d, \u8be5\u5b57\u6bb5\u662f GraphQL \u54cd\u5e94\u7684\u4e00\u90e8\u5206"}),"\n",(0,s.jsx)(e.h3,{id:"errors",children:"Errors"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5b57\u6bb5"}),(0,s.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"message"})}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"\u9519\u8bef\u7684\u63cf\u8ff0\u4fe1\u606f, \u662f\u6240\u6709\u9519\u8bef\u5bf9\u8c61\u5fc5\u987b\u5305\u542b\u7684\u5b57\u6bb5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"locations"})}),(0,s.jsxs)(e.td,{children:["[",(0,s.jsx)(e.a,{href:"#location",children:"Location"}),"]"]}),(0,s.jsxs)(e.td,{children:["\u4e00\u4e2a\u5305\u542b\u9519\u8bef\u4f4d\u7f6e\u7684\u6570\u7ec4, \u6bcf\u4e2a ",(0,s.jsx)(e.code,{children:"Location"})," \u5bf9\u8c61\u5305\u62ec ",(0,s.jsx)(e.code,{children:"line"})," \u548c ",(0,s.jsx)(e.code,{children:"column"})," \u5b57\u6bb5"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"path"})}),(0,s.jsx)(e.td,{children:"[String | Int]"}),(0,s.jsx)(e.td,{children:"\u4e00\u4e2a\u6570\u7ec4, \u8868\u793a\u9519\u8bef\u53d1\u751f\u7684\u8def\u5f84, \u6807\u8bc6\u5d4c\u5957\u5b57\u6bb5\u4e2d\u7684\u9519\u8bef\u4f4d\u7f6e"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"extensions"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"#extensions",children:"Extensions"})}),(0,s.jsx)(e.td,{children:"\u53ef\u9009\u5b57\u6bb5, \u53ef\u4ee5\u5305\u542b\u81ea\u5b9a\u4e49\u7684\u6269\u5c55\u4fe1\u606f, \u5982\u9519\u8bef\u4ee3\u7801\u6216\u5176\u4ed6\u8c03\u8bd5\u4fe1\u606f"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"location",children:"Location"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5b57\u6bb5"}),(0,s.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"line"})}),(0,s.jsx)(e.td,{children:"Int"}),(0,s.jsx)(e.td,{children:"\u9519\u8bef\u53d1\u751f\u7684\u884c\u53f7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"column"})}),(0,s.jsx)(e.td,{children:"Int"}),(0,s.jsx)(e.td,{children:"\u9519\u8bef\u53d1\u751f\u7684\u5217\u53f7"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"extensions",children:"Extensions"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5b57\u6bb5\u540d\u79f0"}),(0,s.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"code"})}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"\u9519\u8bef\u4ee3\u7801, \u7528\u4e8e\u6807\u8bc6\u9519\u8bef\u7c7b\u578b"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"additionalInfo"})}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"\u5176\u4ed6\u989d\u5916\u4fe1\u606f, \u63d0\u4f9b\u5173\u4e8e\u9519\u8bef\u7684\u66f4\u591a\u4e0a\u4e0b\u6587"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"timestamp"})}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"\u9519\u8bef\u53d1\u751f\u7684\u65f6\u95f4\u6233, \u8bb0\u5f55\u9519\u8bef\u7684\u5177\u4f53\u53d1\u751f\u65f6\u95f4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"details"})}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"\u5305\u542b\u5177\u4f53\u9519\u8bef\u7684\u8be6\u7ec6\u4fe1\u606f, \u53ef\u4ee5\u662f\u4efb\u4f55\u81ea\u5b9a\u4e49\u7684\u952e\u503c\u5bf9"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\r\n  "data": null,\r\n  "errors": [\r\n    {\r\n      "message": "Error message",\r\n      "locations": [\r\n        {\r\n          "line": 2,\r\n          "column": 4\r\n        }\r\n      ],\r\n      "path": ["fieldName"],\r\n      "extensions": {\r\n        "code": "SOME_ERROR_CODE",\r\n        "additionalInfo": "Some additional information"\r\n      }\r\n    }\r\n  ]\r\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"graphql-errors-\u6ce8\u518c",children:"GraphQL Errors \u6ce8\u518c"}),"\n",(0,s.jsxs)(e.p,{children:["\u4ee3\u7801\u6267\u884c\u4e2d\u629b\u51fa\u7684\u5f02\u5e38(Exception)\u53ef\u4ee5\u6ce8\u518c\u4e3a ",(0,s.jsx)(e.a,{href:"#%E9%94%99%E8%AF%AF%E5%AF%B9%E8%B1%A1%E5%AE%9A%E4%B9%89",children:"GraphQL Errors"})," \u8fd4\u56de"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5b9e\u73b0 ",(0,s.jsx)(e.code,{children:"io.graphoenix.spi.error.ErrorInfoLoader"})," \u63a5\u53e3"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5b9e\u73b0 ",(0,s.jsx)(e.code,{children:"load()"})," \u65b9\u6cd5, \u5728\u65b9\u6cd5\u4e2d\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"io.graphoenix.spi.error.ErrorInfo.put()"})," \u9759\u6001\u65b9\u6cd5\u6ce8\u518c\u5f02\u5e38\u5bf9\u5e94\u7684\u9519\u8bef\u4ee3\u7801\u548c\u9519\u8bef\u4fe1\u606f"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5728 SPI \u4e2d\u6ce8\u518c ",(0,s.jsx)(e.code,{children:"io.graphoenix.spi.error.ErrorInfoLoader"})," \u63a5\u53e3"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'package io.graphence.core.error;\r\n\r\nimport com.google.auto.service.AutoService;\r\nimport io.graphoenix.spi.error.ErrorInfo;\r\nimport io.graphoenix.spi.error.ErrorInfoLoader;\r\nimport io.jsonwebtoken.JwtException;\r\n\r\n// highlight-start\r\n// \u4f7f\u7528 Google AutoService \u6ce8\u518c SPI\r\n@AutoService(ErrorInfoLoader.class)\r\n// highlight-end\r\npublic class GraphenceErrorInfoLoader implements ErrorInfoLoader {\r\n\r\n    // highlight-start\r\n    @Override\r\n    public void load() {\r\n        ErrorInfo.put(JwtException.class, -40101, "authentication failed");\r\n        // ...\r\n    }\r\n    // highlight-end\r\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u624b\u52a8\u6ce8\u518c SPI"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-txt",metastring:'title="META-INF/services/io.graphoenix.spi.error.ErrorInfoLoader"',children:"io.graphence.core.error.GraphenceErrorInfoLoader\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5f02\u5e38\u65f6\u8fd4\u56de:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\r\n  "errors": [\r\n    {\r\n      "message": "authentication failed",\r\n      "extensions": {\r\n        "code": -40101\r\n      }\r\n    }\r\n  ]\r\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"http-\u5f02\u5e38\u72b6\u6001\u7801\u6ce8\u518c",children:"HTTP \u5f02\u5e38\u72b6\u6001\u7801\u6ce8\u518c"}),"\n",(0,s.jsxs)(e.p,{children:["\u4ee3\u7801\u6267\u884c\u4e2d\u629b\u51fa\u7684\u5f02\u5e38(Exception)\u53ef\u4ee5\u6ce8\u518c\u4e3a\u6ce8\u518c\u4e3a ",(0,s.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",children:"HTTP response status code"})," \u8fd4\u56de"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5b9e\u73b0 ",(0,s.jsx)(e.code,{children:"io.graphoenix.http.server.error.HttpErrorStatusLoader"})," \u63a5\u53e3"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5b9e\u73b0 ",(0,s.jsx)(e.code,{children:"load()"})," \u65b9\u6cd5, \u5728\u65b9\u6cd5\u4e2d\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"iio.graphoenix.http.server.error.HttpErrorStatus.put()"})," \u9759\u6001\u65b9\u6cd5\u6ce8\u518c\u5f02\u5e38\u5bf9\u5e94\u7684\u9519\u8bef\u72b6\u6001\u7801"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5728 SPI \u4e2d\u6ce8\u518c ",(0,s.jsx)(e.code,{children:"io.graphoenix.http.server.error.HttpErrorStatusLoader"})," \u63a5\u53e3"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"package io.graphence.core.error;\r\n\r\nimport com.google.auto.service.AutoService;\r\nimport io.graphoenix.http.server.error.HttpErrorStatus;\r\nimport io.graphoenix.http.server.error.HttpErrorStatusLoader;\r\nimport io.jsonwebtoken.JwtException;\r\n\r\n// highlight-start\r\n// \u4f7f\u7528 Google AutoService \u6ce8\u518c SPI\r\n@AutoService(HttpErrorStatusLoader.class)\r\n// highlight-end\r\npublic class GraphenceHttpErrorStatusLoader implements HttpErrorStatusLoader {\r\n\r\n    @Override\r\n    public void load() {\r\n        HttpErrorStatus.put(JwtException.class, 401);\r\n        // ...\r\n    }\r\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u624b\u52a8\u6ce8\u518c SPI"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-txt",metastring:'title="META-INF/services/io.graphoenix.http.server.error.HttpErrorStatusLoader"',children:"io.graphence.core.error.GraphenceHttpErrorStatusLoader\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5f02\u5e38\u65f6\u8fd4\u56de:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-http",children:"401 Unauthorized\n"})})]})}function a(r={}){const{wrapper:e}={...(0,i.R)(),...r.components};return e?(0,s.jsx)(e,{...r,children:(0,s.jsx)(h,{...r})}):h(r)}},5710:(r,e,n)=>{n.d(e,{R:()=>o,x:()=>d});var s=n(758);const i={},t=s.createContext(i);function o(r){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function d(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(i):r.components||i:o(r.components),s.createElement(t.Provider,{value:e},r.children)}}}]);