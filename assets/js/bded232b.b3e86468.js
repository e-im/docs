"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[476],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9567:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},c="Porting Your Plugin from Velocity 1.x.x",s={unversionedId:"velocity/developers/porting-from-velocity-1",id:"velocity/developers/porting-from-velocity-1",title:"Porting Your Plugin from Velocity 1.x.x",description:"Velocity 3.0.0 includes important API changes from the Velocity 1.x.x series. **Please read this",source:"@site/docs/velocity/developers/porting-from-velocity-1.md",sourceDirName:"velocity/developers",slug:"/velocity/developers/porting-from-velocity-1",permalink:"/velocity/developers/porting-from-velocity-1",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/porting-from-velocity-1.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",frontMatter:{},sidebar:"docs",previous:{title:"Common Pitfalls",permalink:"/velocity/developers/pitfalls"},next:{title:"Deployment Guide",permalink:"/velocity/deployment/"}},u=[{value:"Minimum supported Java version bump",id:"minimum-supported-java-version-bump",children:[],level:2},{value:"Removal of legacy dependencies",id:"removal-of-legacy-dependencies",children:[],level:2},{value:"New asynchronous event system",id:"new-asynchronous-event-system",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"porting-your-plugin-from-velocity-1xx"},"Porting Your Plugin from Velocity 1.x.x"),(0,i.kt)("p",null,"Velocity 3.0.0 includes important API changes from the Velocity 1.x.x series. ",(0,i.kt)("strong",{parentName:"p"},"Please read this\ndocument very carefully"),"."),(0,i.kt)("h2",{id:"minimum-supported-java-version-bump"},"Minimum supported Java version bump"),(0,i.kt)("p",null,"Velocity 3.0.0 now requires Java 11 and above. The Velocity API is compiled for Java 8 for the\nconvenience of plugins that want to run on older versions of Java, but we may decide to bump this in\na future major release."),(0,i.kt)("h2",{id:"removal-of-legacy-dependencies"},"Removal of legacy dependencies"),(0,i.kt)("p",null,"We removed all support for the old ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," 3 library. For ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," 3.x.x (and all the APIs that depend\non it), direct equivalents are available in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.adventure.kyori.net/"},"Adventure")," which was\nintroduced in Velocity 1.1.0."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"toml4j"),", deprecated in Velocity 1.1.0 (as it is no longer maintained), has not been removed to\nprovide more time for plugins to migrate to Configurate 3. However, you should prepare to either\nswitch to Configurate 3 or shade toml4j into your plugin directly."),(0,i.kt)("h2",{id:"new-asynchronous-event-system"},"New asynchronous event system"),(0,i.kt)("p",null,"Velocity 3.0.0 contains a backport of Velocity Polymer's event system, which differs from Velocity\n1.x.x's event system in a number of ways. Velocity 1.x.x's event model forced all events to be\nexecuted asynchronously on a fixed-size thread pool, which has proven over time to be a flawed\nmodel."),(0,i.kt)("p",null,"Existing event handlers will continue to work unmodified on Velocity 3.0.0, as all event handlers\nare assumed to be asynchronous blocking handlers by default. However, there are some new APIs\nintroduced for handling continuations - see the ",(0,i.kt)("a",{parentName:"p",href:"/velocity/developers/event-api"},"event API page")," for more information.\nHowever, you are encouraged to migrate your event listeners to the new event API paradigms."))}d.isMDXComponent=!0}}]);