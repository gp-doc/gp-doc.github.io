"use strict";(self.webpackChunkgp_doc_github_io=self.webpackChunkgp_doc_github_io||[]).push([[6752],{1966:(n,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var e=r(6070),i=r(5710);const o={sidebar_position:2},a="\u5207\u9762(interceptor)",c={id:"jakarta-ee/interceptor",title:"\u5207\u9762(interceptor)",description:"\u5207\u9762\u7f16\u7a0b\uff08Aspect-Oriented Programming, AOP\uff09\u662f\u4e00\u79cd\u7f16\u7a0b\u8303\u5f0f, \u5b83\u901a\u8fc7\u5c06\u6a2a\u5207\u5173\u6ce8\u70b9\uff08cross-cutting concerns\uff09\u4e0e\u4e1a\u52a1\u903b\u8f91\u5206\u79bb, \u6765\u589e\u5f3a\u4ee3\u7801\u7684\u6a21\u5757\u5316. \u5728\u4f01\u4e1a\u7ea7 Java \u5f00\u53d1\u4e2d, AOP \u901a\u5e38\u7528\u4e8e\u65e5\u5fd7\u8bb0\u5f55, \u5b89\u5168\u6027, \u4e8b\u52a1\u7ba1\u7406\u7b49\u65b9\u9762",source:"@site/docs/jakarta-ee/interceptor.md",sourceDirName:"jakarta-ee",slug:"/jakarta-ee/interceptor",permalink:"/docs/jakarta-ee/interceptor",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4f9d\u8d56\u6ce8\u5165(inject)",permalink:"/docs/jakarta-ee/inject"},next:{title:"\u914d\u7f6e(config)",permalink:"/docs/jakarta-ee/config"}},s={},l=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u65b9\u6cd5\u5207\u9762",id:"\u65b9\u6cd5\u5207\u9762",level:2},{value:"\u5b9a\u4e49\u65b9\u6cd5\u6ce8\u89e3",id:"\u5b9a\u4e49\u65b9\u6cd5\u6ce8\u89e3",level:3},{value:"\u5b9e\u73b0\u65b9\u6cd5\u5207\u9762",id:"\u5b9e\u73b0\u65b9\u6cd5\u5207\u9762",level:3},{value:"\u6807\u8bb0\u76ee\u6807\u65b9\u6cd5",id:"\u6807\u8bb0\u76ee\u6807\u65b9\u6cd5",level:3},{value:"\u6784\u9020\u5668\u5207\u9762",id:"\u6784\u9020\u5668\u5207\u9762",level:2},{value:"\u5b9a\u4e49\u6784\u9020\u5668\u6ce8\u89e3",id:"\u5b9a\u4e49\u6784\u9020\u5668\u6ce8\u89e3",level:3},{value:"\u5b9e\u73b0\u6784\u9020\u5668\u5207\u9762",id:"\u5b9e\u73b0\u6784\u9020\u5668\u5207\u9762",level:3},{value:"\u6807\u8bb0\u76ee\u6807\u6784\u9020\u5668",id:"\u6807\u8bb0\u76ee\u6807\u6784\u9020\u5668",level:3},{value:"<strong>\u5207\u9762 API</strong>",id:"\u5207\u9762-api",level:2},{value:"InvocationContext",id:"invocationcontext",level:3},{value:"<strong>\u6ce8\u89e3\u8bf4\u660e</strong>",id:"\u6ce8\u89e3\u8bf4\u660e",level:2},{value:"Interceptor",id:"interceptor",level:3},{value:"<em>\u672c\u8282\u793a\u4f8b</em>",id:"\u672c\u8282\u793a\u4f8b",level:2}];function d(n){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h1,{id:"\u5207\u9762interceptor",children:"\u5207\u9762(interceptor)"}),"\n",(0,e.jsx)(t.p,{children:"\u5207\u9762\u7f16\u7a0b\uff08Aspect-Oriented Programming, AOP\uff09\u662f\u4e00\u79cd\u7f16\u7a0b\u8303\u5f0f, \u5b83\u901a\u8fc7\u5c06\u6a2a\u5207\u5173\u6ce8\u70b9\uff08cross-cutting concerns\uff09\u4e0e\u4e1a\u52a1\u903b\u8f91\u5206\u79bb, \u6765\u589e\u5f3a\u4ee3\u7801\u7684\u6a21\u5757\u5316. \u5728\u4f01\u4e1a\u7ea7 Java \u5f00\u53d1\u4e2d, AOP \u901a\u5e38\u7528\u4e8e\u65e5\u5fd7\u8bb0\u5f55, \u5b89\u5168\u6027, \u4e8b\u52a1\u7ba1\u7406\u7b49\u65b9\u9762"}),"\n",(0,e.jsx)(t.p,{children:"\u4e3b\u6d41\u7684 AOP \u6280\u672f\u4e0e\u5b9e\u73b0:"}),"\n",(0,e.jsxs)(t.table,{children:[(0,e.jsx)(t.thead,{children:(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.th,{children:"\u6846\u67b6"}),(0,e.jsx)(t.th,{children:"\u7c7b\u578b"}),(0,e.jsx)(t.th,{children:"\u539f\u7406"}),(0,e.jsx)(t.th,{children:"\u7f3a\u70b9"})]})}),(0,e.jsxs)(t.tbody,{children:[(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"Spring AOP"}),(0,e.jsx)(t.td,{children:"\u8fd0\u884c\u65f6"}),(0,e.jsxs)(t.td,{children:[(0,e.jsx)(t.strong,{children:"JDK \u52a8\u6001\u4ee3\u7406"}),": \u9002\u7528\u4e8e\u63a5\u53e3\u4ee3\u7406. \u901a\u8fc7\u521b\u5efa\u5b9e\u73b0\u4e86\u76ee\u6807\u63a5\u53e3\u7684\u4ee3\u7406\u5bf9\u8c61\u6765\u62e6\u622a\u65b9\u6cd5\u8c03\u7528",(0,e.jsx)("br",{}),(0,e.jsx)(t.strong,{children:"CGLIB \u4ee3\u7406"}),": \u9002\u7528\u4e8e\u7c7b\u4ee3\u7406. \u901a\u8fc7\u521b\u5efa\u76ee\u6807\u7c7b\u7684\u5b50\u7c7b\u6765\u62e6\u622a\u65b9\u6cd5\u8c03\u7528"]}),(0,e.jsxs)(t.td,{children:[(0,e.jsx)(t.strong,{children:"\u6027\u80fd\u5f00\u9500"}),": Spring AOP \u57fa\u4e8e\u4ee3\u7406\u673a\u5236, \u8fd9\u610f\u5473\u7740\u6bcf\u6b21\u65b9\u6cd5\u8c03\u7528\u90fd\u4f1a\u6709\u989d\u5916\u7684\u4ee3\u7406\u5f00\u9500, \u53ef\u80fd\u4f1a\u5f71\u54cd\u6027\u80fd, \u5c24\u5176\u662f\u5728\u5927\u91cf\u9891\u7e41\u8c03\u7528\u7684\u573a\u666f\u4e0b",(0,e.jsx)("br",{}),(0,e.jsx)(t.strong,{children:"\u53d7\u9650\u4e8e Spring \u5bb9\u5668"}),": Spring AOP \u4ec5\u5728 Spring \u5bb9\u5668\u7ba1\u7406\u7684 Bean \u4e0a\u6709\u6548, \u5bf9\u4e8e\u975e Spring \u7ba1\u7406\u7684\u5bf9\u8c61\u65e0\u6cd5\u5e94\u7528"]})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"AspectJ"}),(0,e.jsx)(t.td,{children:"\u7f16\u8bd1\u65f6/\u52a0\u8f7d\u65f6/\u8fd0\u884c\u65f6"}),(0,e.jsxs)(t.td,{children:[(0,e.jsx)(t.strong,{children:"\u7f16\u8bd1\u65f6\u7ec7\u5165"}),"(Compile-Time Weaving): \u5728\u6e90\u4ee3\u7801\u7f16\u8bd1\u4e3a\u5b57\u8282\u7801\u65f6, \u76f4\u63a5\u5c06\u5207\u9762\u4ee3\u7801\u7ec7\u5165\u5230\u5b57\u8282\u7801\u4e2d. \u8fd9\u9700\u8981\u4f7f\u7528 AspectJ \u63d0\u4f9b\u7684\u7f16\u8bd1\u5668 ajc, \u6216\u8005\u901a\u8fc7\u5c06 AspectJ \u96c6\u6210\u5230\u6784\u5efa\u5de5\u5177(\u5982 Maven \u6216 Gradle)\u4e2d",(0,e.jsx)("br",{}),(0,e.jsx)(t.strong,{children:"\u540e\u7f16\u8bd1\u65f6\u7ec7\u5165"}),"(Post-Compile Weaving): \u4e5f\u79f0\u4e3a\u4e8c\u8fdb\u5236\u7ec7\u5165(Binary Weaving), \u662f\u5728\u5df2\u7ecf\u7f16\u8bd1\u597d\u7684\u5b57\u8282\u7801\u6587\u4ef6\u4e2d\u8fdb\u884c\u7ec7\u5165. \u8fd9\u79cd\u65b9\u5f0f\u9002\u7528\u4e8e\u9700\u8981\u5728\u7f16\u8bd1\u540e\u7684\u5b57\u8282\u7801\u4e0a\u8fdb\u884c\u5207\u9762\u589e\u5f3a\u7684\u573a\u666f",(0,e.jsx)("br",{}),(0,e.jsx)(t.strong,{children:"\u52a0\u8f7d\u65f6\u7ec7\u5165"}),"(Load-Time Weaving): \u5728\u7c7b\u52a0\u8f7d\u65f6, \u5c06\u5207\u9762\u4ee3\u7801\u52a8\u6001\u7ec7\u5165\u5230\u76ee\u6807\u7c7b\u7684\u5b57\u8282\u7801\u4e2d. \u8fd9\u901a\u5e38\u9700\u8981\u4e00\u4e2a\u7279\u6b8a\u7684\u7c7b\u52a0\u8f7d\u5668, \u4f7f\u7528 Java \u7684 Instrumentation API \u5b9e\u73b0"]}),(0,e.jsxs)(t.td,{children:[(0,e.jsx)(t.strong,{children:"\u5b66\u4e60\u66f2\u7ebf\u9661\u5ced"}),": AspectJ \u5177\u6709\u5f3a\u5927\u7684\u529f\u80fd, \u4f46\u5176\u8bed\u6cd5\u548c\u6982\u5ff5\uff08\u5982\u5207\u70b9\u8868\u8fbe\u5f0f, \u901a\u77e5\u7c7b\u578b, \u7ec7\u5165\u65b9\u5f0f\u7b49\uff09\u53ef\u80fd\u5bf9\u521d\u5b66\u8005\u6765\u8bf4\u6bd4\u8f83\u590d\u6742, \u9700\u8981\u4e00\u5b9a\u7684\u5b66\u4e60\u6210\u672c",(0,e.jsx)("br",{}),(0,e.jsx)(t.strong,{children:"\u7f16\u8bd1\u548c\u6784\u5efa\u590d\u6742\u6027"}),": \u4f7f\u7528 AspectJ \u7f16\u8bd1\u5668(ajc)\u53ef\u80fd\u9700\u8981\u989d\u5916\u7684\u6784\u5efa\u914d\u7f6e, \u5c24\u5176\u662f\u5728\u5927\u578b\u9879\u76ee\u4e2d\u96c6\u6210 AspectJ \u65f6, \u53ef\u80fd\u4f1a\u589e\u52a0\u6784\u5efa\u8fc7\u7a0b\u7684\u590d\u6742\u6027",(0,e.jsx)("br",{}),(0,e.jsx)(t.strong,{children:"\u8fd0\u884c\u65f6\u6027\u80fd\u5f00\u9500"}),": \u867d\u7136 AspectJ \u7684\u7f16\u8bd1\u65f6\u7ec7\u5165\u6027\u80fd\u8f83\u597d, \u4f46\u52a0\u8f7d\u65f6\u7ec7\u5165\u53ef\u80fd\u4f1a\u5e26\u6765\u4e00\u5b9a\u7684\u6027\u80fd\u5f00\u9500",(0,e.jsx)("br",{}),(0,e.jsx)(t.strong,{children:"\u8c03\u8bd5\u56f0\u96be"}),": \u7531\u4e8e AspectJ \u4fee\u6539\u4e86\u5b57\u8282\u7801, \u8c03\u8bd5\u5207\u9762\u4ee3\u7801\u53ef\u80fd\u4f1a\u53d8\u5f97\u56f0\u96be, \u7279\u522b\u662f\u5728\u95ee\u9898\u5b9a\u4f4d\u548c\u6392\u67e5\u65b9\u9762"]})]})]})]}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.a,{href:"https://github.com/doukai/nozdormu",children:(0,e.jsx)(t.strong,{children:"Nozdormu"})})," \u57fa\u4e8e",(0,e.jsx)(t.a,{href:"https://jakarta.ee/specifications/interceptors/2.2/jakarta-interceptors-spec-2.2",children:"Jakarta Interceptors"})," \u89c4\u8303, \u4f7f\u7528\u900f\u660e\u9ad8\u6548\u7684 Annotation Processing(JSR-269) \u6280\u672f, \u901a\u8fc7\u5bf9\u5207\u7247\u4ee3\u7801\u7684\u9759\u6001\u5206\u6790, \u5728\u7f16\u8bd1\u524d\u9636\u6bb5\u5c06\u5207\u9762\u7ec7\u5165\u5230\u6e90\u7801\u4e2d, \u6613\u4e8e\u8c03\u8bd5, \u5145\u5206\u53d1\u6325\u7f16\u8bd1\u5668\u548c IDE \u7684\u68c0\u67e5\u80fd\u529b"]}),"\n",(0,e.jsx)(t.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,e.jsx)(t.p,{children:"\u6dfb\u52a0\u4f9d\u8d56"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-gradle",children:"repositories {\r\n    mavenCentral()\r\n    // highlight-start\r\n    jcenter()\r\n    // highlight-end\r\n}\r\n\r\ndependencies {\r\n    implementation 'org.graphoenix:nozdormu-inject:0.1.0'\r\n    // highlight-start\r\n    implementation 'org.graphoenix:nozdormu-interceptor:0.1.0'\r\n    // highlight-end\r\n\r\n    annotationProcessor 'org.graphoenix:nozdormu-inject:0.1.0'\r\n    // highlight-start\r\n    annotationProcessor 'org.graphoenix:nozdormu-interceptor:0.1.0'\r\n    // highlight-end\r\n}\n"})}),"\n",(0,e.jsx)(t.h2,{id:"\u65b9\u6cd5\u5207\u9762",children:"\u65b9\u6cd5\u5207\u9762"}),"\n",(0,e.jsx)(t.h3,{id:"\u5b9a\u4e49\u65b9\u6cd5\u6ce8\u89e3",children:"\u5b9a\u4e49\u65b9\u6cd5\u6ce8\u89e3"}),"\n",(0,e.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,e.jsx)(t.a,{href:"#%E6%B3%A8%E8%A7%A3%E8%AF%B4%E6%98%8E",children:(0,e.jsx)(t.code,{children:"@InterceptorBinding"})})," \u6807\u8bb0\u65b9\u6cd5\u6ce8\u89e3"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-java",metastring:'title="Launch.java"',children:'import jakarta.interceptor.InterceptorBinding;\r\n\r\nimport java.lang.annotation.ElementType;\r\nimport java.lang.annotation.Retention;\r\nimport java.lang.annotation.RetentionPolicy;\r\nimport java.lang.annotation.Target;\r\n\r\n// highlight-start\r\n@InterceptorBinding\r\n// highlight-end\r\n@Target({ElementType.TYPE, ElementType.METHOD})\r\n@Retention(value = RetentionPolicy.RUNTIME)\r\npublic @interface Launch {\r\n    String value() default "";\r\n}\n'})}),"\n",(0,e.jsx)(t.h3,{id:"\u5b9e\u73b0\u65b9\u6cd5\u5207\u9762",children:"\u5b9e\u73b0\u65b9\u6cd5\u5207\u9762"}),"\n",(0,e.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,e.jsx)(t.a,{href:"#%E6%B3%A8%E8%A7%A3%E8%AF%B4%E6%98%8E",children:(0,e.jsx)(t.code,{children:"@Interceptor"})})," \u548c",(0,e.jsx)(t.a,{href:"#%E5%AE%9A%E4%B9%89%E6%96%B9%E6%B3%95%E6%B3%A8%E8%A7%A3",children:"\u65b9\u6cd5\u6ce8\u89e3"}),"\u6807\u8bb0\u5207\u9762\u7c7b, \u4f7f\u7528 ",(0,e.jsx)(t.a,{href:"#%E6%B3%A8%E8%A7%A3%E8%AF%B4%E6%98%8E",children:(0,e.jsx)(t.code,{children:"@AroundInvoke"})}),"\u6307\u5b9a\u5207\u9762\u5b9e\u73b0\u7684\u65b9\u6cd5, \u5982\u679c\u9700\u8981\u6307\u5b9a\u5207\u9762\u65b9\u6cd5\u7684\u6267\u884c\u987a\u5e8f\u4f7f\u7528 ",(0,e.jsx)(t.a,{href:"#%E6%B3%A8%E8%A7%A3%E8%AF%B4%E6%98%8E",children:(0,e.jsx)(t.code,{children:"@Priority"})})," \u6ce8\u89e3\u6307\u5b9a"]}),"\n",(0,e.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,e.jsx)(t.a,{href:"#%E5%88%87%E9%9D%A2-api",children:(0,e.jsx)(t.code,{children:"InvocationContext"})})," \u4e2d\u7684 ",(0,e.jsx)(t.code,{children:"proceed()"})," \u65b9\u6cd5\u53ef\u4ee5\u6267\u884c",(0,e.jsx)(t.a,{href:"#%E6%A0%87%E8%AE%B0%E7%9B%AE%E6%A0%87%E6%96%B9%E6%B3%95",children:"\u76ee\u6807\u65b9\u6cd5"}),"\u5e76\u8fd4\u56de\u7ed3\u679c"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-java",metastring:'title="FirstLaunchInterceptor.java"',children:'import io.nozdormu.interceptor.test.annotation.Launch;\r\nimport jakarta.annotation.Priority;\r\nimport jakarta.enterprise.context.ApplicationScoped;\r\nimport jakarta.interceptor.AroundInvoke;\r\nimport jakarta.interceptor.Interceptor;\r\nimport jakarta.interceptor.InvocationContext;\r\n\r\n@ApplicationScoped\r\n// highlight-start\r\n@Launch         //\u65b9\u6cd5\r\n@Priority(0)    //\u987a\u5e8f\u6ce8\u89e3\r\n@Interceptor    //\u5207\u9762\u6ce8\u89e3\r\n// highlight-end\r\npublic class FirstLaunchInterceptor {\r\n\r\n    // highlight-start\r\n    @AroundInvoke\r\n    // highlight-end\r\n    public Object aroundInvoke(InvocationContext invocationContext) {\r\n        try {\r\n            // highlight-start\r\n            return "first stage fired -> " + invocationContext.proceed();\r\n            // highlight-end\r\n        } catch (Exception e) {\r\n            throw new RuntimeException(e);\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-java",metastring:'title="SecondLaunchInterceptor.java"',children:'import io.nozdormu.interceptor.test.annotation.Launch;\r\nimport jakarta.annotation.Priority;\r\nimport jakarta.enterprise.context.ApplicationScoped;\r\nimport jakarta.interceptor.AroundInvoke;\r\nimport jakarta.interceptor.Interceptor;\r\nimport jakarta.interceptor.InvocationContext;\r\n\r\n@ApplicationScoped\r\n// highlight-start\r\n@Launch         //\u65b9\u6cd5\u6ce8\u89e3\r\n@Priority(1)    //\u987a\u5e8f\u6ce8\u89e3\r\n@Interceptor    //\u5207\u9762\u6ce8\u89e3\r\n// highlight-end\r\npublic class SecondLaunchInterceptor {\r\n\r\n    // highlight-start\r\n    @AroundInvoke\r\n    // highlight-end\r\n    public Object aroundInvoke(InvocationContext invocationContext) {\r\n        try {\r\n            // highlight-start\r\n            return "second stage fired -> " + invocationContext.proceed();\r\n            // highlight-end\r\n        } catch (Exception e) {\r\n            throw new RuntimeException(e);\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,e.jsx)(t.h3,{id:"\u6807\u8bb0\u76ee\u6807\u65b9\u6cd5",children:"\u6807\u8bb0\u76ee\u6807\u65b9\u6cd5"}),"\n",(0,e.jsxs)(t.p,{children:["\u5728\u76ee\u6807\u65b9\u6cd5\u4e0a\u4f7f\u7528",(0,e.jsx)(t.a,{href:"#%E5%AE%9A%E4%B9%89%E6%96%B9%E6%B3%95%E6%B3%A8%E8%A7%A3",children:"\u65b9\u6cd5\u6ce8\u89e3"})]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-java",metastring:'title="Satellite.java"',children:'import io.nozdormu.interceptor.test.annotation.Launch;\r\nimport jakarta.enterprise.context.ApplicationScoped;\r\n\r\n@ApplicationScoped\r\npublic class Satellite {\r\n\r\n    // highlight-start\r\n    @Launch\r\n    // highlight-end\r\n    public String startup(String name) {\r\n        return "hello " + name + " I am " + owner.getName();\r\n    }\r\n}\n'})}),"\n",(0,e.jsx)(t.p,{children:"\u6d4b\u8bd5"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-java",metastring:'title="InterceptorTest.java"',children:'import io.nozdormu.interceptor.test.beans.Satellite;\r\nimport io.nozdormu.spi.context.BeanContext;\r\nimport org.junit.jupiter.api.Test;\r\n\r\nimport static org.junit.jupiter.api.Assertions.assertEquals;\r\n\r\npublic class InterceptorTest {\r\n\r\n    @Test\r\n    void testSatellite() {\r\n        Satellite satellite = BeanContext.get(Satellite.class);\r\n        assertEquals(satellite.checkResult(), "first stage ready -> second stage ready -> all check ready, fire");\r\n    }\r\n}\n'})}),"\n",(0,e.jsx)(t.h2,{id:"\u6784\u9020\u5668\u5207\u9762",children:"\u6784\u9020\u5668\u5207\u9762"}),"\n",(0,e.jsx)(t.h3,{id:"\u5b9a\u4e49\u6784\u9020\u5668\u6ce8\u89e3",children:"\u5b9a\u4e49\u6784\u9020\u5668\u6ce8\u89e3"}),"\n",(0,e.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,e.jsx)(t.a,{href:"#%E6%B3%A8%E8%A7%A3%E8%AF%B4%E6%98%8E",children:(0,e.jsx)(t.code,{children:"@InterceptorBinding"})})," \u6807\u8bb0\u6784\u9020\u5668\u6ce8\u89e3"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-java",metastring:'title="Install.java"',children:"import jakarta.interceptor.InterceptorBinding;\r\n\r\nimport java.lang.annotation.ElementType;\r\nimport java.lang.annotation.Retention;\r\nimport java.lang.annotation.RetentionPolicy;\r\nimport java.lang.annotation.Target;\r\n\r\n// highlight-start\r\n@InterceptorBinding\r\n// highlight-end\r\n@Target({ElementType.TYPE, ElementType.CONSTRUCTOR})\r\n@Retention(value = RetentionPolicy.RUNTIME)\r\npublic @interface Install {\r\n}\n"})}),"\n",(0,e.jsx)(t.h3,{id:"\u5b9e\u73b0\u6784\u9020\u5668\u5207\u9762",children:"\u5b9e\u73b0\u6784\u9020\u5668\u5207\u9762"}),"\n",(0,e.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,e.jsx)(t.a,{href:"#%E6%B3%A8%E8%A7%A3%E8%AF%B4%E6%98%8E",children:(0,e.jsx)(t.code,{children:"@Interceptor"})})," \u548c",(0,e.jsx)(t.a,{href:"#%E5%AE%9A%E4%B9%89%E6%9E%84%E9%80%A0%E5%99%A8%E6%B3%A8%E8%A7%A3",children:"\u6784\u9020\u5668\u6ce8\u89e3"}),"\u6807\u8bb0\u5207\u9762\u7c7b, \u4f7f\u7528 ",(0,e.jsx)(t.a,{href:"#%E6%B3%A8%E8%A7%A3%E8%AF%B4%E6%98%8E",children:(0,e.jsx)(t.code,{children:"@AroundConstruct"})})," \u6307\u5b9a\u5207\u9762\u5b9e\u73b0\u7684\u65b9\u6cd5, \u5982\u679c\u9700\u8981\u6307\u5b9a\u5207\u9762\u65b9\u6cd5\u7684\u6267\u884c\u987a\u5e8f\u4f7f\u7528 ",(0,e.jsx)(t.a,{href:"#%E6%B3%A8%E8%A7%A3%E8%AF%B4%E6%98%8E",children:(0,e.jsx)(t.code,{children:"@Priority"})})," \u6ce8\u89e3\u6307\u5b9a"]}),"\n",(0,e.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,e.jsx)(t.a,{href:"#%E5%88%87%E9%9D%A2-api",children:(0,e.jsx)(t.code,{children:"InvocationContext"})})," \u4e2d\u7684 ",(0,e.jsx)(t.code,{children:"proceed()"})," \u65b9\u6cd5\u53ef\u4ee5\u6267\u884c",(0,e.jsx)(t.a,{href:"#%E6%A0%87%E8%AE%B0%E7%9B%AE%E6%A0%87%E6%9E%84%E9%80%A0%E5%99%A8",children:"\u76ee\u6807\u6784\u9020\u5668"}),"\u5e76\u8fd4\u56de\u7ed3\u679c"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-java",metastring:'title="FirstInstallInterceptor.java"',children:'import io.nozdormu.interceptor.test.annotation.Install;\r\nimport jakarta.annotation.Priority;\r\nimport jakarta.enterprise.context.ApplicationScoped;\r\nimport jakarta.interceptor.AroundConstruct;\r\nimport jakarta.interceptor.Interceptor;\r\nimport jakarta.interceptor.InvocationContext;\r\n\r\nimport java.util.ArrayList;\r\nimport java.util.List;\r\n\r\n@ApplicationScoped\r\n// highlight-start\r\n@Launch         //\u6784\u9020\u5668\u6ce8\u89e3\r\n@Priority(0)    //\u987a\u5e8f\u6ce8\u89e3\r\n@Interceptor    //\u5207\u9762\u6ce8\u89e3\r\n// highlight-end\r\npublic class FirstInstallInterceptor {\r\n\r\n    // highlight-start\r\n    @AroundConstruct\r\n    // highlight-end\r\n    public Object aroundConstruct(InvocationContext invocationContext) {\r\n        List<String> infoList = ((ArrayList<String>) invocationContext.getContextData().computeIfAbsent("infoList", (key) -> new ArrayList<String>()));\r\n        infoList.add("first stage ready ->");\r\n        try {\r\n            // highlight-start\r\n            return invocationContext.proceed();\r\n            // highlight-end\r\n        } catch (Exception e) {\r\n            throw new RuntimeException(e);\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-java",metastring:'title="SecondInstallInterceptor.java"',children:'import io.nozdormu.interceptor.test.annotation.Install;\r\nimport io.nozdormu.interceptor.test.beans.Satellite;\r\nimport jakarta.annotation.Priority;\r\nimport jakarta.enterprise.context.ApplicationScoped;\r\nimport jakarta.interceptor.AroundConstruct;\r\nimport jakarta.interceptor.Interceptor;\r\nimport jakarta.interceptor.InvocationContext;\r\n\r\nimport java.util.ArrayList;\r\nimport java.util.List;\r\n\r\n@ApplicationScoped\r\n// highlight-start\r\n@Launch         //\u6784\u9020\u5668\u6ce8\u89e3\r\n@Priority(1)    //\u987a\u5e8f\u6ce8\u89e3\r\n@Interceptor    //\u5207\u9762\u6ce8\u89e3\r\n// highlight-end\r\npublic class SecondInstallInterceptor {\r\n\r\n    // highlight-start\r\n    @AroundConstruct\r\n    // highlight-end\r\n    public Object aroundConstruct(InvocationContext invocationContext) {\r\n        List<String> infoList = ((ArrayList<String>) invocationContext.getContextData().computeIfAbsent("infoList", (key) -> new ArrayList<String>()));\r\n        infoList.add("second stage ready ->");\r\n        try {\r\n            // highlight-start\r\n            Satellite satellite = (Satellite) invocationContext.proceed();\r\n            // highlight-end\r\n            satellite.setInfoList(infoList);\r\n            return satellite;\r\n        } catch (Exception e) {\r\n            throw new RuntimeException(e);\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,e.jsx)(t.h3,{id:"\u6807\u8bb0\u76ee\u6807\u6784\u9020\u5668",children:"\u6807\u8bb0\u76ee\u6807\u6784\u9020\u5668"}),"\n",(0,e.jsxs)(t.p,{children:["\u5728\u76ee\u6807\u65b9\u6cd5\u4e0a\u4f7f\u7528",(0,e.jsx)(t.a,{href:"#%E5%AE%9A%E4%B9%89%E6%9E%84%E9%80%A0%E5%99%A8%E6%B3%A8%E8%A7%A3",children:"\u6784\u9020\u5668\u6ce8\u89e3"})]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-java",metastring:'title="Satellite.java"',children:'import io.nozdormu.interceptor.test.annotation.Install;\r\nimport jakarta.enterprise.context.ApplicationScoped;\r\n\r\nimport java.util.ArrayList;\r\nimport java.util.List;\r\n\r\n@ApplicationScoped\r\npublic class Satellite {\r\n\r\n    private List<String> infoList = new ArrayList<>();\r\n\r\n    private final Owner owner;\r\n\r\n    // highlight-start\r\n    @Install\r\n    // highlight-end\r\n    public Satellite(Owner owner) {\r\n        this.owner = owner;\r\n    }\r\n\r\n    public void setInfoList(List<String> infoList) {\r\n        this.infoList = infoList;\r\n    }\r\n\r\n    public String checkResult() {\r\n        return String.join(" ", infoList) + " all check ready, fire";\r\n    }\r\n}\n'})}),"\n",(0,e.jsx)(t.p,{children:"\u6d4b\u8bd5"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-java",metastring:'title="InterceptorTest.java"',children:'import io.nozdormu.interceptor.test.beans.Satellite;\r\nimport io.nozdormu.spi.context.BeanContext;\r\nimport org.junit.jupiter.api.Test;\r\n\r\nimport static org.junit.jupiter.api.Assertions.assertEquals;\r\n\r\npublic class InterceptorTest {\r\n\r\n    @Test\r\n    void testSatellite() {\r\n        Satellite satellite = BeanContext.get(Satellite.class);\r\n        assertEquals(satellite.startup("nozdormu"), "first stage fired -> second stage fired -> hello nozdormu I am NASA");\r\n    }\r\n}\n'})}),"\n",(0,e.jsx)(t.hr,{}),"\n",(0,e.jsx)(t.h2,{id:"\u5207\u9762-api",children:(0,e.jsx)(t.strong,{children:"\u5207\u9762 API"})}),"\n",(0,e.jsx)(t.h3,{id:"invocationcontext",children:"InvocationContext"}),"\n",(0,e.jsx)(t.p,{children:"\u4f7f\u7528 InvocationContext \u83b7\u5f97\u5207\u9762\u8fd0\u884c\u65f6\u7684\u53c2\u6570\u548c\u65b9\u6cd5"}),"\n",(0,e.jsxs)(t.table,{children:[(0,e.jsx)(t.thead,{children:(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.th,{children:"\u6ce8\u89e3"}),(0,e.jsx)(t.th,{children:"\u53c2\u6570"}),(0,e.jsx)(t.th,{children:"\u8fd4\u56de\u503c"}),(0,e.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,e.jsxs)(t.tbody,{children:[(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"Object getTarget()"}),(0,e.jsx)(t.td,{children:"\u65e0"}),(0,e.jsx)(t.td,{children:"Object"}),(0,e.jsx)(t.td,{children:"\u8fd4\u56de\u76ee\u6807\u5b9e\u4f8b"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"Method getMethod()"}),(0,e.jsx)(t.td,{children:"\u65e0"}),(0,e.jsx)(t.td,{children:"Method"}),(0,e.jsx)(t.td,{children:"\u8fd4\u56de\u8c03\u7528\u62e6\u622a\u5668\u7684\u76ee\u6807\u7c7b\u7684\u65b9\u6cd5"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"Constructor<?> getConstructor()"}),(0,e.jsx)(t.td,{children:"\u65e0"}),(0,e.jsx)(t.td,{children:"Constructor<?>"}),(0,e.jsx)(t.td,{children:"\u8fd4\u56de\u8c03\u7528\u62e6\u622a\u5668\u65b9\u6cd5\u7684\u76ee\u6807\u7c7b\u7684\u6784\u9020\u51fd\u6570"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"Object[] getParameters()"}),(0,e.jsx)(t.td,{children:"\u65e0"}),(0,e.jsx)(t.td,{children:"Object[]"}),(0,e.jsx)(t.td,{children:"\u8fd4\u56de\u5c06\u4f20\u9012\u7ed9\u76ee\u6807\u7c7b\u7684\u65b9\u6cd5\u6216\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\u503c"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"void setParameters(Object[] params)"}),(0,e.jsx)(t.td,{children:"\u53c2\u6570\u503c"}),(0,e.jsx)(t.td,{children:"\u65e0"}),(0,e.jsx)(t.td,{children:"\u8bbe\u7f6e\u5c06\u4f20\u9012\u7ed9\u76ee\u6807\u7c7b\u7684\u65b9\u6cd5\u6216\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\u503c"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"Map<String, Object> getContextData()"}),(0,e.jsx)(t.td,{children:"\u65e0"}),(0,e.jsx)(t.td,{children:"Map<String, Object>"}),(0,e.jsx)(t.td,{children:"\u4e0e\u6b64\u8c03\u7528\u6216\u751f\u547d\u5468\u671f\u56de\u8c03\u76f8\u5173\u7684\u4e0a\u4e0b\u6587\u6570\u636e"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"Object proceed() throws Exception"}),(0,e.jsx)(t.td,{children:"\u65e0"}),(0,e.jsx)(t.td,{children:"Object"}),(0,e.jsx)(t.td,{children:"\u7ee7\u7eed\u6267\u884c\u62e6\u622a\u5668\u94fe\u4e2d\u7684\u4e0b\u4e00\u4e2a\u62e6\u622a\u5668"})]})]})]}),"\n",(0,e.jsx)(t.h2,{id:"\u6ce8\u89e3\u8bf4\u660e",children:(0,e.jsx)(t.strong,{children:"\u6ce8\u89e3\u8bf4\u660e"})}),"\n",(0,e.jsx)(t.h3,{id:"interceptor",children:"Interceptor"}),"\n",(0,e.jsxs)(t.table,{children:[(0,e.jsx)(t.thead,{children:(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.th,{children:"\u6ce8\u89e3"}),(0,e.jsx)(t.th,{children:"\u76ee\u6807"}),(0,e.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,e.jsxs)(t.tbody,{children:[(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"jakarta.interceptor.InterceptorBinding"}),(0,e.jsx)(t.td,{children:"\u6ce8\u89e3"}),(0,e.jsx)(t.td,{children:"\u6807\u8bb0\u9700\u8981\u5207\u9762\u5904\u7406\u7684\u6ce8\u89e3"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"jakarta.interceptor.Interceptor"}),(0,e.jsx)(t.td,{children:"\u7c7b"}),(0,e.jsx)(t.td,{children:"\u6807\u8bb0\u5207\u9762\u7684\u5b9e\u73b0\u7c7b"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"jakarta.interceptor.AroundInvoke"}),(0,e.jsx)(t.td,{children:"\u65b9\u6cd5"}),(0,e.jsx)(t.td,{children:"\u6807\u8bb0\u65b9\u6cd5\u5207\u9762\u7684\u5b9e\u73b0\u65b9\u6cd5"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"jakarta.interceptor.AroundConstruct"}),(0,e.jsx)(t.td,{children:"\u65b9\u6cd5"}),(0,e.jsx)(t.td,{children:"\u6807\u8bb0\u6784\u9020\u5668\u5207\u9762\u7684\u5b9e\u73b0\u65b9\u6cd5"})]}),(0,e.jsxs)(t.tr,{children:[(0,e.jsx)(t.td,{children:"jakarta.annotation.Priority"}),(0,e.jsx)(t.td,{children:"\u7c7b"}),(0,e.jsx)(t.td,{children:"\u914d\u7f6e\u5207\u9762\u7684\u6267\u884c\u987a\u5e8f"})]})]})]}),"\n",(0,e.jsx)(t.h2,{id:"\u672c\u8282\u793a\u4f8b",children:(0,e.jsx)(t.em,{children:"\u672c\u8282\u793a\u4f8b"})}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.a,{href:"https://github.com/doukai/nozdormu/tree/main/nozdormu-interceptor/src/test/java/io/nozdormu/interceptor/test",children:"https://github.com/doukai/nozdormu/tree/main/nozdormu-interceptor/src/test/java/io/nozdormu/interceptor/test"})})]})}function h(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},5710:(n,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var e=r(758);const i={},o=e.createContext(i);function a(n){const t=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),e.createElement(o.Provider,{value:t},n.children)}}}]);