"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[118],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),b=o,m=c["".concat(s,".").concat(b)]||c[b]||f[b]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},l="Web Scraper Tool",i={unversionedId:"Tools/webscraper",id:"Tools/webscraper",title:"Web Scraper Tool",description:"The SuperAGI Webscraper Tool lets users perform web scraping, extracting URLs and retrieving the textual content from websites.",source:"@site/docs/Tools/webscraper.md",sourceDirName:"Tools",slug:"/Tools/webscraper",permalink:"/docs/Tools/webscraper",draft:!1,editUrl:"https://github.com/TransformerOptimus/SuperAGI-Docs/tree/main/docs/Tools/webscraper.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jira Tool",permalink:"/docs/Tools/jira"}},s={},p=[{value:"\ud83d\udca1 Features",id:"-features",level:2},{value:"\u2699\ufe0f Installation",id:"\ufe0f-installation",level:2},{value:"\ud83d\udee0 <strong>Setting Up of SuperAGI</strong>",id:"-setting-up-of-superagi",level:3},{value:"Running SuperAGI Web Scraper Tool",id:"running-superagi-web-scraper-tool",level:2}],u={toc:p},c="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-scraper-tool"},"Web Scraper Tool"),(0,o.kt)("p",null,"The SuperAGI Webscraper Tool lets users perform web scraping, extracting URLs and retrieving the textual content from websites."),(0,o.kt)("h2",{id:"-features"},"\ud83d\udca1 Features"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"URL Extraction:")," The SuperAGI Web Scraper Tool can extract URLs from web pages, allowing users to collect and analyze links for further processing.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Text Retrieval:")," The tool is capable of retrieving textual content from websites, enabling users to gather and analyze data from various sources."))),(0,o.kt)("h2",{id:"\ufe0f-installation"},"\u2699\ufe0f Installation"),(0,o.kt)("h3",{id:"-setting-up-of-superagi"},"\ud83d\udee0 ",(0,o.kt)("strong",{parentName:"h3"},"Setting Up of SuperAGI")),(0,o.kt)("p",null,"Set up the SuperAGI by following the instructions given (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TransformerOptimus/SuperAGI/blob/main/README.MD"},"https://github.com/TransformerOptimus/SuperAGI/blob/main/README.MD"),")"),(0,o.kt)("p",null,"You'll be able to use the Web Scraper Tool on the fly once you have setup SuperAGI."),(0,o.kt)("h2",{id:"running-superagi-web-scraper-tool"},"Running SuperAGI Web Scraper Tool"),(0,o.kt)("p",null,"You can simply ask your agent to read or go through a certain website or URL, and it'll be able to retrieve it's textual information from there."))}f.isMDXComponent=!0}}]);