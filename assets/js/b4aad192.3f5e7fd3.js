"use strict";(self.webpackChunkgp_doc_github_io=self.webpackChunkgp_doc_github_io||[]).push([[6551],{6127:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var t=n(6070),i=n(5710);const s={sidebar_position:2},a="gRPC",o={id:"distributed/grpc",title:"gRPC",description:"gRPC \u662f\u4e00\u79cd\u9ad8\u6027\u80fd, \u5f00\u6e90\u7684\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\uff08RPC\uff09\u6846\u67b6, \u6700\u521d\u7531 Google \u5f00\u53d1. \u5b83\u4f7f\u7528 HTTP/2 \u4f5c\u4e3a\u4f20\u8f93\u534f\u8bae, \u5e76\u91c7\u7528 Protocol Buffers\uff08protobuf\uff09\u4f5c\u4e3a\u63a5\u53e3\u63cf\u8ff0\u8bed\u8a00\u548c\u6570\u636e\u5e8f\u5217\u5316\u683c\u5f0f. gRPC \u652f\u6301\u591a\u79cd\u7f16\u7a0b\u8bed\u8a00, \u53ef\u4ee5\u5b9e\u73b0\u8de8\u8bed\u8a00\u7684\u670d\u52a1\u8c03\u7528. \u5176\u7279\u70b9\u5305\u62ec\u53cc\u5411\u6d41, \u8d1f\u8f7d\u5747\u8861, \u8ba4\u8bc1\u548c\u8d85\u65f6\u63a7\u5236\u7b49, \u9002\u7528\u4e8e\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u7684\u9ad8\u6548\u901a\u4fe1",source:"@site/docs/distributed/grpc.md",sourceDirName:"distributed",slug:"/distributed/grpc",permalink:"/docs/distributed/grpc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5fae\u670d\u52a1",permalink:"/docs/distributed/microservices"},next:{title:"\u6821\u9a8c",permalink:"/docs/category/\u6821\u9a8c"}},c={},p=[{value:"\u6a21\u5757(package)",id:"\u6a21\u5757package",level:2},{value:"\u5b89\u88c5 protobuf \u63d2\u4ef6\u548c gRPC \u4f9d\u8d56",id:"\u5b89\u88c5-protobuf-\u63d2\u4ef6\u548c-grpc-\u4f9d\u8d56",level:3},{value:"\u751f\u6210 DTO \u548c protobuf",id:"\u751f\u6210-dto-\u548c-protobuf",level:3},{value:"\u670d\u52a1\u7aef(server)",id:"\u670d\u52a1\u7aefserver",level:2},{value:"\u5b89\u88c5 graphoenix-grpc-server \u6a21\u5757",id:"\u5b89\u88c5-graphoenix-grpc-server-\u6a21\u5757",level:3},{value:"\u542f\u52a8 gRPC \u670d\u52a1",id:"\u542f\u52a8-grpc-\u670d\u52a1",level:3},{value:"\u5ba2\u6237\u7aef(client)",id:"\u5ba2\u6237\u7aefclient",level:2},{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:3},{value:"\u53d8\u66f4",id:"\u53d8\u66f4",level:3},{value:"\u54cd\u5e94\u5f0f",id:"\u54cd\u5e94\u5f0f",level:3},{value:"\u8d1f\u8f7d\u5747\u8861",id:"\u8d1f\u8f7d\u5747\u8861",level:3},{value:"<em>\u672c\u8282\u793a\u4f8b</em>",id:"\u672c\u8282\u793a\u4f8b",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",mermaid:"mermaid",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"grpc",children:"gRPC"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://grpc.io/",children:"gRPC"})," \u662f\u4e00\u79cd\u9ad8\u6027\u80fd, \u5f00\u6e90\u7684\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\uff08RPC\uff09\u6846\u67b6, \u6700\u521d\u7531 Google \u5f00\u53d1. \u5b83\u4f7f\u7528 HTTP/2 \u4f5c\u4e3a\u4f20\u8f93\u534f\u8bae, \u5e76\u91c7\u7528 ",(0,t.jsx)(r.a,{href:"https://protobuf.dev/",children:"Protocol Buffers"}),"\uff08protobuf\uff09\u4f5c\u4e3a\u63a5\u53e3\u63cf\u8ff0\u8bed\u8a00\u548c\u6570\u636e\u5e8f\u5217\u5316\u683c\u5f0f. ",(0,t.jsx)(r.a,{href:"https://grpc.io/",children:"gRPC"})," \u652f\u6301\u591a\u79cd\u7f16\u7a0b\u8bed\u8a00, \u53ef\u4ee5\u5b9e\u73b0\u8de8\u8bed\u8a00\u7684\u670d\u52a1\u8c03\u7528. \u5176\u7279\u70b9\u5305\u62ec\u53cc\u5411\u6d41, \u8d1f\u8f7d\u5747\u8861, \u8ba4\u8bc1\u548c\u8d85\u65f6\u63a7\u5236\u7b49, \u9002\u7528\u4e8e\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u7684\u9ad8\u6548\u901a\u4fe1"]}),"\n",(0,t.jsx)(r.mermaid,{value:'flowchart LR\r\n    subgraph "\u5ba2\u6237\u7aef(client)"\r\n        config[\u914d\u7f6egRPC\u5730\u5740]\r\n        invoke[\u8c03\u7528Stub\u63a5\u53e3]\r\n    end\r\n    subgraph "\u670d\u52a1\u7aef(server)"\r\n        server[gRPC\u670d\u52a1]\r\n        impl[Stub\u63a5\u53e3\u5b9e\u73b0]\r\n    end\r\n    subgraph "\u6a21\u5757(package)"\r\n        protobuf[protobuf]\r\n        stub[Stub\u63a5\u53e3]\r\n    end\r\n    config --\u5f15\u7528--\x3e invoke\r\n    invoke <--\u901a\u8baf--\x3e server\r\n    impl --\u5b9e\u73b0--\x3e stub\r\n    invoke <--\u8c03\u7528--\x3e stub\r\n    protobuf --\u751f\u6210--\x3e stub'}),"\n",(0,t.jsx)(r.h2,{id:"\u6a21\u5757package",children:"\u6a21\u5757(package)"}),"\n",(0,t.jsxs)(r.p,{children:["\u5b89\u88c5 protobuf \u63d2\u4ef6, \u6a21\u5757\u4f1a\u751f\u6210 gRPC \u7684 protobuf \u5b9a\u4e49\u548c\u5bf9\u5e94\u7684 Stub \u63a5\u53e3\u4f9b",(0,t.jsx)(r.a,{href:"#%E5%AE%A2%E6%88%B7%E7%AB%AFclient",children:"\u5ba2\u6237\u7aef(client)"}),"\u4f7f\u7528"]}),"\n",(0,t.jsx)(r.h3,{id:"\u5b89\u88c5-protobuf-\u63d2\u4ef6\u548c-grpc-\u4f9d\u8d56",children:"\u5b89\u88c5 protobuf \u63d2\u4ef6\u548c gRPC \u4f9d\u8d56"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-gradle",metastring:'title="user-package/build.gradle"',children:"buildscript {\r\n    repositories {\r\n        jcenter()\r\n    }\r\n}\r\n\r\nplugins {\r\n    id 'java'\r\n    id \"org.graphoenix\" version \"0.1.1\"\r\n    // highlight-start\r\n    id 'com.google.protobuf' version '0.9.1'\r\n    // highlight-end\r\n}\r\n\r\nclasses {\r\n    dependsOn generateGraphQLSource\r\n    // highlight-start\r\n    dependsOn generateProtobufV3\r\n    // highlight-end\r\n}\r\n\r\n// highlight-start\r\n// gRPC \u914d\u7f6e\r\nprotobuf {\r\n    protoc {\r\n        artifact = 'com.google.protobuf:protoc:3.21.7'\r\n    }\r\n    plugins {\r\n        grpc {\r\n            artifact = 'io.grpc:protoc-gen-grpc-java:1.52.1'\r\n        }\r\n        reactor {\r\n            artifact = 'com.salesforce.servicelibs:reactor-grpc:1.2.3'\r\n        }\r\n    }\r\n    generateProtoTasks {\r\n        all()*.plugins {\r\n            grpc {}\r\n            reactor {}\r\n        }\r\n    }\r\n}\r\n// highlight-end\r\n\r\n// highlight-start\r\n// gRPC \u76ee\u5f55\u914d\u7f6e\r\nsourceSets {\r\n    main {\r\n        java {\r\n            srcDirs 'build/generated/source/proto/main/java'\r\n            srcDirs 'build/generated/source/proto/main/grpc'\r\n            srcDirs 'build/generated/source/proto/main/reactor'\r\n        }\r\n    }\r\n}\r\n// highlight-end\r\n\r\ndependencies {\r\n    // highlight-start\r\n    // gRPC \u4f9d\u8d56\r\n    runtimeOnly 'io.grpc:grpc-netty-shaded:1.52.1'\r\n    implementation 'io.grpc:grpc-protobuf:1.52.1'\r\n    implementation 'io.grpc:grpc-stub:1.52.1'\r\n    implementation 'com.salesforce.servicelibs:reactor-grpc-stub:1.2.3'\r\n    compileOnly 'org.apache.tomcat:annotations-api:6.0.53' // necessary for Java 9+\r\n    // highlight-end\r\n\r\n    // highlight-start\r\n    // protobuf \u4f9d\u8d56\r\n    protobuf 'org.graphoenix:graphoenix-core:0.1.2'\r\n    // highlight-end\r\n\r\n    // ...\r\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"\u751f\u6210-dto-\u548c-protobuf",children:"\u751f\u6210 DTO \u548c protobuf"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"./gradlew :user-package:build\n"})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"protobuf\u76ee\u5f55"}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-txt",children:"|-- order-microservices\r\n    |-- user-package                                \u7528\u6237\u6a21\u5757\r\n        |-- build.gradle\r\n        |-- src\r\n            |-- main\r\n                |-- java\r\n                |   |-- demo.gp.user\r\n                |       |-- package-info.java\r\n                // highlight-start\r\n                |-- proto\r\n                |   |-- demo.gp.user\r\n                |       |-- enums.proto             \u679a\u4e3e\u7c7b\u578b\r\n                |       |-- input_objects.proto     \u8f93\u5165\u7c7b\u578b\r\n                |       |-- interfaces.proto        \u63a5\u53e3\u7c7b\u578b\r\n                |       |-- objects.proto           \u5bf9\u8c61\u7c7b\u578b\r\n                |       |-- query.proto             \u67e5\u8be2\u670d\u52a1\r\n                |       |-- mutation.proto          \u53d8\u66f4\u670d\u52a1\r\n                // highlight-end\r\n                |-- resources\r\n                    |-- graphql\r\n                        |-- user.gql                \u5b9a\u4e49\u7528\u6237\u76f8\u5173\u7c7b\u578b\n"})})]}),"\n",(0,t.jsx)(r.p,{children:"Graphoenix \u6839\u636e GraphQL \u751f\u6210\u5bf9\u5e94\u7684 protobuf \u5b9a\u4e49\u6587\u4ef6"}),"\n",(0,t.jsx)(r.mermaid,{value:'flowchart LR\r\n    uml[\u540e\u7aef\u5efa\u6a21]\r\n    grpc((gRPC\u670d\u52a1))\r\n    subgraph Graphoenix\r\n        schema["// types.graphql\r\n            type User {\r\n            &emsp;id: ID\r\n            &emsp;name: String!\r\n            &emsp;userType: UserType!\r\n            }"] -- \u8f6c\u8bd1 --\x3e protobuf["// types.proto\r\n            message Product {\r\n            &emsp;string id = 1;\r\n            &emsp;optional string name = 2;\r\n            &emsp;optional UserType userType = 3\r\n            }"] -- \u6784\u5efa --\x3e service["// service.proto\r\n            service QueryService {\r\n            &emsp;rpc User (Request) returns (Response);\r\n            &emsp;rpc UserList (Request) returns (Response);\r\n            &emsp;rpc UserConnection (Request) returns (Response);\r\n            }"]\r\n        style schema text-align:left\r\n        style protobuf text-align:left\r\n        style service text-align:left\r\n    end\r\n    uml --\x3e schema\r\n    service --\x3e grpc'}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"\u670d\u52a1\u7aefserver",children:"\u670d\u52a1\u7aef(server)"}),"\n",(0,t.jsx)(r.h3,{id:"\u5b89\u88c5-graphoenix-grpc-server-\u6a21\u5757",children:"\u5b89\u88c5 graphoenix-grpc-server \u6a21\u5757"}),"\n",(0,t.jsxs)(r.p,{children:["\u5b89\u88c5 graphoenix-grpc-server \u6a21\u5757, Graphoenix \u5c06\u6839\u636e",(0,t.jsx)(r.a,{href:"#%E6%A8%A1%E5%9D%97package",children:"\u6a21\u5757(package)"}),"\u4e2d\u7684\u5b9a\u4e49\u81ea\u52a8\u5b9e\u73b0 gRPC \u670d\u52a1\u63a5\u53e3"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-gradle",metastring:'title="user-app/build.gradle"',children:"dependencies {\r\n    // highlight-start\r\n    // gRPC \u670d\u52a1\r\n    implementation 'org.graphoenix:graphoenix-grpc-server:0.1.3'\r\n\r\n    annotationProcessor 'org.graphoenix:graphoenix-grpc-server:0.1.3'\r\n    // highlight-end\r\n\r\n    // ...\r\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"\u542f\u52a8-grpc-\u670d\u52a1",children:"\u542f\u52a8 gRPC \u670d\u52a1"}),"\n",(0,t.jsx)(r.p,{children:"Run/Debug user-app/src/main/java/demo/gp/user/App.java"}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"\u5ba2\u6237\u7aefclient",children:"\u5ba2\u6237\u7aef(client)"}),"\n",(0,t.jsxs)(r.p,{children:["\u5f15\u7528\u9700\u8981\u8c03\u7528\u7684 ",(0,t.jsx)(r.a,{href:"#%E6%A8%A1%E5%9D%97package",children:"gRPC \u6a21\u5757(package)"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-gradle",metastring:'title="order-package/build.gradle"',children:"dependencies {\r\n    // highlight-start\r\n    implementation project(':user-package')\r\n    // highlight-end\r\n\r\n    // ...\r\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"\u67e5\u8be2",children:"\u67e5\u8be2"}),"\n",(0,t.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"QueryServiceGrpc.QueryServiceBlockingStub"})," \u63a5\u53e3\u4e2d\u4e0e Query \u5bf9\u8c61\u4e2d\u540c\u540d\u7684\u65b9\u6cd5\u67e5\u8be2, \u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"setSelectionSet"})," \u65b9\u6cd5\u6765\u8bbe\u7f6e\u67e5\u8be2\u5b57\u6bb5"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'import demo.gp.user.dto.enumType.grpc.UserType;\r\nimport demo.gp.user.grpc.*;\r\nimport io.graphoenix.core.dto.enumType.grpc.Operator;\r\nimport io.graphoenix.core.dto.inputObjectType.grpc.StringExpression;\r\nimport io.grpc.ManagedChannel;\r\nimport io.grpc.ManagedChannelBuilder;\r\nimport org.junit.jupiter.api.Test;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\npublic class UserGrpcTest {\r\n\r\n    // highlight-start\r\n    // gRPC server \u5730\u5740\r\n    private static final String userGrpcAddress = "localhost:50053";\r\n    private static final ManagedChannel userManagedChannel = ManagedChannelBuilder.forTarget(userGrpcAddress).usePlaintext().build();\r\n    private static final QueryServiceGrpc.QueryServiceBlockingStub queryServiceStub = QueryServiceGrpc.newBlockingStub(userManagedChannel);\r\n    // highlight-end\r\n\r\n    @Test\r\n    void queryUserTest() {\r\n        // highlight-start\r\n        QueryUserRequest queryUserRequest = QueryUserRequest.newBuilder()\r\n                .setSelectionSet("{name userType}")\r\n                .setName(\r\n                        StringExpression.newBuilder()\r\n                                .setOpr(Operator.EQ_OPERATOR)\r\n                                .setVal("Alice")\r\n                                .build()\r\n                )\r\n                .build();\r\n        QueryUserResponse response = queryServiceStub.user(queryUserRequest);\r\n        // highlight-end\r\n\r\n        assertAll(\r\n                () -> assertEquals(response.getUser().getName(), "Alice"),\r\n                () -> assertEquals(response.getUser().getUserType(), UserType.VIP_USER_TYPE),\r\n                () -> assertEquals(response.getUser().getEmail(), "")\r\n        );\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"\u65b9\u6cd5\u7b49\u540c\u4e8e\u5982\u4e0b GraphQL \u67e5\u8be2"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:'query {\r\n  user(name: { opr: EQ, val: "Alice" }) {\r\n    name\r\n    userType\r\n  }\r\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"\u53d8\u66f4",children:"\u53d8\u66f4"}),"\n",(0,t.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"MutationServiceGrpc.MutationServiceBlockingStub"})," \u63a5\u53e3\u4e2d\u4e0e Mutation \u5bf9\u8c61\u4e2d\u540c\u540d\u7684\u65b9\u6cd5\u53d8\u66f4, \u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"setSelectionSet"})," \u65b9\u6cd5\u6765\u8bbe\u7f6e\u67e5\u8be2\u5b57\u6bb5"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'import demo.gp.user.dto.enumType.grpc.UserType;\r\nimport demo.gp.user.grpc.*;\r\nimport io.graphoenix.core.dto.enumType.grpc.Operator;\r\nimport io.graphoenix.core.dto.inputObjectType.grpc.StringExpression;\r\nimport io.grpc.ManagedChannel;\r\nimport io.grpc.ManagedChannelBuilder;\r\nimport org.junit.jupiter.api.Test;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\npublic class UserGrpcTest {\r\n\r\n    // highlight-start\r\n    // gRPC server \u5730\u5740\r\n    private static final String userGrpcAddress = "localhost:50053";\r\n    private static final ManagedChannel userManagedChannel = ManagedChannelBuilder.forTarget(userGrpcAddress).usePlaintext().build();\r\n    private static final MutationServiceGrpc.MutationServiceBlockingStub mutationServiceBlockingStub = MutationServiceGrpc.newBlockingStub(userManagedChannel);\r\n    // highlight-end\r\n\r\n    @Test\r\n    void MutationUserTest() {\r\n        // highlight-start\r\n        MutationUserRequest mutationUserRequest = MutationUserRequest.newBuilder()\r\n                .setName("Uma")\r\n                .setEmail("uma@example.com")\r\n                .setUserType(UserType.VIP_USER_TYPE)\r\n                .build();\r\n        MutationUserResponse response = mutationServiceBlockingStub.user(mutationUserRequest);\r\n        // highlight-end\r\n\r\n        assertAll(\r\n                () -> assertEquals(response.getUser().getName(), "Uma"),\r\n                () -> assertEquals(response.getUser().getEmail(), "uma@example.com"),\r\n                () -> assertEquals(response.getUser().getUserType(), UserType.VIP_USER_TYPE)\r\n        );\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"\u65b9\u6cd5\u7b49\u540c\u4e8e\u5982\u4e0b GraphQL \u53d8\u66f4"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:'mutaion {\r\n  user(name: "Uma", email: "uma@example.com", userType: VIP) {\r\n    id\r\n    name\r\n    email\r\n    userType\r\n  }\r\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"\u54cd\u5e94\u5f0f",children:"\u54cd\u5e94\u5f0f"}),"\n",(0,t.jsxs)(r.p,{children:["Graphoenix \u652f\u6301 ",(0,t.jsx)(r.a,{href:"https://github.com/salesforce/reactive-grpc",children:"Reactive gRPC"}),", \u54cd\u5e94\u5f0f Stub \u4ee5 Reactor \u5f00\u5934\u547d\u540d"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'import demo.gp.user.dto.enumType.grpc.UserType;\r\nimport demo.gp.user.grpc.*;\r\nimport io.graphoenix.core.dto.enumType.grpc.Operator;\r\nimport io.graphoenix.core.dto.inputObjectType.grpc.StringExpression;\r\nimport io.grpc.ManagedChannel;\r\nimport io.grpc.ManagedChannelBuilder;\r\nimport org.junit.jupiter.api.Test;\r\nimport reactor.core.publisher.Mono;\r\nimport reactor.test.StepVerifier;\r\n\r\nimport static org.junit.jupiter.api.Assertions.*;\r\n\r\npublic class UserGrpcTest {\r\n\r\n    // highlight-start\r\n    // gRPC server \u5730\u5740\r\n    private static final String userGrpcAddress = "localhost:50053";\r\n    private static final ManagedChannel userManagedChannel = ManagedChannelBuilder.forTarget(userGrpcAddress).usePlaintext().build();\r\n    // \u54cd\u5e94\u5f0f Stub\r\n    private static final ReactorQueryServiceGrpc.ReactorQueryServiceStub reactorQueryServiceStub = ReactorQueryServiceGrpc.newReactorStub(userManagedChannel);\r\n    // highlight-end\r\n\r\n    @Test\r\n    void reactorQueryUserTest() {\r\n        // highlight-start\r\n        QueryUserRequest queryUserRequest = QueryUserRequest.newBuilder()\r\n                .setName(\r\n                        StringExpression.newBuilder()\r\n                                .setOpr(Operator.EQ_OPERATOR)\r\n                                .setVal("Bob")\r\n                                .build()\r\n                )\r\n                .build();\r\n        Mono<QueryUserResponse> responseMono = reactorQueryServiceStub.user(queryUserRequest);\r\n        // highlight-end\r\n\r\n        StepVerifier.create(responseMono)\r\n                .assertNext(response ->\r\n                        assertAll(\r\n                                () -> assertEquals(response.getUser().getName(), "Bob"),\r\n                                () -> assertEquals(response.getUser().getEmail(), "bob@example.com"),\r\n                                () -> assertEquals(response.getUser().getUserType(), UserType.REGULAR_USER_TYPE)\r\n                        )\r\n                )\r\n                .expectComplete()\r\n                .verify();\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"\u8d1f\u8f7d\u5747\u8861",children:"\u8d1f\u8f7d\u5747\u8861"}),"\n",(0,t.jsxs)(r.p,{children:["Graphoenix \u63d0\u4f9b ",(0,t.jsx)(r.code,{children:"PackageNameResolverProvider"})," \u652f\u6301 gRPC \u8d1f\u8f7d\u5747\u8861, \u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"package://package.name"})," \u4f5c\u4e3a\u6a21\u5757\u5730\u5740, \u63d0\u4f9b ",(0,t.jsx)(r.code,{children:"pick_first"})," \u548c ",(0,t.jsx)(r.code,{children:"round_robin"})," \u4e24\u79cd\u7b56\u7565"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'import io.grpc.ManagedChannel;\r\nimport io.grpc.NameResolverRegistry;\r\nimport io.graphoenix.grpc.client.resolver.PackageNameResolverProvider;\r\n\r\npublic class UserGrpcTest {\r\n\r\n    // private static final String userGrpcAddress = "localhost:50053";\r\n    // private static final ManagedChannel userManagedChannel = ManagedChannelBuilder.forTarget(userGrpcAddress).usePlaintext().build();\r\n    // highlight-start\r\n    // gRPC server \u5730\u5740\r\n    private static final String userGrpcAddress = "package://demo.gp.user";\r\n    private static final ManagedChannel userManagedChannel = ManagedChannelBuilder.forTarget(userGrpcAddress).defaultLoadBalancingPolicy("round_robin").usePlaintext().build()\r\n    // highlight-end\r\n    private static final QueryServiceGrpc.QueryServiceBlockingStub queryServiceStub = QueryServiceGrpc.newBlockingStub(userManagedChannel);\r\n\r\n    @Inject\r\n    public UserGrpcTest(PackageNameResolverProvider packageNameResolverProvider) {\r\n        // highlight-start\r\n        // \u6ce8\u518c\u5730\u5740\u5de5\u5382\r\n        NameResolverRegistry.getDefaultRegistry().register(packageNameResolverProvider);\r\n        // highlight-end\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"\u672c\u8282\u793a\u4f8b",children:(0,t.jsx)(r.em,{children:"\u672c\u8282\u793a\u4f8b"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/doukai/order-microservices/tree/main/order-app/src/test/java/demo/gp/order/test/grpc",children:"https://github.com/doukai/order-microservices/tree/main/order-app/src/test/java/demo/gp/order/test/grpc"})})]})}function g(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},5710:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var t=n(758);const i={},s=t.createContext(i);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);