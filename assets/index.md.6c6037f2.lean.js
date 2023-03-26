import{_ as B,f as r,h as M,o as p,c as m,z as e,t as b,E as t,B as s,G as a,a as o,b as x,q as z,F as N,N as P,A as T,O as V,Q as E}from"./chunks/framework.ea40370f.js";const I="/wendoudou-blog/tag.png",D="/wendoudou-blog/vue.jpg",O="/wendoudou-blog/star.png";const l=c=>(V("data-v-0a69c3c9"),c=c(),E(),c),q={class:"layout-wrapper"},F={class:"layout-img"},H={class:"layout-text"},Q=l(()=>e("h1",null,"文而兜兜",-1)),A={class:"layout-maxim"},G={class:"layout-centent"},J=l(()=>e("div",{class:"art-title"},[e("h5",null,"el-form搜索筛选栏组件封装")],-1)),R={style:{display:"flex","justify-content":"flex-start","align-items":"center"}},U=l(()=>e("img",{class:"tag",src:I},null,-1)),Y=l(()=>e("div",{class:"side-img hidden-sm-and-down"},[e("img",{class:"art-banner",src:D})],-1)),$={class:"side-abstract"},K=l(()=>e("div",{class:"art-abstract"}," vue后台管理系统，会有很多表格页面搜索栏选项。 如果每一个功能表格的页面都要重复写相同的代码或者粘贴复制，想想都头大。 所以要考虑对表格页面搜索栏选项一个封装，统一配置引用，提升开发维护效率和界面统一。 ",-1)),W={class:"art-more"},X=["href"],Z=l(()=>e("img",{class:"star",src:O},null,-1)),ee={slot:"header",class:"personal-profile",style:{}},te=l(()=>e("div",{class:"nickname"},"一只文兜兜",-1)),se=l(()=>e("div",{class:"personal-profile-info"},[e("p",null,"孤单是件风衣，它裹起了怕"),e("p",null,"然而我很勇敢哪，没人记得我也没差"),e("p",null,"未来在等我 去拿")],-1)),ae={class:"card-header"},le={style:{color:"#593D70"}},oe={style:{display:"flex","justify-content":"flex-start","flex-direction":"row","flex-wrap":"wrap"}},ce={__name:"MyLayout",setup(c){const n=r(null),_=r(0),w=r(0),g=r("坚持你坚持的，认为你认为的"),f=()=>{_.value<=g.value.length?(n.value="坚",n.value=g.value.slice(0,_.value++),w.value=setTimeout(()=>{f()},600)):(_.value=0,n.value=null,f())};M(()=>{f()});const k=r([{type:"",label:"PHP",size:"large",effect:"dark"},{type:"success",label:"Vue2",size:"large",effect:"dark"},{type:"info",label:"Vite",size:"small",effect:"light"},{type:"danger",label:"MYSQL",size:"",effect:"dark"},{type:"warning",label:"CSS",size:"small",effect:"dark"},{type:"",label:"js",size:"large"},{type:"success",label:"javascript",size:"large",effect:"light"},{type:"info",label:"webman",size:"small",effect:"dark"},{type:"danger",label:"Element",size:"",effect:"dark"},{type:"warning",label:"Vue3",size:"small",effect:"plain"},{type:"",label:"Typescript",size:"large",effect:"dark"},{type:"success",label:"Redis",size:"large",effect:"plain"},{type:"info",label:"Nginx",size:"small",effect:"dark"},{type:"danger",label:"ThinkPHP",size:"",effect:"light"},{type:"warning",label:"Postgresql",size:"small",effect:"light"},{type:"success",label:"Laravel",size:"large",effect:"plain"},{type:"",label:"ECharts",size:""},{type:"warning",label:"node.js",size:"small",effect:"light"},{type:"danger",label:"phpstorm",size:"large",effect:"plain"},{type:"success",label:"phpstudy",size:"small",effect:"dark"}]);return(re,_e)=>{const j=a("Clock"),y=a("el-icon"),h=a("el-tag"),d=a("el-row"),C=a("el-button"),u=a("el-card"),v=a("el-col"),S=a("el-avatar"),L=a("CollectionTag");return p(),m("div",q,[e("div",F,[e("div",H,[Q,e("div",A,b(n.value),1)])]),e("div",G,[t(d,{id:"artList",type:"flex",justify:"space-around"},{default:s(()=>[t(v,{span:16},{default:s(()=>[t(d,{class:"art-item"},{default:s(()=>[t(u,{shadow:"hover"},{default:s(()=>[J,t(d,{class:"art-info"},{default:s(()=>[e("div",R,[t(y,{size:15},{default:s(()=>[t(j)]),_:1}),o("：2023-03-26 "),U,o("： "),t(h,{size:"small"},{default:s(()=>[o("Element")]),_:1})])]),_:1}),t(d,{class:"art-body"},{default:s(()=>[Y,e("div",$,[K,e("div",W,[e("a",{href:x(z)("/front_notes/css/practical_skills")},[t(C,{plain:""},{default:s(()=>[o("阅读文章")]),_:1})],8,X)])])]),_:1})]),_:1}),Z]),_:1})]),_:1}),t(v,{span:6},{default:s(()=>[t(u,{class:"box-card"},{default:s(()=>[e("div",ee,[t(S,{size:150,src:x(z)("/bj.jpg")},null,8,["src"]),te]),se]),_:1}),t(u,{class:"box-card",style:{"margin-top":"20px"}},{header:s(()=>[e("div",ae,[e("span",le,[t(y,{size:30,color:"#593D70"},{default:s(()=>[t(L)]),_:1}),o(" 标签")])])]),default:s(()=>[e("div",oe,[(p(!0),m(N,null,P(k.value,i=>(p(),T(h,{style:{"margin-top":"10px","margin-right":"10px"},key:i.label,type:i.type,size:i.size,effect:i.effect,class:"mx-1",round:""},{default:s(()=>[o(b(i.label),1)]),_:2},1032,["type","size","effect"]))),128))])]),_:1})]),_:1})]),_:1})])])}}},ne=B(ce,[["__scopeId","data-v-0a69c3c9"]]),pe=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"index.md","lastUpdated":null}'),ie={name:"index.md"},fe=Object.assign(ie,{setup(c){return(n,_)=>(p(),m("div",null,[t(ne)]))}});export{pe as __pageData,fe as default};
