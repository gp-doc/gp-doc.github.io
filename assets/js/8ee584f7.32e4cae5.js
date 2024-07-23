"use strict";(self.webpackChunkgp_doc_github_io=self.webpackChunkgp_doc_github_io||[]).push([[8189],{5433:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var d=e(6070),i=e(5710);const s={sidebar_position:4},t="\u53d8\u66f4(mutation)",l={id:"tutorial/mutation",title:"\u53d8\u66f4(mutation)",description:"\u5feb\u901f\u6d4f\u89c8\u53d8\u66f4\u793a\u4f8b",source:"@site/docs/tutorial/mutation.md",sourceDirName:"tutorial",slug:"/tutorial/mutation",permalink:"/docs/tutorial/mutation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u67e5\u8be2(query)",permalink:"/docs/tutorial/query"},next:{title:"GPI(GraphQL API)",permalink:"/docs/tutorial/graphql-api"}},c={},a=[{value:"\u53d8\u66f4",id:"\u53d8\u66f4",level:2},{value:"<strong>\u53d8\u66f4\u63a5\u53e3</strong>",id:"\u53d8\u66f4\u63a5\u53e3",level:3},{value:"<strong>\u53d8\u66f4\u903b\u8f91</strong>",id:"\u53d8\u66f4\u903b\u8f91",level:4},{value:"\u53d8\u66f4\u5355\u6761",id:"\u53d8\u66f4\u5355\u6761",level:3},{value:"\u53d8\u66f4\u5217\u8868",id:"\u53d8\u66f4\u5217\u8868",level:3},{value:"\u5173\u8054\u53d8\u66f4",id:"\u5173\u8054\u53d8\u66f4",level:3},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:2},{value:"\u4f7f\u7528 <code>ID</code> \u5b57\u6bb5\u53c2\u6570\u66f4\u65b0",id:"\u4f7f\u7528-id-\u5b57\u6bb5\u53c2\u6570\u66f4\u65b0",level:3},{value:"\u4f7f\u7528 <code>where</code> \u53c2\u6570\u66f4\u65b0",id:"\u4f7f\u7528-where-\u53c2\u6570\u66f4\u65b0",level:3},{value:"\u5220\u9664",id:"\u5220\u9664",level:2},{value:"\u5408\u5e76\u5bf9\u8c61\u6570\u7ec4",id:"\u5408\u5e76\u5bf9\u8c61\u6570\u7ec4",level:2},{value:"\u589e\u52a0",id:"\u589e\u52a0",level:3},{value:"\u79fb\u9664",id:"\u79fb\u9664",level:3},{value:"<strong>\u53d8\u66f4\u53c2\u6570</strong>",id:"\u53d8\u66f4\u53c2\u6570",level:2}];function h(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.h1,{id:"\u53d8\u66f4mutation",children:"\u53d8\u66f4(mutation)"}),"\n",(0,d.jsx)(r.p,{children:"\u5feb\u901f\u6d4f\u89c8\u53d8\u66f4\u793a\u4f8b"}),"\n",(0,d.jsx)(r.h2,{id:"\u53d8\u66f4",children:"\u53d8\u66f4"}),"\n",(0,d.jsx)(r.h3,{id:"\u53d8\u66f4\u63a5\u53e3",children:(0,d.jsx)(r.strong,{children:"\u53d8\u66f4\u63a5\u53e3"})}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\u63a5\u53e3\u540d"}),(0,d.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(r.th,{children:"\u53c2\u6570"}),(0,d.jsx)(r.th,{children:"\u8bf4\u660e"}),(0,d.jsx)(r.th,{children:"\u793a\u4f8b (Type=User)"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"(type)"}),(0,d.jsx)(r.td,{children:"(Type)"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"#%E5%8F%98%E6%9B%B4%E5%8F%82%E6%95%B0",children:"(Type)MutationArguments"})}),(0,d.jsx)(r.td,{children:"\u53d8\u66f4\u5355\u6761"}),(0,d.jsx)(r.td,{children:"user"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"(type)List"}),(0,d.jsx)(r.td,{children:"[(Type)]"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"#%E5%8F%98%E6%9B%B4%E5%8F%82%E6%95%B0",children:"(Type)ListMutationArguments"})}),(0,d.jsx)(r.td,{children:"\u53d8\u66f4\u5217\u8868"}),(0,d.jsx)(r.td,{children:"userList"})]})]})]}),"\n",(0,d.jsx)(r.h4,{id:"\u53d8\u66f4\u903b\u8f91",children:(0,d.jsx)(r.strong,{children:"\u53d8\u66f4\u903b\u8f91"})}),"\n",(0,d.jsxs)(r.p,{children:["\u53d8\u66f4\u5305\u542b\u65b0\u589e\u548c\u66f4\u65b0\u4e24\u79cd\u64cd\u4f5c, \u6839\u636e ",(0,d.jsx)(r.code,{children:"ID"})," \u5b57\u6bb5\u533a\u5206, \u903b\u8f91\u5982\u4e0b"]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsxs)(r.th,{children:["\u53d8\u66f4\u53c2\u6570\u662f\u5426\u5b58\u5728 ",(0,d.jsx)(r.code,{children:"ID"})," \u5b57\u6bb5"]}),(0,d.jsxs)(r.th,{children:["\u6570\u636e\u5e93\u662f\u5426\u5b58\u5728 ",(0,d.jsx)(r.code,{children:"ID"})," \u5b57\u6bb5"]}),(0,d.jsx)(r.th,{children:"\u6570\u636e\u5e93\u64cd\u4f5c"}),(0,d.jsxs)(r.th,{children:[(0,d.jsx)(r.code,{children:"ID"})," \u5b57\u6bb5\u64cd\u4f5c"]})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"\u66f4\u65b0"}),(0,d.jsx)(r.td,{children:"--"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"\u5426"}),(0,d.jsx)(r.td,{children:"\u65b0\u589e"}),(0,d.jsx)(r.td,{children:"\u6570\u636e\u5e93\u4fdd\u5b58 ID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"\u5426"}),(0,d.jsx)(r.td,{children:"--"}),(0,d.jsx)(r.td,{children:"\u65b0\u589e"}),(0,d.jsx)(r.td,{children:"\u6570\u636e\u5e93\u751f\u6210 ID"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"\u53d8\u66f4\u5355\u6761",children:"\u53d8\u66f4\u5355\u6761"}),"\n",(0,d.jsx)(r.p,{children:"\u4f7f\u7528\u5b57\u6bb5\u540c\u540d\u53c2\u6570\u4fdd\u5b58\u53d8\u66f4\u5185\u5bb9"}),"\n",(0,d.jsx)(r.p,{children:"\u4f8b: \u65b0\u589e\u7528\u6237 Uma"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-graphql",children:'mutation {\r\n  user(\r\n    name: "Uma"\r\n    email: "uma@example.com"\r\n    userType: VIP\r\n    phoneNumbers: ["13918124629", "18536492446"]\r\n  ) {\r\n    id\r\n    name\r\n    email\r\n    phoneNumbers\r\n    userType\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.p,{children:"\u6570\u636e\u5e93\u81ea\u52a8\u751f\u6210 id"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "user": {\r\n      // highlight-start\r\n      "id": "21",\r\n      // highlight-end\r\n      "name": "Uma",\r\n      "email": "uma@example.com",\r\n      "phoneNumbers": ["13918124629", "18536492446"],\r\n      "userType": "VIP"\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.h3,{id:"\u53d8\u66f4\u5217\u8868",children:"\u53d8\u66f4\u5217\u8868"}),"\n",(0,d.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(r.a,{href:"#%E5%8F%98%E6%9B%B4%E5%8F%82%E6%95%B0",children:(0,d.jsx)(r.code,{children:"list"})})," \u53c2\u6570\u53d8\u66f4\u591a\u4e2a\u5bf9\u8c61"]}),"\n",(0,d.jsx)(r.p,{children:"\u4f8b: \u65b0\u589e\u7528\u6237 Victor \u548c Wendy"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-graphql",children:'mutation {\r\n  userList(\r\n    list: [\r\n      {\r\n        name: "Victor"\r\n        email: "victor@example.com"\r\n        userType: REGULAR\r\n        phoneNumbers: ["17250165257", "15548312357"]\r\n      }\r\n      {\r\n        id: "23"\r\n        name: "Wendy"\r\n        email: "wendy@example.com"\r\n        userType: VIP\r\n        phoneNumbers: ["19703870624"]\r\n      }\r\n    ]\r\n  ) {\r\n    id\r\n    name\r\n    email\r\n    phoneNumbers\r\n    userType\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.p,{children:"Victor \u7684 id \u7531\u6570\u636e\u5e93\u751f\u6210, Wendy \u7684 id \u662f\u53d8\u66f4\u65f6\u6307\u5b9a"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "userList": [\r\n      {\r\n        // highlight-start\r\n        "id": "22",\r\n        // highlight-end\r\n        "name": "Victor",\r\n        "email": "victor@example.com",\r\n        "phoneNumbers": ["17250165257", "15548312357"],\r\n        "userType": "REGULAR"\r\n      },\r\n      {\r\n        // highlight-start\r\n        "id": "23",\r\n        // highlight-end\r\n        "name": "Wendy",\r\n        "email": "wendy@example.com",\r\n        "phoneNumbers": ["19703870624"],\r\n        "userType": "VIP"\r\n      }\r\n    ]\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.h3,{id:"\u5173\u8054\u53d8\u66f4",children:"\u5173\u8054\u53d8\u66f4"}),"\n",(0,d.jsx)(r.p,{children:"\u4f7f\u7528\u5b57\u6bb5\u540c\u540d\u53c2\u6570\u53d8\u66f4\u5173\u8054\u5bf9\u8c61, \u5173\u8054\u5bf9\u8c61\u4e0d\u5b58\u5728\u65f6\u65b0\u589e\u5bf9\u8c61"}),"\n",(0,d.jsx)(r.p,{children:"\u4f8b: \u65b0\u589e\u7528\u6237 Xander, \u540c\u65f6\u5728\u8ba2\u5355\u4e2d\u65b0\u589e\u4ea7\u54c1 Mouse"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-graphql",children:'mutation {\r\n  user(\r\n    name: "Xander"\r\n    email: "xander@example.com"\r\n    userType: REGULAR\r\n    orders: [\r\n      { items: [{ product: { name: "Mouse", price: 25.99 }, quantity: 2 }] }\r\n    ]\r\n  ) {\r\n    id\r\n    name\r\n    email\r\n    userType\r\n    orders {\r\n      items {\r\n        product {\r\n          name\r\n        }\r\n        quantity\r\n      }\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "user": {\r\n      "id": "24",\r\n      "name": "Xander",\r\n      "email": "xander@example.com",\r\n      "userType": "REGULAR",\r\n      "orders": [\r\n        {\r\n          "items": [\r\n            {\r\n              "product": {\r\n                "name": "Mouse"\r\n              },\r\n              "quantity": 2\r\n            }\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-graphql",children:"{\r\n  productList {\r\n    id\r\n    name\r\n    price\r\n  }\r\n}\n"})}),"\n",(0,d.jsx)(r.p,{children:"\u4f8b: \u65b0\u589e\u4ea7\u54c1 Mouse"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "productList": [\r\n      {\r\n        "id": "1",\r\n        "name": "Laptop",\r\n        "price": 999.99\r\n      },\r\n      {\r\n        "id": "2",\r\n        "name": "Phone",\r\n        "price": 499.99\r\n      },\r\n      {\r\n        "id": "3",\r\n        "name": "Tablet",\r\n        "price": 299.99\r\n      },\r\n      {\r\n        "id": "4",\r\n        "name": "Monitor",\r\n        "price": 199.99\r\n      },\r\n      {\r\n        "id": "5",\r\n        "name": "Keyboard",\r\n        "price": 49.99\r\n      },\r\n      // highlight-start\r\n      {\r\n        "id": "6",\r\n        "name": "Mouse",\r\n        "price": 25.99\r\n      }\r\n      // highlight-end\r\n    ]\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h2,{id:"\u66f4\u65b0",children:"\u66f4\u65b0"}),"\n",(0,d.jsxs)(r.h3,{id:"\u4f7f\u7528-id-\u5b57\u6bb5\u53c2\u6570\u66f4\u65b0",children:["\u4f7f\u7528 ",(0,d.jsx)(r.code,{children:"ID"})," \u5b57\u6bb5\u53c2\u6570\u66f4\u65b0"]}),"\n",(0,d.jsxs)(r.p,{children:["\u4f8b: \u901a\u8fc7 ",(0,d.jsx)(r.code,{children:"ID"})," \u5b57\u6bb5\u53c2\u6570\u66f4\u65b0 Uma \u7684\u7528\u6237\u7c7b\u578b"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-graphql",children:'mutation {\r\n  user(id: "21", name: "Uma", userType: REGULAR) {\r\n    id\r\n    name\r\n    userType\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "user": {\r\n      "id": "21",\r\n      "name": "Uma",\r\n      // highlight-start\r\n      "userType": "REGULAR"\r\n      // highlight-end\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,d.jsxs)(r.h3,{id:"\u4f7f\u7528-where-\u53c2\u6570\u66f4\u65b0",children:["\u4f7f\u7528 ",(0,d.jsx)(r.code,{children:"where"})," \u53c2\u6570\u66f4\u65b0"]}),"\n",(0,d.jsxs)(r.p,{children:["\u6709\u65f6 Object \u4e2d\u5b58\u5728\u975e\u7a7a\u5b57\u6bb5, \u4f8b\u5982 User \u7684 name \u5b57\u6bb5, \u9700\u5728\u66f4\u65b0\u65f6\u989d\u5916\u8f93\u5165, \u6b64\u65f6\u53ef\u4f7f\u7528 ",(0,d.jsx)(r.a,{href:"#%E5%8F%98%E6%9B%B4%E5%8F%82%E6%95%B0",children:(0,d.jsx)(r.code,{children:"where"})})," \u53c2\u6570\u66f4\u65b0"]}),"\n",(0,d.jsxs)(r.p,{children:["\u4f8b: \u901a\u8fc7 ",(0,d.jsx)(r.code,{children:"where"})," \u53c2\u6570\u66f4\u65b0 Uma \u7684\u7528\u6237\u7c7b\u578b"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-graphql",children:'mutation {\r\n  user(userType: VIP, where: { id: { opr: EQ, val: "21" } }) {\r\n    id\r\n    name\r\n    userType\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "user": {\r\n      "id": "21",\r\n      "name": "Uma",\r\n      // highlight-start\r\n      "userType": "VIP"\r\n      // highlight-end\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h2,{id:"\u5220\u9664",children:"\u5220\u9664"}),"\n",(0,d.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(r.code,{children:"isDeprecated: true"})," \u5220\u9664\u5bf9\u8c61"]}),"\n",(0,d.jsx)(r.p,{children:"\u4f8b: \u5220\u9664\u7528\u6237 Wendy"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-graphql",children:'mutation {\r\n  user(isDeprecated: true, where: { id: { opr: EQ, val: "23" } }) {\r\n    id\r\n    name\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "user": null\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h2,{id:"\u5408\u5e76\u5bf9\u8c61\u6570\u7ec4",children:"\u5408\u5e76\u5bf9\u8c61\u6570\u7ec4"}),"\n",(0,d.jsxs)(r.p,{children:["\u5bf9\u8c61\u6570\u7ec4[Object]\u9664\u5168\u91cf\u53d8\u66f4\u5916, \u6709\u65f6\u9700\u8981\u6dfb\u52a0\u6216\u79fb\u9664\u5143\u7d20, \u4f7f\u7528 ",(0,d.jsx)(r.code,{children:"@merge"})," \u6307\u4ee4\u8fdb\u884c\u5143\u7d20\u6570\u7ec4\u5408\u5e76"]}),"\n",(0,d.jsx)(r.p,{children:"\u4f8b: \u67e5\u8be2 Diana \u7684\u8ba2\u5355"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-graphql",children:'{\r\n  user(name: { opr: EQ, val: "Diana" }) {\r\n    name\r\n    orders {\r\n      id\r\n      items {\r\n        id\r\n        product {\r\n          name\r\n        }\r\n        quantity\r\n      }\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "user": {\r\n      "name": "Diana",\r\n      "orders": [\r\n        {\r\n          // highlight-start\r\n          "id": "4",\r\n          // highlight-end\r\n          "items": [\r\n            {\r\n              "id": "6",\r\n              "product": {\r\n                "name": "Laptop"\r\n              },\r\n              "quantity": 1\r\n            },\r\n            {\r\n              "id": "7",\r\n              "product": {\r\n                "name": "Phone"\r\n              },\r\n              "quantity": 1\r\n            },\r\n            {\r\n              "id": "8",\r\n              "product": {\r\n                "name": "Tablet"\r\n              },\r\n              "quantity": 1\r\n            }\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.h3,{id:"\u589e\u52a0",children:"\u589e\u52a0"}),"\n",(0,d.jsx)(r.p,{children:"\u4f8b: Diana \u7684\u8ba2\u5355\u589e\u52a0 2 \u4e2a Keyboard"}),"\n",(0,d.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(r.code,{children:'where: {id: {opr: EQ, val: "4"}}'})," \u9009\u62e9 Diana \u7684\u8ba2\u5355, \u4f7f\u7528 ",(0,d.jsx)(r.code,{children:'where: {id: {opr: EQ, val: "5"}}'})," \u9009\u62e9 Keyboard"]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"where"})," \u53c2\u6570\u9664\u4e86\u4f5c\u4e3a\u66f4\u65b0\u6761\u4ef6\u4e4b\u5916, \u8fd8\u53ef\u901a\u8fc7 ",(0,d.jsx)(r.code,{children:"ID"})," \u5b57\u6bb5\u53c2\u6570\u9009\u62e9\u5bf9\u8c61"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-graphql",children:'mutation {\r\n  order(\r\n    items: [{ product: { where: { id: { opr: EQ, val: "5" } } }, quantity: 2 }]\r\n    where: { id: { opr: EQ, val: "4" } }\r\n  ) @merge {\r\n    id\r\n    items {\r\n      id\r\n      product {\r\n        name\r\n      }\r\n      quantity\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "order": {\r\n      "id": "4",\r\n      "items": [\r\n        {\r\n          "id": "6",\r\n          "product": {\r\n            "name": "Laptop"\r\n          },\r\n          "quantity": 1\r\n        },\r\n        {\r\n          "id": "7",\r\n          "product": {\r\n            "name": "Phone"\r\n          },\r\n          "quantity": 1\r\n        },\r\n        {\r\n          "id": "8",\r\n          "product": {\r\n            "name": "Tablet"\r\n          },\r\n          "quantity": 1\r\n        },\r\n        // highlight-start\r\n        {\r\n          "id": "10",\r\n          "product": {\r\n            "name": "Keyboard"\r\n          },\r\n          "quantity": 2\r\n        }\r\n        // highlight-end\r\n      ]\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.h3,{id:"\u79fb\u9664",children:"\u79fb\u9664"}),"\n",(0,d.jsx)(r.p,{children:"\u4f8b: \u79fb\u9664 Diana \u7684\u8ba2\u5355\u4e2d\u7684 Tablet"}),"\n",(0,d.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(r.code,{children:'where: {id: {opr: EQ, val: "4"}}'})," \u9009\u62e9 Diana \u7684\u8ba2\u5355, \u4f7f\u7528 ",(0,d.jsx)(r.code,{children:'where: {id: {opr: EQ, val: "8"}}'})," \u9009\u62e9 Tablet \u6240\u5728\u7684\u8ba2\u5355\u9879, \u4f7f\u7528 ",(0,d.jsx)(r.code,{children:"isDeprecated: true"})," \u79fb\u9664\u5143\u7d20"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-graphql",children:'mutation {\r\n  order(\r\n    items: [{ isDeprecated: true, where: { id: { opr: EQ, val: "8" } } }]\r\n    where: { id: { opr: EQ, val: "4" } }\r\n  ) @merge {\r\n    id\r\n    items {\r\n      id\r\n      product {\r\n        name\r\n      }\r\n      quantity\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "order": {\r\n      "id": "4",\r\n      "items": [\r\n        {\r\n          "id": "6",\r\n          "product": {\r\n            "name": "Laptop"\r\n          },\r\n          "quantity": 1\r\n        },\r\n        {\r\n          "id": "7",\r\n          "product": {\r\n            "name": "Phone"\r\n          },\r\n          "quantity": 1\r\n        },\r\n        {\r\n          "id": "10",\r\n          "product": {\r\n            "name": "Keyboard"\r\n          },\r\n          "quantity": 2\r\n        }\r\n      ]\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h2,{id:"\u53d8\u66f4\u53c2\u6570",children:(0,d.jsx)(r.strong,{children:"\u53d8\u66f4\u53c2\u6570"})}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"\u53c2\u6570\u540d"}),(0,d.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(r.th,{children:"\u9ed8\u8ba4\u503c"}),(0,d.jsx)(r.th,{children:"\u8bf4\u660e"}),(0,d.jsx)(r.th,{children:"SQL \u793a\u4f8b (x=10 y=5)"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"(field)"}),(0,d.jsxs)(r.td,{children:["Scalar/Enum/",(0,d.jsx)(r.a,{href:"/docs/guide/types#objectinput",children:"(Object)Input"})]}),(0,d.jsx)(r.td,{children:"\u65e0"}),(0,d.jsx)(r.td,{children:"\u53d8\u66f4\u5b57\u6bb5"}),(0,d.jsx)(r.td,{children:"INSERT INTO t ( id, field ) VALUES ( 'x', 'y' ) ON DUPLICATE KEY UPDATE t.id = VALUES ( t.id ), t.field = VALUES ( t.field )"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"input"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"/docs/guide/types#objectinput",children:"(Object)Input"})}),(0,d.jsx)(r.td,{children:"\u65e0"}),(0,d.jsxs)(r.td,{children:["\u53d8\u66f4\u5bf9\u8c61(\u628a\u6240\u6709\u5b57\u6bb5\u5c01\u88c5\u5728\u5bf9\u8c61\u5185\u53d8\u66f4, \u5e38\u7528\u4e8e ",(0,d.jsx)(r.code,{children:"$\u53d8\u91cf"})," \u7684\u4f7f\u7528)"]}),(0,d.jsx)(r.td,{children:"\u540c\u4e0a"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"list"}),(0,d.jsxs)(r.td,{children:["[",(0,d.jsx)(r.a,{href:"/docs/guide/types#objectinput",children:"(Object)Input"}),"]"]}),(0,d.jsx)(r.td,{children:"\u65e0"}),(0,d.jsx)(r.td,{children:"\u53d8\u66f4\u5bf9\u8c61\u5217\u8868"}),(0,d.jsx)(r.td,{children:"INSERT INTO t ... ON DUPLICATE KEY UPDATE ...; INSERT INTO t ... ON DUPLICATE KEY UPDATE ...; INSERT INTO t ... ON DUPLICATE KEY UPDATE ...;"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"where"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"/docs/guide/types#objectexpression",children:"(Object)Expression"})}),(0,d.jsx)(r.td,{children:"\u65e0"}),(0,d.jsx)(r.td,{children:"\u66f4\u65b0\u6761\u4ef6"}),(0,d.jsx)(r.td,{children:"UPDATE t SET field = 'z' WHERE id = 'x'"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"isDeprecated"}),(0,d.jsx)(r.td,{children:"Boolean"}),(0,d.jsx)(r.td,{children:"false"}),(0,d.jsxs)(r.td,{children:["\u5220\u9664\u6807\u8bb0( ",(0,d.jsx)(r.code,{children:"@merge"})," \u6307\u4ee4\u5b58\u5728\u65f6\u8868\u793a\u4ece\u6570\u7ec4\u4e2d\u79fb\u9664)"]}),(0,d.jsx)(r.td,{})]})]})]})]})}function o(n={}){const{wrapper:r}={...(0,i.R)(),...n.components};return r?(0,d.jsx)(r,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},5710:(n,r,e)=>{e.d(r,{R:()=>t,x:()=>l});var d=e(758);const i={},s=d.createContext(i);function t(n){const r=d.useContext(s);return d.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function l(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),d.createElement(s.Provider,{value:r},n.children)}}}]);