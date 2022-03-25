"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4949],{4907:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(6687);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1802:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(9149),r=n(8332),a=(n(6687),n(4907)),i=["components"],s={slug:"/velocity/comparisons-to-other-proxies"},l="Comparing With Other Proxies",c={unversionedId:"velocity/reference/comparison",id:"velocity/reference/comparison",title:"Comparing With Other Proxies",description:"Presumably, you've read up about what Velocity can do for you. But how does it stack up against",source:"@site/docs/velocity/reference/comparison.md",sourceDirName:"velocity/reference",slug:"/velocity/comparisons-to-other-proxies",permalink:"/velocity/comparisons-to-other-proxies",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/reference/comparison.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1646787673,formattedLastUpdatedAt:"3/9/2022",frontMatter:{slug:"/velocity/comparisons-to-other-proxies"},sidebar:"docs",previous:{title:"Server Compatibility",permalink:"/velocity/server-compatibility"},next:{title:"Libraries Used",permalink:"/velocity/credits"}},u={},p=[{value:"BungeeCord and derivatives",id:"bungeecord-and-derivatives",level:2},{value:"BungeeCord",id:"bungeecord",level:3},{value:"Waterfall",id:"waterfall",level:3},{value:"Hypothetical BungeeCord API-based Velocity",id:"hypothetical-bungeecord-api-based-velocity",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"comparing-with-other-proxies"},"Comparing With Other Proxies"),(0,a.kt)("p",null,"Presumably, you've read up about what Velocity can do for you. But how does it stack up against\nother solutions out there? We're biased, so we'll try to be as honest as possible by fully\nacknowledging our bias in advance. We are the developers of Velocity and we're trying to convince\nyou to use Velocity, after all."),(0,a.kt)("h2",{id:"bungeecord-and-derivatives"},"BungeeCord and derivatives"),(0,a.kt)("p",null,"We can't treat the full history of Minecraft proxy software with justice \u2013 we recommend\n",(0,a.kt)("a",{parentName:"p",href:"https://madelinemiller.dev/blog/decade-of-minecraft-multiplayer/"},"Me4502's excellent article")," that\ncovers the multiplayer Minecraft world in great detail. Needless to say, Velocity was influenced by\na desire to avoid all the faults we perceived that needed to be resolved with BungeeCord."),(0,a.kt)("h3",{id:"bungeecord"},"BungeeCord"),(0,a.kt)("p",null,'There are several reasons why we can\'t just "improve BungeeCord":'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BungeeCord is very conservative with regard to API changes. If it breaks some plugin developed 5\nyears ago from an inactive developer, you can forget about it."),(0,a.kt)("li",{parentName:"ul"},"The changes that ",(0,a.kt)("em",{parentName:"li"},"do")," change the API are often quite particular and niche use cases and changing\nthe API in substantial ways is frowned upon (witness the support for RGB colors in ",(0,a.kt)("inlineCode",{parentName:"li"},"ChatColor"),")."),(0,a.kt)("li",{parentName:"ul"},"The project is essentially run like a cathedral. In BungeeCord (and its sister project, Spigot),\nthe word of md_5 is king. Contributing a simple security fix to BungeeCord earned the primary\ndeveloper of Velocity at least two beratings."),(0,a.kt)("li",{parentName:"ul"},"BungeeCord is actively hostile to continued support for Minecraft modding."),(0,a.kt)("li",{parentName:"ul"},"We have seen new modding APIs for ",(0,a.kt)("em",{parentName:"li"},"Minecraft")," since the first version of BungeeCord released\nin 2012. It's time for a new and improved API that does not make the mistakes the BungeeCord API\nmakes, and to draw influence from the new modding APIs that Minecraft now boasts.")),(0,a.kt)("h3",{id:"waterfall"},"Waterfall"),(0,a.kt)("p",null,"The founder of the Velocity project also founded the Waterfall project. The natural question, then,\nis why they couldn't just have improved Waterfall. Why start on a new API with no plugins lined up\nand a very uncertain chance of success, let alone an user base willing to take their chances on such\nnew software, when you can have access to the rich plugin ecosystem that BungeeCord boasts?"),(0,a.kt)("p",null,"Unfortunately, that attempt fell to the scythe of ",(0,a.kt)("a",{parentName:"p",href:"https://www.hyrumslaw.com/"},"Hyrum's Law"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"With a sufficient number of users of an API, it does not matter what you promise in the contract:\nall observable behaviors of your system will be depended on by somebody.")),(0,a.kt)("p",null,"Here's Hyrum's law in comic format, in case that eases getting the point across:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://xkcd.com/1172/"},(0,a.kt)("img",{parentName:"a",src:"https://imgs.xkcd.com/comics/workflow.png",alt:"xkcd #1172"})),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://xkcd.com/1172/"},'"Workflow"')," from ",(0,a.kt)("a",{parentName:"p",href:"https://xkcd.com/"},"xkcd")," by Randal Munroe,\n",(0,a.kt)("a",{parentName:"p",href:"https://xkcd.com/license.html"},"licensed")," under\n",(0,a.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nc/2.5/"},"CC BY-NC 2.5"))),(0,a.kt)("p",null,"Most BungeeCord plugins are deeply dependent on the specific behaviors and quirks BungeeCord\nexposes, which Velocity cannot perfectly emulate. I'll use an example of a video game. One day, a\ngame studio A publishes a video game X that you really like. You run it on operating system Y made\nby company B, and it works great. Sometime after, studio A goes out of business. You are sad but\ncontinue life because at least game X works just fine. One day, company B releases a new version of\noperating system Y. You upgrade to it and discover that your game doesn't work. Who are you going to\nblame, company B for breaking the game, or company A for shipping a defective project? Chances are,\nthe average consumer will blame company B. This isn't new \u2014\n",(0,a.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/oldnewthing/20110131-00/?p=11633"},"witness Raymond Chen, who documents the sad compatibility history of Windows, saying essentially the same thing"),"\n."),(0,a.kt)("p",null,"We can point to one example where\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PaperMC/Waterfall/commit/c8eb6aec7bac82fd309fa6d6113b8a0418317b01"},"an attempt"),"\nto improve scoreboard handling on 1.13 and above\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PaperMC/Waterfall/issues/255"},"was reversed")," thanks to plugins expecting\nBungeeCord's broken behavior. At this point, it is fairly obvious why making a clean break was\nbetter. Given that this happened near the start of the Velocity project's lifetime, it was probably\na quite powerful motivator, although it certainly wasn't the only motivator."),(0,a.kt)("h3",{id:"hypothetical-bungeecord-api-based-velocity"},"Hypothetical BungeeCord API-based Velocity"),(0,a.kt)("p",null,"We are compelled to mention this briefly as this was a topic brought up in the early days of the\nproject. We could have based Velocity on the BungeeCord API (or a derivative thereof, such as the\nWaterfall API) instead."),(0,a.kt)("p",null,'This is a fool\'s ploy. Let us revisit the video game example from earlier. One day, you discover a\nnew operating system, Z. You really like it more than operating system Y, and it has tool T that can\nrun programs meant for operating system Y. You install it and your favorite game, X. You then launch\ngame X to be disappointed with all the glitched out textures and borderline broken gameplay. You\nfeel quite hurt by it. This is a real world example too, just substitute Y for "Windows", Z for "any\nLinux distribution", and T for "Wine", and there you have it. We would essentially have to have a\nconvincing decoy to pretend Velocity looked and smelled like a BungeeCord implementation to a\nplugin, while not actually being based on BungeeCord. This would force us to introduce ever more\nelaborate decoys to pretend to be bug-for-bug and binary compatible with BungeeCord, which would\nforce us to spend time on ensuring compatibility with every BungeeCord plugin ever rather than\ndelivering new features. At that point, Velocity winds up just being a slightly better optimized\nWaterfall.'))}h.isMDXComponent=!0}}]);