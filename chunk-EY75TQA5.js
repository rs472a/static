import {
  AppComponent
} from "./chunk-IFRWOHZA.js";
import {
  BlockContentComponent,
  direction
} from "./chunk-XSEPX2QV.js";
import "./chunk-5XRHJL44.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-M22OFXWA.js";

// src/app/pages/about/about.component.ts
var _c0 = () => ({ filter: "common" });
var _c1 = () => ({ filter: "social" });
function AboutComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "div", 8)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const x_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", x_r1.name, " :");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", x_r1.address, ", ", x_r1.city, " - ", x_r1.state, ". ");
  }
}
function AboutComponent_ng_template_55_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "a", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const x_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", x_r2.platform, ": ");
    \u0275\u0275advance();
    \u0275\u0275property("href", x_r2.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r2.text);
  }
}
function AboutComponent_ng_template_55_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, AboutComponent_ng_template_55_ul_0_li_1_Template, 4, 3, "li", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r2 = ctx.$implicit;
    const filter_r3 = \u0275\u0275nextContext().filter;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", x_r2.type == filter_r3);
  }
}
function AboutComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AboutComponent_ng_template_55_ul_0_Template, 2, 1, "ul", 9);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", ctx_r3.contacts)("ngForTrackBy", ctx_r3.tracker);
  }
}
var _AboutComponent = class _AboutComponent {
  constructor(app) {
    this.app = app;
    this.dir = direction;
    this.profile = this.app.header;
    this.contacts = this.app.contacts;
    this.maps = this.app.maps;
    this.titleJoin = "Cabang " + this.profile.serviceName + " Kami";
  }
  tracker(i, x) {
    return x;
  }
};
_AboutComponent.\u0275fac = function AboutComponent_Factory(t) {
  return new (t || _AboutComponent)(\u0275\u0275directiveInject(AppComponent));
};
_AboutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 57, vars: 12, consts: [["list", ""], [1, "container"], ["imgUrl", "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/05/27/813413317.jpg", 3, "title", "imgPos"], [1, "li-num-2"], ["class", "mb-3 hoverable ps-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mt-5", "mb-3"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mb-3", "hoverable", "ps-3"], [1, "d-grid"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "href"]], template: function AboutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "block-content", 2)(2, "ul", 3);
    \u0275\u0275template(3, AboutComponent_li_3_Template, 6, 4, "li", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "h1", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Didirikan pada tahun 2020 oleh dua orang ibu yang ingin memberikan pilihan busana anak yang nyaman, stylish, dan berkualitas dengan harga terjangkau.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h2", 5);
    \u0275\u0275text(10, "Tentang Kami");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Kami terinspirasi dari keceriaan dan tingkah laku lucu anak-anak, dan ingin menghadirkan pakaian yang dapat menemani mereka dalam berbagai aktivitas dan momen spesial.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h2", 5);
    \u0275\u0275text(14, "Visi dan Misi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ul")(16, "li")(17, "h3");
    \u0275\u0275text(18, "Visi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20, "Menjadi toko online baju anak terdepan di Indonesia yang menyediakan berbagai pilihan busana berkualitas tinggi dengan harga yang bersaing.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li")(22, "h3");
    \u0275\u0275text(23, "Misi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ul")(25, "li");
    \u0275\u0275text(26, "Menawarkan berbagai macam model dan desain yang trendy.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "li");
    \u0275\u0275text(28, "Memberikan pelayanan yang terbaik kepada pelanggan.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li");
    \u0275\u0275text(30, "Menjaga kualitas produk.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "li");
    \u0275\u0275text(32, "Memastikan keamanan produk.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34, "Memberikan kenyamanan bagi anak-anak.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "li");
    \u0275\u0275text(36, "Menyediakan akses yang luas.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "h2", 5);
    \u0275\u0275text(38, "Tim Kami");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "h2", 5);
    \u0275\u0275text(42, "Komitmen Kami");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p");
    \u0275\u0275text(44, "Kami berkomitmen untuk terus berkembang dan memberikan yang terbaik bagi para pelanggan.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "h2", 5);
    \u0275\u0275text(46, "Call to Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p");
    \u0275\u0275text(48, "Kunjungi website kami di https://www.niagahoster.co.id/blog/tips-nama-toko-online/ untuk melihat koleksi lengkap baju anak kami. Anda juga dapat mengikuti kami di media sosial untuk mendapatkan informasi terbaru tentang promo dan penawaran menarik.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "h2", 5);
    \u0275\u0275text(50, "Hubungi Kami");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainer(51, 6);
    \u0275\u0275elementStart(52, "h2", 5);
    \u0275\u0275text(53, "Media Sosial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainer(54, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(55, AboutComponent_ng_template_55_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const list_r5 = \u0275\u0275reference(56);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx.titleJoin)("imgPos", ctx.dir.left);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.maps)("ngForTrackBy", ctx.tracker);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.profile.storeName);
    \u0275\u0275advance(34);
    \u0275\u0275textInterpolate1("", ctx.profile.storeName, " dikelola oleh tim yang terdiri dari para ibu yang penuh kasih dan berpengalaman dalam memilih busana anak. Kami selalu mengikuti tren terbaru dan terus berinovasi untuk menghadirkan produk-produk terbaik bagi buah hati Anda.");
    \u0275\u0275advance(11);
    \u0275\u0275property("ngTemplateOutlet", list_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", list_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction0(11, _c1));
  }
}, dependencies: [BlockContentComponent, CommonModule, NgForOf, NgIf, NgTemplateOutlet] });
var AboutComponent = _AboutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\pages\\about\\about.component.ts", lineNumber: 13 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-EY75TQA5.js.map
