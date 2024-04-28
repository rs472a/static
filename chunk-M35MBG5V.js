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
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵsanitizeResourceUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-M22OFXWA.js";

// src/app/pages/landing/landing.component.ts
var _c0 = () => ["/form", "reg"];
function LandingComponent_ng_container_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14);
    \u0275\u0275element(3, "iframe", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "h1", 2);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h5", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const x_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", x_r1.iframe, \u0275\u0275sanitizeResourceUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(x_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(x_r1.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", x_r1.city, " - ", x_r1.state, "");
  }
}
var _LandingComponent = class _LandingComponent {
  constructor(app) {
    this.app = app;
    this.dir = direction;
    this.maps = this.app.maps;
    this.profile = this.app.header;
  }
  tracker(i, x) {
    return x;
  }
};
_LandingComponent.\u0275fac = function LandingComponent_Factory(t) {
  return new (t || _LandingComponent)(\u0275\u0275directiveInject(AppComponent));
};
_LandingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], standalone: true, features: [\u0275\u0275ProvidersFeature([BlockContentComponent]), \u0275\u0275StandaloneFeature], decls: 108, vars: 17, consts: [[1, "container"], [1, "mb-4"], [1, "mb-3"], [1, "text-end", "fw-bolder"], [1, "text-center", "display-1", "m-3"], [1, "row"], [1, "col-md"], ["title", "Pendaftaran", "imgUrl", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTi0CcM1Jhb45OALpExA-zhfog_74rMbeZw2dm1OBZBqKd4fBsR", 3, "url"], ["title", "Status", "imgUrl", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxNk8F3jsX1v56iOKpvFZFATIu0enFN1urAAjuw1LYcKzwvETz"], [1, ""], ["title", "Suku Cadang", "imgUrl", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQSHhAsJ_gnwBXH8vy6ml5B1cadWsoEnCIXZCkTe-laP2CJ10g", 3, "imgPos"], ["title", "Servis dan Paket", "imgUrl", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqfO8K7Qeg6lKLlLCo2H2mQvbUiNx9m2qiSJdh7n1nTrVwQet", 3, "imgPos"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "row", "text-center", "py-3"], [1, "col-md", "text-md-end"], ["frameborder", "0", "title", "map", "referrerpolicy", "no-referrer-when-downgrade", 1, "img-thumbnail", 3, "src"], [1, "col-md", "text-md-start"], [1, "my-3"]], template: function LandingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, " Tim mekanik kami berpengalaman dan profesional dalam menangani berbagai jenis motor, mulai dari motor bebek, matic, hingga sport. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h2", 2);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ul")(15, "li")(16, "b")(17, "u");
    \u0275\u0275text(18, "Mekanik Berpengalaman dan Profesional:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20, " Tim mekanik kami memiliki pengalaman bertahun-tahun dalam menangani berbagai jenis motor. Mereka selalu mengikuti perkembangan teknologi terbaru dan menggunakan suku cadang asli untuk memastikan motor Anda dalam kondisi terbaik. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li")(22, "b")(23, "u");
    \u0275\u0275text(24, "Layanan Lengkap:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26, " Kami menyediakan berbagai layanan servis dan perbaikan motor, seperti servis rutin, ganti oli, tune-up, perbaikan mesin, dan masih banyak lagi. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "li")(28, "b")(29, "u");
    \u0275\u0275text(30, "Harga Kompetitif:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32, " Kami menawarkan harga yang kompetitif untuk semua layanan kami. Kami juga menyediakan berbagai paket servis yang sesuai dengan kebutuhan Anda. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li")(34, "b")(35, "u");
    \u0275\u0275text(36, "Suku Cadang Asli:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "p");
    \u0275\u0275text(38, " Kami hanya menggunakan suku cadang asli untuk memastikan motor Anda dalam kondisi terbaik. Garansi: Kami memberikan garansi untuk semua layanan kami. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "p");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p");
    \u0275\u0275text(42, " Hubungi kami segera untuk mendapatkan informasi lebih lanjut! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 3);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "hr");
    \u0275\u0275elementStart(46, "div")(47, "h1", 4);
    \u0275\u0275text(48, " Area Pelanggan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 5)(50, "div", 6)(51, "block-content", 7)(52, "div");
    \u0275\u0275text(53, " Isi formulir pendaftaran Anda di sini. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 6)(55, "block-content", 8)(56, "div");
    \u0275\u0275text(57, " Lacak status servis kendaraan anda disini. ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(58, "hr");
    \u0275\u0275elementStart(59, "div")(60, "h1", 4);
    \u0275\u0275text(61, " Layanan Kami ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 9)(63, "div", 9)(64, "block-content", 10)(65, "div")(66, "p");
    \u0275\u0275text(67, " Kami menyediakan berbagai macam suku cadang motor untuk berbagai jenis dan merek motor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "p");
    \u0275\u0275text(69, " Anda bisa menemukan suku cadang untuk: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "ul")(71, "li");
    \u0275\u0275text(72, "Mesin.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "li");
    \u0275\u0275text(74, "Body.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "li");
    \u0275\u0275text(76, "Kelistrikan.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "li");
    \u0275\u0275text(78, "Pengereman.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "li");
    \u0275\u0275text(80, "Dan lainnya.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "p");
    \u0275\u0275text(82, " Silakan buka halaman ini untuk info lebih lanjut. ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(83, "div", 9)(84, "block-content", 11)(85, "div")(86, "p");
    \u0275\u0275text(87, " Berikut adalah beberapa contoh paket servis yang kami sediakan: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "ul")(89, "li")(90, "strong");
    \u0275\u0275text(91, "Paket Servis Rutin:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, " Paket servis ini meliputi servis rutin dan tune-up. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "li")(94, "strong");
    \u0275\u0275text(95, "Paket Servis Lengkap:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(96, " Paket servis ini meliputi servis rutin, tune-up, dan servis rem. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "li")(98, "strong");
    \u0275\u0275text(99, "Paket Servis Hemat:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(100, " Paket servis ini meliputi servis rutin dan ganti oli. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "p");
    \u0275\u0275text(102, " Silakan buka halaman ini untuk informasi lebih lanjut tentang jenis servis dan paket servis yang kami sediakan. ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275element(103, "hr");
    \u0275\u0275elementStart(104, "div")(105, "h1", 4);
    \u0275\u0275text(106, " Lokasi Kami ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(107, LandingComponent_ng_container_107_Template, 11, 5, "ng-container", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Mencari ", ctx.profile.serviceName, " Terbaik di ", ctx.profile.city, "? ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Selamat datang di ", ctx.profile.storeName, "!");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Kami adalah ", ctx.profile.serviceName, " terpercaya di ", ctx.profile.city, " yang menyediakan berbagai layanan servis dan perbaikan motor dengan harga yang kompetitif. ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Mengapa Memilih ", ctx.profile.storeName, "? ");
    \u0275\u0275advance(27);
    \u0275\u0275textInterpolate2(" ", ctx.profile.storeName, " adalah pilihan tepat untuk Anda yang mencari bengkel motor terpercaya di ", ctx.profile.city, ". ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" ", ctx.profile.storeName, " - ", ctx.profile.serviceName, " Terpercaya di ", ctx.profile.city, " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("url", \u0275\u0275pureFunction0(16, _c0));
    \u0275\u0275advance(13);
    \u0275\u0275property("imgPos", ctx.dir.left);
    \u0275\u0275advance(20);
    \u0275\u0275property("imgPos", ctx.dir.right);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx.maps)("ngForTrackBy", ctx.tracker);
  }
}, dependencies: [BlockContentComponent, CommonModule, NgForOf] });
var LandingComponent = _LandingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src\\app\\pages\\landing\\landing.component.ts", lineNumber: 15 });
})();
export {
  LandingComponent
};
//# sourceMappingURL=chunk-M35MBG5V.js.map
