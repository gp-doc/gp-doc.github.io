"use strict";(self.webpackChunkgp_doc_github_io=self.webpackChunkgp_doc_github_io||[]).push([[4284],{5882:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(6070),t=r(5710);const s={sidebar_position:1},i="\u5feb\u901f\u5f00\u59cb",o={id:"tutorial/quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u521d\u59cb\u5316\u9879\u76ee -> \u5b9a\u4e49\u7c7b\u578b -> \u542f\u52a8\u670d\u52a1",source:"@site/docs/tutorial/quick-start.md",sourceDirName:"tutorial",slug:"/tutorial/quick-start",permalink:"/docs/tutorial/quick-start",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6559\u7a0b",permalink:"/docs/category/\u6559\u7a0b"},next:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/docs/tutorial/preparation"}},d={},c=[{value:"\u7cfb\u7edf\u8981\u6c42",id:"\u7cfb\u7edf\u8981\u6c42",level:2},{value:"\u521d\u59cb\u5316\u9879\u76ee",id:"\u521d\u59cb\u5316\u9879\u76ee",level:2},{value:"1. \u5b9a\u4e49 GraphQL",id:"1-\u5b9a\u4e49-graphql",level:3},{value:"2. \u914d\u7f6e\u670d\u52a1\u4e0e\u6570\u636e\u5e93",id:"2-\u914d\u7f6e\u670d\u52a1\u4e0e\u6570\u636e\u5e93",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2}];function l(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components},{Details:s}=e;return s||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"}),"\n",(0,a.jsx)(e.p,{children:"\u521d\u59cb\u5316\u9879\u76ee -> \u5b9a\u4e49\u7c7b\u578b -> \u542f\u52a8\u670d\u52a1"}),"\n",(0,a.jsx)(e.h2,{id:"\u7cfb\u7edf\u8981\u6c42",children:"\u7cfb\u7edf\u8981\u6c42"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://www.oracle.com/in/java/technologies/javase/jdk11-archive-downloads.html/",children:"JDK >= 11.0"})}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"https://mariadb.com/kb/en/mariadb-1060-release-notes/",children:"MariaDB >= 10.6.0"})," \u6216 ",(0,a.jsx)(e.a,{href:"https://dev.mysql.com/downloads/mysql/8.0.html/",children:"MySQL >= 8.0"})]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"https://www.rabbitmq.com/docs/download/",children:"RabbitMQ >= 3.0"})," (\u53ef\u9009)"]}),"\n"]}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsx)("summary",{children:"\u63a8\u8350\u4f7f\u7528Docker\u6784\u5efa\u5f00\u53d1\u73af\u5883"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-yaml",metastring:'title="docker-compose.yml"',children:'version: "3.8"\n\nservices:\n  gp-mariadb:\n    container_name: gp-mariadb\n    image: mariadb:10.6\n    command:\n      --group_concat_max_len=4294967295\n    restart: unless-stopped\n    ports:\n      - "3306:3306"\n    environment:\n      MYSQL_ROOT_PASSWORD: your-root-password\n      MYSQL_DATABASE: order\n      MYSQL_USER: your-username\n      MYSQL_PASSWORD: your-password\n      MYSQL_HOST: "%"\n    networks:\n      - gp-net\n\n  gp-rabbitmq:\n    container_name: gp-rabbitmq\n    image: rabbitmq:3\n    restart: unless-stopped\n    ports:\n      - "5672:5672"\n    networks:\n      - gp-net\n\nnetworks:\n  gp-net:\n'})}),(0,a.jsx)(e.p,{children:"\u542f\u52a8\u5bb9\u5668"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"docker-compose up -d\n"})})]}),"\n",(0,a.jsx)(e.h2,{id:"\u521d\u59cb\u5316\u9879\u76ee",children:"\u521d\u59cb\u5316\u9879\u76ee"}),"\n",(0,a.jsxs)(e.p,{children:["\u6211\u4eec\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,a.jsx)(e.strong,{children:"order"}),"\u7684\u9879\u76ee, \u5305\u540d\u4e3a",(0,a.jsx)(e.strong,{children:"demo.gp.order"})]}),"\n",(0,a.jsxs)(e.p,{children:["\u4f7f\u7528\u5b98\u65b9\u811a\u624b\u67b6\u5feb\u901f\u521d\u59cb\u5316\u9879\u76ee ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.a,{href:"https://gp-init.github.io?name=order&packageName=demo.gp.order",children:"Graphoenix Server Initializer"})})," \u6216\u53c2\u7167",(0,a.jsx)(e.a,{href:"/docs/guide/Install",children:"\u624b\u52a8\u5b89\u88c5"}),"."]}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsx)("summary",{children:"\u9879\u76ee\u7ed3\u6784"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"|-- order\n    |-- build.gradle\n    |-- gradle.properties\n    |-- settings.gradle\n    |-- order-app                             \u542f\u52a8\u6a21\u5757, \u5f15\u5165\u8ba2\u5355\u548c\u5176\u4ed6\u6a21\u5757\n    |   |-- build.gradle\n    |   |-- src\n    |       |-- main\n    |           |-- java\n    |           |   |-- demo.gp.order\n    |           |       |-- App.java          \u542f\u52a8\u7c7b\n    |           |-- resources\n    |               |-- application.conf      \u914d\u7f6e\u6587\u4ef6\n    |-- order-package                         \u8ba2\u5355\u6a21\u5757\n    |   |-- build.gradle\n    |   |-- src\n    |       |-- main\n    |           |-- java\n    |           |   |-- demo.gp.order\n    |           |       |-- package-info.java package-info\u6240\u5728\u76ee\u5f55\u4f5c\u4e3a\u5305\u540d\n    |           |-- resources\n    |               |-- graphql\n    |                   |-- order.gql         \u5b9a\u4e49\u8ba2\u5355\u76f8\u5173\u7c7b\u578b\n    |-- other-package                         \u53ef\u6839\u636e\u9700\u6c42\u53ef\u4ee5\u52a0\u5165\u5176\u4ed6\u6a21\u5757\n        |-- build.gradle\n        |-- src\n            |-- main\n                |-- java\n                |   |-- demo.gp.other\n                |       |-- package-info.java\n                |-- resources\n                    |-- graphql\n                        |-- other.gql         \u5b9a\u4e49\u5176\u4ed6\u76f8\u5173\u7c7b\u578b\n"})})]}),"\n",(0,a.jsx)(e.h3,{id:"1-\u5b9a\u4e49-graphql",children:"1. \u5b9a\u4e49 GraphQL"}),"\n",(0,a.jsx)(e.p,{children:"\u8bbe\u8ba1\u4e00\u4e2a\u7b80\u5355\u7684\u8ba2\u5355\u7cfb\u7edf, \u5305\u62ec\u7528\u6237(User)\u548c\u8ba2\u5355(Order)\u548c\u4ea7\u54c1(Product), \u6bcf\u4e2a\u8ba2\u5355\u5305\u542b\u591a\u4e2a\u8ba2\u5355\u9879(OrderItem)"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsxs)(e.em,{children:["\u5173\u4e8e GraphQL \u7c7b\u578b\u5b9a\u4e49\u7684\u8be6\u7ec6\u5185\u5bb9, \u8bf7\u53c2\u8003 GraphQL \u5b98\u7f51\u7684",(0,a.jsx)(e.a,{href:"https://graphql.org/learn/schema/",children:"\u7c7b\u578b\u7cfb\u7edf"}),"(",(0,a.jsx)(e.a,{href:"https://graphql.cn/learn/schema/",children:"\u4e2d\u6587\u7248"}),")\u548c",(0,a.jsx)(e.a,{href:"/docs/guide/types",children:"Grphoenix \u6269\u5c55\u7c7b\u578b"})]})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-graphql",metastring:'title="order-package/src/main/resources/graphql/order.gql"',children:'"\u7528\u6237"\ntype User {\n  "\u7528\u6237ID"\n  id: ID!\n  "\u7528\u6237\u540d"\n  name: String!\n  "\u7535\u5b50\u90ae\u7bb1"\n  email: String\n  "\u8054\u7cfb\u65b9\u5f0f"\n  phoneNumbers: [String!]\n  "\u7528\u6237\u7c7b\u578b"\n  userType: UserType!\n  "\u8ba2\u5355"\n  orders: [Order!]\n}\n\n"\u7528\u6237\u7c7b\u578b"\nenum UserType {\n  "\u666e\u901a\u7528\u6237"\n  REGULAR\n  "\u4f1a\u5458"\n  VIP\n}\n\n"\u4ea7\u54c1"\ntype Product {\n  "\u4ea7\u54c1ID"\n  id: ID!\n  "\u4ea7\u54c1\u540d\u79f0"\n  name: String!\n  "\u5b9a\u4ef7"\n  price: Float!\n}\n\n"\u8ba2\u5355"\ntype Order {\n  "\u8ba2\u5355ID"\n  id: ID!\n  "\u8d2d\u4e70\u7528\u6237"\n  user: User!\n  "\u4ea7\u54c1\u5217\u8868"\n  items: [OrderItem!]!\n}\n\n"\u8ba2\u5355\u9879"\ntype OrderItem {\n  "\u8ba2\u5355\u9879ID"\n  id: ID!\n  "\u4ea7\u54c1"\n  product: Product!\n  "\u8d2d\u4e70\u6570\u91cf"\n  quantity: Int!\n}\n'})}),"\n",(0,a.jsx)(e.h3,{id:"2-\u914d\u7f6e\u670d\u52a1\u4e0e\u6570\u636e\u5e93",children:"2. \u914d\u7f6e\u670d\u52a1\u4e0e\u6570\u636e\u5e93"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-hocon",metastring:'title="order-app/src/main/resources/graphql/application.conf"',children:'graphql {\n  buildIntrospection = true // \u751f\u6210\u5185\u7701\u6587\u6863\n}\npackage {\n  localPackageNames = ["io.graphoenix.introspection"] // \u5f15\u5165\u5185\u7701\u6a21\u5757\n}\nr2dbc {\n  driver = "mariadb"  // \u6b64\u5904\u4f7f\u7528mariadb\u9a71\u52a8\n  database = "order"  // \u6570\u636e\u5e93\n  user = "root"       // \u7528\u6237\n  password = "root"   // \u5bc6\u7801\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u542f\u52a8",children:"\u542f\u52a8"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.em,{children:"Run/Debug"})," order-app/src/main/java/demo/gp/order/App.java"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"start",src:r(983).A+"",title:"start",width:"1000",height:"538"})}),"\n",(0,a.jsxs)(e.p,{children:["GraphQL endpoint: ",(0,a.jsx)(e.a,{href:"http://localhost:8080/graphql",children:"http://localhost:8080/graphql"})]}),"\n",(0,a.jsxs)(e.p,{children:["GraphiQL endpoint: ",(0,a.jsx)(e.a,{href:"http://localhost:8906",children:"http://localhost:8906"})]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"graphiQL",src:r(7125).A+"",title:"graphiQL",width:"1023",height:"497"})}),"\n",(0,a.jsxs)(e.p,{children:["Voyager endpoint: ",(0,a.jsx)(e.a,{href:"http://localhost:8906/voyager",children:"http://localhost:8906/voyager"})]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"voyager",src:r(4444).A+"",title:"voyager",width:"1024",height:"498"})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},7125:(n,e,r)=>{r.d(e,{A:()=>a});const a=r.p+"assets/images/graphiQL-765d36b2d780b630d0ffbdfcc83a197e.png"},983:(n,e,r)=>{r.d(e,{A:()=>a});const a=r.p+"assets/images/start-69447b15a5555c64556d832b2ac62a0b.png"},4444:(n,e,r)=>{r.d(e,{A:()=>a});const a=r.p+"assets/images/voyager-05236487ae5812c2eca410a71cb27b03.png"},5710:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>o});var a=r(758);const t={},s=a.createContext(t);function i(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);