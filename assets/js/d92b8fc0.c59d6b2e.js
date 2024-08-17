"use strict";(self.webpackChunkgp_doc_github_io=self.webpackChunkgp_doc_github_io||[]).push([[617],{8188:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(6070),t=n(5710);const i={sidebar_position:6},a="GPI(GraphQL API)",l={id:"tutorial/graphql-api",title:"GPI(GraphQL API)",description:"\u5b9a\u4e49 GraphQL \u7f16\u7a0b\u63a5\u53e3",source:"@site/docs/tutorial/graphql-api.md",sourceDirName:"tutorial",slug:"/tutorial/graphql-api",permalink:"/docs/tutorial/graphql-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u8ba2\u9605(subscription)",permalink:"/docs/tutorial/subscription"},next:{title:"GPA(GraphQL Persistence API)",permalink:"/docs/tutorial/graphql-persistence-api"}},d={},c=[{value:"\u751f\u6210 GraphQL Entities",id:"\u751f\u6210-graphql-entities",level:2},{value:"\u5f15\u5165 Gradle \u63d2\u4ef6",id:"\u5f15\u5165-gradle-\u63d2\u4ef6",level:3},{value:"\u4f7f\u7528 Gradle \u63d2\u4ef6\u751f\u6210 Java Entities",id:"\u4f7f\u7528-gradle-\u63d2\u4ef6\u751f\u6210-java-entities",level:3},{value:"\u5b9a\u4e49 GraphQL Entities",id:"\u5b9a\u4e49-graphql-entities",level:3},{value:"GraphQL \u63a5\u53e3\u7c7b",id:"graphql-\u63a5\u53e3\u7c7b",level:2},{value:"\u67e5\u8be2\u63a5\u53e3",id:"\u67e5\u8be2\u63a5\u53e3",level:2},{value:"\u666e\u901a\u67e5\u8be2\u63a5\u53e3",id:"\u666e\u901a\u67e5\u8be2\u63a5\u53e3",level:3},{value:"\u5f02\u6b65\u67e5\u8be2\u63a5\u53e3",id:"\u5f02\u6b65\u67e5\u8be2\u63a5\u53e3",level:3},{value:"\u53d8\u66f4\u63a5\u53e3",id:"\u53d8\u66f4\u63a5\u53e3",level:2},{value:"\u666e\u901a\u53d8\u66f4\u63a5\u53e3",id:"\u666e\u901a\u53d8\u66f4\u63a5\u53e3",level:3},{value:"\u5f02\u6b65\u53d8\u66f4\u63a5\u53e3",id:"\u5f02\u6b65\u53d8\u66f4\u63a5\u53e3",level:3},{value:"\u5b57\u6bb5\u63a5\u53e3",id:"\u5b57\u6bb5\u63a5\u53e3",level:2},{value:"\u53c2\u6570\u63a5\u53e3",id:"\u53c2\u6570\u63a5\u53e3",level:2},{value:"<strong>\u6ce8\u89e3\u8bf4\u660e</strong>",id:"\u6ce8\u89e3\u8bf4\u660e",level:2},{value:"\u7c7b\u6ce8\u89e3",id:"\u7c7b\u6ce8\u89e3",level:3},{value:"\u5b57\u6bb5\u6ce8\u89e3",id:"\u5b57\u6bb5\u6ce8\u89e3",level:3},{value:"\u63a5\u53e3\u6ce8\u89e3",id:"\u63a5\u53e3\u6ce8\u89e3",level:3},{value:"\u5176\u4ed6\u6ce8\u89e3",id:"\u5176\u4ed6\u6ce8\u89e3",level:3},{value:"<strong>\u8fd4\u56de\u503c\u8bf4\u660e</strong>",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"<em>\u672c\u8282\u793a\u4f8b</em>",id:"\u672c\u8282\u793a\u4f8b",level:2}];function h(r){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...r.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"gpigraphql-api",children:"GPI(GraphQL API)"}),"\n",(0,s.jsx)(e.p,{children:"\u5b9a\u4e49 GraphQL \u7f16\u7a0b\u63a5\u53e3"}),"\n",(0,s.jsxs)(e.p,{children:["GraphQL API \u57fa\u4e8e",(0,s.jsx)(e.a,{href:"https://github.com/eclipse/microprofile-graphql",children:"Microprofile GraphQL \u534f\u8bae"}),"\u5b9e\u73b0, \u63a5\u53e3\u4f7f\u7528\u6ce8\u89e3\u548c GraphQL Entities \u8fdb\u884c\u5b9a\u4e49, \u5982\u679c\u4f60\u4f7f\u7528\u8fc7 Spring MVC \u6216\u662f Spring Boot, GPI \u4e0e Controller \u6709\u4e00\u5b9a\u7684\u76f8\u4f3c\u6027. GPI \u63a5\u53e3\u4ee5\u7f16\u7a0b\u7684\u65b9\u5f0f\u62d3\u5c55 GraphQL"]}),"\n",(0,s.jsx)(e.h2,{id:"\u751f\u6210-graphql-entities",children:"\u751f\u6210 GraphQL Entities"}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528 Grphoenix \u7684 Gradle \u63d2\u4ef6\u53ef\u4ee5\u6839\u636e GraphQL \u7c7b\u578b\u5b9a\u4e49\u9010\u4e00\u751f\u6210\u5bf9\u5e94\u7684 Java Entities, API \u63a5\u53e3\u53ef\u4ee5\u4f7f\u7528\u751f\u6210\u7684 Entities \u5b9a\u4e49\u63a5\u53e3\u65b9\u6cd5\u7684\u53c2\u6570\u548c\u8fd4\u56de\u503c"}),"\n",(0,s.jsx)(e.h3,{id:"\u5f15\u5165-gradle-\u63d2\u4ef6",children:"\u5f15\u5165 Gradle \u63d2\u4ef6"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-gradle",children:'buildscript {\r\n    repositories {\r\n        // highlight-start\r\n        jcenter()\r\n        // highlight-end\r\n    }\r\n}\r\n\r\nplugins {\r\n    id \'java-library\'\r\n    // highlight-start\r\n    id "org.graphoenix" version "0.1.1"\r\n    // highlight-end\r\n}\r\n\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u4f7f\u7528-gradle-\u63d2\u4ef6\u751f\u6210-java-entities",children:"\u4f7f\u7528 Gradle \u63d2\u4ef6\u751f\u6210 Java Entities"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"./gradlew :order-package:generateGraphQLSource\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u63d2\u4ef6\u4f1a\u5728\u5bf9\u5e94\u76ee\u5f55\u751f\u6210\u679a\u4e3e, \u8f93\u5165\u7c7b\u578b\u548c\u5bf9\u8c61\u7c7b\u578b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"|-- order-package                             \u8ba2\u5355\u5305\r\n    |-- build.gradle\r\n    |-- src\r\n        |-- main\r\n            |-- java\r\n                |-- demo.gp.order\r\n                    // highlight-start\r\n                    |-- dto\r\n                        |-- enumType          \u679a\u4e3e\u7c7b\u578b\r\n                        |-- inputObjectType   Input\u7c7b\u578b\r\n                        |-- interfaceType     \u63a5\u53e3\u7c7b\u578b\r\n                        |-- objectType        Object\u7c7b\u578b\r\n                    // highlight-end\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u5b9a\u4e49-graphql-entities",children:"\u5b9a\u4e49 GraphQL Entities"}),"\n",(0,s.jsxs)(e.p,{children:["\u6709\u65f6\u5019 API \u63a5\u53e3\u53ef\u80fd\u9700\u8981\u81ea\u5b9a\u4e49\u7684 Java Entities \u4f5c\u4e3a\u65b9\u6cd5\u7684\u53c2\u6570\u6216\u8fd4\u56de\u503c, \u8fd9\u4e9b\u7c7b\u578b\u53ef\u80fd\u5e76\u6ca1\u6709\u5b9a\u4e49\u5728 GrpahQL \u7c7b\u578b\u5b9a\u4e49\u4e2d, \u6b64\u65f6\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.a,{href:"#%E7%B1%BB%E6%B3%A8%E8%A7%A3",children:(0,s.jsx)(e.code,{children:"@Type"})})," ",(0,s.jsx)(e.a,{href:"#%E7%B1%BB%E6%B3%A8%E8%A7%A3",children:(0,s.jsx)(e.code,{children:"@Input"})})," ",(0,s.jsx)(e.a,{href:"#%E7%B1%BB%E6%B3%A8%E8%A7%A3",children:(0,s.jsx)(e.code,{children:"@Interface"})})," ",(0,s.jsx)(e.a,{href:"#%E7%B1%BB%E6%B3%A8%E8%A7%A3",children:(0,s.jsx)(e.code,{children:"@Enum"})})," \u7c7b\u578b\u6ce8\u89e3\u5206\u522b\u6765\u5b9a\u4e49\u7c7b\u578b, \u8f93\u5165\u7c7b\u578b, \u63a5\u53e3\u548c\u679a\u4e3e, \u5b9a\u4e49\u597d\u7684 Entities \u4f1a\u81ea\u52a8\u7f16\u8bd1\u5e76\u6dfb\u52a0\u5230 GrahpQL \u7c7b\u578b\u4e2d\u4f5c\u4e3a\u8865\u5145"]}),"\n",(0,s.jsx)(e.mermaid,{value:'flowchart LR\r\n    java["// Product.java\r\n    public class Product {\r\n    &emsp;@Id;\r\n    &emsp;@NonNull;\r\n    &emsp;private String id;\r\n    &emsp;@NonNull;\r\n    &emsp;private String name;\r\n    &emsp;@NonNull;\r\n    &emsp;private Float price;\r\n    }"]\r\n    types["// types.graphql\r\n    type Product {\r\n    &emsp;id: ID!\r\n    &emsp;name: String!\r\n    &emsp;price: Float!\r\n    }"]\r\n    code["// ProductApi.java\r\n    @GraphQLApi\r\n    public class ProductApi {\r\n    &emsp;@Mutation\r\n    &emsp;public Product discount(ProductInput product, Float off) {\r\n    &emsp;&emsp;product.setPrice(product.getPrice() * off);\r\n    &emsp;&emsp;// ...\r\n    &emsp;};\r\n    }"]\r\n    schema["// schema.graphql\r\n    type Mutation {\r\n    &emsp;...\r\n    &emsp;+ discount(product: ProductInput, off Float): Product\r\n    }"]\r\n    java -- \u751f\u6210 --\x3e types\r\n    java -. \u5f15\u7528 .-> code\r\n    code -- \u751f\u6210 --\x3e schema\r\n    types -. \u5f15\u7528 .-> schema\r\n    style schema text-align:left\r\n    style types text-align:left\r\n    style java text-align:left\r\n    style code text-align:left'}),"\n",(0,s.jsx)(e.h2,{id:"graphql-\u63a5\u53e3\u7c7b",children:"GraphQL \u63a5\u53e3\u7c7b"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.a,{href:"#%E7%B1%BB%E6%B3%A8%E8%A7%A3",children:(0,s.jsx)(e.code,{children:"@GraphQLApi"})})," \u6ce8\u89e3\u6765\u5b9a\u4e49\u63a5\u53e3\u7c7b"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u65b0\u5efa\u63a5\u53e3\u7c7b"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"|-- order-package                             \u8ba2\u5355\u5305\r\n    |-- build.gradle\r\n    |-- src\r\n        |-- main\r\n            |-- java\r\n                |-- demo.gp.order\r\n                    // highlight-start\r\n                    |-- api\r\n                        |-- SystemApi.java    \u7cfb\u7edfAPI\r\n                    // highlight-end\r\n                    |-- dto\r\n                        |-- annotation        GPA\u6ce8\u89e3\r\n                        |-- directive         \u6307\u4ee4\u6ce8\u89e3\r\n                        |-- enumType          \u679a\u4e3e\u7c7b\u578b\r\n                        |-- inputObjectType   Input\u7c7b\u578b\r\n                        |-- interfaceType     \u63a5\u53e3\u7c7b\u578b\r\n                        |-- objectType        Object\u7c7b\u578b\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"\u5b9a\u4e49\u63a5\u53e3\u7c7b"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"package demo.gp.order.api;\r\n\r\nimport jakarta.enterprise.context.ApplicationScoped;\r\nimport org.eclipse.microprofile.graphql.GraphQLApi;\r\n\r\n// highlight-start\r\n@GraphQLApi // \u4f7f\u7528@GraphQLApi \u6ce8\u89e3\u6807\u8bb0\u63a5\u53e3\u6240\u5728 CDI Bean\r\n// highlight-end\r\n@ApplicationScoped\r\npublic class SystemApi {\r\n  // \u5b9a\u4e49\u63a5\u53e3...\r\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u67e5\u8be2\u63a5\u53e3",children:"\u67e5\u8be2\u63a5\u53e3"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.a,{href:"#%E6%8E%A5%E5%8F%A3%E6%B3%A8%E8%A7%A3",children:(0,s.jsx)(e.code,{children:"@Query"})})," \u6ce8\u89e3\u6765\u5b9a\u4e49\u67e5\u8be2\u63a5\u53e3, \u63a5\u53e3\u4f1a\u6dfb\u52a0\u5230\u67e5\u8be2\u7c7b\u578b\u4e2d"]}),"\n",(0,s.jsx)(e.mermaid,{value:'flowchart LR\r\n    code["// SystemApi.java\r\n    @GraphQLApi\r\n    public class SystemApi {\r\n    &emsp;@Query\r\n    &emsp;public String hello(String userName) {\r\n    &emsp;&emsp;return &quot;Hello &quot; + userName + &quot;, The time is now &quot; + LocalDateTime.now();\r\n    &emsp;};\r\n    }"]\r\n    schema["// schema.graphql\r\n    type Query {\r\n    &emsp;...\r\n    &emsp;+ hello(userName: String): String\r\n    }"]\r\n    code -- \u6dfb\u52a0 --\x3e schema\r\n    style schema text-align:left\r\n    style code text-align:left'}),"\n",(0,s.jsx)(e.h3,{id:"\u666e\u901a\u67e5\u8be2\u63a5\u53e3",children:"\u666e\u901a\u67e5\u8be2\u63a5\u53e3"}),"\n",(0,s.jsxs)(e.p,{children:["\u5b9a\u4e49\u4e00\u4e2a\u7b80\u5355\u63a5\u53e3, \u4f20\u5165 userName, \u8fd4\u56de\u6b22\u8fce\u548c\u7cfb\u7edf\u65f6\u95f4, \u4f7f\u7528 ",(0,s.jsx)(e.a,{href:"#%E6%8E%A5%E5%8F%A3%E6%B3%A8%E8%A7%A3",children:(0,s.jsx)(e.code,{children:"@Query"})})," \u6ce8\u89e3\u6807\u8bb0\u63a5\u53e3\u65b9\u6cd5"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'package demo.gp.order.api;\r\n\r\nimport jakarta.enterprise.context.ApplicationScoped;\r\nimport org.eclipse.microprofile.graphql.GraphQLApi;\r\nimport org.eclipse.microprofile.graphql.Query;\r\n\r\nimport java.time.LocalDateTime;\r\n\r\n@GraphQLApi\r\n@ApplicationScoped\r\npublic class SystemApi {\r\n\r\n// highlight-start\r\n    @Query\r\n    public String hello(String userName) {\r\n        return "Hello " + userName + ", The time is now " + LocalDateTime.now();\r\n    }\r\n// highlight-end\r\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u8be2 hello \u63a5\u53e3"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-graphql",children:'{\r\n  hello(userName: "Gosling")\r\n}\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "hello": "Hello Gosling, The time is now 2024-05-30T11:51:41.164692"\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u5f02\u6b65\u67e5\u8be2\u63a5\u53e3",children:"\u5f02\u6b65\u67e5\u8be2\u63a5\u53e3"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:["\u63a5\u53e3\u652f\u6301",(0,s.jsx)(e.a,{href:"https://projectreactor.io/",children:"\u54cd\u5e94\u5f0f"}),"\u7c7b\u578b\u7684",(0,s.jsx)(e.a,{href:"#%E8%BF%94%E5%9B%9E%E5%80%BC%E8%AF%B4%E6%98%8E",children:"\u8fd4\u56de\u503c"})," Mono \u548c Flux"]})}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b: \u5b9a\u4e49\u4e00\u4e2a\u5f02\u6b65\u63a5\u53e3, \u4f20\u5165 userName, \u5f02\u6b65\u8fd4\u56de\u6b22\u8fce\u548c\u7cfb\u7edf\u65f6\u95f4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'@GraphQLApi\r\n@ApplicationScoped\r\npublic class SystemApi {\r\n\r\n    // ...\u7701\u7565\u5176\u4ed6\u63a5\u53e3\r\n\r\n// highlight-start\r\n    @Query\r\n    public Mono<String> helloAsync(String userName) {\r\n        return Mono.just(LocalDateTime.now())\r\n                .map(now -> "Hello " + userName + ", The time is now " + now);\r\n    }\r\n// highlight-end\r\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u8be2 helloAsync \u63a5\u53e3"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-graphql",children:'{\r\n  helloAsync(userName: "Gosling")\r\n}\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "helloAsync": "Hello Gosling, The time is now 2024-05-31T16:18:39.851451"\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u53d8\u66f4\u63a5\u53e3",children:"\u53d8\u66f4\u63a5\u53e3"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.a,{href:"#%E6%8E%A5%E5%8F%A3%E6%B3%A8%E8%A7%A3",children:(0,s.jsx)(e.code,{children:"@Mutation"})})," \u6ce8\u89e3\u6765\u5b9a\u4e49\u53d8\u66f4\u63a5\u53e3, \u63a5\u53e3\u4f1a\u6dfb\u52a0\u5230\u53d8\u66f4\u7c7b\u578b\u4e2d"]}),"\n",(0,s.jsx)(e.mermaid,{value:'flowchart LR\r\n    code["// SystemApi.java\r\n    @GraphQLApi\r\n    public class SystemApi {\r\n    &emsp;@Mutation\r\n    &emsp;public RegisterResult register(RegisterInput registerInput) {\r\n    &emsp;&emsp;// ...\r\n    &emsp;};\r\n    }"]\r\n    schema["// schema.graphql\r\n    type Mutation {\r\n    &emsp;...\r\n    &emsp;+ register(registerInput: RegisterInput): RegisterResult\r\n    }"]\r\n    code -- \u6dfb\u52a0 --\x3e schema\r\n    style schema text-align:left\r\n    style code text-align:left'}),"\n",(0,s.jsx)(e.h3,{id:"\u666e\u901a\u53d8\u66f4\u63a5\u53e3",children:"\u666e\u901a\u53d8\u66f4\u63a5\u53e3"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f8b: \u5b9a\u4e49\u4e00\u4e2a\u7528\u6237\u6ce8\u518c register \u63a5\u53e3, \u4f7f\u7528 ",(0,s.jsx)(e.a,{href:"#%E6%8E%A5%E5%8F%A3%E6%B3%A8%E8%A7%A3",children:(0,s.jsx)(e.code,{children:"@Mutation"})})," \u6ce8\u89e3\u6807\u8bb0\u63a5\u53e3\u65b9\u6cd5"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'@GraphQLApi\r\n@ApplicationScoped\r\npublic class SystemApi {\r\n\r\n    // ...\u7701\u7565\u5176\u4ed6\u65b9\u6cd5\r\n\r\n    // highlight-start\r\n    @Mutation\r\n    public RegisterResult register(RegisterInput registerInput) {\r\n        String account = registerInput.getEmail().substring(0, registerInput.getEmail().indexOf("@"));\r\n        Integer age = Period.between(registerInput.getBirthday(), LocalDate.now()).getYears();\r\n\r\n        RegisterResult registerResult = new RegisterResult();\r\n        registerResult.setAccount(account);\r\n        registerResult.setPassword(UUID.randomUUID().toString());\r\n        registerResult.setAge(age);\r\n\r\n        return registerResult;\r\n    }\r\n    // highlight-end\r\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8c03\u7528 register \u63a5\u53e3"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-graphql",children:'mutation {\r\n  register(\r\n    registerInput: {\r\n      name: "Gosling"\r\n      email: "gosling@java.com"\r\n      birthday: "1955-05-19"\r\n    }\r\n  ) {\r\n    account\r\n    password\r\n    age\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "register": {\r\n      "account": "gosling",\r\n      "password": "vuvvtrachs",\r\n      "age": 69\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u5f02\u6b65\u53d8\u66f4\u63a5\u53e3",children:"\u5f02\u6b65\u53d8\u66f4\u63a5\u53e3"}),"\n",(0,s.jsxs)(e.p,{children:["\u548c\u67e5\u8be2\u4e00\u6837, \u53d8\u66f4\u63a5\u53e3\u540c\u6837\u652f\u6301",(0,s.jsx)(e.a,{href:"#%E8%BF%94%E5%9B%9E%E5%80%BC%E8%AF%B4%E6%98%8E",children:"\u5f02\u6b65\u8fd4\u56de\u503c"})]}),"\n",(0,s.jsx)(e.p,{children:"\u5b9a\u4e49\u4e00\u4e2a\u5f02\u6b65\u53d8\u66f4\u63a5\u53e3, \u8fd4\u56de Flux"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'@GraphQLApi\r\n@ApplicationScoped\r\npublic class SystemApi {\r\n\r\n    // ...\u7701\u7565\u5176\u4ed6\u63a5\u53e3\r\n\r\n// highlight-start\r\n    @Mutation\r\n    public Flux<String> countingSheep(int count) {\r\n        return Flux.range(0, count)\r\n                .map(index -> index + 1 + " sheep");\r\n    }\r\n// highlight-end\r\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u8be2 countingSheep \u63a5\u53e3"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-graphql",children:"mutation {\r\n  countingSheep(count: 3)\r\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"Flux \u7684\u5143\u7d20\u4f1a\u805a\u5408\u6210\u6570\u7ec4\u540e\u8fd4\u56de"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "countingSheep": ["1 sheep", "2 sheep", "3 sheep"]\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u5b57\u6bb5\u63a5\u53e3",children:"\u5b57\u6bb5\u63a5\u53e3"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6709\u4e9b\u573a\u666f\u4e0b, \u9700\u8981\u5728\u6570\u636e\u5e93\u8fd4\u56de\u540e\u5bf9\u7ed3\u679c\u8fdb\u884c\u52a0\u5de5, \u5e76\u4ea7\u751f\u65b0\u7684\u5b57\u6bb5, \u5982\u6570\u5b66\u8ba1\u7b97\u548c\u8c03\u7528\u89c4\u5219\u5f15\u64ce\u7b49"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.a,{href:"#%E6%8E%A5%E5%8F%A3%E6%B3%A8%E8%A7%A3",children:(0,s.jsx)(e.code,{children:"@Source"})})," \u6ce8\u89e3\u5728\u65b9\u6cd5\u53c2\u6570\u4e2d\u6807\u8bb0\u5e26\u6709 ",(0,s.jsx)(e.a,{href:"#%E7%B1%BB%E6%B3%A8%E8%A7%A3",children:(0,s.jsx)(e.code,{children:"@Type"})})," \u6ce8\u89e3\u7684 Entity, \u6bcf\u4e00\u6b21\u5bf9\u63a5\u53e3\u5b57\u6bb5\u7684\u8bf7\u6c42\u90fd\u4f1a\u8c03\u7528\u5bf9\u5e94\u7684\u65b9\u6cd5\u6765\u83b7\u53d6\u8fd4\u56de\u503c"]}),"\n",(0,s.jsx)(e.mermaid,{value:'flowchart LR\r\n    code["// ProductApi.java\r\n    @GraphQLApi\r\n    public class ProductApi {\r\n    &emsp;public Float total(@Source Order order) {\r\n    &emsp;&emsp;// return the total price\r\n    &emsp;};\r\n    }"]\r\n    types["// types.graphql\r\n    type Order {\r\n    &emsp;id: ID!\r\n    &emsp;user: User!\r\n    &emsp;items: [OrderItem!]!\r\n    &emsp;+ total: Float\r\n    }"]\r\n    query["// query.graphql\r\n    query {\r\n    &emsp;user: {\r\n    &emsp;&emsp;id\r\n    &emsp;&emsp;total\r\n    &emsp;}\r\n    }"]\r\n    code -- \u751f\u6210\u63a5\u53e3\u5b57\u6bb5 --\x3e types\r\n    query -- \u8bf7\u6c42\u63a5\u53e3\u5b57\u6bb5 --\x3e types\r\n    types -. \u8c03\u7528\u63a5\u53e3 .-> code\r\n    style code text-align:left\r\n    style types text-align:left\r\n    style query text-align:left'}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b: \u8ba1\u7b97\u6bcf\u4e00\u4e2a\u8ba2\u5355\u7684\u4ef7\u683c\u5408\u8ba1"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"@GraphQLApi\r\n@ApplicationScoped\r\npublic class SystemApi {\r\n\r\n    // ...\u7701\u7565\u5176\u4ed6\u63a5\u53e3\r\n\r\n// highlight-start\r\n    public Float total(@Source Order order) {\r\n        if (order.getItems() != null) {\r\n            return order.getItems().stream()\r\n                    .filter(orderItem -> orderItem.getProduct() != null && orderItem.getProduct().getPrice() != null)\r\n                    .map(orderItem -> orderItem.getProduct().getPrice() * orderItem.getQuantity())\r\n                    .reduce(Float::sum)\r\n                    .orElse(null);\r\n        }\r\n        return null;\r\n    }\r\n// highlight-end\r\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6b64\u65f6 Order \u5bf9\u8c61\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u540d\u4e3a total \u7684\u5b57\u6bb5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-graphql",children:'type Order implements Meta {\r\n  "\u8ba2\u5355ID"\r\n  id: ID!\r\n  "\u8d2d\u4e70\u7528\u6237"\r\n  user: User!\r\n  "\u4ea7\u54c1\u5217\u8868"\r\n  items: [OrderItem!]!\r\n  // highlight-start\r\n  total: Float\r\n  // highlight-end\r\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u8be2\u7528\u6237 Diana \u7684\u8ba2\u5355"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-graphql",children:'{\r\n  user(name: {opr: EQ, val: "Diana"}) {\r\n    name\r\n    orders {\r\n      items {\r\n        product {\r\n          name\r\n          price\r\n        }\r\n        quantity\r\n      }\r\n      // highlight-start\r\n      total\r\n      // highlight-end\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8ba2\u5355\u4f1a\u5728 api \u63a5\u53e3\u4e2d\u8ba1\u7b97\u540e\u8fd4\u56de\u7ed3\u679c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "user": {\r\n      "name": "Diana",\r\n      "orders": [\r\n        {\r\n          "items": [\r\n            {\r\n              "product": {\r\n                "name": "Laptop",\r\n                "price": 999.99\r\n              },\r\n              "quantity": 1\r\n            },\r\n            {\r\n              "product": {\r\n                "name": "Phone",\r\n                "price": 499.99\r\n              },\r\n              "quantity": 1\r\n            },\r\n            {\r\n              "product": {\r\n                "name": "Tablet",\r\n                "price": 299.99\r\n              },\r\n              "quantity": 1\r\n            }\r\n          ],\r\n          // highlight-start\r\n          "total": 1799.97\r\n          // highlight-end\r\n        }\r\n      ]\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u63a5\u53e3",children:"\u53c2\u6570\u63a5\u53e3"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6709\u4e9b\u573a\u666f\u4e0b, \u9700\u8981\u5728\u6570\u636e\u5e93\u67e5\u8be2\u548c\u53d8\u66f4\u524d\u5bf9\u67e5\u8be2\u6761\u4ef6\u6216\u63d0\u4ea4\u5185\u5bb9\u8fdb\u884c\u52a0\u5de5, \u5982\u6821\u9a8c, \u9274\u6743\u6216\u4fee\u6539\u7b49"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.a,{href:"#%E6%8E%A5%E5%8F%A3%E6%B3%A8%E8%A7%A3",children:(0,s.jsx)(e.code,{children:"@Source"})})," \u6ce8\u89e3\u5728\u63a5\u53e3\u53c2\u6570\u4e2d\u6807\u8bb0\u5e26\u6709 ",(0,s.jsx)(e.a,{href:"#%E7%B1%BB%E6%B3%A8%E8%A7%A3",children:(0,s.jsx)(e.code,{children:"@Input"})})," \u6ce8\u89e3\u7684 Bean, \u63a5\u53e3\u7684\u8fd4\u56de\u503c\u5c06\u4f1a\u8986\u76d6\u539f\u59cb\u53c2\u6570"]}),"\n",(0,s.jsx)(e.mermaid,{value:'flowchart LR\r\n    code["// ProductApi.java\r\n    @GraphQLApi\r\n    public class ProductApi {\r\n    &emsp;public UserListQueryArguments hideMike(@Source UserListQueryArguments userListQueryArguments) {\r\n    &emsp;&emsp;// ...\r\n    &emsp;&emsp;return userListQueryArguments;\r\n    &emsp;};\r\n    }"]\r\n    types["// types.graphql\r\n    input UserListQueryArguments {\r\n    &emsp;id: StringExpression\r\n    &emsp;name: StringExpression\r\n    &emsp;email: StringExpression\r\n    &emsp;userType: UserTypeExpression\r\n    }"]\r\n    query["// query.graphql\r\n    query {\r\n    &emsp;userList(userType: {opr: EQ, val: VIP}): {\r\n    &emsp;&emsp;name\r\n    &emsp;&emsp;email\r\n    &emsp;}\r\n    }"]\r\n    query -- \u4f20\u5165\u53c2\u6570 --\x3e types\r\n    types -. \u8c03\u7528\u63a5\u53e3 .-> code\r\n    code -. \u66f4\u65b0\u53c2\u6570 .-> types\r\n    style code text-align:left\r\n    style types text-align:left\r\n    style query text-align:left'}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b: \u5728\u540e\u53f0\u589e\u52a0\u6761\u4ef6, \u9690\u85cf\u7528\u6237 Mike"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'@GraphQLApi\r\n@ApplicationScoped\r\npublic class SystemApi {\r\n\r\n    // ...\u7701\u7565\u5176\u4ed6\u63a5\u53e3\r\n\r\n// highlight-start\r\n    public UserListQueryArguments hideMike(@Source UserListQueryArguments userListQueryArguments) {\r\n        if (userListQueryArguments == null) {\r\n            userListQueryArguments = new UserListQueryArguments();\r\n        }\r\n        StringExpression stringExpression = new StringExpression();\r\n        stringExpression.setOpr(Operator.NEQ);\r\n        stringExpression.setVal("Mike");\r\n        userListQueryArguments.setName(stringExpression);\r\n        return userListQueryArguments;\r\n    }\r\n// highlight-end\r\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u8be2\u7528\u6237\u5217\u8868"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-graphql",children:"{\r\n  userList {\r\n    name\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7528\u6237\u5217\u8868\u4e2d\u6ca1\u6709 Mike"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\r\n  "data": {\r\n    "userList": [\r\n      {\r\n        "name": "Alice"\r\n      },\r\n      {\r\n        "name": "Bob"\r\n      },\r\n      {\r\n        "name": "Charlie"\r\n      },\r\n      {\r\n        "name": "Diana"\r\n      },\r\n      {\r\n        "name": "Edward"\r\n      },\r\n      {\r\n        "name": "Fiona"\r\n      },\r\n      {\r\n        "name": "George"\r\n      },\r\n      {\r\n        "name": "Hannah"\r\n      },\r\n      {\r\n        "name": "Ian"\r\n      },\r\n      {\r\n        "name": "Jane"\r\n      },\r\n      {\r\n        "name": "Kyle"\r\n      },\r\n      {\r\n        "name": "Laura"\r\n      },\r\n      {\r\n        "name": "Nina"\r\n      },\r\n      {\r\n        "name": "Oliver"\r\n      },\r\n      {\r\n        "name": "Paula"\r\n      },\r\n      {\r\n        "name": "Quentin"\r\n      },\r\n      {\r\n        "name": "Rachel"\r\n      },\r\n      {\r\n        "name": "Steve"\r\n      },\r\n      {\r\n        "name": "Tina"\r\n      }\r\n    ]\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"\u6ce8\u89e3\u8bf4\u660e",children:(0,s.jsx)(e.strong,{children:"\u6ce8\u89e3\u8bf4\u660e"})}),"\n",(0,s.jsx)(e.h3,{id:"\u7c7b\u6ce8\u89e3",children:"\u7c7b\u6ce8\u89e3"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u6ce8\u89e3"}),(0,s.jsx)(e.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(e.th,{children:"\u793a\u4f8b"}),(0,s.jsx)(e.th,{children:"GraphQL \u7c7b\u578b"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@GraphQLApi"}),(0,s.jsxs)(e.td,{children:["\u5b9a\u4e49 GraphQL \u63a5\u53e3\u7c7b, \u63a5\u53e3\u7c7b\u4e2d\u53ef\u4ee5\u5b9a\u4e49",(0,s.jsx)("br",{}),"\u67e5\u8be2\u63a5\u53e3, \u53d8\u66f4\u63a5\u53e3, \u5b57\u6bb5\u63a5\u53e3\u548c\u53c2\u6570\u63a5\u53e3"]}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@Input"}),(0,s.jsx)(e.td,{children:"\u5b9a\u4e49 GraphQL \u8f93\u5165\u7c7b\u578b"}),(0,s.jsxs)(e.td,{children:['@Input("StarshipInput")',(0,s.jsx)("br",{}),"public class Starship {",(0,s.jsx)("br",{}),"\u2003private String id;",(0,s.jsx)("br",{}),"\u2003private String name;",(0,s.jsx)("br",{}),"\u2003private float length;",(0,s.jsx)("br",{}),"\u2003// getters/setters...",(0,s.jsx)("br",{}),"}"]}),(0,s.jsxs)(e.td,{children:["input StarshipInput {",(0,s.jsx)("br",{}),"\u2003id: String",(0,s.jsx)("br",{}),"\u2003name: String",(0,s.jsx)("br",{}),"\u2003length: Float",(0,s.jsx)("br",{}),"}"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@Type"}),(0,s.jsx)(e.td,{children:"\u5b9a\u4e49 GraphQL \u7c7b\u578b"}),(0,s.jsxs)(e.td,{children:['@Type("Starship")',(0,s.jsx)("br",{}),"public class Starship {",(0,s.jsx)("br",{}),"\u2003private String id;",(0,s.jsx)("br",{}),"\u2003private String name;",(0,s.jsx)("br",{}),"\u2003private float length;",(0,s.jsx)("br",{}),"\u2003// getters/setters...",(0,s.jsx)("br",{}),"}"]}),(0,s.jsxs)(e.td,{children:["type Starship {",(0,s.jsx)("br",{}),"\u2003id: String",(0,s.jsx)("br",{}),"\u2003name: String",(0,s.jsx)("br",{}),"\u2003length: Float",(0,s.jsx)("br",{}),"}"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@Input"}),(0,s.jsx)(e.td,{children:"\u5b9a\u4e49 GraphQL \u8f93\u5165\u7c7b\u578b"}),(0,s.jsxs)(e.td,{children:['@Input("StarshipInput")',(0,s.jsx)("br",{}),"public class Starship {",(0,s.jsx)("br",{}),"\u2003private String id;",(0,s.jsx)("br",{}),"\u2003private String name;",(0,s.jsx)("br",{}),"\u2003private float length;",(0,s.jsx)("br",{}),"\u2003// getters/setters...",(0,s.jsx)("br",{}),"}"]}),(0,s.jsxs)(e.td,{children:["input StarshipInput {",(0,s.jsx)("br",{}),"\u2003id: String",(0,s.jsx)("br",{}),"\u2003name: String",(0,s.jsx)("br",{}),"\u2003length: Float",(0,s.jsx)("br",{}),"}"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@Interface"}),(0,s.jsx)(e.td,{children:"\u5b9a\u4e49 GraphQL \u63a5\u53e3\u7c7b\u578b"}),(0,s.jsxs)(e.td,{children:['@Interface("Aircraft")',(0,s.jsx)("br",{}),"public interface IAircraft {",(0,s.jsx)("br",{}),"\u2003private String getName();",(0,s.jsx)("br",{}),"}"]}),(0,s.jsxs)(e.td,{children:["interface Aircraft {",(0,s.jsx)("br",{}),"\u2003name: String",(0,s.jsx)("br",{}),"}"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@Enum"}),(0,s.jsx)(e.td,{children:"\u5b9a\u4e49 GraphQL \u679a\u4e3e\u7c7b\u578b"}),(0,s.jsxs)(e.td,{children:['@Enum("ClothingSize")',(0,s.jsx)("br",{}),"public enum ShirtSize {",(0,s.jsx)("br",{}),"\u2003S,",(0,s.jsx)("br",{}),"\u2003M,",(0,s.jsx)("br",{}),"\u2003L,",(0,s.jsx)("br",{}),"\u2003XL,",(0,s.jsx)("br",{}),"\u2003XXL",(0,s.jsx)("br",{}),"}"]}),(0,s.jsxs)(e.td,{children:["enum ClothingSize {",(0,s.jsx)("br",{}),"\u2003S",(0,s.jsx)("br",{}),"\u2003M",(0,s.jsx)("br",{}),"\u2003L",(0,s.jsx)("br",{}),"\u2003XL",(0,s.jsx)("br",{}),"\u2003XXL",(0,s.jsx)("br",{}),"}"]})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"\u5b57\u6bb5\u6ce8\u89e3",children:"\u5b57\u6bb5\u6ce8\u89e3"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u6ce8\u89e3"}),(0,s.jsx)(e.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(e.th,{children:"\u793a\u4f8b"}),(0,s.jsx)(e.th,{children:"GraphQL \u7c7b\u578b"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@Id"}),(0,s.jsx)(e.td,{children:"\u5b9a\u4e49 ID \u7c7b\u578b"}),(0,s.jsxs)(e.td,{children:["@Type",(0,s.jsx)("br",{}),"public class Person {",(0,s.jsx)("br",{}),"\u2003@Id",(0,s.jsx)("br",{}),"\u2003private String id;",(0,s.jsx)("br",{}),"\u2003private String name;",(0,s.jsx)("br",{}),"\u2003// getters/setters...",(0,s.jsx)("br",{}),"}"]}),(0,s.jsxs)(e.td,{children:["type Person {",(0,s.jsx)("br",{}),"\u2003id: ID",(0,s.jsx)("br",{}),"\u2003name: String",(0,s.jsx)("br",{}),"}"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@NonNull"}),(0,s.jsx)(e.td,{children:"\u5b9a\u4e49\u975e\u7a7a\u7c7b\u578b"}),(0,s.jsxs)(e.td,{children:["@Input",(0,s.jsx)("br",{}),"public class StarshipInput {",(0,s.jsx)("br",{}),"\u2003@NonNull",(0,s.jsx)("br",{}),"\u2003private String name;",(0,s.jsx)("br",{}),"\u2003private Float length;",(0,s.jsx)("br",{}),"\u2003// getters/setters...",(0,s.jsx)("br",{}),"}"]}),(0,s.jsxs)(e.td,{children:["input StarshipInput {",(0,s.jsx)("br",{}),"\u2003name: String!",(0,s.jsx)("br",{}),"\u2003length: Float",(0,s.jsx)("br",{}),"}"]})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"\u63a5\u53e3\u6ce8\u89e3",children:"\u63a5\u53e3\u6ce8\u89e3"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u6ce8\u89e3"}),(0,s.jsx)(e.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(e.th,{children:"\u793a\u4f8b"}),(0,s.jsx)(e.th,{children:"GraphQL \u63a5\u53e3"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@Query"}),(0,s.jsx)(e.td,{children:"\u5b9a\u4e49\u67e5\u8be2\u63a5\u53e3"}),(0,s.jsxs)(e.td,{children:['@Query("friendsOf")',(0,s.jsx)("br",{}),"public List<Character> getFriendsOf(Character character) {",(0,s.jsx)("br",{}),"\u2003// return ...",(0,s.jsx)("br",{}),"}"]}),(0,s.jsxs)(e.td,{children:["type Query {",(0,s.jsx)("br",{}),"\u2003friendsOf(character: CharacterInput): [Character]",(0,s.jsx)("br",{}),"}"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@Mutation"}),(0,s.jsx)(e.td,{children:"\u5b9a\u4e49\u53d8\u66f4\u63a5\u53e3"}),(0,s.jsxs)(e.td,{children:['@Mutation("addCharacter")',(0,s.jsx)("br",{}),"public Character save(Character character) {",(0,s.jsx)("br",{}),"\u2003// return ...",(0,s.jsx)("br",{}),"}"]}),(0,s.jsxs)(e.td,{children:["type Mutation {",(0,s.jsx)("br",{}),"\u2003addCharacter(character: CharacterInput): Character",(0,s.jsx)("br",{}),"}"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@Source"}),(0,s.jsx)(e.td,{children:"\u5b9a\u4e49\u5b57\u6bb5\u63a5\u53e3\u6216\u53c2\u6570\u63a5\u53e3"}),(0,s.jsxs)(e.td,{children:['public List <Tweet> tweets(@Source("tweetsForMe") Character character) {',(0,s.jsx)("br",{}),"\u2003// return ...",(0,s.jsx)("br",{}),"}"]}),(0,s.jsxs)(e.td,{children:["type Character {",(0,s.jsx)("br",{}),"\u2003# Other fields ...",(0,s.jsx)("br",{}),"\u2003tweetsForMe(last: Int): [Tweet]",(0,s.jsx)("br",{}),"}"]})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"\u5176\u4ed6\u6ce8\u89e3",children:"\u5176\u4ed6\u6ce8\u89e3"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u6ce8\u89e3"}),(0,s.jsx)(e.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(e.th,{children:"\u793a\u4f8b"}),(0,s.jsx)(e.th,{children:"GraphQL \u63a5\u53e3"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@DefaultValue"}),(0,s.jsx)(e.td,{children:"\u5b9a\u4e49\u9ed8\u8ba4\u503c"}),(0,s.jsxs)(e.td,{children:['public List <Character> getByName(@DefaultValue("Han Solo") String name) {',(0,s.jsx)("br",{}),"\u2003// ...",(0,s.jsx)("br",{}),"}"]}),(0,s.jsxs)(e.td,{children:["type Query {",(0,s.jsx)("br",{}),'\u2003searchByName(name: String = "Han Solo"): [Character]',(0,s.jsx)("br",{}),"}"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@Description"}),(0,s.jsx)(e.td,{children:"\u5b9a\u4e49\u6ce8\u91ca"}),(0,s.jsxs)(e.td,{children:['@Description("Vehicle for traveling between star systems")',(0,s.jsx)("br",{}),"public class Starship {",(0,s.jsx)("br",{}),"\u2003private String id;",(0,s.jsx)("br",{}),"\u2003private float length;",(0,s.jsx)("br",{}),'\u2003@Description("Name of a particular starship")',(0,s.jsx)("br",{}),"\u2003private String name;",(0,s.jsx)("br",{}),"}"]}),(0,s.jsxs)(e.td,{children:['"Vehicle for traveling between star systems"',(0,s.jsx)("br",{}),"type Starship {",(0,s.jsx)("br",{}),"\u2003id: String",(0,s.jsx)("br",{}),"\u2003length: Float",(0,s.jsx)("br",{}),'\u2003"Name of a particular starship"',(0,s.jsx)("br",{}),"\u2003name: String",(0,s.jsx)("br",{}),"}"]})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:(0,s.jsx)(e.strong,{children:"\u8fd4\u56de\u503c\u8bf4\u660e"})}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u65b9\u6cd5\u8fd4\u56de\u7c7b\u578b"}),(0,s.jsx)(e.th,{children:"GraphQL \u7c7b\u578b"}),(0,s.jsx)(e.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(e.th,{children:"\u793a\u4f8b (Type=User)"}),(0,s.jsx)(e.th,{children:"GraphQL \u63a5\u53e3"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"(Type)"}),(0,s.jsx)(e.td,{children:"(Type)"}),(0,s.jsx)(e.td,{children:"\u540c\u6b65\u67e5\u8be2"}),(0,s.jsxs)(e.td,{children:["User queryUser(String name) {",(0,s.jsx)("br",{}),"\u2003return ... ",(0,s.jsx)("br",{}),"}"]}),(0,s.jsx)(e.td,{children:"queryUser(name: String): User"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Mono<(Type)>"}),(0,s.jsx)(e.td,{children:"(Type)"}),(0,s.jsx)(e.td,{children:"\u5f02\u6b65\u67e5\u8be2"}),(0,s.jsxs)(e.td,{children:["Mono<User> queryUser(String name) {",(0,s.jsx)("br",{}),"\u2003return ... ",(0,s.jsx)("br",{}),"}"]}),(0,s.jsx)(e.td,{children:"queryUser(name: String): User"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Flux<(Type)>"}),(0,s.jsx)(e.td,{children:"[(Type)]"}),(0,s.jsx)(e.td,{children:"\u5f02\u6b65\u67e5\u8be2, \u805a\u5408\u4e3a\u6570\u7ec4\u540e\u8fd4\u56de"}),(0,s.jsxs)(e.td,{children:["Flux<User> queryUserList(String name) {",(0,s.jsx)("br",{}),"\u2003return ... ",(0,s.jsx)("br",{}),"}"]}),(0,s.jsx)(e.td,{children:"queryUserList(name: String): [User]"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u672c\u8282\u793a\u4f8b",children:(0,s.jsx)(e.em,{children:"\u672c\u8282\u793a\u4f8b"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/doukai/order/tree/main/order-package/src/main/java/demo/gp/order/api",children:"https://github.com/doukai/order/tree/main/order-package/src/main/java/demo/gp/order/api"})})]})}function p(r={}){const{wrapper:e}={...(0,t.R)(),...r.components};return e?(0,s.jsx)(e,{...r,children:(0,s.jsx)(h,{...r})}):h(r)}},5710:(r,e,n)=>{n.d(e,{R:()=>a,x:()=>l});var s=n(758);const t={},i=s.createContext(t);function a(r){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function l(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(t):r.components||t:a(r.components),s.createElement(i.Provider,{value:e},r.children)}}}]);