"use strict";(self.webpackChunkgp_doc_github_io=self.webpackChunkgp_doc_github_io||[]).push([[904],{7853:(L,e,U)=>{U.r(e),U.d(e,{assets:()=>i,contentTitle:()=>n,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=U(6070),N=U(5710);const t={sidebar_position:2},n="\u51c6\u5907\u5de5\u4f5c",a={id:"tutorial/preparation",title:"\u51c6\u5907\u5de5\u4f5c",description:"\u5728\u5f00\u59cb\u4e4b\u524d, \u6211\u4eec\u5148\u82b1\u4e00\u70b9\u65f6\u95f4\u51c6\u5907\u5ba2\u6237\u7aef\u5de5\u5177, \u4e86\u89e3\u9884\u5907\u77e5\u8bc6\u548c\u751f\u6210\u793a\u4f8b\u6570\u636e.",source:"@site/docs/tutorial/preparation.md",sourceDirName:"tutorial",slug:"/tutorial/preparation",permalink:"/docs/tutorial/preparation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/tutorial/quick-start"},next:{title:"\u67e5\u8be2(query)",permalink:"/docs/tutorial/query"}},i={},d=[{value:"\u5de5\u5177",id:"\u5de5\u5177",level:2},{value:"\u9884\u5907\u77e5\u8bc6",id:"\u9884\u5907\u77e5\u8bc6",level:2},{value:"\u793a\u4f8b\u6570\u636e",id:"\u793a\u4f8b\u6570\u636e",level:2}];function o(L){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,N.R)(),...L.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u5f00\u59cb\u4e4b\u524d, \u6211\u4eec\u5148\u82b1\u4e00\u70b9\u65f6\u95f4\u51c6\u5907\u5ba2\u6237\u7aef\u5de5\u5177, \u4e86\u89e3\u9884\u5907\u77e5\u8bc6\u548c\u751f\u6210\u793a\u4f8b\u6570\u636e."}),"\n",(0,r.jsx)(e.h2,{id:"\u5de5\u5177",children:"\u5de5\u5177"}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u5185\u7f6e\u7684\u5ba2\u6237\u7aef\u5de5\u5177: ",(0,r.jsx)(e.a,{href:"http://localhost:8906/",children:"http://localhost:8906/"}),"\n",(0,r.jsx)(e.img,{alt:"graphiQL",src:U(7125).A+"",title:"graphiQL",width:"1023",height:"497"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u4e5f\u63a8\u8350\u4f7f\u7528\u5168\u5e73\u53f0\u7684 GraphQL \u5ba2\u6237\u7aef: ",(0,r.jsx)(e.a,{href:"https://altairgraphql.dev/",children:"https://altairgraphql.dev/"}),"\n",(0,r.jsx)(e.img,{src:"https://altairgraphql.dev/assets/img/app-shot.png",alt:"Altair",title:"Altair"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u9884\u5907\u77e5\u8bc6",children:"\u9884\u5907\u77e5\u8bc6"}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u8fd8\u6ca1\u6709\u57fa\u672c\u7684 GraphQL \u77e5\u8bc6, \u53ef\u4ee5\u5148\u53bb",(0,r.jsx)(e.a,{href:"https://graphql.org/",children:"GraphQL \u5b98\u7f51"}),"(",(0,r.jsx)(e.a,{href:"https://graphql.cn/",children:"\u4e2d\u6587\u7ad9"}),")\u4e86\u89e3\u57fa\u7840\u6982\u5ff5."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://www.howtographql.com/",children:"GraphQL \u751f\u6001"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://github.com/chentsulin/awesome-graphql/",children:"Awesome list of GraphQL"})}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b\u6570\u636e",children:"\u793a\u4f8b\u6570\u636e"}),"\n",(0,r.jsxs)(e.p,{children:["\u6700\u540e\u6211\u4eec\u4f7f\u7528",(0,r.jsx)(e.a,{href:"/docs/guide/mutation",children:"\u53d8\u66f4"}),"\u6765\u521d\u59cb\u5316\u4e00\u4e9b\u793a\u4f8b\u6570\u636e, \u53d8\u66f4\u7684\u5185\u5bb9\u4f1a\u5728\u540e\u9762\u7684\u793a\u4f8b\u91cc\u66f4\u8be6\u7ec6\u7684\u8bf4\u660e."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:'mutation {\n  userList(\n    list: [\n      { id: "1", name: "Alice", email: "alice@example.com", userType: VIP }\n      { id: "2", name: "Bob", email: "bob@example.com", userType: REGULAR }\n      { id: "3", name: "Charlie", email: "charlie@example.com", userType: VIP }\n      { id: "4", name: "Diana", email: "diana@example.com", userType: REGULAR }\n      { id: "5", name: "Edward", email: "edward@example.com", userType: VIP }\n      { id: "6", name: "Fiona", email: "fiona@example.com", userType: REGULAR }\n      { id: "7", name: "George", email: "george@example.com", userType: VIP }\n      {\n        id: "8"\n        name: "Hannah"\n        email: "hannah@example.com"\n        userType: REGULAR\n      }\n      { id: "9", name: "Ian", email: "ian@example.com", userType: VIP }\n      { id: "10", name: "Jane", email: "jane@example.com", userType: REGULAR }\n      { id: "11", name: "Kyle", email: "kyle@example.com", userType: VIP }\n      { id: "12", name: "Laura", email: "laura@example.com", userType: REGULAR }\n      { id: "13", name: "Mike", email: "mike@example.com", userType: VIP }\n      { id: "14", name: "Nina", email: "nina@example.com", userType: REGULAR }\n      { id: "15", name: "Oliver", email: "oliver@example.com", userType: VIP }\n      { id: "16", name: "Paula", email: "paula@example.com", userType: REGULAR }\n      { id: "17", name: "Quentin", email: "quentin@example.com", userType: VIP }\n      {\n        id: "18"\n        name: "Rachel"\n        email: "rachel@example.com"\n        userType: REGULAR\n      }\n      { id: "19", name: "Steve", email: "steve@example.com", userType: VIP }\n      { id: "20", name: "Tina", email: "tina@example.com", userType: REGULAR }\n    ]\n  ) {\n    id\n  }\n  productList(\n    list: [\n      { id: "1", name: "Laptop", price: 999.99 }\n      { id: "2", name: "Phone", price: 499.99 }\n      { id: "3", name: "Tablet", price: 299.99 }\n      { id: "4", name: "Monitor", price: 199.99 }\n      { id: "5", name: "Keyboard", price: 49.99 }\n    ]\n  ) {\n    id\n  }\n  orderList(\n    list: [\n      {\n        user: { where: { id: { val: "1" } } }\n        items: [\n          { product: { where: { id: { val: "1" } } }, quantity: 1 }\n          { product: { where: { id: { val: "3" } } }, quantity: 2 }\n        ]\n      }\n      {\n        user: { where: { id: { val: "2" } } }\n        items: [{ product: { where: { id: { val: "2" } } }, quantity: 1 }]\n      }\n      {\n        user: { where: { id: { val: "3" } } }\n        items: [\n          { product: { where: { id: { val: "4" } } }, quantity: 2 }\n          { product: { where: { id: { val: "5" } } }, quantity: 3 }\n        ]\n      }\n      {\n        user: { where: { id: { val: "4" } } }\n        items: [\n          { product: { where: { id: { val: "1" } } }, quantity: 1 }\n          { product: { where: { id: { val: "2" } } }, quantity: 1 }\n          { product: { where: { id: { val: "3" } } }, quantity: 1 }\n        ]\n      }\n    ]\n  ) {\n    id\n  }\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u590d\u5236\u4ee5\u4e0a\u5185\u5bb9\u5230\u5ba2\u6237\u7aef\u6267\u884c\u5373\u53ef\n",(0,r.jsx)(e.img,{alt:"example data",src:U(4134).A+"",title:"example data",width:"1920",height:"919"})]}),"\n",(0,r.jsx)(e.p,{children:"\u4e5f\u53ef\u5728\u9879\u76ee\u542f\u52a8\u540e\u5728\u6570\u636e\u5e93\u4e2d\u5bfc\u5165\u6570\u636e"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"INSERT INTO `order`.`user` (name,email,phone_numbers,user_type,is_deprecated,version,realm_id,create_user_id,create_time,update_user_id,update_time,create_group_id,`__typename`) VALUES\n\t ('Alice','alice@example.com',NULL,'VIP',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Bob','bob@example.com',NULL,'REGULAR',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Charlie','charlie@example.com',NULL,'VIP',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Diana','diana@example.com',NULL,'REGULAR',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Edward','edward@example.com',NULL,'VIP',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Fiona','fiona@example.com',NULL,'REGULAR',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('George','george@example.com',NULL,'VIP',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Hannah','hannah@example.com',NULL,'REGULAR',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Ian','ian@example.com',NULL,'VIP',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Jane','jane@example.com',NULL,'REGULAR',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User');\n\nINSERT INTO `order`.`user` (name,email,phone_numbers,user_type,is_deprecated,version,realm_id,create_user_id,create_time,update_user_id,update_time,create_group_id,`__typename`) VALUES\n\t ('Kyle','kyle@example.com',NULL,'VIP',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Laura','laura@example.com',NULL,'REGULAR',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Mike','mike@example.com',NULL,'VIP',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Nina','nina@example.com',NULL,'REGULAR',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Oliver','oliver@example.com',NULL,'VIP',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Paula','paula@example.com',NULL,'REGULAR',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Quentin','quentin@example.com',NULL,'VIP',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Rachel','rachel@example.com',NULL,'REGULAR',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Steve','steve@example.com',NULL,'VIP',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User'),\n\t ('Tina','tina@example.com',NULL,'REGULAR',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'User');\n\nINSERT INTO `order`.product (name,price,is_deprecated,version,realm_id,create_user_id,create_time,update_user_id,update_time,create_group_id,`__typename`) VALUES\n\t ('Laptop',999.99,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Product'),\n\t ('Phone',499.99,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Product'),\n\t ('Tablet',299.99,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Product'),\n\t ('Monitor',199.99,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Product'),\n\t ('Keyboard',49.99,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Product');\n\nINSERT INTO `order`.`order` (is_deprecated,version,realm_id,create_user_id,create_time,update_user_id,update_time,create_group_id,`__typename`) VALUES\n\t (0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Order'),\n\t (0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Order'),\n\t (0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Order'),\n\t (0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Order');\n\nINSERT INTO `order`.order_item (quantity,is_deprecated,version,realm_id,create_user_id,create_time,update_user_id,update_time,create_group_id,`__typename`) VALUES\n\t (1,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItem'),\n\t (2,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItem'),\n\t (1,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItem'),\n\t (2,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItem'),\n\t (3,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItem'),\n\t (1,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItem'),\n\t (1,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItem'),\n\t (1,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItem');\n\nINSERT INTO `order`.order_order_item_relation (order_ref,order_item_ref,is_deprecated,version,realm_id,create_user_id,create_time,update_user_id,update_time,create_group_id,`__typename`) VALUES\n\t ('1','1',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderOrderItemRelation'),\n\t ('1','2',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderOrderItemRelation'),\n\t ('2','3',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderOrderItemRelation'),\n\t ('3','4',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderOrderItemRelation'),\n\t ('3','5',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderOrderItemRelation'),\n\t ('4','6',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderOrderItemRelation'),\n\t ('4','7',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderOrderItemRelation'),\n\t ('4','8',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderOrderItemRelation');\n\nINSERT INTO `order`.order_user_relation (user_ref,order_ref,is_deprecated,version,realm_id,create_user_id,create_time,update_user_id,update_time,create_group_id,`__typename`) VALUES\n\t ('1','1',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderUserRelation'),\n\t ('2','2',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderUserRelation'),\n\t ('3','3',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderUserRelation'),\n\t ('4','4',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderUserRelation');\n\nINSERT INTO `order`.order_item_product_relation (order_item_ref,product_ref,is_deprecated,version,realm_id,create_user_id,create_time,update_user_id,update_time,create_group_id,`__typename`) VALUES\n\t ('1','1',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItemProductRelation'),\n\t ('2','3',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItemProductRelation'),\n\t ('3','2',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItemProductRelation'),\n\t ('4','4',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItemProductRelation'),\n\t ('5','5',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItemProductRelation'),\n\t ('6','1',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItemProductRelation'),\n\t ('7','2',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItemProductRelation'),\n\t ('8','3',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'OrderItemProductRelation');\n"})})]})}function m(L={}){const{wrapper:e}={...(0,N.R)(),...L.components};return e?(0,r.jsx)(e,{...L,children:(0,r.jsx)(o,{...L})}):o(L)}},7125:(L,e,U)=>{U.d(e,{A:()=>r});const r=U.p+"assets/images/graphiQL-765d36b2d780b630d0ffbdfcc83a197e.png"},4134:(L,e,U)=>{U.d(e,{A:()=>r});const r=U.p+"assets/images/mutationExampleData-0e5b7610fa9d4d5180f9b442c91ae126.png"},5710:(L,e,U)=>{U.d(e,{R:()=>n,x:()=>a});var r=U(758);const N={},t=r.createContext(N);function n(L){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof L?L(e):{...e,...L}}),[e,L])}function a(L){let e;return e=L.disableParentContext?"function"==typeof L.components?L.components(N):L.components||N:n(L.components),r.createElement(t.Provider,{value:e},L.children)}}}]);