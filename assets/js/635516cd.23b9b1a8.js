"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[1279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={title:"The Fleek Network",slug:"the-fleek-network",authors:{name:"Mahmoud A. Shehata",title:"Lead Engineer",url:"https://github.com/b0xtch",image_url:"https://github.com/b0xtch.png"},tags:["fleek network","blog","engineering","introduction"]},i=void 0,o={permalink:"/blog/the-fleek-network",source:"@site/blog/the-fleek-network.md",title:"The Fleek Network",description:"Introduction",date:"2023-01-13T14:38:13.000Z",formattedDate:"January 13, 2023",tags:[{label:"fleek network",permalink:"/blog/tags/fleek-network"},{label:"blog",permalink:"/blog/tags/blog"},{label:"engineering",permalink:"/blog/tags/engineering"},{label:"introduction",permalink:"/blog/tags/introduction"}],readingTime:4.155,hasTruncateMarker:!0,authors:[{name:"Mahmoud A. Shehata",title:"Lead Engineer",url:"https://github.com/b0xtch",image_url:"https://github.com/b0xtch.png",imageURL:"https://github.com/b0xtch.png"}],frontMatter:{title:"The Fleek Network",slug:"the-fleek-network",authors:{name:"Mahmoud A. Shehata",title:"Lead Engineer",url:"https://github.com/b0xtch",image_url:"https://github.com/b0xtch.png",imageURL:"https://github.com/b0xtch.png"},tags:["fleek network","blog","engineering","introduction"]}},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Whats next for Fleek?",id:"whats-next-for-fleek",level:2},{value:"Fleek Network",id:"fleek-network",level:2},{value:"Architecture",id:"architecture",level:2},{value:"P2P",id:"p2p",level:2},{value:"Content Routing",id:"content-routing",level:2},{value:"Peer Discovery",id:"peer-discovery",level:2},{value:"Consensus",id:"consensus",level:2},{value:"Indexer",id:"indexer",level:2},{value:"Gateway",id:"gateway",level:2},{value:"Security",id:"security",level:2},{value:"User story",id:"user-story",level:2},{value:"User flows",id:"user-flows",level:2},{value:"Project Timeline",id:"project-timeline",level:2},{value:"Appendix",id:"appendix",level:2}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Fleek Network is a decentralized content and application layer built on established decentralized storage protocols combined with high-speed caching and an effective delivery layer. An alternative to traditional content delivery networks without a central authority that is reliable and censorship-resistant. Fleek Network relies on blockchain technology at its core, allowing governance\nand token rewards as incentives for participation in serving the network."),(0,r.kt)("p",null,"\ud83d\udca1 This content was originally posted in ",(0,r.kt)("a",{parentName:"p",href:"https://hackmd.io/5jExeM1yQ7Sm_ly-6cp0ng"},"hackmd.io")),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Storage based traffic makes up 80% of Fleek traffic, the other 20% is for our websites."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7885).Z,width:"838",height:"474"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Globally, gaming traffic will be 6% of consumer Internet traffic in 2021, up from 2% in 2016..."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/dam/m/en_us/solutions/service-provider/vni-forecast-highlights/pdf/Global_2021_Forecast_Highlights.pdf"},"Cisco Research"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Globally, consumer Internet video traffic will be 81% of consumer Internet traffic in 2021, up from 72% in 2016."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/dam/m/en_us/solutions/service-provider/vni-forecast-highlights/pdf/Global_2021_Forecast_Highlights.pdf"},"Cisco Research"))),(0,r.kt)("h2",{id:"whats-next-for-fleek"},"Whats next for Fleek?"),(0,r.kt)("p",null,"Decentralize our entire stack! Today we start with an important piece in our stack, the CDN."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Accelerate IPFS content retrieval"),(0,r.kt)("li",{parentName:"ul"},"Better UX for storage and hosting"),(0,r.kt)("li",{parentName:"ul"},"Become non-custodial")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"fleek-network"},"Fleek Network"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decentralized"),(0,r.kt)("li",{parentName:"ul"},"Scale with demand"),(0,r.kt)("li",{parentName:"ul"},"Web3 content"),(0,r.kt)("li",{parentName:"ul"},"Interoperable"),(0,r.kt)("li",{parentName:"ul"},"Robustness"),(0,r.kt)("li",{parentName:"ul"},"P2P")),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Content Routing"),(0,r.kt)("li",{parentName:"ul"},"GossipSub"),(0,r.kt)("li",{parentName:"ul"},"DHT"),(0,r.kt)("li",{parentName:"ul"},"Peer discovery"),(0,r.kt)("li",{parentName:"ul"},"DHT (Kademlia)"),(0,r.kt)("li",{parentName:"ul"},"Request/Response"),(0,r.kt)("li",{parentName:"ul"},"Bitswap/Graphsync"),(0,r.kt)("li",{parentName:"ul"},"Gateway ")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2762).Z,width:"6361",height:"2282"})),(0,r.kt)("h2",{id:"p2p"},"P2P"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(256).Z,width:"1987",height:"1632"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Libp2p based"),(0,r.kt)("li",{parentName:"ul"},"Trustless"),(0,r.kt)("li",{parentName:"ul"},"Censorship-resistant"),(0,r.kt)("li",{parentName:"ul"},"Resilient"),(0,r.kt)("li",{parentName:"ul"},"Gossiping Protocol"),(0,r.kt)("li",{parentName:"ul"},"Content addressable")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"content-routing"},"Content Routing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DHT based content routing"),(0,r.kt)("li",{parentName:"ul"},"Gossip based routing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bitswap"),(0,r.kt)("li",{parentName:"ul"},"Graphsync Req/Res"))),(0,r.kt)("li",{parentName:"ul"},"Not permanent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cache eviction")))),(0,r.kt)("h2",{id:"peer-discovery"},"Peer Discovery"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DHT (Kademlia)"),(0,r.kt)("li",{parentName:"ul"},"mDns"),(0,r.kt)("li",{parentName:"ul"},"Pruning and Grafting, passing lists of peers "),(0,r.kt)("li",{parentName:"ul"},"Relay Nodes for nodes behind firewalls"),(0,r.kt)("li",{parentName:"ul"},"Fleek Bootstrap nodes"),(0,r.kt)("li",{parentName:"ul"},"Act as the network orchestrators"),(0,r.kt)("li",{parentName:"ul"},"Gossip Only"),(0,r.kt)("li",{parentName:"ul"},"Peer exchange through our Fleek bootstrap nodes")),(0,r.kt)("h2",{id:"consensus"},"Consensus"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3423).Z,width:"3722",height:"1513"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Narwhal and Bullshark",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Data availability is ensured using Narwhal"),(0,r.kt)("li",{parentName:"ul"},"Bullshark over Tusk for ordering")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Comparing Tusk vs Bullshark:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Common round latency"),(0,r.kt)("th",{parentName:"tr",align:null},"Async round latency"),(0,r.kt)("th",{parentName:"tr",align:null},"Garbage collection"),(0,r.kt)("th",{parentName:"tr",align:null},"Fairness"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tusk"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"E(7)"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bullshark"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"E(6)"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"during sync")))),(0,r.kt)("p",null,"Click ",(0,r.kt)("a",{parentName:"p",href:"../docs/whitepaper"},"here")," to find more information about the Fleek Network consensus."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Decoupling data dissemination from metadata ordering is the key mechanism to allow scalable and high throughput consensus systems "),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2105.11827.pdf"},"Narwhal & Tusk"))),(0,r.kt)("h2",{id:"indexer"},"Indexer"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(312).Z,width:"2350",height:"1159"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each cache node runs an index provider"),(0,r.kt)("li",{parentName:"ul"},"Index provider announces the content availability to indexer"),(0,r.kt)("li",{parentName:"ul"},"Indexer get the nodes (for Bitswap/GraphSync) that are holding the content"),(0,r.kt)("li",{parentName:"ul"},"Accelerates content routing and discovery")),(0,r.kt)("h2",{id:"gateway"},"Gateway"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cherry Picker"),(0,r.kt)("li",{parentName:"ul"},"Minimizes latency of requests"),(0,r.kt)("li",{parentName:"ul"},"Governance",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bootstrapping "),(0,r.kt)("li",{parentName:"ul"},"Ledger of nodes"))),(0,r.kt)("li",{parentName:"ul"},"Nodes setup",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TLS"),(0,r.kt)("li",{parentName:"ul"},"DNS")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9869).Z,width:"2017",height:"1029"})),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sybil"),(0,r.kt)("li",{parentName:"ul"},"Eclipse"),(0,r.kt)("li",{parentName:"ul"},"Spam"),(0,r.kt)("li",{parentName:"ul"},"Bootstrap"),(0,r.kt)("li",{parentName:"ul"},"Sybil/Eclipse")),(0,r.kt)("h2",{id:"user-story"},"User story"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin="},"Feature: Accelerate Content\n  As an app\n  I want to put content onto the Ursa CDN\n  Because I want to accelerate my content worldwide\n  Given a trustless, censorship resistent premise\n\n  Scenario: App puts content to Ursa\n    Given I'm a signed up to ursa and have an endpoint id\n    When I use the given api\n    And I make a put request with my content\n    Then the content should be uploaded to the network\n    And distributed amongst peers and cached on the network and gateway\n    And the nodes will also cache the data locally until storage threshold\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin="},"Feature: Get Content\n  As an app\n  I want to get my content from Ursa CDN\n  Because I want to serve it to my clients\n\n  Scenario: App requests for `/:cid`\n    Given the App has a valid endpoint url\n    When the App makes a `Get` request for the `cid`\n    Then the Gateway returns the data if it is cached\n    But if not cached, it will query the closest node\n    And if cache miss, gateways\n    And nodes will cache the content for repeated requests\n    \n")),(0,r.kt)("h2",{id:"user-flows"},"User flows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sequence"},'Client->Gateway: Get: "/<client_endpoint>/:cid"\n\nGateway->Cherry Picker: Pick closest node\n\nCherry Picker->Node: Get content\nNote right of Node: From cache or content routing\n\nNode--\x3eClient: Returns content and caches it\n\nNote left of Client: Incrementally verifies the data\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6407).Z,width:"2374",height:"1772"})),(0,r.kt)("h2",{id:"project-timeline"},"Project Timeline"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mermaid"},"gantt\n    title Mission no.1: First Exploration\n\n    section Network\n    Outline and build v0 of node spec           :a1, 2022-06-01, 30d\n    Develop networking stack     :after a1  , 25d\n    \n    section RPC\n    Design Cache Node RPC interface      :2022-06-01  , 28d\n    Integrate with gateways      :20d\n    \n    section Store\n    Implement an IPLD blockstore      :2022-06-01  , 20d\n    \n    section Metrics\n    Determine the metrics capturing mechanism      :2022-06-01  , 30d\n    Determine payout for nodes serving content     : 30d\n    \n    section Daemon\n    Build a local cli to interact with node      :2022-06-01  , 30d\n    \n    section Gateway\n    Create a global gateway     :2022-06-01  , 24d\n    Build a governance layer and cherry picker      : after a1  , 30d\n")),(0,r.kt)("h2",{id:"appendix"},"Appendix"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"More coming soon!"),"\n",(0,r.kt)("strong",{parentName:"p"},"This is a general overiew, paper, repo, and official announcement soon"))))}u.isMDXComponent=!0},256:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/diagram-p2p-949ce65d7e06bf1bf8969bba2c2949e9.png"},2762:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fleek-network-architecture-7a789083f96da278ddb57aa3dea0a297.jpg"},3423:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fleek-network-consensus-c8f1ab3f9f5e6c7d0e013686b4e1b7e1.png"},9869:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fleek-network-gateway-3bb0fdcae24febe67418191541d25100.png"},312:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fleek-network-indexer-adcafab45fa648dd3dee8df250c8d55a.png"},6407:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fleek-network-user-flows-e2886fae2e678d447a48465d4b6fea74.png"},7885:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pie-chart-storage-based-trafic-d4ee2a9162b344590b457a113f872bcc.jpg"}}]);