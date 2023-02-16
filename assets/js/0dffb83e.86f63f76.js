"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[5075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={draft:!1,title:"Roadmap",date:new Date("2023-01-10T09:00:00.000Z"),description:"Fleek Network's high-level roadmap per stage. Devnet, Testnet, and Mainnet.",category:"Documentation",keywords:["roadmap"],tags:["Roadmap","Fleek Network"]},i=void 0,l={unversionedId:"roadmap",id:"roadmap",title:"Roadmap",description:"Fleek Network's high-level roadmap per stage. Devnet, Testnet, and Mainnet.",source:"@site/docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/docs/roadmap",draft:!1,tags:[{label:"Roadmap",permalink:"/docs/tags/roadmap"},{label:"Fleek Network",permalink:"/docs/tags/fleek-network"}],version:"current",frontMatter:{draft:!1,title:"Roadmap",date:"2023-01-10T09:00:00.000Z",description:"Fleek Network's high-level roadmap per stage. Devnet, Testnet, and Mainnet.",category:"Documentation",keywords:["roadmap"],tags:["Roadmap","Fleek Network"]},sidebar:"default",previous:{title:"Contributing",permalink:"/docs/Open-source/contributing"},next:{title:"Whitepaper",permalink:"/docs/whitepaper"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Devnet",id:"devnet",level:2},{value:"Testnet",id:"testnet",level:2},{value:"Mainnet",id:"mainnet",level:2}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This is a high-level roadmap overview of Fleek Network's development, updated on ",(0,r.kt)("inlineCode",{parentName:"p"},"February 2023"),". For a full view of the roadmap, ",(0,r.kt)("a",{parentName:"p",href:"https://storage.fleek.zone/27a60cdd-37d3-480c-ae88-3ad4ca886b13-bucket/imgs/roadmap-int.png"},"visit here"),". The roadmap is divided into three phases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Devnet"),": Focused on the building of the Network's core features and architecture."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Testnet"),": Focused on the testing of the Network's individual components."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mainnet"),": Stable and production release of the protocol, fully featured and tested.")),(0,r.kt)("h2",{id:"devnet"},"Devnet"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fleek Network: Roadmap",src:n(685).Z,width:"1555",height:"1555"})),(0,r.kt)("p",null,"During Devnet, the current stage, the team will set the foundational components needed to build Fleek Network's decentralized edge, including the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The network actors",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cache and Gateway Nodes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Full chain nodes, validators, and light nodes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Full Chain nodes: maintain history but are not necessarily validators in the network."),(0,r.kt)("li",{parentName:"ul"},"Validators: don\u2019t have to maintain the full network history."),(0,r.kt)("li",{parentName:"ul"},"Light nodes: act as light verification nodes. "))))))),(0,r.kt)("li",{parentName:"ul"},"Content Routing and Replication"),(0,r.kt)("li",{parentName:"ul"},"Reputation System"),(0,r.kt)("li",{parentName:"ul"},"Modular Consensus Algorithm",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Narwhal and Bullshark"))),(0,r.kt)("li",{parentName:"ul"},"Network Governance and Economics"),(0,r.kt)("li",{parentName:"ul"},"EVM Compatible application layer"),(0,r.kt)("li",{parentName:"ul"},"L1 ",(0,r.kt)("inlineCode",{parentName:"li"},"<>")," L2 ",(0,r.kt)("inlineCode",{parentName:"li"},"<>")," Fleek Network Bridge"),(0,r.kt)("li",{parentName:"ul"},"SDK Libraries (Rust / Typescript)")),(0,r.kt)("h2",{id:"testnet"},"Testnet"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fleek Network: Roadmap",src:n(7321).Z,width:"1555",height:"1555"})),(0,r.kt)("p",null,"During Testnet, the focus is twofold:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stress-test and iterate Fleek Network"),(0,r.kt)("li",{parentName:"ul"},"Maximize the number of operators, nodes, and geographical distribution.")),(0,r.kt)("p",null,"The team will develop different testnet versions, ",(0,r.kt)("strong",{parentName:"p"},"test-specific"),", to individually test, stress, and validate the network's performance and design. These are some of the items we intend to test:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consensus"),(0,r.kt)("li",{parentName:"ul"},"Performance"),(0,r.kt)("li",{parentName:"ul"},"Incentives")),(0,r.kt)("p",null,"We also intend to ",(0,r.kt)("strong",{parentName:"p"},"integrate IPFS/Filecoin/Arweave and other storage protocols")," to allow direct file-fetching through Fleek Network (aside from the network's direct HTTPS capabilities)."),(0,r.kt)("h2",{id:"mainnet"},"Mainnet"),(0,r.kt)("p",null,"The mainnet release of Fleek Network will come with the arrival of a stable and end-to-end tested version of the protocol. The transition to mainnet depends on you!"))}u.isMDXComponent=!0},685:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fleek-network-devnet-7ca8cb606e4c26e48af05130a44d2e6d.png"},7321:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fleek-network-testnet-6e1112ec25665b574463bb70b176740c.png"}}]);