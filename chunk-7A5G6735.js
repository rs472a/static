import {
  CommonModule,
  Location,
  NgTemplateOutlet,
  SheetsService,
  gLinks,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-M22OFXWA.js";

// src/app/forms/reg-bengkel/reg-bengkel.component.ts
var _c0 = () => ({ title: "Data Pelanggan" });
var _c1 = () => ({ title: "Layanan" });
function RegBengkelComponent_ng_template_6_Template(rf, ctx) {
}
function RegBengkelComponent_ng_template_24_Template(rf, ctx) {
}
function RegBengkelComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "h2", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const title_r2 = ctx.title;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", title_r2, " ");
  }
}
var _RegBengkelComponent = class _RegBengkelComponent {
  constructor(loc, sheets) {
    this.loc = loc;
    this.sheets = sheets;
    this.formUrl = gLinks.portfolio.form.register;
  }
};
_RegBengkelComponent.\u0275fac = function RegBengkelComponent_Factory(t) {
  return new (t || _RegBengkelComponent)(\u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(SheetsService));
};
_RegBengkelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegBengkelComponent, selectors: [["app-reg-bengkel"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 93, vars: 6, consts: [["header", ""], [1, "container"], [1, "mb-3"], [1, "text-center", "border-bottom", "pb-3", "mb-3"], [1, "mb-3", 3, "submit"], [1, "mb-3", "p-3", "border", "rounded", "bg-body-tertiary"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["for", "tgl"], ["id", "tgl", "type", "date", "name", "entry.679653547", 1, "form-control"], ["for", "nama"], ["id", "nama", "type", "text", "name", "entry.1393946401", 1, "form-control"], ["for", "nopol"], ["id", "nopol", "type", "text", "name", "entry.1697609600", 1, "form-control"], ["for", "merk"], ["id", "merk", "type", "text", "name", "entry.1404183563", 1, "form-control"], ["for", ""], [1, "overflow-auto"], [1, "btn-group"], ["id", "_pkt1", "type", "radio", "name", "entry.548359912", "value", "Paket Servis Rutin", 1, "btn-check"], ["for", "_pkt1", 1, "btn", "btn-outline-primary"], ["id", "_pkt2", "type", "radio", "name", "entry.548359912", "value", "Paket Servis Lengkap", 1, "btn-check"], ["for", "_pkt2", 1, "btn", "btn-outline-primary"], ["id", "_pkt3", "type", "radio", "name", "entry.548359912", "value", "Paket Servis Hemat", 1, "btn-check"], ["for", "_pkt3", 1, "btn", "btn-outline-primary"], ["id", "_pkt4", "type", "radio", "name", "entry.548359912", "value", "Paket Lain", 1, "btn-check"], ["for", "_pkt4", 1, "btn", "btn-outline-primary"], ["id", "_tbh1", "type", "checkbox", "name", "entry.1439129603", "value", "Tune-Up", 1, "btn-check"], ["for", "_tbh1", 1, "btn", "btn-outline-warning", "text-dark"], ["id", "_tbh2", "type", "checkbox", "name", "entry.1439129603", "value", "Ganti Ban", 1, "btn-check"], ["for", "_tbh2", 1, "btn", "btn-outline-warning", "text-dark"], ["id", "_tbh3", "type", "checkbox", "name", "entry.1439129603", "value", "Bongkar Mesin", 1, "btn-check"], ["for", "_tbh3", 1, "btn", "btn-outline-warning", "text-dark"], ["id", "_tbh4", "type", "checkbox", "name", "entry.1439129603", "value", "Lain", 1, "btn-check"], ["for", "_tbh4", 1, "btn", "btn-outline-warning", "text-dark"], ["for", "komplen"], ["id", "komplen", "type", "text", "name", "entry.178837101", 1, "form-control"], ["for", "info"], ["id", "info", "type", "text", "name", "entry.331081743", 1, "form-control"], [1, "mb-3", "d-flex", "justify-content-between"], ["type", "button", "title", "back", 1, "btn", "btn-lg", "rounded-circle", "btn-danger", 3, "click"], [1, "fs-3", "bi", "bi-box-arrow-left"], ["type", "reset", "title", "reset", 1, "btn", "btn-lg", "rounded-circle", "btn-secondary"], [1, "fs-3", "bi", "bi-arrow-counterclockwise"], ["type", "submit", "title", "submit", 1, "btn", "btn-lg", "rounded-circle", "btn-success"], [1, "fs-3", "bi", "bi-floppy-fill"], ["hidden", ""], ["jsname", "o6bZLc"], ["type", "hidden", "name", "entry.679653547_year", "value", "2024"], ["type", "hidden", "name", "entry.679653547_month", "value", "4"], ["type", "hidden", "name", "entry.679653547_day", "value", "27"], ["type", "hidden", "name", "entry.1393946401", "value", "nama"], ["type", "hidden", "name", "entry.1697609600", "value", "nopol"], ["type", "hidden", "name", "entry.1404183563", "value", "tipe"], ["type", "hidden", "name", "entry.178837101", "value", "keluhan"], ["type", "hidden", "name", "entry.331081743", "value", "info lain"], ["type", "hidden", "name", "entry.548359912", "value", "Paket Servis Rutin"], ["type", "hidden", "name", "entry.1439129603", "value", "Tune-Up"], ["type", "hidden", "name", "entry.1439129603", "value", "Ganti Ban"], ["type", "hidden", "name", "entry.1439129603", "value", "Bongkar Mesin"], ["type", "hidden", "name", "entry.1439129603", "value", "Lain"], ["type", "hidden", "name", "dlut", "value", "1714153779709"], [1, "mb-4", "d-flex", "justify-content-center"], [1, "p-2", "border-bottom", "border-warning", "border-3", "w-fit"]], template: function RegBengkelComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
    \u0275\u0275text(3, " Formulir Pendaftaran Pelanggan ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "form", 4);
    \u0275\u0275listener("submit", function RegBengkelComponent_Template_form_submit_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.sheets.update(ctx.formUrl, $event));
    });
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275template(6, RegBengkelComponent_ng_template_6_Template, 0, 0, "ng-template", 6);
    \u0275\u0275elementStart(7, "div", 2)(8, "label", 7);
    \u0275\u0275text(9, "Tanggal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 2)(12, "label", 9);
    \u0275\u0275text(13, "Nama");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 2)(16, "label", 11);
    \u0275\u0275text(17, "No Kendaraan");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 2)(20, "label", 13);
    \u0275\u0275text(21, "Merk dan Tipe Motor");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 5);
    \u0275\u0275template(24, RegBengkelComponent_ng_template_24_Template, 0, 0, "ng-template", 6);
    \u0275\u0275elementStart(25, "div", 2)(26, "label", 15);
    \u0275\u0275text(27, "Paket Servis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 16)(29, "div", 17);
    \u0275\u0275element(30, "input", 18);
    \u0275\u0275elementStart(31, "label", 19);
    \u0275\u0275text(32, "Rutin (Berkala)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 20);
    \u0275\u0275elementStart(34, "label", 21);
    \u0275\u0275text(35, "Lengkap");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 22);
    \u0275\u0275elementStart(37, "label", 23);
    \u0275\u0275text(38, "Hemat");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 24);
    \u0275\u0275elementStart(40, "label", 25);
    \u0275\u0275text(41, "Lain");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 2)(43, "label", 15);
    \u0275\u0275text(44, "Servis Tambahan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 16)(46, "div", 17);
    \u0275\u0275element(47, "input", 26);
    \u0275\u0275elementStart(48, "label", 27);
    \u0275\u0275text(49, "Tune-Up");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 28);
    \u0275\u0275elementStart(51, "label", 29);
    \u0275\u0275text(52, "Ganti Ban");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 30);
    \u0275\u0275elementStart(54, "label", 31);
    \u0275\u0275text(55, "Bongkar Mesin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "input", 32);
    \u0275\u0275elementStart(57, "label", 33);
    \u0275\u0275text(58, "Lain");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "div", 2)(60, "label", 34);
    \u0275\u0275text(61, "Keluhan");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "textarea", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 2)(64, "label", 36);
    \u0275\u0275text(65, "Info Lain");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "textarea", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(67, "br");
    \u0275\u0275elementStart(68, "div", 38)(69, "button", 39);
    \u0275\u0275listener("click", function RegBengkelComponent_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.loc.back());
    });
    \u0275\u0275element(70, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "button", 41);
    \u0275\u0275element(72, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "button", 43);
    \u0275\u0275element(74, "i", 44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(75, RegBengkelComponent_ng_template_75_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerStart(77, 45);
    \u0275\u0275elementStart(78, "div", 46);
    \u0275\u0275element(79, "input", 47)(80, "input", 48)(81, "input", 49)(82, "input", 50)(83, "input", 51)(84, "input", 52)(85, "input", 53)(86, "input", 54)(87, "input", 55)(88, "input", 56)(89, "input", 57)(90, "input", 58)(91, "input", 59)(92, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const header_r3 = \u0275\u0275reference(76);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngTemplateOutlet", header_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(18);
    \u0275\u0275property("ngTemplateOutlet", header_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction0(5, _c1));
  }
}, dependencies: [CommonModule, NgTemplateOutlet] });
var RegBengkelComponent = _RegBengkelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegBengkelComponent, { className: "RegBengkelComponent", filePath: "src\\app\\forms\\reg-bengkel\\reg-bengkel.component.ts", lineNumber: 12 });
})();
export {
  RegBengkelComponent
};
//# sourceMappingURL=chunk-7A5G6735.js.map
