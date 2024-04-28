import {
  DomSanitizer,
  Router,
  RouterLink,
  RouterOutlet
} from "./chunk-5XRHJL44.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  SheetsService,
  gLinks,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate2,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-M22OFXWA.js";

// src/app/templates/navbar/navbar.component.ts
var _c0 = (a0) => ({ "open": a0 });
var _c1 = (a0) => ({ backgroundColor: a0 });
var _c2 = (a0) => [a0];
var _c3 = (a0) => ({ "bg-warning text-dark bg-opacity-75": a0 });
function NavbarComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 7);
    \u0275\u0275listener("click", function NavbarComponent_ng_container_6_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.open = false);
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const x_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c2, x_r3.path))("ngClass", \u0275\u0275pureFunction1(5, _c3, x_r3.active));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", x_r3.title, " ");
  }
}
var _NavbarComponent = class _NavbarComponent {
  constructor(router) {
    this.router = router;
    this.open = false;
    this.links = [];
    this.scrollCss = "";
    this.opacity = 0;
  }
  ngOnInit() {
    this.router.config.filter((x) => x.title != void 0).forEach((x) => {
      this.links.push({
        title: x.title.toString(),
        path: x.path,
        active: false
      });
    });
    this.router.events.subscribe((x) => {
      if (x.constructor.name == "NavigationEnd")
        this.checkUrl();
    });
  }
  checkUrl() {
    const url = this.router.url;
    this.links.forEach((f) => {
      console.log(url, f.path);
      f.active = url.indexOf(f.path) > 0;
    });
  }
  // make navbar window gradient opacity on scroll
  onScroll(e) {
    const elem = document.scrollingElement;
    const height = document.body.clientHeight;
    const scroll = elem.scrollTop / height;
    this.opacity = scroll;
    if (scroll > 0.5) {
      this.scrollCss = "bg-dark";
    } else {
      this.scrollCss = "";
    }
  }
  navClicked(e) {
    if (e.target.tagName == "NAV") {
      this.open = false;
    }
  }
  tracker(i, x) {
    return x;
  }
};
_NavbarComponent.\u0275fac = function NavbarComponent_Factory(t) {
  return new (t || _NavbarComponent)(\u0275\u0275directiveInject(Router));
};
_NavbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("scroll", function NavbarComponent_scroll_HostBindingHandler($event) {
      return ctx.onScroll($event);
    }, false, \u0275\u0275resolveWindow);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 11, consts: [[1, "position-absolute", "h-100", "w-100", "sidebar"], [1, "sticky-top", 3, "click", "ngClass", "ngStyle"], [1, "d-lg-flex", "align-items-center", "justify-content-end", "mx-md-3", "mx-lg-0"], ["type", "button", "title", "menu", 1, "btn", "btn-lg", "text-light", "border-0", 3, "click"], [1, "bi", "bi-list"], [1, "row", "row-cols-lg-auto", "top-0", "mx-2", "my-lg-0", "items", 3, "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-2", "text-decoration-none", "text-light", 3, "click", "routerLink", "ngClass"]], template: function NavbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1);
    \u0275\u0275listener("click", function NavbarComponent_Template_nav_click_1_listener($event) {
      return ctx.navClicked($event);
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "button", 3);
    \u0275\u0275listener("click", function NavbarComponent_Template_button_click_3_listener() {
      return ctx.open = !ctx.open;
    });
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "section", 5);
    \u0275\u0275template(6, NavbarComponent_ng_container_6_Template, 3, 7, "ng-container", 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c0, ctx.open))("ngStyle", \u0275\u0275pureFunction1(7, _c1, "hsla(0, 0%, 10%," + ctx.opacity + ")"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c0, ctx.open));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.links)("ngForTrackBy", ctx.tracker);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgStyle, RouterLink], styles: ["\n\n.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: all 1s ease;\n}\n.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 990px) {\n  .sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .sidebar[_ngcontent-%COMP%]   nav.open[_ngcontent-%COMP%] {\n    height: 100vh;\n    background-color: black !important;\n  }\n  .sidebar[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n    transition: all 1s ease;\n    display: none;\n  }\n  .sidebar[_ngcontent-%COMP%]   .items.open[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
var NavbarComponent = _NavbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\templates\\navbar\\navbar.component.ts", lineNumber: 12 });
})();

// src/app/templates/header/header.component.ts
var _c02 = (a0) => ({ height: a0 });
var _c12 = (a0, a1) => ({ objectPosition: a0, height: a1 });
function HeaderComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h1", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 5)(7, "h1", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "img", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.header.serviceName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.header.storeName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.header.bgUrl, \u0275\u0275sanitizeUrl)("ngStyle", \u0275\u0275pureFunction2(4, _c12, "50% 0%", ctx_r0.headerType.height));
  }
}
function HeaderComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.header.storeName, " ");
  }
}
var _HeaderComponent = class _HeaderComponent {
  constructor(sheets, router) {
    this.sheets = sheets;
    this.router = router;
    this.url = {
      setup: gLinks.portfolio.tsv.setup
    };
    this.header = {
      appName: "",
      serviceName: "",
      storeName: "",
      city: "",
      bgUrl: ""
    };
    this.headerType = {
      height: "auto"
    };
  }
  ngOnInit() {
    this.router.events.subscribe((x) => {
      if (typeof window != "undefined") {
        window.scrollTo(0, 0);
      }
      this.router.config.filter((x2) => x2.data != void 0).forEach((x2) => {
        if ("/" + x2.path == this.router.url) {
          this.headerType.height = x2.data["headerHeight"];
        }
      });
    });
    this.sheets.eventLoaded.subscribe((res) => {
      if (res.name == "app") {
        this.header = this.getRenderObject(res.data);
        this.sheets.eventAfterRender.emit({
          name: res.name,
          data: this.header
        });
      }
    });
    this.sheets.load("app", this.url.setup);
  }
  getRenderObject(data) {
    let obj = {};
    data.filter((x) => x.page == "app").forEach((x) => {
      const name = x.title;
      const val = x.value;
      obj[name] = val;
    });
    return obj;
  }
  tracker(i, x) {
    return x;
  }
};
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(t) {
  return new (t || _HeaderComponent)(\u0275\u0275directiveInject(SheetsService), \u0275\u0275directiveInject(Router));
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 8, consts: [[1, "position-relative", 3, "ngStyle"], [1, "position-absolute", "top-0", "start-0", "w-100", "d-grid", "justify-content-center", "text-center", "text-light", "bg-black", 3, "ngStyle"], [4, "ngIf"], [1, "d-grid", "align-content-center", "gap-3"], [1, "d-flex", "justify-content-center"], [1, "mb-3", "border-bottom", "header-border", "w-fit"], [1, "p-3", "pt-0"], [1, "p-3", "pt-0", "display-1"], ["alt", "background", 1, "position-absolute", "opacity-50", "w-100", "start-0", "top-0", 3, "src", "ngStyle"], [1, "p-3"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1);
    \u0275\u0275template(2, HeaderComponent_ng_container_2_Template, 10, 7, "ng-container", 2)(3, HeaderComponent_ng_container_3_Template, 4, 1, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c02, ctx.headerType.height));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(6, _c02, ctx.headerType.height));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.headerType.height != "0vh");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.headerType.height == "0vh");
  }
}, dependencies: [CommonModule, NgIf, NgStyle], styles: ["\n\nheader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  z-index: 1;\n}\nheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 0;\n  object-fit: cover;\n}\n.header-border[_ngcontent-%COMP%] {\n  border-width: 10px !important;\n  border-color: bisque !important;\n}\n/*# sourceMappingURL=header.component.css.map */"] });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\templates\\header\\header.component.ts", lineNumber: 21 });
})();

// src/app/templates/footer/footer.component.ts
function FooterComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "a", 7);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("href", item_r1.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("bi ", item_r1.cssIcon, " ", item_r1.cssColor, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.text);
  }
}
var _FooterComponent = class _FooterComponent {
  constructor(sheets, sanitize) {
    this.sheets = sheets;
    this.sanitize = sanitize;
    this.url = {
      contact: gLinks.portfolio.tsv.contact,
      map: gLinks.portfolio.tsv.map
    };
    this.contacts = [];
    this.maps = [];
  }
  ngOnInit() {
    this.sheets.eventLoaded.subscribe((res) => {
      if (res.name == "contacts") {
        res.data.filter((x) => x.platform != void 0).forEach((x) => {
          this.contacts.push(x);
        });
        this.sheets.eventAfterRender.emit({
          name: res.name,
          data: this.contacts
        });
      } else if (res.name == "maps") {
        res.data.filter((x) => x.address != void 0).forEach((x) => {
          const src = new RegExp(new RegExp('(?<=src=")\\S[^"]*', "g")).exec(x.iframe);
          const parse = {
            name: x.city,
            address: x.address,
            city: x.city,
            state: x.state,
            iframe: src != null ? this.sanitize.bypassSecurityTrustResourceUrl(src[0]) : ""
          };
          this.maps.push(parse);
        });
        this.sheets.eventAfterRender.emit({ name: res.name, data: this.maps });
      }
    });
    this.sheets.load("contacts", this.url.contact);
    this.sheets.load("maps", this.url.map);
  }
  tracker(i, x) {
    return x;
  }
};
_FooterComponent.\u0275fac = function FooterComponent_Factory(t) {
  return new (t || _FooterComponent)(\u0275\u0275directiveInject(SheetsService), \u0275\u0275directiveInject(DomSanitizer));
};
_FooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 2, consts: [[1, "pt-2", "text-bg-dark", "position-relative", "bottom-0"], [1, "d-flex", "justify-content-center"], [1, "mb-4", "p-3", "border-bottom", "w-fit"], [1, "m-3", "row", "gap-3"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "text-center", "my-3"], [1, "col-sm", "text-center", "text-nowrap"], [1, "btn", "btn-dark", 3, "href"], [1, "ps-2"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "h1", 2);
    \u0275\u0275text(3, "Contact Us");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275template(5, FooterComponent_ng_container_5_Template, 6, 6, "ng-container", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br");
    \u0275\u0275elementStart(7, "div", 5)(8, "small");
    \u0275\u0275text(9, " \xA9 ND 2024 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.contacts)("ngForTrackBy", ctx.tracker);
  }
}, dependencies: [CommonModule, NgForOf], styles: ["\n\nfooter[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\templates\\footer\\footer.component.ts", lineNumber: 30 });
})();

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor(pageHeader, pageFooter, sheets) {
    this.pageHeader = pageHeader;
    this.pageFooter = pageFooter;
    this.sheets = sheets;
    this.header = this.pageHeader.header;
    this.contacts = this.pageFooter.contacts;
    this.maps = this.pageFooter.maps;
    this.registerEvent();
  }
  registerEvent() {
    this.sheets.eventAfterRender.subscribe((x) => {
      switch (x.name) {
        case "app":
          this.header = x.data;
          break;
        case "contacts":
          this.contacts = x.data;
          break;
        case "maps":
          this.maps = x.data;
          break;
        default:
          break;
      }
    });
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)(\u0275\u0275directiveInject(HeaderComponent), \u0275\u0275directiveInject(FooterComponent), \u0275\u0275directiveInject(SheetsService));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275ProvidersFeature([NavbarComponent, HeaderComponent, FooterComponent]), \u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [[1, "position-relative", "main"], [1, "position-relative"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-navbar")(2, "app-header")(3, "br");
    \u0275\u0275elementStart(4, "section", 1);
    \u0275\u0275element(5, "router-outlet")(6, "br");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-footer");
    \u0275\u0275elementEnd();
  }
}, dependencies: [
  RouterOutlet,
  CommonModule,
  NavbarComponent,
  HeaderComponent,
  FooterComponent
] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 23 });
})();

export {
  AppComponent
};
//# sourceMappingURL=chunk-MC2UAJ57.js.map
