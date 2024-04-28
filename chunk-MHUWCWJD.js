import{b as q,d as W,e as I,f as G}from"./chunk-66HSNYTW.js";import{$a as _,Cb as V,Db as T,Eb as $,Fb as N,Ia as C,Ib as v,Ka as l,La as z,Ma as a,Na as c,Oa as m,Pa as b,Pb as S,Qa as y,Qb as M,R as f,Sa as L,Ta as x,Ua as F,Y as H,Z as R,Za as h,_a as B,cb as A,db as g,fb as u,gb as U,ta as w,wa as D,ya as r,za as d}from"./chunk-42EFCV2H.js";var J=n=>({open:n}),Z=n=>({backgroundColor:n}),ee=n=>[n],te=n=>({"bg-warning text-dark bg-opacity-75":n});function ne(n,i){if(n&1){let s=L();b(0),a(1,"a",7),x("click",function(){H(s);let e=F();return R(e.open=!1)}),h(2),c(),y()}if(n&2){let s=i.$implicit;r(),l("routerLink",u(3,ee,s.path))("ngClass",u(5,te,s.active)),r(),_(" ",s.title," ")}}var j=(()=>{let i=class i{constructor(t){this.router=t,this.open=!1,this.links=[],this.scrollCss="",this.opacity=0}ngOnInit(){this.router.config.filter(t=>t.title!=null).forEach(t=>{this.links.push({title:t.title.toString(),path:t.path,active:!1})}),this.router.events.subscribe(t=>{t.constructor.name=="NavigationEnd"&&this.links.forEach(e=>{let o=e.path.replace(/^\//gm,""),p=t.url.replace(/^\//gm,"");e.active=o==p,console.log(o,"vs",p,"=",e.active)})})}onScroll(t){let e=document.scrollingElement,o=document.body.clientHeight,p=e.scrollTop/o;this.opacity=p,p>.5?this.scrollCss="bg-dark":this.scrollCss=""}navClicked(t){t.target.tagName=="NAV"&&(this.open=!1)}tracker(t,e){return e}};i.\u0275fac=function(e){return new(e||i)(d(I))},i.\u0275cmp=f({type:i,selectors:[["app-navbar"]],hostBindings:function(e,o){e&1&&x("scroll",function(k){return o.onScroll(k)},!1,D)},standalone:!0,features:[g],decls:7,vars:11,consts:[[1,"position-absolute","h-100","w-100","sidebar"],[1,"sticky-top",3,"click","ngClass","ngStyle"],[1,"d-lg-flex","align-items-center","justify-content-end","mx-md-3","mx-lg-0"],["type","button","title","menu",1,"btn","btn-lg","text-light","border-0",3,"click"],[1,"bi","bi-list"],[1,"row","row-cols-lg-auto","top-0","mx-2","my-lg-0","items",3,"ngClass"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-2","text-decoration-none","text-light",3,"click","routerLink","ngClass"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"nav",1),x("click",function(k){return o.navClicked(k)}),a(2,"div",2)(3,"button",3),x("click",function(){return o.open=!o.open}),m(4,"i",4),c(),a(5,"section",5),C(6,ne,3,7,"ng-container",6),c()()()()),e&2&&(r(),l("ngClass",u(5,J,o.open))("ngStyle",u(7,Z,"hsla(0, 0%, 10%,"+o.opacity+")")),r(4),l("ngClass",u(9,J,o.open)),r(),l("ngForOf",o.links)("ngForTrackBy",o.tracker))},dependencies:[v,V,T,N,G],styles:[".sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{z-index:2;transition:all 1s ease}.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 990px){.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.sidebar[_ngcontent-%COMP%]   nav.open[_ngcontent-%COMP%]{height:100vh;background-color:#000!important}.sidebar[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{transition:all 1s ease;display:none}.sidebar[_ngcontent-%COMP%]   .items.open[_ngcontent-%COMP%]{display:flex}}"]});let n=i;return n})();var Q=n=>({height:n}),ie=(n,i)=>({objectPosition:n,height:i});function oe(n,i){if(n&1&&(b(0),a(1,"div",3)(2,"div",4)(3,"div",5)(4,"h1",6),h(5),c()()(),a(6,"div",5)(7,"h1",7),h(8),c()()(),m(9,"img",8),y()),n&2){let s=F();r(5),_(" ",s.header.serviceName," "),r(3),_(" ",s.header.storeName," "),r(),l("src",s.header.bgUrl,w)("ngStyle",U(4,ie,"50% 0%",s.headerType.height))}}function re(n,i){if(n&1&&(b(0),a(1,"div",9)(2,"h1"),h(3),c()(),y()),n&2){let s=F();r(3),_(" ",s.header.storeName," ")}}var O=(()=>{let i=class i{constructor(t,e){this.sheets=t,this.router=e,this.url={setup:M.portfolio.tsv.setup},this.header={appName:"",serviceName:"",storeName:"",city:"",bgUrl:""},this.headerType={height:"auto"}}ngOnInit(){this.router.events.subscribe(t=>{typeof window<"u"&&window.scrollTo(0,0),this.router.config.filter(e=>e.data!=null).forEach(e=>{"/"+e.path==this.router.url&&(this.headerType.height=e.data.headerHeight)})}),this.sheets.eventLoaded.subscribe(t=>{t.name=="app"&&(this.header=this.getRenderObject(t.data),this.sheets.eventAfterRender.emit({name:t.name,data:this.header}))}),this.sheets.load("app",this.url.setup)}getRenderObject(t){let e={};return t.filter(o=>o.page=="app").forEach(o=>{let p=o.title,k=o.value;e[p]=k}),e}tracker(t,e){return e}};i.\u0275fac=function(e){return new(e||i)(d(S),d(I))},i.\u0275cmp=f({type:i,selectors:[["app-header"]],standalone:!0,features:[g],decls:4,vars:8,consts:[[1,"position-relative",3,"ngStyle"],[1,"position-absolute","top-0","start-0","w-100","d-grid","justify-content-center","text-center","text-light","bg-black",3,"ngStyle"],[4,"ngIf"],[1,"d-grid","align-content-center","gap-3"],[1,"d-flex","justify-content-center"],[1,"mb-3","border-bottom","header-border","w-fit"],[1,"p-3","pt-0"],[1,"p-3","pt-0","display-1"],["alt","background",1,"position-absolute","opacity-50","w-100","start-0","top-0",3,"src","ngStyle"],[1,"p-3"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"header",1),C(2,oe,10,7,"ng-container",2)(3,re,4,1,"ng-container",2),c()()),e&2&&(l("ngStyle",u(4,Q,o.headerType.height)),r(),l("ngStyle",u(6,Q,o.headerType.height)),r(),l("ngIf",o.headerType.height!="0vh"),r(),l("ngIf",o.headerType.height=="0vh"))},dependencies:[v,$,N],styles:["header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{z-index:1}header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{z-index:0;object-fit:cover}.header-border[_ngcontent-%COMP%]{border-width:10px!important;border-color:bisque!important}"]});let n=i;return n})();function se(n,i){if(n&1&&(b(0),a(1,"div",6)(2,"a",7),m(3,"i"),a(4,"span",8),h(5),c()()(),y()),n&2){let s=i.$implicit;r(2),l("href",s.url,w),r(),z("bi ",s.cssIcon," ",s.cssColor,""),r(2),B(s.text)}}var E=(()=>{let i=class i{constructor(t,e){this.sheets=t,this.sanitize=e,this.url={contact:M.portfolio.tsv.contact,map:M.portfolio.tsv.map},this.contacts=[],this.maps=[]}ngOnInit(){this.sheets.eventLoaded.subscribe(t=>{t.name=="contacts"?(t.data.filter(e=>e.platform!=null).forEach(e=>{this.contacts.push(e)}),this.sheets.eventAfterRender.emit({name:t.name,data:this.contacts})):t.name=="maps"&&(t.data.filter(e=>e.address!=null).forEach(e=>{let o=new RegExp(new RegExp('(?<=src=")\\S[^"]*',"g")).exec(e.iframe),p={name:e.city,address:e.address,city:e.city,state:e.state,iframe:o!=null?this.sanitize.bypassSecurityTrustResourceUrl(o[0]):""};this.maps.push(p)}),this.sheets.eventAfterRender.emit({name:t.name,data:this.maps}))}),this.sheets.load("contacts",this.url.contact),this.sheets.load("maps",this.url.map)}tracker(t,e){return e}};i.\u0275fac=function(e){return new(e||i)(d(S),d(q))},i.\u0275cmp=f({type:i,selectors:[["app-footer"]],standalone:!0,features:[g],decls:10,vars:2,consts:[[1,"pt-2","text-bg-dark","position-relative","bottom-0"],[1,"d-flex","justify-content-center"],[1,"mb-4","p-3","border-bottom","w-fit"],[1,"m-3","row","gap-3"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-center","my-3"],[1,"col-sm","text-center","text-nowrap"],[1,"btn","btn-dark",3,"href"],[1,"ps-2"]],template:function(e,o){e&1&&(a(0,"footer",0)(1,"div",1)(2,"h1",2),h(3,"Contact Us"),c()(),a(4,"div",3),C(5,se,6,6,"ng-container",4),c(),m(6,"br"),a(7,"div",5)(8,"small"),h(9," \xA9 ND 2024 "),c()()()),e&2&&(r(5),l("ngForOf",o.contacts)("ngForTrackBy",o.tracker))},dependencies:[v,T],styles:["footer[_ngcontent-%COMP%]{z-index:2}"]});let n=i;return n})();var Se=(()=>{let i=class i{constructor(t,e,o){this.pageHeader=t,this.pageFooter=e,this.sheets=o,this.header=this.pageHeader.header,this.contacts=this.pageFooter.contacts,this.maps=this.pageFooter.maps,this.registerEvent()}registerEvent(){this.sheets.eventAfterRender.subscribe(t=>{switch(t.name){case"app":this.header=t.data;break;case"contacts":this.contacts=t.data;break;case"maps":this.maps=t.data;break;default:break}})}};i.\u0275fac=function(e){return new(e||i)(d(O),d(E),d(S))},i.\u0275cmp=f({type:i,selectors:[["app-root"]],standalone:!0,features:[A([j,O,E]),g],decls:8,vars:0,consts:[[1,"position-relative","main"],[1,"position-relative"]],template:function(e,o){e&1&&(a(0,"div",0),m(1,"app-navbar")(2,"app-header")(3,"br"),a(4,"section",1),m(5,"router-outlet")(6,"br"),c(),m(7,"app-footer"),c())},dependencies:[W,v,j,O,E]});let n=i;return n})();export{Se as a};
