"use strict";(self.webpackChunkgp_doc_github_io=self.webpackChunkgp_doc_github_io||[]).push([[8117],{9312:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=r(6070),i=r(5710);const a={sidebar_position:1},s="\u4f9d\u8d56\u6ce8\u5165(inject)",c={id:"jakarta-ee/inject",title:"\u4f9d\u8d56\u6ce8\u5165(inject)",description:"\u4f9d\u8d56\u6ce8\u5165\u4f5c\u4e3a\u5b9e\u73b0\u5173\u7cfb\u89e3\u5076\u548c\u63a7\u5236\u53cd\u8f6c\u7684\u4e00\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u5df2\u7ecf\u6210\u4e3a Java \u5f00\u53d1\u7684\u6838\u5fc3\u7279\u6027",source:"@site/docs/jakarta-ee/inject.md",sourceDirName:"jakarta-ee",slug:"/jakarta-ee/inject",permalink:"/docs/jakarta-ee/inject",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4f01\u4e1a\u7ea7Java",permalink:"/docs/category/\u4f01\u4e1a\u7ea7java"},next:{title:"\u5207\u9762(interceptor)",permalink:"/docs/jakarta-ee/interceptor"}},d={},l=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f9d\u8d56\u5b9a\u4e49",id:"\u4f9d\u8d56\u5b9a\u4e49",level:2},{value:"\u6ce8\u89e3\u65b9\u5f0f",id:"\u6ce8\u89e3\u65b9\u5f0f",level:3},{value:"\u5355\u4f8b",id:"\u5355\u4f8b",level:4},{value:"\u591a\u4f8b",id:"\u591a\u4f8b",level:4},{value:"\u7279\u5b9a\u751f\u547d\u5468\u671f",id:"\u7279\u5b9a\u751f\u547d\u5468\u671f",level:4},{value:"\u5de5\u5382\u65b9\u6cd5(Produces)",id:"\u5de5\u5382\u65b9\u6cd5produces",level:3},{value:"\u6307\u5b9a\u540d\u79f0",id:"\u6307\u5b9a\u540d\u79f0",level:3},{value:"\u9ed8\u8ba4\u5b9e\u73b0",id:"\u9ed8\u8ba4\u5b9e\u73b0",level:3},{value:"\u6307\u5b9a\u987a\u5e8f",id:"\u6307\u5b9a\u987a\u5e8f",level:3},{value:"\u4f9d\u8d56\u6ce8\u5165(Inject)",id:"\u4f9d\u8d56\u6ce8\u5165inject-1",level:2},{value:"\u6784\u9020\u65b9\u6cd5\u6ce8\u5165",id:"\u6784\u9020\u65b9\u6cd5\u6ce8\u5165",level:3},{value:"Setter \u65b9\u6cd5\u6ce8\u5165",id:"setter-\u65b9\u6cd5\u6ce8\u5165",level:3},{value:"\u63d0\u4f9b\u8005\u6ce8\u5165(Provider)",id:"\u63d0\u4f9b\u8005\u6ce8\u5165provider",level:3},{value:"\u5f02\u6b65\u63d0\u4f9b\u8005\u6ce8\u5165(Provider&lt;Mono&gt;)",id:"\u5f02\u6b65\u63d0\u4f9b\u8005\u6ce8\u5165providermono",level:3},{value:"\u96c6\u5408\u6ce8\u5165(Instance)",id:"\u96c6\u5408\u6ce8\u5165instance",level:3},{value:"\u540d\u79f0\u6ce8\u5165(Named)",id:"\u540d\u79f0\u6ce8\u5165named",level:3},{value:"\u9ed8\u8ba4\u5b9e\u73b0\u6ce8\u5165(Default)",id:"\u9ed8\u8ba4\u5b9e\u73b0\u6ce8\u5165default",level:3},{value:"<strong>\u4f9d\u8d56\u6ce8\u5165 API</strong>",id:"\u4f9d\u8d56\u6ce8\u5165-api",level:2},{value:"BeanContext",id:"beancontext",level:3},{value:"CDI(Jakarta CDI \u6807\u51c6)",id:"cdijakarta-cdi-\u6807\u51c6",level:3},{value:"<strong>\u6ce8\u89e3\u8bf4\u660e</strong>",id:"\u6ce8\u89e3\u8bf4\u660e",level:2},{value:"CDI",id:"cdi",level:3},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:3},{value:"<em>\u672c\u8282\u793a\u4f8b</em>",id:"\u672c\u8282\u793a\u4f8b",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u4f9d\u8d56\u6ce8\u5165inject",children:"\u4f9d\u8d56\u6ce8\u5165(inject)"}),"\n",(0,t.jsx)(n.p,{children:"\u4f9d\u8d56\u6ce8\u5165\u4f5c\u4e3a\u5b9e\u73b0\u5173\u7cfb\u89e3\u5076\u548c\u63a7\u5236\u53cd\u8f6c\u7684\u4e00\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u5df2\u7ecf\u6210\u4e3a Java \u5f00\u53d1\u7684\u6838\u5fc3\u7279\u6027"}),"\n",(0,t.jsxs)(n.p,{children:["\u8457\u540d\u7684 ",(0,t.jsx)(n.a,{href:"https://spring.io/",children:"Spring"})," \u6846\u67b6\u6700\u65e9\u5c31\u662f\u4ee5\u5b9e\u73b0\u4f9d\u8d56\u6ce8\u5165\u800c\u95fb\u540d, \u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb Spring \u5df2\u7ecf\u53d1\u5c55\u4e3a\u4e00\u4e2a\u5e9e\u7136\u5927\u7269, \u5b83\u53d8\u5f97\u65e0\u6240\u4e0d\u80fd\u7684\u540c\u65f6\u5931\u53bb\u6700\u5f00\u59cb\u7684\u8f7b\u91cf\u7ea7\u7279\u6027. \u4ee5 ",(0,t.jsx)(n.a,{href:"https://spring.io/projects/spring-boot",children:"Spring Boot"})," \u4e3a\u4f8b, \u7531\u4e8e\u4f9d\u8d56\u5173\u7cfb\u7684\u590d\u6742\u6027\u548c\u4e0d\u540c\u7c7b\u5e93\u7684\u7684\u7248\u672c\u517c\u5bb9\u95ee\u9898, \u6bcf\u4e00\u4e2a\u65b0\u7248\u672c\u7684\u5347\u7ea7\u5bf9\u4e8e\u7528\u6237\u800c\u8a00\u90fd\u5df2\u7ecf\u6210\u4e3a\u4e86\u96be\u4e8e\u903e\u8d8a\u7684\u9e3f\u6c9f"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u53cd\u5c04\u6280\u672f\u7684\u8fc7\u5ea6\u4f7f\u7528\u662f Spring \u7684\u53e6\u4e00\u4e2a\u95ee\u9898, \u5b83\u4f7f\u8fd0\u884c\u65f6\u7684\u6027\u80fd\u5f00\u9500\u8d8a\u6765\u8d8a\u5927, \u540c\u65f6\u8fc7\u591a\u7684\u7a0b\u5e8f\u903b\u8f91\u548c\u4f9d\u8d56\u5173\u7cfb\u9690\u85cf\u5728\u4e86\u8fd0\u884c\u65f6\u5f53\u4e2d, \u4f7f\u5f97\u8c03\u8bd5\u53d8\u5f97\u5341\u5206\u56f0\u96be, \u4e5f\u65e0\u6cd5\u4f7f\u7528\u7f16\u8bd1\u5668\u548c IDE \u7684\u9519\u8bef\u68c0\u67e5, \u66f4\u6210\u4e3a\u4e86 Java Native \u5316(",(0,t.jsx)(n.a,{href:"https://www.graalvm.org/",children:"GraalVM"}),")\u7684\u4e25\u91cd\u963b\u788d"]}),"\n",(0,t.jsxs)(n.p,{children:["Graphoenix \u9075\u5faa ",(0,t.jsx)(n.a,{href:"https://github.com/jakartaee/inject",children:"Jakarta Inject"})," \u548c ",(0,t.jsx)(n.a,{href:"https://jakarta.ee/specifications/cdi/4.1/jakarta-cdi-spec-4.1",children:"Jakarta CDI"})," \u89c4\u8303, \u5bf9\u4f9d\u8d56\u6ce8\u5165, \u5207\u9762, \u914d\u7f6e\u7b49 Java \u4f01\u4e1a\u7ea7\u7279\u6027\u63d0\u4f9b\u8f7b\u91cf\u7ea7\u5b9e\u73b0: ",(0,t.jsx)(n.a,{href:"https://github.com/doukai/nozdormu",children:(0,t.jsx)(n.strong,{children:"Nozdormu"})})]}),"\n",(0,t.jsx)(n.p,{children:"Nozdormu \u7684\u8bbe\u8ba1\u76ee\u6807:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u4fdd\u6301\u8f7b\u91cf\u7ea7: \u53ea\u5b9e\u73b0\u5fc5\u8981\u7684\u4f01\u4e1a\u7ea7 Java \u7279\u6027, \u4e0d\u505a\u8fc7\u591a\u7684\u62d3\u5c55, \u4fdd\u6301\u7b80\u6d01\u548c\u4f4e\u4f9d\u8d56"}),"\n",(0,t.jsx)(n.li,{children:"\u8fd0\u884c\u65f6\u65e0\u53cd\u5c04: \u628a\u8fd0\u884c\u65f6\u7684\u52a8\u6001\u903b\u8f91\u524d\u79fb\u5230\u7f16\u8bd1\u9636\u6bb5, \u901a\u8fc7 Annotation Processing \u5728\u7f16\u8bd1\u9636\u6bb5\u5b8c\u6210 IOC \u548c AOP"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 Nozdormu \u4f5c\u4e3a Graphoeix \u7684 CDI \u5e76\u975e\u5f3a\u5236, \u4efb\u4f55\u57fa\u4e8e",(0,t.jsx)(n.a,{href:"https://github.com/jakartaee/inject",children:"Jakarta Inject"})," \u548c ",(0,t.jsx)(n.a,{href:"https://jakarta.ee/specifications/cdi/4.1/jakarta-cdi-spec-4.1",children:"Jakarta CDI"})," \u89c4\u8303\u7684 CDI \u5b9e\u73b0\u90fd\u53ef\u4f5c\u4e3a\u9009\u62e9"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://weld.cdi-spec.org/",children:"Weld"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://quarkus.io/guides/cdi-reference",children:"Quarkus DI"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.p,{children:"\u6dfb\u52a0\u4f9d\u8d56"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-gradle",children:"repositories {\r\n    mavenCentral()\r\n    // highlight-start\r\n    jcenter()\r\n    // highlight-end\r\n}\r\n\r\ndependencies {\r\n    // highlight-start\r\n    implementation 'org.graphoenix:nozdormu-inject:0.1.0'\r\n\r\n    annotationProcessor 'org.graphoenix:nozdormu-inject:0.1.0'\r\n    // highlight-end\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f9d\u8d56\u5b9a\u4e49",children:"\u4f9d\u8d56\u5b9a\u4e49"}),"\n",(0,t.jsx)(n.h3,{id:"\u6ce8\u89e3\u65b9\u5f0f",children:"\u6ce8\u89e3\u65b9\u5f0f"}),"\n",(0,t.jsx)(n.h4,{id:"\u5355\u4f8b",children:"\u5355\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",children:(0,t.jsx)(n.code,{children:"@Singleton"})})," \u6216 ",(0,t.jsx)(n.a,{href:"#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",children:(0,t.jsx)(n.code,{children:"@ApplicationScoped"})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Engine.java"',children:'import jakarta.enterprise.context.ApplicationScoped;\r\n\r\n// highlight-start\r\n@ApplicationScoped\r\n// highlight-end\r\npublic class Engine {\r\n\r\n    public String getName(){\r\n        return "V8 Engine";\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u591a\u4f8b",children:"\u591a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",children:(0,t.jsx)(n.code,{children:"@Dependent"})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Driver.java"',children:'import jakarta.enterprise.context.Dependent;\r\n\r\nimport java.util.UUID;\r\n\r\n// highlight-start\r\n@Dependent\r\n// highlight-end\r\npublic class Driver {\r\n\r\n    private final String name;\r\n\r\n    public Driver() {\r\n        name = "Mr." + UUID.randomUUID();\r\n    }\r\n\r\n    public String getName() {\r\n        return name;\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u7279\u5b9a\u751f\u547d\u5468\u671f",children:"\u7279\u5b9a\u751f\u547d\u5468\u671f"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8bf7\u6c42: ",(0,t.jsx)(n.a,{href:"#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",children:(0,t.jsx)(n.code,{children:"@RequestScoped"})})]}),"\n",(0,t.jsxs)(n.li,{children:["\u4f1a\u8bdd: ",(0,t.jsx)(n.a,{href:"#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",children:(0,t.jsx)(n.code,{children:"@SessionScoped"})})]}),"\n",(0,t.jsxs)(n.li,{children:["\u4e8b\u52a1: ",(0,t.jsx)(n.a,{href:"#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",children:(0,t.jsx)(n.code,{children:"@TransactionScoped"})})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Broadcast.java"',children:'import jakarta.enterprise.context.RequestScoped;\r\n\r\n// highlight-start\r\n@RequestScoped\r\n// highlight-end\r\npublic class Broadcast {\r\n\r\n    public String getName(){\r\n        return "BBC";\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u5de5\u5382\u65b9\u6cd5produces",children:"\u5de5\u5382\u65b9\u6cd5(Produces)"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u5f15\u7528\u7b2c\u4e09\u65b9\u7c7b\u5e93\u4e2d\u7684 Bean \u65f6, \u65e0\u6cd5\u901a\u8fc7\u6ce8\u89e3\u65b9\u5f0f\u5b9a\u4e49\u751f\u547d\u5468\u671f, \u53ef\u4ee5\u4f7f\u7528\u5de5\u5382\u65b9\u6cd5\u6765\u63d0\u4f9b Bean \u5b9e\u4f8b, \u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"#cdi",children:(0,t.jsx)(n.code,{children:"@Produces"})})," \u6807\u8bb0\u65b9\u6cd5, \u540c\u65f6\u914d\u5408\u5176\u4ed6\u6ce8\u89e3\u5b9a\u4e49\u751f\u547d\u5468\u671f"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Broadcast.java"',children:"import jakarta.enterprise.context.ApplicationScoped;\r\nimport jakarta.enterprise.context.RequestScoped;\r\nimport jakarta.enterprise.inject.Produces;\r\n\r\n@ApplicationScoped\r\npublic class AutoParts {\r\n\r\n    @ApplicationScoped\r\n    // highlight-start\r\n    @Produces\r\n    public Brake brake() {\r\n        return new Brake();\r\n    }\r\n    // highlight-end\r\n\r\n    @ApplicationScoped\r\n    // highlight-start\r\n    @Produces\r\n    public Wheel wheel(Brake brake) {\r\n        return new Wheel(brake);\r\n    }\r\n    // highlight-end\r\n\r\n    @RequestScoped\r\n    // highlight-start\r\n    @Produces\r\n    public Navigation navigation() {\r\n        return new Navigation();\r\n    }\r\n    // highlight-end\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u6307\u5b9a\u540d\u79f0",children:"\u6307\u5b9a\u540d\u79f0"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"#cdi",children:(0,t.jsx)(n.code,{children:"@Named"})})," \u4e3a Bean \u6307\u5b9a\u540d\u79f0, \u4f9d\u8d56\u6ce8\u5165\u65f6\u53ef\u6839\u636e\u540d\u79f0\u6ce8\u5165\u5bf9\u5e94\u7684 Bean"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="V12Engine.java"',children:'import jakarta.enterprise.context.ApplicationScoped;\r\nimport jakarta.inject.Named;\r\n\r\n@ApplicationScoped\r\n// highlight-start\r\n@Named("v12")\r\n// highlight-end\r\npublic class V12Engine implements IEngine {\r\n\r\n    public String getName() {\r\n        return "V12 Engine";\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u9ed8\u8ba4\u5b9e\u73b0",children:"\u9ed8\u8ba4\u5b9e\u73b0"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"#cdi",children:(0,t.jsx)(n.code,{children:"@Default"})})," \u6307\u5b9a Bean \u4e3a\u9ed8\u8ba4\u5b9e\u73b0"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Engine.java"',children:'import jakarta.enterprise.context.ApplicationScoped;\r\nimport jakarta.enterprise.inject.Default;\r\n\r\n@ApplicationScoped\r\n// highlight-start\r\n@Default\r\n// highlight-end\r\npublic class Engine implements IEngine {\r\n\r\n    public String getName() {\r\n        return "V8 Engine";\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u6307\u5b9a\u987a\u5e8f",children:"\u6307\u5b9a\u987a\u5e8f"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"#cdi",children:(0,t.jsx)(n.code,{children:"@Priority"})})," \u6307\u5b9a Bean \u5728\u96c6\u5408\u4e2d\u7684\u987a\u5e8f, \u5728",(0,t.jsx)(n.a,{href:"#%E9%9B%86%E5%90%88%E6%B3%A8%E5%85%A5instance",children:"\u96c6\u5408\u6ce8\u5165"}),"\u65f6\u4f1a\u6309\u7167\u6307\u5b9a\u987a\u5e8f\u6392\u5e8f"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Engine.java"',children:'import jakarta.annotation.Priority;\r\nimport jakarta.enterprise.context.ApplicationScoped;\r\nimport jakarta.enterprise.inject.Default;\r\n\r\n@ApplicationScoped\r\n@Default\r\n// highlight-start\r\n@Priority(1)\r\n// highlight-end\r\npublic class Engine implements IEngine {\r\n\r\n    public String getName() {\r\n        return "V8 Engine";\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="V12Engine.java"',children:'import jakarta.annotation.Priority;\r\nimport jakarta.enterprise.context.ApplicationScoped;\r\nimport jakarta.inject.Named;\r\n\r\n@ApplicationScoped\r\n@Named("v12")\r\n// highlight-start\r\n@Priority(2)\r\n// highlight-end\r\npublic class V12Engine implements IEngine {\r\n\r\n    public String getName() {\r\n        return "V12 Engine";\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f9d\u8d56\u6ce8\u5165inject-1",children:"\u4f9d\u8d56\u6ce8\u5165(Inject)"}),"\n",(0,t.jsx)(n.h3,{id:"\u6784\u9020\u65b9\u6cd5\u6ce8\u5165",children:"\u6784\u9020\u65b9\u6cd5\u6ce8\u5165"}),"\n",(0,t.jsxs)(n.p,{children:["\u63a8\u8350\u4f7f\u7528\u6784\u9020\u65b9\u6cd5\u8fdb\u884c\u4f9d\u8d56\u6ce8\u5165, \u5728\u6784\u9020\u65b9\u6cd5\u4e0a\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"#cdi",children:(0,t.jsx)(n.code,{children:"@Inject"})})," \u6ce8\u89e3"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b: \u628a\u53d1\u52a8\u673a(\u5355\u4f8b)\u6dfb\u52a0\u5230\u6c7d\u8f66\u4e2d"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Car.java"',children:"import jakarta.enterprise.context.Dependent;\r\nimport jakarta.inject.Inject;\r\n\r\n@Dependent\r\npublic class Car {\r\n\r\n    private final Engine engine;\r\n\r\n    // highlight-start\r\n    @Inject\r\n    public Car(Engine engine) {\r\n        this.engine = engine;\r\n    }\r\n    // highlight-end\r\n\r\n    public Engine getEngine() {\r\n        return engine;\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6d4b\u8bd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="InjectTest.java"',children:'import io.nozdormu.inject.test.beans.Car;\r\nimport io.nozdormu.spi.context.BeanContext;\r\nimport org.junit.jupiter.api.Test;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\npublic class InjectTest {\r\n\r\n    @Test\r\n    void testCar() {\r\n        Car car1 = BeanContext.get(Car.class);\r\n\r\n        assertEquals(car1.getEngine().getName(), "V8 Engine");\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"setter-\u65b9\u6cd5\u6ce8\u5165",children:"Setter \u65b9\u6cd5\u6ce8\u5165"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 Setter \u65b9\u5f0f\u6ce8\u5165, \u5728\u5b57\u6bb5\u6216 Setter \u65b9\u6cd5\u4e0a\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"#cdi",children:(0,t.jsx)(n.code,{children:"@Inject"})})," \u6ce8\u89e3"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b: \u628a\u53d8\u901f\u7bb1(\u5355\u4f8b)\u548c\u8f66\u4e3b(\u5355\u4f8b)\u6dfb\u52a0\u5230\u6c7d\u8f66\u4e2d"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Car.java"',children:"import jakarta.enterprise.context.Dependent;\r\nimport jakarta.inject.Inject;\r\n\r\n@Dependent\r\npublic class Car {\r\n\r\n    private Gearbox gearbox;\r\n\r\n    // highlight-start\r\n    @Inject\r\n    private Owner owner;\r\n    // highlight-end\r\n\r\n    // highlight-start\r\n    @Inject\r\n    public void setGearbox(Gearbox gearbox) {\r\n        this.gearbox = gearbox;\r\n    }\r\n    // highlight-end\r\n\r\n    public void setOwner(Owner owner) {\r\n        this.owner = owner;\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Gearbox.java"',children:'import jakarta.enterprise.context.ApplicationScoped;\r\n\r\n@ApplicationScoped\r\npublic class Gearbox {\r\n\r\n    public String getName() {\r\n        return "automatic";\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Owner.java"',children:'import jakarta.enterprise.context.ApplicationScoped;\r\n\r\nimport java.util.UUID;\r\n\r\n@ApplicationScoped\r\npublic class Owner {\r\n\r\n    private final String name;\r\n\r\n    public Owner() {\r\n        name = "Mr." + UUID.randomUUID();\r\n    }\r\n\r\n    public String getName() {\r\n        return name;\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6d4b\u8bd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="InjectTest.java"',children:'import io.nozdormu.inject.test.beans.Car;\r\nimport io.nozdormu.spi.context.BeanContext;\r\nimport org.junit.jupiter.api.Test;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\npublic class InjectTest {\r\n\r\n    @Test\r\n    void testCar() {\r\n        Car car1 = BeanContext.get(Car.class);\r\n        Car car2 = BeanContext.get(Car.class);\r\n\r\n        assertEquals(car1.getGearbox().getName(), "automatic");\r\n        assertEquals(car1.getOwner().getName(), car2.getOwner().getName());\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u63d0\u4f9b\u8005\u6ce8\u5165provider",children:"\u63d0\u4f9b\u8005\u6ce8\u5165(Provider)"}),"\n",(0,t.jsxs)(n.p,{children:["\u88ab\u6ce8\u5165\u7684 Bean \u5982\u679c\u662f ",(0,t.jsx)(n.a,{href:"#cdi",children:(0,t.jsx)(n.code,{children:"@Dependent"})})," (\u591a\u4f8b)\u7b49\u5176\u4ed6\u975e\u5355\u4f8b Bean \u65f6\u9700\u8981\u4f7f\u7528 Provider \u65b9\u5f0f\u6ce8\u5165, \u4f7f\u7528\u65f6\u8c03\u7528 ",(0,t.jsx)(n.code,{children:"get()"})," \u65b9\u6cd5"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b: \u628a\u53f8\u673a(\u591a\u4f8b)\u6dfb\u52a0\u5230\u6c7d\u8f66\u4e2d"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Car.java"',children:"import jakarta.enterprise.context.Dependent;\r\nimport jakarta.inject.Inject;\r\n\r\n@Dependent\r\npublic class Car {\r\n\r\n    // highlight-start\r\n    private final Provider<Driver> driver;\r\n    // highlight-end\r\n\r\n    @Inject\r\n    public Car(Provider<Driver> driver) {\r\n        this.driver = driver;\r\n    }\r\n\r\n    public Driver getDriver() {\r\n        return driver.get();\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6d4b\u8bd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="InjectTest.java"',children:"import io.nozdormu.inject.test.beans.Car;\r\nimport io.nozdormu.spi.context.BeanContext;\r\nimport org.junit.jupiter.api.Test;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\npublic class InjectTest {\r\n\r\n    @Test\r\n    void testCar() {\r\n        Car car1 = BeanContext.get(Car.class);\r\n        Car car2 = BeanContext.get(Car.class);\r\n\r\n        // Driver \u4e0d\u662f\u5355\u4f8b, \u6bcf\u6b21\u6ce8\u5165\u4e0d\u540c\u7684\u5bf9\u8c61\r\n        assertNotEquals(car1.getDriver().getName(), car2.getDriver().getName());\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5f02\u6b65\u63d0\u4f9b\u8005\u6ce8\u5165providermono",children:"\u5f02\u6b65\u63d0\u4f9b\u8005\u6ce8\u5165(Provider<Mono>)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsxs)(n.em,{children:["\u7531\u4e8e\u54cd\u5e94\u5f0f(",(0,t.jsx)(n.a,{href:"https://projectreactor.io/",children:"Reactor"}),")\u8fd0\u884c\u65f6\u6ca1\u6709\u56fa\u5b9a\u7ebf\u7a0b, \u65e0\u6cd5\u4f7f\u7528\u4f20\u7edf\u7684 ThreadLocal \u7b49\u6280\u672f\u5bf9 Bean \u8fdb\u884c\u751f\u547d\u5468\u671f\u7684\u63a7\u5236, \u56e0\u6b64 ",(0,t.jsx)(n.code,{children:"@RequestScoped"})," , ",(0,t.jsx)(n.code,{children:"@SessionScoped"})," \u548c ",(0,t.jsx)(n.code,{children:"@TransactionScoped"})," \u57fa\u4e8e ",(0,t.jsx)(n.a,{href:"https://spring.io/blog/2023/03/28/context-propagation-with-project-reactor-1-the-basics",children:"Reactor Context"})," \u6280\u672f\u5b9e\u73b0, \u9700\u8981\u4ee5 Mono \u5f62\u5f0f\u5f02\u6b65\u6ce8\u5165"]})})}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b: \u628a\u5e7f\u64ad\u8282\u76ee(\u8bf7\u6c42)\u6dfb\u52a0\u5230\u6c7d\u8f66\u4e2d"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Car.java"',children:"import jakarta.enterprise.context.Dependent;\r\nimport jakarta.inject.Inject;\r\n\r\n@Dependent\r\npublic class Car {\r\n\r\n    // highlight-start\r\n    @Inject\r\n    private Provider<Mono<Broadcast>> broadcast;\r\n    // highlight-end\r\n\r\n    public void setBroadcast(Provider<Mono<Broadcast>> broadcast) {\r\n        this.broadcast = broadcast;\r\n    }\r\n\r\n    public Provider<Mono<Broadcast>> getBroadcast() {\r\n        return broadcast;\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6d4b\u8bd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="InjectTest.java"',children:'import io.nozdormu.inject.test.beans.Car;\r\nimport io.nozdormu.spi.context.BeanContext;\r\nimport org.junit.jupiter.api.Test;\r\nimport reactor.test.StepVerifier;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\npublic class InjectTest {\r\n\r\n    @Test\r\n    void testCar() {\r\n        Car car1 = BeanContext.get(Car.class);\r\n\r\n        StepVerifier.create(car1.getBroadcast().get())\r\n                .assertNext(broadcast -> assertEquals(broadcast.getName(), "BBC"))\r\n                .expectComplete()\r\n                .verify();\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u96c6\u5408\u6ce8\u5165instance",children:"\u96c6\u5408\u6ce8\u5165(Instance)"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"#cdi",children:(0,t.jsx)(n.code,{children:"Instance"})})," \u53ef\u4ee5\u6ce8\u5165 Bean \u96c6\u5408, \u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"iterator()"})," \u548c ",(0,t.jsx)(n.code,{children:"stream()"})," \u65b9\u6cd5\u83b7\u53d6\u96c6\u5408"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b: \u628a\u53d1\u52a8\u673a\u96c6\u5408\u6dfb\u52a0\u5230\u6c7d\u4fee\u5382"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="RepairShop.java"',children:"import jakarta.enterprise.context.ApplicationScoped;\r\nimport jakarta.enterprise.inject.Instance;\r\nimport jakarta.inject.Inject;\r\n\r\nimport java.util.List;\r\nimport java.util.stream.Collectors;\r\n\r\n@ApplicationScoped\r\npublic class RepairShop {\r\n\r\n    private final List<IEngine> engineList;\r\n\r\n    @Inject\r\n    public RepairShop(Instance<IEngine> engineInstance) {\r\n        this.engineList = engineInstance.stream().collect(Collectors.toList());\r\n    }\r\n\r\n    public List<IEngine> getEngineList() {\r\n        return engineList;\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="IEngine.java"',children:"public interface IEngine {\r\n    String getName();\r\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Engine.java"',children:'import jakarta.annotation.Priority;\r\nimport jakarta.enterprise.context.ApplicationScoped;\r\n\r\n@ApplicationScoped\r\n@Priority(1)\r\npublic class Engine implements IEngine {\r\n\r\n    public String getName() {\r\n        return "V8 Engine";\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="V12Engine.java"',children:'import jakarta.annotation.Priority;\r\nimport jakarta.enterprise.context.ApplicationScoped;\r\n\r\n@ApplicationScoped\r\n@Priority(2)\r\npublic class V12Engine implements IEngine {\r\n\r\n    public String getName() {\r\n        return "V12 Engine";\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6d4b\u8bd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="InjectTest.java"',children:'import io.nozdormu.inject.test.beans.RepairShop;\r\nimport io.nozdormu.spi.context.BeanContext;\r\nimport org.junit.jupiter.api.Test;\r\nimport reactor.test.StepVerifier;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\npublic class InjectTest {\r\n\r\n    @Test\r\n    void testCar() {\r\n        RepairShop repairShop = BeanContext.get(RepairShop.class);\r\n\r\n        assertAll(\r\n                () -> assertEquals(repairShop.getEngineList().get(0).getName(), "V8 Engine"),\r\n                () -> assertEquals(repairShop.getEngineList().get(1).getName(), "V12 Engine")\r\n        );\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u540d\u79f0\u6ce8\u5165named",children:"\u540d\u79f0\u6ce8\u5165(Named)"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"#cdi",children:(0,t.jsx)(n.code,{children:"@Named"})})," \u53ef\u4ee5\u6839\u636e Bean \u540d\u79f0\u6ce8\u5165"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b: \u628a v12 \u53d1\u52a8\u673a\u6dfb\u52a0\u5230\u6c7d\u4fee\u5382"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="RepairShop.java"',children:'import jakarta.enterprise.context.ApplicationScoped;\r\nimport jakarta.inject.Named;\r\nimport jakarta.inject.Inject;\r\n\r\nimport java.util.List;\r\nimport java.util.stream.Collectors;\r\n\r\n@ApplicationScoped\r\npublic class RepairShop {\r\n\r\n    private final IEngine v12Engine;\r\n\r\n    @Inject\r\n    public RepairShop(@Named("v12") IEngine v12Engine) {\r\n        this.v12Engine = v12Engine;\r\n    }\r\n\r\n    public IEngine getV12Engine() {\r\n        return v12Engine;\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6d4b\u8bd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="InjectTest.java"',children:'import io.nozdormu.inject.test.beans.RepairShop;\r\nimport io.nozdormu.spi.context.BeanContext;\r\nimport org.junit.jupiter.api.Test;\r\nimport reactor.test.StepVerifier;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\npublic class InjectTest {\r\n\r\n    @Test\r\n    void testCar() {\r\n        RepairShop repairShop = BeanContext.get(RepairShop.class);\r\n        assertEquals(repairShop.getV12Engine().getName(), "V12 Engine");\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u9ed8\u8ba4\u5b9e\u73b0\u6ce8\u5165default",children:"\u9ed8\u8ba4\u5b9e\u73b0\u6ce8\u5165(Default)"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"#cdi",children:(0,t.jsx)(n.code,{children:"@Default"})})," \u53ef\u4ee5\u6839\u636e\u6ce8\u5165 Bean \u9ed8\u8ba4\u5b9e\u73b0"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b: \u628a v12 \u53d1\u52a8\u673a\u6dfb\u52a0\u5230\u6c7d\u4fee\u5382"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="RepairShop.java"',children:"import jakarta.enterprise.context.ApplicationScoped;\r\nimport jakarta.inject.Default;\r\nimport jakarta.inject.Inject;\r\n\r\nimport java.util.List;\r\nimport java.util.stream.Collectors;\r\n\r\n@ApplicationScoped\r\npublic class RepairShop {\r\n\r\n    private final IEngine defaultEngine;\r\n\r\n    @Inject\r\n    public RepairShop(@Default IEngine defaultEngine) {\r\n        this.defaultEngine = defaultEngine;\r\n    }\r\n\r\n    public IEngine getDefaultEngine() {\r\n        return defaultEngine;\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6d4b\u8bd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="InjectTest.java"',children:'import io.nozdormu.inject.test.beans.RepairShop;\r\nimport io.nozdormu.spi.context.BeanContext;\r\nimport org.junit.jupiter.api.Test;\r\nimport reactor.test.StepVerifier;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\npublic class InjectTest {\r\n\r\n    @Test\r\n    void testCar() {\r\n        RepairShop repairShop = BeanContext.get(RepairShop.class);\r\n        assertEquals(repairShop.getDefaultEngine().getName(), "V8 Engine");\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\u4f9d\u8d56\u6ce8\u5165-api",children:(0,t.jsx)(n.strong,{children:"\u4f9d\u8d56\u6ce8\u5165 API"})}),"\n",(0,t.jsx)(n.h3,{id:"beancontext",children:"BeanContext"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528 BeanContext \u4e2d\u7684\u9759\u6001\u65b9\u6cd5\u4ee5\u4ee3\u7801\u5f62\u5f0f\u83b7\u53d6 Bean"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b: ",(0,t.jsx)(n.code,{children:"Engine engine = BeanContext.get(Engine.class);"})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u65b9\u6cd5"}),(0,t.jsx)(n.th,{children:"\u53c2\u6570"}),(0,t.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"static T get(Class<T> beanClass)"}),(0,t.jsx)(n.td,{children:"\u76ee\u6807\u7c7b\u578b"}),(0,t.jsx)(n.td,{children:"T"}),(0,t.jsx)(n.td,{children:"\u6839\u636e\u7c7b\u578b\u83b7\u53d6\u5b9e\u4f8b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"static T get(Class<T> beanClass, String name)"}),(0,t.jsx)(n.td,{children:"\u76ee\u6807\u7c7b\u578b,bean \u540d\u79f0"}),(0,t.jsx)(n.td,{children:"T"}),(0,t.jsx)(n.td,{children:"\u6839\u636e\u540d\u6210\u83b7\u53d6\u5b9e\u4f8b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"static Provider<T> getProvider(Class<T> beanClass)"}),(0,t.jsx)(n.td,{children:"\u76ee\u6807\u7c7b\u578b"}),(0,t.jsx)(n.td,{children:"Provider<T>"}),(0,t.jsx)(n.td,{children:"\u6839\u636e\u7c7b\u578b\u83b7\u53d6\u5b9e\u4f8b\u63d0\u4f9b\u8005"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"static Provider<T> getProvider(Class<T> beanClass, String name)"}),(0,t.jsx)(n.td,{children:"\u76ee\u6807\u7c7b\u578b,bean \u540d\u79f0"}),(0,t.jsx)(n.td,{children:"Provider<T>"}),(0,t.jsx)(n.td,{children:"\u6839\u636e\u540d\u79f0\u83b7\u53d6\u5b9e\u4f8b\u63d0\u4f9b\u8005"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"static Provider<Mono<T>> getMonoProvider(Class<T> beanClass)"}),(0,t.jsx)(n.td,{children:"\u76ee\u6807\u7c7b\u578b"}),(0,t.jsx)(n.td,{children:"Provider<Mono<T>>"}),(0,t.jsx)(n.td,{children:"\u6839\u636e\u7c7b\u578b\u83b7\u53d6\u5b9e\u4f8b\u5f02\u6b65\u63d0\u4f9b\u8005"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"static Provider<Mono<T>> getMonoProvider(Class<T> beanClass, String name)"}),(0,t.jsx)(n.td,{children:"\u76ee\u6807\u7c7b\u578b,bean \u540d\u79f0"}),(0,t.jsx)(n.td,{children:"Provider<Mono<T>>"}),(0,t.jsx)(n.td,{children:"\u6839\u636e\u540d\u79f0\u83b7\u53d6\u5b9e\u4f8b\u5f02\u6b65\u63d0\u4f9b\u8005"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"static Instance<T> getInstance(Class<T> beanClass, String... names)"}),(0,t.jsx)(n.td,{children:"\u76ee\u6807\u7c7b\u578b,bean \u540d\u79f0\u6570\u7ec4"}),(0,t.jsx)(n.td,{children:"Instance<T>"}),(0,t.jsx)(n.td,{children:"\u6839\u636e\u7c7b\u578b\u83b7\u53d6\u5b9e\u4f8b\u96c6\u5408, \u53ef\u6839\u636e\u540d\u79f0\u8fc7\u6ee4"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"cdijakarta-cdi-\u6807\u51c6",children:"CDI(Jakarta CDI \u6807\u51c6)"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528 CDI \u4e2d\u7684\u65b9\u6cd5\u4ee5\u4ee3\u7801\u5f62\u5f0f\u83b7\u53d6 Bean"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b: ",(0,t.jsx)(n.code,{children:"Engine engine = CDI.current().select(Engine.class);"})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u65b9\u6cd5"}),(0,t.jsx)(n.th,{children:"\u53c2\u6570"}),(0,t.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"static current()"}),(0,t.jsx)(n.td,{children:"\u65e0"}),(0,t.jsx)(n.td,{children:"CDI"}),(0,t.jsx)(n.td,{children:"\u83b7\u53d6 CDI \u5b9e\u4f8b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Instance<T> select(Class<T> beanClass, Annotation... annotations)"}),(0,t.jsx)(n.td,{children:"\u76ee\u6807\u7c7b\u578b, \u6ce8\u89e3\u7b5b\u9009\u5217\u8868"}),(0,t.jsx)(n.td,{children:"Instance<T>"}),(0,t.jsx)(n.td,{children:"\u6839\u636e\u6ce8\u89e3\u5217\u8868\u7b5b\u9009 Bean"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6ce8\u89e3\u8bf4\u660e",children:(0,t.jsx)(n.strong,{children:"\u6ce8\u89e3\u8bf4\u660e"})}),"\n",(0,t.jsx)(n.h3,{id:"cdi",children:"CDI"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u6ce8\u89e3"}),(0,t.jsx)(n.th,{children:"\u76ee\u6807"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jakarta.inject.Inject"}),(0,t.jsx)(n.td,{children:"\u65b9\u6cd5,\u5b57\u6bb5,\u6784\u9020\u5668"}),(0,t.jsx)(n.td,{children:"\u6807\u8bb0\u6ce8\u5165\u76ee\u6807"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jakarta.inject.Provider"}),(0,t.jsx)(n.td,{children:"\u5b57\u6bb5,\u53c2\u6570"}),(0,t.jsxs)(n.td,{children:["\u5b9e\u4f8b\u63d0\u4f9b\u8005 ",(0,t.jsx)(n.code,{children:"get()"})," \u65b9\u6cd5\u83b7\u5f97\u5b9e\u4f8b"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jakarta.enterprise.inject.Instance"}),(0,t.jsx)(n.td,{children:"\u5b57\u6bb5,\u53c2\u6570"}),(0,t.jsxs)(n.td,{children:["\u5b9e\u4f8b\u96c6\u5408 ",(0,t.jsx)(n.code,{children:"iterator()"})," ",(0,t.jsx)(n.code,{children:"stream()"})," \u65b9\u6cd5\u83b7\u5f97\u5b9e\u4f8b\u96c6\u5408"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jakarta.enterprise.inject.Produces"}),(0,t.jsx)(n.td,{children:"\u65b9\u6cd5"}),(0,t.jsx)(n.td,{children:"\u6807\u8bb0\u5b9e\u4f8b\u5de5\u5382\u65b9\u6cd5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jakarta.inject.Named"}),(0,t.jsx)(n.td,{children:"\u7c7b,\u53c2\u6570"}),(0,t.jsx)(n.td,{children:"\u914d\u7f6e Bean \u540d\u79f0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jakarta.enterprise.inject.Default"}),(0,t.jsx)(n.td,{children:"\u7c7b,\u53c2\u6570"}),(0,t.jsx)(n.td,{children:"\u8bbe\u7f6e Bean \u4e3a\u9ed8\u8ba4\u5b9e\u73b0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jakarta.annotation.Priority"}),(0,t.jsx)(n.td,{children:"\u7c7b"}),(0,t.jsx)(n.td,{children:"\u914d\u7f6e Bean \u5728\u96c6\u5408\u4e2d\u7684\u987a\u5e8f"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"\u751f\u547d\u5468\u671f",children:"\u751f\u547d\u5468\u671f"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u6ce8\u89e3"}),(0,t.jsx)(n.th,{children:"\u751f\u547d\u5468\u671f"}),(0,t.jsx)(n.th,{children:"\u6ce8\u5165\u65b9\u5f0f"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jakarta.inject.Singleton"}),(0,t.jsx)(n.td,{children:"\u5355\u4f8b"}),(0,t.jsx)(n.td,{children:"\u76f4\u63a5\u6ce8\u5165"}),(0,t.jsx)(n.td,{children:"\u5168\u5c40\u5171\u4eab\u5355\u4e2a\u5b9e\u4f8b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jakarta.enterprise.context.ApplicationScoped"}),(0,t.jsx)(n.td,{children:"\u5355\u4f8b"}),(0,t.jsx)(n.td,{children:"\u76f4\u63a5\u6ce8\u5165"}),(0,t.jsx)(n.td,{children:"\u5168\u5c40\u5171\u4eab\u5355\u4e2a\u5b9e\u4f8b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jakarta.enterprise.context.Dependent"}),(0,t.jsx)(n.td,{children:"\u591a\u4f8b"}),(0,t.jsx)(n.td,{children:"\u63d0\u4f9b\u8005\u6ce8\u5165(Provider)"}),(0,t.jsx)(n.td,{children:"\u6bcf\u6b21\u6ce8\u5165\u83b7\u5f97\u65b0\u7684\u5b9e\u4f8b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jakarta.enterprise.context.RequestScoped"}),(0,t.jsx)(n.td,{children:"\u8bf7\u6c42"}),(0,t.jsx)(n.td,{children:"\u5f02\u6b65\u63d0\u4f9b\u8005\u6ce8\u5165(Provider<Mono>)"}),(0,t.jsx)(n.td,{children:"\u5355\u4e2a\u8bf7\u6c42\u5185\u5171\u4eab\u5b9e\u4f8b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jakarta.enterprise.context.SessionScoped"}),(0,t.jsx)(n.td,{children:"\u4f1a\u8bdd"}),(0,t.jsx)(n.td,{children:"\u5f02\u6b65\u63d0\u4f9b\u8005\u6ce8\u5165(Provider<Mono>)"}),(0,t.jsx)(n.td,{children:"\u5355\u4e2a\u4f1a\u8bdd\u5185\u5171\u4eab\u5b9e\u4f8b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jakarta.transaction.TransactionScoped"}),(0,t.jsx)(n.td,{children:"\u4e8b\u52a1"}),(0,t.jsx)(n.td,{children:"\u5f02\u6b65\u63d0\u4f9b\u8005\u6ce8\u5165(Provider<Mono>)"}),(0,t.jsx)(n.td,{children:"\u5355\u4e2a\u4e8b\u52a1\u5185\u5171\u4eab\u5b9e\u4f8b"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u672c\u8282\u793a\u4f8b",children:(0,t.jsx)(n.em,{children:"\u672c\u8282\u793a\u4f8b"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/doukai/nozdormu/tree/main/nozdormu-inject/src/test/java/io/nozdormu/inject/test",children:"https://github.com/doukai/nozdormu/tree/main/nozdormu-inject/src/test/java/io/nozdormu/inject/test"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},5710:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var t=r(758);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);