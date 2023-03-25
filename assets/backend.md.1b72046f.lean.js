import{s as _}from"./chunks/index.ff025f9a.js";import{d as k,e as d,o as e,c as n,z as c,b as s,q as b,C as a,t as h,_ as w,a as g,F as p,N as f,A as v}from"./chunks/framework.ea40370f.js";const H=["href"],x={class:"box"},L={class:"box-header"},N=["innerHTML"],j={key:1,class:"icon"},C=["src","alt"],M=["id"],S={key:0,class:"desc"},T=k({__name:"MNavLink",props:{icon:null,title:null,desc:null,link:null},setup(t){const i=t,o=d(()=>i.title?_(i.title):""),l=d(()=>typeof i.icon=="object"?i.icon.svg:"");return(r,u)=>t.link?(e(),n("a",{key:0,class:"m-nav-link",href:t.link,target:"_blank",rel:"noreferrer"},[c("article",x,[c("div",L,[s(l)?(e(),n("div",{key:0,class:"icon",innerHTML:s(l)},null,8,N)):t.icon&&typeof t.icon=="string"?(e(),n("div",j,[c("img",{src:s(b)(t.icon),alt:t.title,onerror:"this.parentElement.style.display='none'"},null,8,C)])):a("",!0),t.title?(e(),n("h5",{key:2,id:s(o),class:"title"},h(t.title),9,M)):a("",!0)]),t.desc?(e(),n("p",S,h(t.desc),1)):a("",!0)])],8,H)):a("",!0)}});const B=w(T,[["__scopeId","data-v-b886e116"]]),$=["id"],I=["href"],W={class:"m-nav-links"},A=k({__name:"MNavLinks",props:{title:null,items:null},setup(t){const i=t,o=d(()=>_(i.title));return(l,r)=>(e(),n(p,null,[t.title?(e(),n("h2",{key:0,id:s(o),tabindex:"-1"},[g(h(t.title)+" ",1),c("a",{class:"header-anchor",href:`#${s(o)}`,"aria-hidden":"true"},null,8,I)],8,$)):a("",!0),c("div",W,[(e(!0),n(p,null,f(t.items,({icon:u,title:P,desc:y,link:m})=>(e(),v(B,{key:m,icon:u,title:P,desc:y,link:m},null,8,["icon","title","desc","link"]))),128))])],64))}});const V=w(A,[["__scopeId","data-v-a08f905a"]]),Y=[{title:"常用工具",items:[{icon:"/icons/php-toollu-favicon.ico",title:"PHP代码在线运行",desc:"PHP代码在线运行 - 在线工具",link:"https://tool.lu/coderunner/"}]},{title:"PHP 框架",items:[{icon:"/icons/workerman.png",title:"Workerman",desc:"高性能PHP应用容器 workerman",link:"https://www.workerman.net"},{icon:"/icons/workerman.png",title:"Webman",desc:"超高性能可扩展PHP框架",link:"https://www.workerman.net/webman"},{icon:"/icons/laravel.png",title:"Laravel",desc:"The PHP Framework for Web Artisans",link:"https://laravel.com"},{icon:"/icons/thinkphp.png",title:"ThinkPHP6.0",desc:"一个免费开源的，快速、简单的面向对象的轻量级PHP开发框架",link:"https://www.kancloud.cn/manual/thinkphp6_0/1037479"},{icon:"/icons/swoole.png",title:"Swoole",desc:"PHP 协程框架",link:"https://www.swoole.com/"},{icon:"/icons/Yii.png",title:"Yii",desc:"Yii 是一个 高性能 的，适用于开发 WEB 2.0 应用的 PHP 框架",link:"https://www.yiiframework.com/"},{icon:"/icons/CI.ico",title:"CodeIgniter",desc:"CodeIgniter 是一个小巧但功能强大的 PHP 框架",link:"https://codeigniter.org.cn"},{icon:"/icons/yaf.jpg",title:"Yaf",desc:"Yaf框架是一个c语言编写的PHP框架，是一个以PHP扩展形式提供的PHP开发框架",link:"https://www.laruence.com/manual/index.html"},{icon:"/icons/hyperf.png",title:"Hyperf",desc:"Hyperf 是一个高性能、高灵活性的渐进式 PHP 协程框架",link:"https://hyperf.wiki/2.0/#/"}]},{title:"PHP学习资料",items:[{icon:"/icons/php-gfwd.png",title:"PHP官方文档",desc:"PHP官方文档",link:"https://www.php.net/docs.php"},{icon:"/icons/php-cn.png",title:"PHP中文网",desc:"PHP中文网-程序员梦开始的地方！",link:"https://www.php.cn"},{icon:"/icons/w3school.png",title:"W3School",desc:"W3School是纯在线文档的形式，每节内容较少，但都简单易懂，适合新手入门学习",link:"https://www.w3school.com.cn/php/index.asp"}]},{title:"社区",items:[{title:"Github",icon:{svg:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'},desc:"一个面向开源及私有软件项目的托管平台",link:"https://github.com"},{icon:"https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",title:"Stack Overflow",desc:"全球最大的技术问答网站",link:"https://stackoverflow.com"},{title:"稀土掘金",icon:"https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",desc:"面向全球中文开发者的技术内容分享与交流平台",link:"https://juejin.cn"},{title:"V2EX",icon:"https://www.v2ex.com/static/icon-192.png",desc:"一个关于分享和探索的地方",link:"https://www.v2ex.com"},{title:"SegmentFault 思否",icon:"https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png",desc:"技术问答开发者社区",link:"https://segmentfault.com"},{title:"博客园",icon:"/icons/cnblogs.svg",desc:"博客园是一个面向开发者的知识分享社区",link:"https://www.cnblogs.com"},{title:"知乎",icon:"https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png",desc:"中文互联网高质量的问答社区和创作者聚集的原创内容平台",link:"https://juejin.cn"},{title:"Laravel学院",icon:"/icons/laravel.png",desc:"Laravel 学院致力于提供优质 PHP 全栈编程技术学习资源",link:"https://laravelacademy.org"}]}];const E=c("h1",{id:"后端导航",tabindex:"-1"},[g("后端导航 "),c("a",{class:"header-anchor",href:"#后端导航","aria-label":'Permalink to "后端导航"'},"​")],-1),O=JSON.parse('{"title":"后端导航","description":"","frontmatter":{"layoutClass":"m-nav-layout","outline":[2,3,4]},"headers":[],"relativePath":"backend.md","lastUpdated":null}'),F={name:"backend.md"},G=Object.assign(F,{setup(t){return(i,o)=>(e(),n("div",null,[E,(e(!0),n(p,null,f(s(Y),({title:l,items:r})=>(e(),v(V,{title:l,items:r},null,8,["title","items"]))),256))]))}});export{O as __pageData,G as default};
