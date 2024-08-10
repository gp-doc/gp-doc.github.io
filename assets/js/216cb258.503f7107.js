"use strict";(self.webpackChunkgp_doc_github_io=self.webpackChunkgp_doc_github_io||[]).push([[7678],{1172:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>t});var s=e(6070),d=e(5710);const l={sidebar_position:3},i="\u67e5\u8be2(query)",a={id:"tutorial/query",title:"\u67e5\u8be2(query)",description:"\u5feb\u901f\u6d4f\u89c8\u67e5\u8be2\u793a\u4f8b",source:"@site/docs/tutorial/query.md",sourceDirName:"tutorial",slug:"/tutorial/query",permalink:"/docs/tutorial/query",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/docs/tutorial/preparation"},next:{title:"\u53d8\u66f4(mutation)",permalink:"/docs/tutorial/mutation"}},c={},t=[{value:"\u57fa\u672c\u67e5\u8be2",id:"\u57fa\u672c\u67e5\u8be2",level:2},{value:"<strong>\u67e5\u8be2\u63a5\u53e3</strong>",id:"\u67e5\u8be2\u63a5\u53e3",level:3},{value:"\u67e5\u8be2\u5355\u6761",id:"\u67e5\u8be2\u5355\u6761",level:3},{value:"\u67e5\u8be2\u5217\u8868",id:"\u67e5\u8be2\u5217\u8868",level:3},{value:"\u6761\u4ef6\u67e5\u8be2",id:"\u6761\u4ef6\u67e5\u8be2",level:3},{value:"\u5173\u8054\u67e5\u8be2",id:"\u5173\u8054\u67e5\u8be2",level:3},{value:"\u6392\u5e8f",id:"\u6392\u5e8f",level:3},{value:"\u7edf\u8ba1",id:"\u7edf\u8ba1",level:3},{value:"<strong>\u7edf\u8ba1\u5b57\u6bb5</strong>",id:"\u7edf\u8ba1\u5b57\u6bb5",level:4},{value:"\u5206\u9875\u67e5\u8be2",id:"\u5206\u9875\u67e5\u8be2",level:2},{value:"<strong>\u5206\u9875\u63a5\u53e3</strong>",id:"\u5206\u9875\u63a5\u53e3",level:3},{value:"\u57fa\u672c\u5206\u9875",id:"\u57fa\u672c\u5206\u9875",level:3},{value:"\u6e38\u6807\u5206\u9875",id:"\u6e38\u6807\u5206\u9875",level:3},{value:"<strong>\u67e5\u8be2\u53c2\u6570</strong>",id:"\u67e5\u8be2\u53c2\u6570",level:2}];function h(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"\u67e5\u8be2query",children:"\u67e5\u8be2(query)"}),"\n",(0,s.jsx)(r.p,{children:"\u5feb\u901f\u6d4f\u89c8\u67e5\u8be2\u793a\u4f8b"}),"\n",(0,s.jsx)(r.h2,{id:"\u57fa\u672c\u67e5\u8be2",children:"\u57fa\u672c\u67e5\u8be2"}),"\n",(0,s.jsx)(r.h3,{id:"\u67e5\u8be2\u63a5\u53e3",children:(0,s.jsx)(r.strong,{children:"\u67e5\u8be2\u63a5\u53e3"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u63a5\u53e3\u540d"}),(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u53c2\u6570"}),(0,s.jsx)(r.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(r.th,{children:"\u793a\u4f8b (Type=User)"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"(type)"}),(0,s.jsx)(r.td,{children:"(Type)"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#%E6%9F%A5%E8%AF%A2%E5%8F%82%E6%95%B0",children:"(Type)QueryArguments"})}),(0,s.jsx)(r.td,{children:"\u67e5\u8be2\u5355\u6761"}),(0,s.jsx)(r.td,{children:"user"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"(type)List"}),(0,s.jsx)(r.td,{children:"[(Type)]"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#%E6%9F%A5%E8%AF%A2%E5%8F%82%E6%95%B0",children:"(Type)ListQueryArguments"})}),(0,s.jsx)(r.td,{children:"\u67e5\u8be2\u5217\u8868"}),(0,s.jsx)(r.td,{children:"userList"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"\u67e5\u8be2\u5355\u6761",children:"\u67e5\u8be2\u5355\u6761"}),"\n",(0,s.jsxs)(r.p,{children:["\u4f7f\u7528\u4e0e\u5b57\u6bb5\u540c\u540d\u7684\u53c2\u6570\u6784\u9020\u67e5\u8be2\u6761\u4ef6, ",(0,s.jsx)(r.a,{href:"/docs/guide/types#operator",children:(0,s.jsx)(r.code,{children:"opr"})})," \u4f5c\u4e3a\u67e5\u8be2\u7b26\u53f7, ",(0,s.jsx)(r.a,{href:"/docs/guide/types#scalarenumexpression",children:(0,s.jsx)(r.code,{children:"val"})})," \u4f5c\u4e3a\u67e5\u8be2\u5185\u5bb9, \u5982\u679c\u67e5\u8be2\u5185\u5bb9\u4e3a\u6570\u7ec4\u5219\u4f7f\u7528 ",(0,s.jsx)(r.a,{href:"/docs/guide/types#scalarenumexpression",children:(0,s.jsx)(r.code,{children:"arr"})})]}),"\n",(0,s.jsx)(r.p,{children:"\u4f8b: \u67e5\u8be2\u540d\u4e3a Bob \u7684\u7528\u6237"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"{\r\n  # WHERE name = 'Bob'\r\n  user(name: { opr: EQ, val: \"Bob\" }) {\r\n    name\r\n    email\r\n    userType\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "user": {\r\n      "name": "Bob",\r\n      "email": "bob@example.com",\r\n      "userType": "REGULAR"\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"\u67e5\u8be2\u5217\u8868",children:"\u67e5\u8be2\u5217\u8868"}),"\n",(0,s.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(r.a,{href:"#%E6%9F%A5%E8%AF%A2%E5%8F%82%E6%95%B0",children:(0,s.jsx)(r.code,{children:"first"})})," \u53c2\u6570\u67e5\u8be2\u524d n \u6761\u6570\u636e, ",(0,s.jsx)(r.a,{href:"#%E6%9F%A5%E8%AF%A2%E5%8F%82%E6%95%B0",children:(0,s.jsx)(r.code,{children:"last"})})," \u53c2\u6570\u67e5\u8be2\u540e n \u6761\u6570\u636e"]}),"\n",(0,s.jsx)(r.p,{children:"\u4f8b: \u67e5\u8be2\u524d 5 \u4e2a\u7528\u6237"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"{\r\n  # LIMIT 5\r\n  userList(first: 5) {\r\n    name\r\n    email\r\n    userType\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "userList": [\r\n      {\r\n        "name": "Alice",\r\n        "email": "alice@example.com",\r\n        "userType": "VIP"\r\n      },\r\n      {\r\n        "name": "Bob",\r\n        "email": "bob@example.com",\r\n        "userType": "REGULAR"\r\n      },\r\n      {\r\n        "name": "Charlie",\r\n        "email": "charlie@example.com",\r\n        "userType": "VIP"\r\n      },\r\n      {\r\n        "name": "Diana",\r\n        "email": "diana@example.com",\r\n        "userType": "REGULAR"\r\n      },\r\n      {\r\n        "name": "Edward",\r\n        "email": "edward@example.com",\r\n        "userType": "VIP"\r\n      }\r\n    ]\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"\u6761\u4ef6\u67e5\u8be2",children:"\u6761\u4ef6\u67e5\u8be2"}),"\n",(0,s.jsx)(r.p,{children:"\u4f8b: \u67e5\u8be2\u6240\u6709\u4f1a\u5458\u7528\u6237\u548c\u4ef7\u683c\u5927\u4e8e 200 \u7684\u4ea7\u54c1"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"{\r\n  # WHERE userType = 'VIP'\r\n  vip: userList(userType: { opr: EQ, val: VIP }) {\r\n    name\r\n  }\r\n  # WHERE price > 200\r\n  greaterThan200: productList(price: { opr: GT, val: 200 }) {\r\n    name\r\n    price\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "vip": [\r\n      {\r\n        "name": "Alice"\r\n      },\r\n      {\r\n        "name": "Charlie"\r\n      },\r\n      {\r\n        "name": "Edward"\r\n      },\r\n      {\r\n        "name": "George"\r\n      },\r\n      {\r\n        "name": "Ian"\r\n      },\r\n      {\r\n        "name": "Kyle"\r\n      },\r\n      {\r\n        "name": "Mike"\r\n      },\r\n      {\r\n        "name": "Oliver"\r\n      },\r\n      {\r\n        "name": "Quentin"\r\n      },\r\n      {\r\n        "name": "Steve"\r\n      }\r\n    ],\r\n    "greaterThan200": [\r\n      {\r\n        "name": "Laptop",\r\n        "price": 999.99\r\n      },\r\n      {\r\n        "name": "Phone",\r\n        "price": 499.99\r\n      },\r\n      {\r\n        "name": "Tablet",\r\n        "price": 299.99\r\n      }\r\n    ]\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"\u5173\u8054\u67e5\u8be2",children:"\u5173\u8054\u67e5\u8be2"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u4f8b: \u67e5\u8be2 Alice \u7684\u8ba2\u5355"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"{\r\n  # WHERE name = 'Alice'\r\n  user(name: { opr: EQ, val: \"Alice\" }) {\r\n    name\r\n    orders {\r\n      items {\r\n        product {\r\n          name\r\n        }\r\n        quantity\r\n      }\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "user": {\r\n      "name": "Alice",\r\n      "orders": [\r\n        {\r\n          "items": [\r\n            {\r\n              "product": {\r\n                "name": "Laptop"\r\n              },\r\n              "quantity": 1\r\n            },\r\n            {\r\n              "product": {\r\n                "name": "Tablet"\r\n              },\r\n              "quantity": 2\r\n            }\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsx)(r.li,{children:"\u4f8b: \u67e5\u8be2\u8d2d\u4e70\u4e86 Phone \u7684\u7528\u6237\u5217\u8868"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"{\r\n  # WHERE EXISTS (SELECT 1 FROM order_item oi WHERE EXISTS (SELECT 1 FROM product p WHERE id = oi.product_id AND p.name = 'Phone'))\r\n  userList(\r\n    orders: { items: { product: { name: { opr: EQ, val: \"Phone\" } } } }\r\n  ) {\r\n    name\r\n    orders {\r\n      items {\r\n        product {\r\n          name\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "userList": [\r\n      {\r\n        "name": "Bob",\r\n        "orders": [\r\n          {\r\n            "items": [\r\n              {\r\n                "product": {\r\n                  "name": "Phone"\r\n                }\r\n              }\r\n            ]\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        "name": "Diana",\r\n        "orders": [\r\n          {\r\n            "items": [\r\n              {\r\n                "product": {\r\n                  "name": "Laptop"\r\n                }\r\n              },\r\n              {\r\n                "product": {\r\n                  "name": "Phone"\r\n                }\r\n              },\r\n              {\r\n                "product": {\r\n                  "name": "Tablet"\r\n                }\r\n              }\r\n            ]\r\n          }\r\n        ]\r\n      }\r\n    ]\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"\u6392\u5e8f",children:"\u6392\u5e8f"}),"\n",(0,s.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(r.a,{href:"#%E6%9F%A5%E8%AF%A2%E5%8F%82%E6%95%B0",children:(0,s.jsx)(r.code,{children:"orderBy"})})," \u53c2\u6570\u8fdb\u884c\u6392\u5e8f"]}),"\n",(0,s.jsx)(r.p,{children:"\u4f8b: \u67e5\u8be2\u4ea7\u54c1\u5217\u8868, \u4ef7\u683c\u7531\u9ad8\u5230\u4f4e"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"{\r\n  # ORDER BY price DESC\r\n  productList(orderBy: { price: DESC }) {\r\n    name\r\n    price\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "productList": [\r\n      {\r\n        "name": "Laptop",\r\n        "price": 999.99\r\n      },\r\n      {\r\n        "name": "Phone",\r\n        "price": 499.99\r\n      },\r\n      {\r\n        "name": "Tablet",\r\n        "price": 299.99\r\n      },\r\n      {\r\n        "name": "Monitor",\r\n        "price": 199.99\r\n      },\r\n      {\r\n        "name": "Keyboard",\r\n        "price": 49.99\r\n      }\r\n    ]\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"\u7edf\u8ba1",children:"\u7edf\u8ba1"}),"\n",(0,s.jsx)(r.h4,{id:"\u7edf\u8ba1\u5b57\u6bb5",children:(0,s.jsx)(r.strong,{children:"\u7edf\u8ba1\u5b57\u6bb5"})}),"\n",(0,s.jsx)(r.p,{children:"Graphoenix \u4f1a\u4e3a\u6240\u6709\u7684 Scalar \u7c7b\u578b\u7684\u5b57\u6bb5\u751f\u6210\u7edf\u8ba1\u5b57\u6bb5"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u53c2\u6570\u540d"}),(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(r.th,{children:"SQL \u793a\u4f8b"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"(field)Count"}),(0,s.jsx)(r.td,{children:"Int"}),(0,s.jsx)(r.td,{children:"\u6761\u6570"}),(0,s.jsxs)(r.td,{children:["SELECT ",(0,s.jsx)(r.strong,{children:"COUNT("})," field ",(0,s.jsx)(r.strong,{children:")"})," FROM t"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"(field)Max"}),(0,s.jsx)(r.td,{children:"(Scalar)"}),(0,s.jsx)(r.td,{children:"\u6700\u5927\u503c"}),(0,s.jsxs)(r.td,{children:["SELECT ",(0,s.jsx)(r.strong,{children:"MAX("})," field ",(0,s.jsx)(r.strong,{children:")"})," FROM t"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"(field)Min"}),(0,s.jsx)(r.td,{children:"(Scalar)"}),(0,s.jsx)(r.td,{children:"\u6700\u5c0f\u503c"}),(0,s.jsxs)(r.td,{children:["SELECT ",(0,s.jsx)(r.strong,{children:"MIN("})," field ",(0,s.jsx)(r.strong,{children:")"})," FROM t"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"(field)Sum"}),(0,s.jsx)(r.td,{children:"(Scalar)"}),(0,s.jsx)(r.td,{children:"\u5408\u8ba1"}),(0,s.jsxs)(r.td,{children:["SELECT ",(0,s.jsx)(r.strong,{children:"SUM("})," field ",(0,s.jsx)(r.strong,{children:")"})," FROM t"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"(field)Avg"}),(0,s.jsx)(r.td,{children:"(Scalar)"}),(0,s.jsx)(r.td,{children:"\u5e73\u5747\u503c"}),(0,s.jsxs)(r.td,{children:["SELECT ",(0,s.jsx)(r.strong,{children:"AVG("})," field ",(0,s.jsx)(r.strong,{children:")"})," FROM t"]})]})]})]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u4f8b: \u67e5\u8be2\u4ef7\u683c\u5728 300 \u4ee5\u5185, \u4ef7\u683c\u6700\u9ad8\u7684\u4ea7\u54c1"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"{\r\n  product(price: { opr: LTE, val: 300 }) {\r\n    name\r\n    # MAX(price)\r\n    priceMax\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "product": {\r\n      "name": "Tablet",\r\n      "priceMax": 299.99\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(r.a,{href:"#%E6%9F%A5%E8%AF%A2%E5%8F%82%E6%95%B0",children:(0,s.jsx)(r.code,{children:"groupBy"})})," \u53c2\u6570\u8fdb\u884c\u7edf\u8ba1"]}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsx)(r.li,{children:"\u4f8b: \u5206\u7ec4\u67e5\u8be2\u666e\u901a\u7528\u6237\u548c\u4f1a\u5458\u7528\u6237\u7684\u6570\u91cf"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:'{\r\n  # GROUP BY userType\r\n  userList(groupBy: ["userType"]) {\r\n    userType\r\n    # COUNT(id)\r\n    idCount\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "userList": [\r\n      {\r\n        "userType": "VIP",\r\n        "idCount": 10\r\n      },\r\n      {\r\n        "userType": "REGULAR",\r\n        "idCount": 10\r\n      }\r\n    ]\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"\u5206\u9875\u67e5\u8be2",children:"\u5206\u9875\u67e5\u8be2"}),"\n",(0,s.jsxs)(r.p,{children:["Graphoenix \u652f\u6301",(0,s.jsx)(r.a,{href:"https://graphql.org/learn/pagination/",children:"\u666e\u901a\u5206\u9875\u548c\u6e38\u6807\u5206\u9875"}),"(",(0,s.jsx)(r.a,{href:"https://graphql.cn/learn/pagination/",children:"\u4e2d\u6587"}),"), \u652f\u6301",(0,s.jsx)(r.a,{href:"https://relay.dev/graphql/connections.htm",children:"GraphQL Cursor Connections \u89c4\u8303"})]}),"\n",(0,s.jsx)(r.h3,{id:"\u5206\u9875\u63a5\u53e3",children:(0,s.jsx)(r.strong,{children:"\u5206\u9875\u63a5\u53e3"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u63a5\u53e3\u540d"}),(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u53c2\u6570"}),(0,s.jsx)(r.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(r.th,{children:"\u793a\u4f8b (Type=User)"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"(type)Connection"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/guide/types#objectconnection",children:"(Type)Connection"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"#%E6%9F%A5%E8%AF%A2%E5%8F%82%E6%95%B0",children:"(Type)ConnectionQueryArguments"})}),(0,s.jsx)(r.td,{children:"\u67e5\u8be2\u5355\u6761"}),(0,s.jsx)(r.td,{children:"userConnection"})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"\u57fa\u672c\u5206\u9875",children:"\u57fa\u672c\u5206\u9875"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u4f8b: \u67e5\u8be2\u7528\u6237\u7b2c 1 \u9875, \u6bcf\u9875 5 \u6761"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"{\r\n  userConnection(first: 5) {\r\n    totalCount\r\n    edges {\r\n      node {\r\n        name\r\n        email\r\n        userType\r\n      }\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "userConnection": {\r\n      "totalCount": 20,\r\n      "edges": [\r\n        {\r\n          "node": {\r\n            "name": "Alice",\r\n            "email": "alice@example.com",\r\n            "userType": "VIP"\r\n          }\r\n        },\r\n        {\r\n          "node": {\r\n            "name": "Bob",\r\n            "email": "bob@example.com",\r\n            "userType": "REGULAR"\r\n          }\r\n        },\r\n        {\r\n          "node": {\r\n            "name": "Charlie",\r\n            "email": "charlie@example.com",\r\n            "userType": "VIP"\r\n          }\r\n        },\r\n        {\r\n          "node": {\r\n            "name": "Diana",\r\n            "email": "diana@example.com",\r\n            "userType": "REGULAR"\r\n          }\r\n        },\r\n        {\r\n          "node": {\r\n            "name": "Edward",\r\n            "email": "edward@example.com",\r\n            "userType": "VIP"\r\n          }\r\n        }\r\n      ]\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(r.a,{href:"#%E6%9F%A5%E8%AF%A2%E5%8F%82%E6%95%B0",children:(0,s.jsx)(r.code,{children:"offset"})})," \u53c2\u6570\u6765\u8bbe\u7f6e\u504f\u79fb\u6570"]}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsx)(r.li,{children:"\u4f8b: \u67e5\u8be2\u7528\u6237\u7b2c 2 \u9875, \u6bcf\u9875 5 \u6761"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"{\r\n  # LIMIT 5, 5\r\n  userConnection(offset: 5, first: 5) {\r\n    totalCount\r\n    edges {\r\n      node {\r\n        name\r\n        email\r\n        userType\r\n      }\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "userConnection": {\r\n      "totalCount": 20,\r\n      "edges": [\r\n        {\r\n          "node": {\r\n            "name": "Fiona",\r\n            "email": "fiona@example.com",\r\n            "userType": "REGULAR"\r\n          }\r\n        },\r\n        {\r\n          "node": {\r\n            "name": "George",\r\n            "email": "george@example.com",\r\n            "userType": "VIP"\r\n          }\r\n        },\r\n        {\r\n          "node": {\r\n            "name": "Hannah",\r\n            "email": "hannah@example.com",\r\n            "userType": "REGULAR"\r\n          }\r\n        },\r\n        {\r\n          "node": {\r\n            "name": "Ian",\r\n            "email": "ian@example.com",\r\n            "userType": "VIP"\r\n          }\r\n        },\r\n        {\r\n          "node": {\r\n            "name": "Jane",\r\n            "email": "jane@example.com",\r\n            "userType": "REGULAR"\r\n          }\r\n        }\r\n      ]\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"\u6e38\u6807\u5206\u9875",children:"\u6e38\u6807\u5206\u9875"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/x1ah/Blog/issues/15",children:"\u6e38\u6807\u5206\u9875\u7b80\u4ecb"})}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u4f8b: \u67e5\u8be2\u7528\u6237\u7b2c 3 \u9875, \u6bcf\u9875 5 \u6761, \u6e38\u6807\u5206\u9875"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{ id: "10", name: "Jane", email: "jane@example.com", userType: REGULAR },\r\n{ id: "11", name: "Kyle", email: "kyle@example.com", userType: VIP },\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u67e5\u8be2 Jane \u4e4b\u540e\u7684 5 \u6761, \u6e38\u6807\u5b57\u6bb5\u9ed8\u8ba4\u4e3a ID \u5b57\u6bb5, \u4e5f\u53ef\u4f7f\u7528 ",(0,s.jsx)(r.code,{children:"@cursor"})," \u6307\u5b9a\u6e38\u6807\u5b57\u6bb5, \u6b64\u5904\u53d6 Jane \u7684 id: 10"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"{\r\n  userConnection(after: 10, first: 5) {\r\n    pageInfo {\r\n      hasNextPage\r\n    }\r\n    edges {\r\n      cursor\r\n      node {\r\n        name\r\n        email\r\n        userType\r\n      }\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "userConnection": {\r\n      "pageInfo": {\r\n        // highlight-start\r\n        "hasNextPage": true\r\n        // highlight-end\r\n      },\r\n      "edges": [\r\n        {\r\n          "cursor": "11",\r\n          "node": {\r\n            "name": "Kyle",\r\n            "email": "kyle@example.com",\r\n            "userType": "VIP"\r\n          }\r\n        },\r\n        {\r\n          "cursor": "12",\r\n          "node": {\r\n            "name": "Laura",\r\n            "email": "laura@example.com",\r\n            "userType": "REGULAR"\r\n          }\r\n        },\r\n        {\r\n          "cursor": "13",\r\n          "node": {\r\n            "name": "Mike",\r\n            "email": "mike@example.com",\r\n            "userType": "VIP"\r\n          }\r\n        },\r\n        {\r\n          "cursor": "14",\r\n          "node": {\r\n            "name": "Nina",\r\n            "email": "nina@example.com",\r\n            "userType": "REGULAR"\r\n          }\r\n        },\r\n        {\r\n          "cursor": "15",\r\n          "node": {\r\n            "name": "Oliver",\r\n            "email": "oliver@example.com",\r\n            "userType": "VIP"\r\n          }\r\n        }\r\n      ]\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsx)(r.li,{children:"\u4f8b: \u67e5\u8be2\u7528\u6237\u7b2c 4 \u9875, \u6bcf\u9875 5 \u6761, \u6e38\u6807\u5206\u9875"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"{\r\n  userConnection(after: 15, first: 5) {\r\n    pageInfo {\r\n      hasNextPage\r\n    }\r\n    edges {\r\n      cursor\r\n      node {\r\n        name\r\n        email\r\n        userType\r\n      }\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(r.p,{children:"Tina \u4e3a\u6700\u540e\u4e00\u4e2a\u7528\u6237, hasNextPage \u53d8\u4e3a false"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "userConnection": {\r\n      "pageInfo": {\r\n        // highlight-start\r\n        "hasNextPage": false\r\n        // highlight-end\r\n      },\r\n      "edges": [\r\n        {\r\n          "cursor": "16",\r\n          "node": {\r\n            "name": "Paula",\r\n            "email": "paula@example.com",\r\n            "userType": "REGULAR"\r\n          }\r\n        },\r\n        {\r\n          "cursor": "17",\r\n          "node": {\r\n            "name": "Quentin",\r\n            "email": "quentin@example.com",\r\n            "userType": "VIP"\r\n          }\r\n        },\r\n        {\r\n          "cursor": "18",\r\n          "node": {\r\n            "name": "Rachel",\r\n            "email": "rachel@example.com",\r\n            "userType": "REGULAR"\r\n          }\r\n        },\r\n        {\r\n          "cursor": "19",\r\n          "node": {\r\n            "name": "Steve",\r\n            "email": "steve@example.com",\r\n            "userType": "VIP"\r\n          }\r\n        },\r\n        {\r\n          "cursor": "20",\r\n          "node": {\r\n            "name": "Tina",\r\n            "email": "tina@example.com",\r\n            "userType": "REGULAR"\r\n          }\r\n        }\r\n      ]\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"\u67e5\u8be2\u53c2\u6570",children:(0,s.jsx)(r.strong,{children:"\u67e5\u8be2\u53c2\u6570"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u53c2\u6570\u540d"}),(0,s.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(r.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(r.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(r.th,{children:"SQL \u793a\u4f8b (x=10 y=5)"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"(field)"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/guide/types#scalarenumexpression",children:"(Scalar/Enum/Object)Expression"})}),(0,s.jsx)(r.td,{children:"\u65e0"}),(0,s.jsx)(r.td,{children:"\u6761\u4ef6\u5b57\u6bb5"}),(0,s.jsxs)(r.td,{children:["SELECT id FROM t WHERE ",(0,s.jsx)(r.strong,{children:"t.field"})," = 'xyz'"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"first"}),(0,s.jsx)(r.td,{children:"Int"}),(0,s.jsx)(r.td,{children:"\u65e0"}),(0,s.jsx)(r.td,{children:"\u83b7\u53d6\u524d x \u6761"}),(0,s.jsx)(r.td,{children:"SELECT id FROM t LIMIT 10"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"last"}),(0,s.jsx)(r.td,{children:"Int"}),(0,s.jsx)(r.td,{children:"\u65e0"}),(0,s.jsx)(r.td,{children:"\u83b7\u53d6\u540e x \u6761"}),(0,s.jsx)(r.td,{children:"SELECT id FROM t ORDER BY id DESC LIMIT 10"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"offset"}),(0,s.jsx)(r.td,{children:"Int"}),(0,s.jsx)(r.td,{children:"\u65e0"}),(0,s.jsx)(r.td,{children:"\u8df3\u8fc7 y \u6761"}),(0,s.jsx)(r.td,{children:"SELECT id FROM t LIMIT 5, 10"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cond"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/guide/types#conditional",children:"Conditional"})}),(0,s.jsx)(r.td,{children:"AND"}),(0,s.jsx)(r.td,{children:"\u53c2\u6570\u5185\u6761\u4ef6\u7684\u7ec4\u5408\u5173\u7cfb"}),(0,s.jsxs)(r.td,{children:["WHERE t.field = 'xyz' ",(0,s.jsx)(r.strong,{children:"AND"})," t.field <> 'abc'"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"not"}),(0,s.jsx)(r.td,{children:"Boolean"}),(0,s.jsx)(r.td,{children:"false"}),(0,s.jsx)(r.td,{children:"\u6761\u4ef6\u53d6\u975e"}),(0,s.jsxs)(r.td,{children:["WHERE ",(0,s.jsx)(r.strong,{children:"NOT"})," (t.field = 'xyz' AND t.field <> 'abc')"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"exs"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/guide/types#objectexpression",children:"[(Object)Expression]"})}),(0,s.jsx)(r.td,{children:"\u65e0"}),(0,s.jsx)(r.td,{children:"\u540c\u4e00\u5b57\u6bb5\u591a\u6b21\u4f5c\u4e3a\u67e5\u8be2\u6761\u4ef6\u65f6\u53ef\u4f7f\u7528\u6b64\u53c2\u6570"}),(0,s.jsxs)(r.td,{children:["WHERE ",(0,s.jsx)(r.strong,{children:"("})," t.field = 'xyz' AND t.field <> 'abc' ",(0,s.jsx)(r.strong,{children:")"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"orderBy"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/docs/guide/types#objectorderby",children:"[(Object)OrderBy]"})}),(0,s.jsx)(r.td,{children:"\u65e0"}),(0,s.jsx)(r.td,{children:"\u6392\u5e8f\u5b57\u6bb5"}),(0,s.jsxs)(r.td,{children:["SELECT id FROM t ",(0,s.jsx)(r.strong,{children:"ORDER BY"})," t.field"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"groupBy"}),(0,s.jsx)(r.td,{children:"[String]"}),(0,s.jsx)(r.td,{children:"\u65e0"}),(0,s.jsx)(r.td,{children:"\u5206\u7ec4\u5b57\u6bb5"}),(0,s.jsxs)(r.td,{children:["SELECT id FROM t ",(0,s.jsx)(r.strong,{children:"GROUP BY"})," t.field"]})]})]})]})]})}function o(n={}){const{wrapper:r}={...(0,d.R)(),...n.components};return r?(0,s.jsx)(r,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},5710:(n,r,e)=>{e.d(r,{R:()=>i,x:()=>a});var s=e(758);const d={},l=s.createContext(d);function i(n){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function a(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),s.createElement(l.Provider,{value:r},n.children)}}}]);