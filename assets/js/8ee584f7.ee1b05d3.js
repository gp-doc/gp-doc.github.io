"use strict";(self.webpackChunkgp_doc_github_io=self.webpackChunkgp_doc_github_io||[]).push([[8189],{5433:(n,e,d)=>{d.r(e),d.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=d(6070),i=d(5710);const s={sidebar_position:4},t="\u53d8\u66f4(mutation)",l={id:"tutorial/mutation",title:"\u53d8\u66f4(mutation)",description:"\u5feb\u901f\u6d4f\u89c8\u53d8\u66f4\u793a\u4f8b",source:"@site/docs/tutorial/mutation.md",sourceDirName:"tutorial",slug:"/tutorial/mutation",permalink:"/docs/tutorial/mutation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u67e5\u8be2(query)",permalink:"/docs/tutorial/query"},next:{title:"\u8ba2\u9605(subscription)",permalink:"/docs/tutorial/subscription"}},c={},a=[{value:"\u53d8\u66f4",id:"\u53d8\u66f4",level:2},{value:"<strong>\u53d8\u66f4\u63a5\u53e3</strong>",id:"\u53d8\u66f4\u63a5\u53e3",level:3},{value:"<strong>\u53d8\u66f4\u903b\u8f91</strong>",id:"\u53d8\u66f4\u903b\u8f91",level:4},{value:"\u53d8\u66f4\u5355\u6761",id:"\u53d8\u66f4\u5355\u6761",level:3},{value:"\u53d8\u66f4\u5217\u8868",id:"\u53d8\u66f4\u5217\u8868",level:3},{value:"\u5173\u8054\u53d8\u66f4",id:"\u5173\u8054\u53d8\u66f4",level:3},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:2},{value:"\u4f7f\u7528 <code>ID</code> \u5b57\u6bb5\u53c2\u6570\u66f4\u65b0",id:"\u4f7f\u7528-id-\u5b57\u6bb5\u53c2\u6570\u66f4\u65b0",level:3},{value:"\u4f7f\u7528 <code>where</code> \u53c2\u6570\u66f4\u65b0",id:"\u4f7f\u7528-where-\u53c2\u6570\u66f4\u65b0",level:3},{value:"\u5220\u9664",id:"\u5220\u9664",level:2},{value:"\u5408\u5e76\u5bf9\u8c61\u6570\u7ec4",id:"\u5408\u5e76\u5bf9\u8c61\u6570\u7ec4",level:2},{value:"\u589e\u52a0",id:"\u589e\u52a0",level:3},{value:"\u79fb\u9664",id:"\u79fb\u9664",level:3},{value:"<strong>\u53d8\u66f4\u53c2\u6570</strong>",id:"\u53d8\u66f4\u53c2\u6570",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u53d8\u66f4mutation",children:"\u53d8\u66f4(mutation)"}),"\n",(0,r.jsx)(e.p,{children:"\u5feb\u901f\u6d4f\u89c8\u53d8\u66f4\u793a\u4f8b"}),"\n",(0,r.jsx)(e.h2,{id:"\u53d8\u66f4",children:"\u53d8\u66f4"}),"\n",(0,r.jsx)(e.h3,{id:"\u53d8\u66f4\u63a5\u53e3",children:(0,r.jsx)(e.strong,{children:"\u53d8\u66f4\u63a5\u53e3"})}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u63a5\u53e3\u540d"}),(0,r.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(e.th,{children:"\u53c2\u6570"}),(0,r.jsx)(e.th,{children:"\u8bf4\u660e"}),(0,r.jsx)(e.th,{children:"\u793a\u4f8b (Type=User)"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"(type)"}),(0,r.jsx)(e.td,{children:"(Type)"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#%E5%8F%98%E6%9B%B4%E5%8F%82%E6%95%B0",children:"(Type)MutationArguments"})}),(0,r.jsx)(e.td,{children:"\u53d8\u66f4\u5355\u6761"}),(0,r.jsx)(e.td,{children:"user"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"(type)List"}),(0,r.jsx)(e.td,{children:"[(Type)]"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"#%E5%8F%98%E6%9B%B4%E5%8F%82%E6%95%B0",children:"(Type)ListMutationArguments"})}),(0,r.jsx)(e.td,{children:"\u53d8\u66f4\u5217\u8868"}),(0,r.jsx)(e.td,{children:"userList"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u53d8\u66f4\u903b\u8f91",children:(0,r.jsx)(e.strong,{children:"\u53d8\u66f4\u903b\u8f91"})}),"\n",(0,r.jsxs)(e.p,{children:["\u53d8\u66f4\u5305\u542b\u65b0\u589e\u548c\u66f4\u65b0\u4e24\u79cd\u64cd\u4f5c, \u6839\u636e ",(0,r.jsx)(e.code,{children:"ID"})," \u5b57\u6bb5\u533a\u5206, \u903b\u8f91\u5982\u4e0b"]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.th,{children:["\u53d8\u66f4\u53c2\u6570\u662f\u5426\u5b58\u5728 ",(0,r.jsx)(e.code,{children:"ID"})," \u5b57\u6bb5"]}),(0,r.jsxs)(e.th,{children:["\u6570\u636e\u5e93\u662f\u5426\u5b58\u5728 ",(0,r.jsx)(e.code,{children:"ID"})," \u5b57\u6bb5"]}),(0,r.jsx)(e.th,{children:"\u6570\u636e\u5e93\u64cd\u4f5c"}),(0,r.jsxs)(e.th,{children:[(0,r.jsx)(e.code,{children:"ID"})," \u5b57\u6bb5\u64cd\u4f5c"]})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u662f"}),(0,r.jsx)(e.td,{children:"\u662f"}),(0,r.jsx)(e.td,{children:"\u66f4\u65b0"}),(0,r.jsx)(e.td,{children:"--"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u662f"}),(0,r.jsx)(e.td,{children:"\u5426"}),(0,r.jsx)(e.td,{children:"\u65b0\u589e"}),(0,r.jsx)(e.td,{children:"\u6570\u636e\u5e93\u4fdd\u5b58 ID"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u5426"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"\u65b0\u589e"}),(0,r.jsx)(e.td,{children:"\u6570\u636e\u5e93\u751f\u6210 ID"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u53d8\u66f4\u5355\u6761",children:"\u53d8\u66f4\u5355\u6761"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u5b57\u6bb5\u540c\u540d\u53c2\u6570\u4fdd\u5b58\u53d8\u66f4\u5185\u5bb9"}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b: \u65b0\u589e\u7528\u6237 Uma"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:'mutation {\n  user(\n    name: "Uma"\n    email: "uma@example.com"\n    userType: VIP\n    phoneNumbers: ["13918124629", "18536492446"]\n  ) {\n    id\n    name\n    email\n    phoneNumbers\n    userType\n  }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6570\u636e\u5e93\u81ea\u52a8\u751f\u6210 id"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "data": {\n    "user": {\n      // highlight-start\n      "id": "21",\n      // highlight-end\n      "name": "Uma",\n      "email": "uma@example.com",\n      "phoneNumbers": ["13918124629", "18536492446"],\n      "userType": "VIP"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\u53d8\u66f4\u5217\u8868",children:"\u53d8\u66f4\u5217\u8868"}),"\n",(0,r.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(e.a,{href:"#%E5%8F%98%E6%9B%B4%E5%8F%82%E6%95%B0",children:(0,r.jsx)(e.code,{children:"list"})})," \u53c2\u6570\u53d8\u66f4\u591a\u4e2a\u5bf9\u8c61"]}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b: \u65b0\u589e\u7528\u6237 Victor \u548c Wendy"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:'mutation {\n  userList(\n    list: [\n      {\n        name: "Victor"\n        email: "victor@example.com"\n        userType: REGULAR\n        phoneNumbers: ["17250165257", "15548312357"]\n      }\n      {\n        id: "23"\n        name: "Wendy"\n        email: "wendy@example.com"\n        userType: VIP\n        phoneNumbers: ["19703870624"]\n      }\n    ]\n  ) {\n    id\n    name\n    email\n    phoneNumbers\n    userType\n  }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Victor \u7684 id \u7531\u6570\u636e\u5e93\u751f\u6210, Wendy \u7684 id \u662f\u53d8\u66f4\u65f6\u6307\u5b9a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "data": {\n    "userList": [\n      {\n        // highlight-start\n        "id": "22",\n        // highlight-end\n        "name": "Victor",\n        "email": "victor@example.com",\n        "phoneNumbers": ["17250165257", "15548312357"],\n        "userType": "REGULAR"\n      },\n      {\n        // highlight-start\n        "id": "23",\n        // highlight-end\n        "name": "Wendy",\n        "email": "wendy@example.com",\n        "phoneNumbers": ["19703870624"],\n        "userType": "VIP"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\u5173\u8054\u53d8\u66f4",children:"\u5173\u8054\u53d8\u66f4"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u5b57\u6bb5\u540c\u540d\u53c2\u6570\u53d8\u66f4\u5173\u8054\u5bf9\u8c61, \u5173\u8054\u5bf9\u8c61\u4e0d\u5b58\u5728\u65f6\u65b0\u589e\u5bf9\u8c61"}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b: \u65b0\u589e\u7528\u6237 Xander, \u540c\u65f6\u5728\u8ba2\u5355\u4e2d\u65b0\u589e\u4ea7\u54c1 Mouse"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:'mutation {\n  user(\n    name: "Xander"\n    email: "xander@example.com"\n    userType: REGULAR\n    orders: [\n      { items: [{ product: { name: "Mouse", price: 25.99 }, quantity: 2 }] }\n    ]\n  ) {\n    id\n    name\n    email\n    userType\n    orders {\n      items {\n        product {\n          name\n        }\n        quantity\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "data": {\n    "user": {\n      "id": "24",\n      "name": "Xander",\n      "email": "xander@example.com",\n      "userType": "REGULAR",\n      "orders": [\n        {\n          "items": [\n            {\n              "product": {\n                "name": "Mouse"\n              },\n              "quantity": 2\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:"{\n  productList {\n    id\n    name\n    price\n  }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b: \u65b0\u589e\u4ea7\u54c1 Mouse"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "data": {\n    "productList": [\n      {\n        "id": "1",\n        "name": "Laptop",\n        "price": 999.99\n      },\n      {\n        "id": "2",\n        "name": "Phone",\n        "price": 499.99\n      },\n      {\n        "id": "3",\n        "name": "Tablet",\n        "price": 299.99\n      },\n      {\n        "id": "4",\n        "name": "Monitor",\n        "price": 199.99\n      },\n      {\n        "id": "5",\n        "name": "Keyboard",\n        "price": 49.99\n      },\n      // highlight-start\n      {\n        "id": "6",\n        "name": "Mouse",\n        "price": 25.99\n      }\n      // highlight-end\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"\u66f4\u65b0",children:"\u66f4\u65b0"}),"\n",(0,r.jsxs)(e.h3,{id:"\u4f7f\u7528-id-\u5b57\u6bb5\u53c2\u6570\u66f4\u65b0",children:["\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"ID"})," \u5b57\u6bb5\u53c2\u6570\u66f4\u65b0"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4f8b: \u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"ID"})," \u5b57\u6bb5\u53c2\u6570\u66f4\u65b0 Uma \u7684\u7528\u6237\u7c7b\u578b"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:'mutation {\n  user(id: "21", name: "Uma", userType: REGULAR) {\n    id\n    name\n    userType\n  }\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "data": {\n    "user": {\n      "id": "21",\n      "name": "Uma",\n      // highlight-start\n      "userType": "REGULAR"\n      // highlight-end\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(e.h3,{id:"\u4f7f\u7528-where-\u53c2\u6570\u66f4\u65b0",children:["\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"where"})," \u53c2\u6570\u66f4\u65b0"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6709\u65f6 Object \u4e2d\u5b58\u5728\u975e\u7a7a\u5b57\u6bb5, \u4f8b\u5982 User \u7684 name \u5b57\u6bb5, \u9700\u5728\u66f4\u65b0\u65f6\u989d\u5916\u8f93\u5165, \u6b64\u65f6\u53ef\u4f7f\u7528 ",(0,r.jsx)(e.a,{href:"#%E5%8F%98%E6%9B%B4%E5%8F%82%E6%95%B0",children:(0,r.jsx)(e.code,{children:"where"})})," \u53c2\u6570\u66f4\u65b0"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4f8b: \u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"where"})," \u53c2\u6570\u66f4\u65b0 Uma \u7684\u7528\u6237\u7c7b\u578b"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:'mutation {\n  user(userType: VIP, where: { id: { opr: EQ, val: "21" } }) {\n    id\n    name\n    userType\n  }\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "data": {\n    "user": {\n      "id": "21",\n      "name": "Uma",\n      // highlight-start\n      "userType": "VIP"\n      // highlight-end\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"\u5220\u9664",children:"\u5220\u9664"}),"\n",(0,r.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"isDeprecated: true"})," \u5220\u9664\u5bf9\u8c61"]}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b: \u5220\u9664\u7528\u6237 Wendy"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:'mutation {\n  user(isDeprecated: true, where: { id: { opr: EQ, val: "23" } }) {\n    id\n    name\n  }\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "data": {\n    "user": null\n  }\n}\n'})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"\u5408\u5e76\u5bf9\u8c61\u6570\u7ec4",children:"\u5408\u5e76\u5bf9\u8c61\u6570\u7ec4"}),"\n",(0,r.jsxs)(e.p,{children:["\u5bf9\u8c61\u6570\u7ec4[Object]\u9664\u5168\u91cf\u53d8\u66f4\u5916, \u6709\u65f6\u9700\u8981\u6dfb\u52a0\u6216\u79fb\u9664\u5143\u7d20, \u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"@merge"})," \u6307\u4ee4\u8fdb\u884c\u5143\u7d20\u6570\u7ec4\u5408\u5e76"]}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b: \u67e5\u8be2 Diana \u7684\u8ba2\u5355"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:'{\n  user(name: { opr: EQ, val: "Diana" }) {\n    name\n    orders {\n      id\n      items {\n        id\n        product {\n          name\n        }\n        quantity\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "data": {\n    "user": {\n      "name": "Diana",\n      "orders": [\n        {\n          // highlight-start\n          "id": "4",\n          // highlight-end\n          "items": [\n            {\n              "id": "6",\n              "product": {\n                "name": "Laptop"\n              },\n              "quantity": 1\n            },\n            {\n              "id": "7",\n              "product": {\n                "name": "Phone"\n              },\n              "quantity": 1\n            },\n            {\n              "id": "8",\n              "product": {\n                "name": "Tablet"\n              },\n              "quantity": 1\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\u589e\u52a0",children:"\u589e\u52a0"}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b: Diana \u7684\u8ba2\u5355\u589e\u52a0 2 \u4e2a Keyboard"}),"\n",(0,r.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:'where: {id: {opr: EQ, val: "4"}}'})," \u9009\u62e9 Diana \u7684\u8ba2\u5355, \u4f7f\u7528 ",(0,r.jsx)(e.code,{children:'where: {id: {opr: EQ, val: "5"}}'})," \u9009\u62e9 Keyboard"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"where"})," \u53c2\u6570\u9664\u4e86\u4f5c\u4e3a\u66f4\u65b0\u6761\u4ef6\u4e4b\u5916, \u8fd8\u53ef\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"ID"})," \u5b57\u6bb5\u53c2\u6570\u9009\u62e9\u5bf9\u8c61"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:'mutation {\n  order(\n    items: [{ product: { where: { id: { opr: EQ, val: "5" } } }, quantity: 2 }]\n    where: { id: { opr: EQ, val: "4" } }\n  ) @merge {\n    id\n    items {\n      id\n      product {\n        name\n      }\n      quantity\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "data": {\n    "order": {\n      "id": "4",\n      "items": [\n        {\n          "id": "6",\n          "product": {\n            "name": "Laptop"\n          },\n          "quantity": 1\n        },\n        {\n          "id": "7",\n          "product": {\n            "name": "Phone"\n          },\n          "quantity": 1\n        },\n        {\n          "id": "8",\n          "product": {\n            "name": "Tablet"\n          },\n          "quantity": 1\n        },\n        // highlight-start\n        {\n          "id": "10",\n          "product": {\n            "name": "Keyboard"\n          },\n          "quantity": 2\n        }\n        // highlight-end\n      ]\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\u79fb\u9664",children:"\u79fb\u9664"}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b: \u79fb\u9664 Diana \u7684\u8ba2\u5355\u4e2d\u7684 Tablet"}),"\n",(0,r.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:'where: {id: {opr: EQ, val: "4"}}'})," \u9009\u62e9 Diana \u7684\u8ba2\u5355, \u4f7f\u7528 ",(0,r.jsx)(e.code,{children:'where: {id: {opr: EQ, val: "8"}}'})," \u9009\u62e9 Tablet \u6240\u5728\u7684\u8ba2\u5355\u9879, \u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"isDeprecated: true"})," \u79fb\u9664\u5143\u7d20"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:'mutation {\n  order(\n    items: [{ isDeprecated: true, where: { id: { opr: EQ, val: "8" } } }]\n    where: { id: { opr: EQ, val: "4" } }\n  ) @merge {\n    id\n    items {\n      id\n      product {\n        name\n      }\n      quantity\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "data": {\n    "order": {\n      "id": "4",\n      "items": [\n        {\n          "id": "6",\n          "product": {\n            "name": "Laptop"\n          },\n          "quantity": 1\n        },\n        {\n          "id": "7",\n          "product": {\n            "name": "Phone"\n          },\n          "quantity": 1\n        },\n        {\n          "id": "10",\n          "product": {\n            "name": "Keyboard"\n          },\n          "quantity": 2\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"\u53d8\u66f4\u53c2\u6570",children:(0,r.jsx)(e.strong,{children:"\u53d8\u66f4\u53c2\u6570"})}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53c2\u6570\u540d"}),(0,r.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,r.jsx)(e.th,{children:"\u8bf4\u660e"}),(0,r.jsx)(e.th,{children:"SQL \u793a\u4f8b (x=10 y=5)"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"(field)"}),(0,r.jsxs)(e.td,{children:["Scalar/Enum/",(0,r.jsx)(e.a,{href:"/docs/guide/types#objectinput",children:"(Object)Input"})]}),(0,r.jsx)(e.td,{children:"\u65e0"}),(0,r.jsx)(e.td,{children:"\u53d8\u66f4\u5b57\u6bb5"}),(0,r.jsx)(e.td,{children:"INSERT INTO t ( id, field ) VALUES ( 'x', 'y' ) ON DUPLICATE KEY UPDATE t.id = VALUES ( t.id ), t.field = VALUES ( t.field )"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"input"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/guide/types#objectinput",children:"(Object)Input"})}),(0,r.jsx)(e.td,{children:"\u65e0"}),(0,r.jsxs)(e.td,{children:["\u53d8\u66f4\u5bf9\u8c61(\u628a\u6240\u6709\u5b57\u6bb5\u5c01\u88c5\u5728\u5bf9\u8c61\u5185\u53d8\u66f4, \u5e38\u7528\u4e8e ",(0,r.jsx)(e.code,{children:"$\u53d8\u91cf"})," \u7684\u4f7f\u7528)"]}),(0,r.jsx)(e.td,{children:"\u540c\u4e0a"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"list"}),(0,r.jsxs)(e.td,{children:["[",(0,r.jsx)(e.a,{href:"/docs/guide/types#objectinput",children:"(Object)Input"}),"]"]}),(0,r.jsx)(e.td,{children:"\u65e0"}),(0,r.jsx)(e.td,{children:"\u53d8\u66f4\u5bf9\u8c61\u5217\u8868"}),(0,r.jsx)(e.td,{children:"INSERT INTO t ... ON DUPLICATE KEY UPDATE ...; INSERT INTO t ... ON DUPLICATE KEY UPDATE ...; INSERT INTO t ... ON DUPLICATE KEY UPDATE ...;"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"where"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"/docs/guide/types#objectexpression",children:"(Object)Expression"})}),(0,r.jsx)(e.td,{children:"\u65e0"}),(0,r.jsx)(e.td,{children:"\u66f4\u65b0\u6761\u4ef6"}),(0,r.jsx)(e.td,{children:"UPDATE t SET field = 'z' WHERE id = 'x'"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"isDeprecated"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"false"}),(0,r.jsxs)(e.td,{children:["\u5220\u9664\u6807\u8bb0( ",(0,r.jsx)(e.code,{children:"@merge"})," \u6307\u4ee4\u5b58\u5728\u65f6\u8868\u793a\u4ece\u6570\u7ec4\u4e2d\u79fb\u9664)"]}),(0,r.jsx)(e.td,{})]})]})]})]})}function o(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},5710:(n,e,d)=>{d.d(e,{R:()=>t,x:()=>l});var r=d(758);const i={},s=r.createContext(i);function t(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);