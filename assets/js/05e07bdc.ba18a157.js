"use strict";(self.webpackChunkgp_doc_github_io=self.webpackChunkgp_doc_github_io||[]).push([[2353],{4718:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var i=r(6070),t=r(5710);const s={sidebar_position:2},o="\u552f\u4e00\u6027\u6821\u9a8c(unique)",a={id:"validation/unique",title:"\u552f\u4e00\u6027\u6821\u9a8c(unique)",description:"\u552f\u4e00\u6027\u6821\u9a8c\u662f\u4e00\u79cd\u7528\u4e8e\u786e\u4fdd\u6570\u636e\u96c6\u4e2d\u7684\u7279\u5b9a\u5b57\u6bb5\u503c\u5728\u6574\u4e2a\u6570\u636e\u96c6\u4e2d\u662f\u552f\u4e00\u7684\u9a8c\u8bc1\u65b9\u6cd5. \u8fd9\u901a\u5e38\u7528\u4e8e\u6570\u636e\u5e93\u8868\u4e2d\u7684\u5b57\u6bb5, \u5982\u7528\u6237\u6ce8\u518c\u7cfb\u7edf\u4e2d\u7684\u7528\u6237\u540d\u6216\u7535\u5b50\u90ae\u4ef6\u5730\u5740, \u4ee5\u786e\u4fdd\u6bcf\u4e2a\u8bb0\u5f55\u7684\u8be5\u5b57\u6bb5\u503c\u4e0d\u91cd\u590d",source:"@site/docs/validation/unique.md",sourceDirName:"validation",slug:"/validation/unique",permalink:"/docs/validation/unique",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6821\u9a8c(json-schema)",permalink:"/docs/validation/json-schema"},next:{title:"\u4e50\u89c2\u9501(OCC)",permalink:"/docs/validation/occ"}},c={},u=[{value:"\u5b9a\u4e49\u552f\u4e00\u5b57\u6bb5",id:"\u5b9a\u4e49\u552f\u4e00\u5b57\u6bb5",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u552f\u4e00\u6027\u6821\u9a8cunique",children:"\u552f\u4e00\u6027\u6821\u9a8c(unique)"}),"\n",(0,i.jsx)(e.p,{children:"\u552f\u4e00\u6027\u6821\u9a8c\u662f\u4e00\u79cd\u7528\u4e8e\u786e\u4fdd\u6570\u636e\u96c6\u4e2d\u7684\u7279\u5b9a\u5b57\u6bb5\u503c\u5728\u6574\u4e2a\u6570\u636e\u96c6\u4e2d\u662f\u552f\u4e00\u7684\u9a8c\u8bc1\u65b9\u6cd5. \u8fd9\u901a\u5e38\u7528\u4e8e\u6570\u636e\u5e93\u8868\u4e2d\u7684\u5b57\u6bb5, \u5982\u7528\u6237\u6ce8\u518c\u7cfb\u7edf\u4e2d\u7684\u7528\u6237\u540d\u6216\u7535\u5b50\u90ae\u4ef6\u5730\u5740, \u4ee5\u786e\u4fdd\u6bcf\u4e2a\u8bb0\u5f55\u7684\u8be5\u5b57\u6bb5\u503c\u4e0d\u91cd\u590d"}),"\n",(0,i.jsx)(e.h2,{id:"\u5b9a\u4e49\u552f\u4e00\u5b57\u6bb5",children:"\u5b9a\u4e49\u552f\u4e00\u5b57\u6bb5"}),"\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"@options"})," \u6307\u4ee4, \u8bbe\u7f6e ",(0,i.jsx)(e.code,{children:"unique: true"})]}),"\n",(0,i.jsx)(e.p,{children:"\u4f8b: \u89c4\u5b9a\u7528\u6237\u540d\u4e0d\u53ef\u91cd\u590d"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-graphql",children:'"\u7528\u6237"\r\ntype User {\r\n  "\u7528\u6237ID"\r\n  id: ID\r\n  "\u7528\u6237\u540d"\r\n  name: String! @options(unique: true) @jsonSchema(minLength: 6, maxLength: 12)\r\n  "\u7535\u5b50\u90ae\u7bb1"\r\n  email: String\r\n  "\u8054\u7cfb\u65b9\u5f0f"\r\n  phoneNumbers: [String!]\r\n  "\u7528\u6237\u7c7b\u578b"\r\n  userType: UserType!\r\n  "\u8ba2\u5355"\r\n  orders: [Order!]\r\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6d4b\u8bd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-graphql",children:'mutation {\r\n  user(name: "Charlie", email: "charlie@example.com", userType: VIP) {\r\n    id\r\n    name\r\n  }\r\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd4\u56de\u552f\u4e00\u6027\u6821\u9a8c\u9519\u8bef"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\r\n  "errors": [\r\n    {\r\n      "message": "-40901: existed unique values",\r\n      "locations": null,\r\n      "path": ["name"],\r\n      "extensions": {\r\n        "timestamp": "2024-08-01T16:02:44.226237",\r\n        "code": -40901\r\n      }\r\n    }\r\n  ]\r\n}\n'})})]})}function l(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},5710:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>a});var i=r(758);const t={},s=i.createContext(t);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);