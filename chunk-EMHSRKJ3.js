import {
  direction
} from "./chunk-XSEPX2QV.js";
import "./chunk-5XRHJL44.js";
import {
  CommonModule,
  CurrencyPipe,
  NgClass,
  NgForOf,
  SheetsService,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBindV,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-M22OFXWA.js";

// src/app/pages/list-items/list-items.component.ts
var _c0 = (a0, a1, a2) => ({ "text-bg-success": a0, "text-bg-warning": a1, "text-bg-danger": a2 });
var _c1 = (a0) => [a0, "IDR", "symbol", "0.0", "id-ID"];
function ListItemsComponent_li_5_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "div", 11)(4, "div", 12)(5, "div", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 16)(13, "small");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const x_r1 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(12, _c0, x_r1.harga <= 15e4, x_r1.harga > 15e4 && x_r1.harga <= 25e4, x_r1.harga > 25e4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBindV(7, 6, \u0275\u0275pureFunction1(16, _c1, x_r1.harga)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("alt", x_r1.nama);
    \u0275\u0275property("src", x_r1.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(x_r1.nama);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", x_r1.deskripsi, " ");
  }
}
function ListItemsComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4)(1, "div", 5)(2, "h1", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275template(5, ListItemsComponent_li_5_ng_container_5_Template, 15, 18, "ng-container", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", kat_r2.kategori, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", kat_r2.values)("ngForTrackBy", ctx_r2.tracker);
  }
}
var _ListItemsComponent = class _ListItemsComponent {
  constructor(sheets) {
    this.sheets = sheets;
    this.dir = direction;
    this.list = [];
    this.url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ80MI92VxqcFPGzXTkpILslN_AOIVHHzvzmafhnSg9YS98fSXvFvPwxf27sGr2148Hf0SJXF4jQd_B/pub?gid=620393183&single=true&output=tsv";
  }
  ngOnInit() {
    const name = "";
    this.sheets.eventLoaded.subscribe((x) => {
      if (x.name == name) {
        x.data.forEach((res) => {
          this.list.push({
            kategori: res.kategori,
            nama: res.nama,
            url: res.url,
            harga: res.harga,
            deskripsi: res.deskripsi
          });
        });
      }
    });
    this.sheets.load(name, this.url);
  }
  grouped() {
    const type = {
      kategori: "",
      values: [{
        no: "",
        url: "",
        kategori: "",
        nama: "",
        harga: 0,
        deskripsi: ""
      }]
    };
    let arr = [];
    for (const row of this.list) {
      let item = arr.find((x) => x.kategori == row.kategori);
      if (item == void 0) {
        arr.push({
          kategori: row.kategori,
          values: []
        });
        item = arr.find((x) => x.kategori == row.kategori);
      }
      item?.values.push(row);
    }
    return arr;
  }
  tracker(i, x) {
    return x;
  }
};
_ListItemsComponent.\u0275fac = function ListItemsComponent_Factory(t) {
  return new (t || _ListItemsComponent)(\u0275\u0275directiveInject(SheetsService));
};
_ListItemsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListItemsComponent, selectors: [["app-list-items"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 2, consts: [[1, "container"], [1, "text-center", "mb-5"], [1, "display-3"], ["class", "mb-3 display-4 text-secondary", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mb-3", "display-4", "text-secondary"], [1, "border-bottom", "p-2", "mb-3"], [1, "display-4"], [1, "row", "fs-6", "text-body"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-lg-3", "col-md-4", "col-sm-6", "mb-3"], [1, "border", "p-2", "d-grid", "h-100"], [1, "text-center", "position-relative", "rounded", "photo"], [1, "position-absolute", "w-100", "text-end", "p-1", "harga"], [1, "badge", 3, "ngClass"], ["width", "100%", "loading", "lazy", 1, "fit-cover", "rounded", 3, "src", "alt"], [1, "text-center"], [1, ""]], template: function ListItemsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 0)(1, "div", 1)(2, "h1", 2);
    \u0275\u0275text(3, "Daftar Komponen");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul");
    \u0275\u0275template(5, ListItemsComponent_li_5_Template, 6, 3, "li", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.grouped())("ngForTrackBy", ctx.tracker);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, CurrencyPipe], styles: ["\n\n.harga[_ngcontent-%COMP%] {\n  z-index: 1;\n  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\ndiv[class*=col-][_ngcontent-%COMP%] {\n  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n  background-color: initial;\n}\ndiv[class*=col-][_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: hsla(39, 97%, 49%, 0.13);\n}\ndiv[class*=col-][_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:hover   .photo[_ngcontent-%COMP%] {\n  background-color: hsla(0, 0%, 0%, 0.25);\n}\ndiv[class*=col-][_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:hover   .harga[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  top: 70px;\n  right: 50px;\n}\ndiv[class*=col-][_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.25;\n  filter: blur(2px);\n}\ndiv.photo[_ngcontent-%COMP%] {\n  height: 200px;\n  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\ndiv.photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n  height: 200px;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: upper-alpha;\n}\n/*# sourceMappingURL=list-items.component.css.map */"] });
var ListItemsComponent = _ListItemsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListItemsComponent, { className: "ListItemsComponent", filePath: "src\\app\\pages\\list-items\\list-items.component.ts", lineNumber: 13 });
})();
export {
  ListItemsComponent
};
//# sourceMappingURL=chunk-EMHSRKJ3.js.map
