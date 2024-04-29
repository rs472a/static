import{b as G,d as J,e as j,f as Q}from"./chunk-KNP4I75E.js";import{$a as $,Db as T,Eb as N,Fb as P,Gb as D,Ia as y,Jb as b,Ka as c,La as V,Ma as o,Na as s,Oa as p,Pa as f,Qa as g,Qb as M,R as u,Rb as x,Sa as K,Ta as k,Ua as E,Y as A,Z as U,_a as m,ab as S,da as L,db as q,eb as v,gb as C,hb as I,ta as O,wa as B,ya as a,za as d,zb as W}from"./chunk-XD5NJFE7.js";var te=(i,r)=>({"btn-secondary":i,"btn-warning":r});function ne(i,r){i&1&&(f(0),m(1,"Light"),g())}function ie(i,r){i&1&&(f(0),m(1,"Dark"),g())}var X=(()=>{let r=class r{get dark(){return this._dark}set dark(n){this._dark=n;let e=n?"dark":"light";this.document.body.setAttribute("data-bs-theme",e)}constructor(n){this.document=n}ngOnInit(){this.registerEvent()}registerEvent(){this.document.defaultView.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{this.dark=t.matches})}getSystemDark(){let n=this.document.defaultView;return n.matchMedia&&n.matchMedia("(prefers-color-scheme: dark)").matches}};r.\u0275fac=function(e){return new(e||r)(d(W))},r.\u0275cmp=u({type:r,selectors:[["dark-mode"]],standalone:!0,features:[v],decls:6,vars:6,consts:[[1,"position-relative","d-flex","gap-2","align-items-center","btn","border-0","p-0",3,"click"],["type","button","title","Dark Mode",1,"btn","border-0","rounded-circle",3,"ngClass"],[1,"bi","bi-sun-fill"],[1,"text-light"],[4,"ngIf"]],template:function(e,t){e&1&&(o(0,"div",0),k("click",function(){return t.dark=!t.dark}),o(1,"button",1),p(2,"i",2),s(),o(3,"div",3),y(4,ne,2,0,"ng-container",4)(5,ie,2,0,"ng-container",4),s()()),e&2&&(a(),c("ngClass",I(3,te,t.dark,!t.dark)),a(3),c("ngIf",!t.dark),a(),c("ngIf",t.dark))},dependencies:[b,T,P]});let i=r;return i})();var Y=i=>({open:i}),oe=i=>({backgroundColor:i}),ae=i=>[i],se=i=>({"bg-warning text-dark bg-opacity-75":i});function ce(i,r){if(i&1){let l=K();f(0),o(1,"a",8),k("click",function(){A(l);let e=E();return U(e.open=!1)}),m(2),s(),g()}if(i&2){let l=r.$implicit;a(),c("routerLink",C(3,ae,l.path))("ngClass",C(5,se,l.active)),a(),S(" ",l.title," ")}}var z=(()=>{let r=class r{constructor(n){this.router=n,this.open=!1,this.links=[],this.scrollCss="",this.opacity=0,this.router.events.forEach(e=>{e.constructor.name=="NavigationEnd"&&(this.links=[],this.router.config.filter(t=>t.title!=null).forEach(t=>{this.links.push({title:t.title.toString(),path:t.path,active:!1})}),this.checkUrl())})}checkUrl(){let n=this.router.url;this.links.forEach(e=>{e.active=n.indexOf(e.path)>0})}onScroll(n){let e=document.scrollingElement,t=document.body.clientHeight,h=e.scrollTop/t;this.opacity=h,h>.5?this.scrollCss="bg-dark":this.scrollCss=""}navClicked(n){n.target.tagName=="NAV"&&(this.open=!1)}tracker(n,e){return e}};r.\u0275fac=function(e){return new(e||r)(d(j))},r.\u0275cmp=u({type:r,selectors:[["app-navbar"]],hostBindings:function(e,t){e&1&&k("scroll",function(_){return t.onScroll(_)},!1,B)},standalone:!0,features:[v],decls:10,vars:11,consts:[[1,"position-absolute","h-100","w-100","sidebar"],[1,"sticky-top",3,"click","ngClass","ngStyle"],[1,"d-lg-flex","align-items-center","justify-content-end","mx-md-3","mx-lg-0"],["type","button","title","menu",1,"btn","btn-lg","text-light","border-0",3,"click"],[1,"bi","bi-list"],[1,"row","row-cols-lg-auto","top-0","mx-2","my-lg-0","justify-content-between","w-100","items",3,"ngClass"],[1,"d-grid","d-lg-flex","p-3","p-lg-0"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-2","text-decoration-none","text-light",3,"click","routerLink","ngClass"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"nav",1),k("click",function(_){return t.navClicked(_)}),o(2,"div",2)(3,"button",3),k("click",function(){return t.open=!t.open}),p(4,"i",4),s(),o(5,"section",5)(6,"div"),p(7,"dark-mode"),s(),o(8,"div",6),y(9,ce,3,7,"ng-container",7),s()()()()()),e&2&&(a(),c("ngClass",C(5,Y,t.open))("ngStyle",C(7,oe,"hsla(0, 0%, 10%,"+t.opacity+")")),a(4),c("ngClass",C(9,Y,t.open)),a(4),c("ngForOf",t.links)("ngForTrackBy",t.tracker))},dependencies:[b,T,N,D,Q,X],styles:[".sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{z-index:2;transition:all 1s ease}.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 990px){.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.sidebar[_ngcontent-%COMP%]   nav.open[_ngcontent-%COMP%]{height:100vh;background-color:#000!important}.sidebar[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{transition:all 1s ease;display:none}.sidebar[_ngcontent-%COMP%]   .items.open[_ngcontent-%COMP%]{display:flex}}"]});let i=r;return i})();var Z=i=>({height:i}),le=(i,r)=>({objectPosition:i,height:r});function de(i,r){if(i&1&&(f(0),o(1,"div",3)(2,"div",4)(3,"div",5)(4,"h1",6),m(5),s()()(),o(6,"div",5)(7,"h1",7),m(8),s()()(),p(9,"img",8),g()),i&2){let l=E();a(5),S(" ",l.header.serviceName," "),a(3),S(" ",l.header.storeName," "),a(),c("src",l.header.bgUrl,O)("ngStyle",I(4,le,"50% 0%",l.headerType.height))}}function pe(i,r){if(i&1&&(f(0),o(1,"div",9)(2,"h1"),m(3),s()(),g()),i&2){let l=E();a(3),S(" ",l.header.storeName," ")}}var w=(()=>{let r=class r{constructor(n,e){this.sheets=n,this.router=e,this.url={setup:x.portfolio.tsv.setup},this.header={appName:"",serviceName:"",storeName:"",city:"",bgUrl:""},this.headerType={height:"auto"}}ngOnInit(){this.load()}load(){this.router.events.subscribe(n=>{typeof window<"u"&&window.scrollTo(0,0),this.router.config.filter(e=>e.data!=null).forEach(e=>{"/"+e.path==this.router.url&&(this.headerType.height=e.data.headerHeight)})}),this.sheets.getApiKey("static").subscribe(n=>{this.sheets.public.read(n.api,n.sheetId.bengkel_public,"setup").subscribe(t=>{this.header=this.getRenderObject(t),console.log("header loaded data"),this.sheets.eventAfterRender.emit({name:"app",data:this.header})})})}getRenderObject(n){let e={};return n.filter(t=>t.page=="app").forEach(t=>{let h=t.title,_=t.value;e[h]=_}),e}tracker(n,e){return e}};r.\u0275fac=function(e){return new(e||r)(d(M),d(j))},r.\u0275cmp=u({type:r,selectors:[["app-header"]],standalone:!0,features:[v],decls:4,vars:8,consts:[[1,"position-relative","text-light","bg-black",3,"ngStyle"],[1,"position-absolute","top-0","start-0","w-100","d-grid","justify-content-center","align-items-center","text-center",3,"ngStyle"],[4,"ngIf"],[1,"d-grid","align-content-center","gap-3"],[1,"d-flex","justify-content-center"],[1,"mb-3","border-bottom","header-border","w-fit"],[1,"p-3","pt-0"],[1,"p-3","pt-0","display-1"],["alt","Please wait while loading...",1,"position-absolute","w-100","start-0","top-0","opacity-50","align-content-center",3,"src","ngStyle"],[1,"p-3"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"header",1),y(2,de,10,7,"ng-container",2)(3,pe,4,1,"ng-container",2),s()()),e&2&&(c("ngStyle",C(4,Z,t.headerType.height)),a(),c("ngStyle",C(6,Z,t.headerType.height)),a(),c("ngIf",t.headerType.height!="0vh"),a(),c("ngIf",t.headerType.height=="0vh"))},dependencies:[b,P,D],styles:["header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{z-index:1}header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{z-index:0;object-fit:cover}.header-border[_ngcontent-%COMP%]{border-width:10px!important;border-color:bisque!important}"]});let i=r;return i})();function he(i,r){if(i&1&&(f(0),o(1,"div",6)(2,"a",7),p(3,"i"),o(4,"span",8),m(5),s()()(),g()),i&2){let l=r.$implicit;a(2),c("href",l.url,O),a(),V("bi ",l.cssIcon," ",l.cssColor,""),a(2),$(l.text)}}var F=(()=>{let r=class r{constructor(n,e){this.sheets=n,this.sanitize=e,this.url={contact:x.portfolio.tsv.contact,map:x.portfolio.tsv.map},this.contacts=[],this.maps=[]}ngOnInit(){this.load()}load(){this.sheets.getApiKey("static").subscribe(n=>{this.sheets.public.read(n.api,n.sheetId.bengkel_public,"contact").subscribe(e=>{e.filter(t=>t.platform!=null).forEach(t=>{this.contacts.push(t)}),this.sheets.eventAfterRender.emit({name:"contacts",data:this.contacts})}),this.sheets.public.read(n.api,n.sheetId.bengkel_public,"map").subscribe(e=>{e.filter(t=>t.address!=null).forEach(t=>{let h=new RegExp(new RegExp('(?<=src=")\\S[^"]*',"g")).exec(t.iframe),_={name:t.city,address:t.address,city:t.city,state:t.state,iframe:h!=null?this.sanitize.bypassSecurityTrustResourceUrl(h[0]):""};this.maps.push(_)}),this.sheets.eventAfterRender.emit({name:"maps",data:this.maps})})})}tracker(n,e){return e}};r.\u0275fac=function(e){return new(e||r)(d(M),d(G))},r.\u0275cmp=u({type:r,selectors:[["app-footer"]],standalone:!0,features:[v],decls:10,vars:2,consts:[[1,"pt-2","text-bg-dark","position-relative","bottom-0"],[1,"d-flex","justify-content-center"],[1,"mb-4","p-3","border-bottom","w-fit"],[1,"m-3","row","gap-3"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-center","my-3","credit"],[1,"col-sm","text-center","text-nowrap"],[1,"btn","btn-dark",3,"href"],[1,"ps-2"]],template:function(e,t){e&1&&(o(0,"footer",0)(1,"div",1)(2,"h1",2),m(3,"Contact Us"),s()(),o(4,"div",3),y(5,he,6,6,"ng-container",4),s(),p(6,"br"),o(7,"div",5)(8,"small"),m(9," \xA9 ND 2024 "),s()()()),e&2&&(a(5),c("ngForOf",t.contacts)("ngForTrackBy",t.tracker))},dependencies:[b,N],styles:["footer[_ngcontent-%COMP%]{z-index:2}.credit[_ngcontent-%COMP%]{background-color:#0003}"]});let i=r;return i})();var Pe=(()=>{let r=class r{constructor(n,e,t){this.pageHeader=n,this.pageFooter=e,this.sheets=t,this.attached=new L,this.registerEvent()}registerEvent(){this.sheets.eventAfterRender.forEach(n=>{switch(n.name){case"app":this.header=n.data;break;case"contacts":this.contacts=n.data;break;case"maps":this.maps=n.data;break;default:break}this.attached.emit(n)})}};r.\u0275fac=function(e){return new(e||r)(d(w),d(F),d(M))},r.\u0275cmp=u({type:r,selectors:[["app-root"]],standalone:!0,features:[q([z,w,F]),v],decls:8,vars:0,consts:[[1,"position-relative","main"],[1,"position-relative"]],template:function(e,t){e&1&&(o(0,"div",0),p(1,"app-navbar")(2,"app-header")(3,"br"),o(4,"section",1),p(5,"router-outlet")(6,"br"),s(),p(7,"app-footer"),s())},dependencies:[J,b,z,w,F]});let i=r;return i})();export{Pe as a};
