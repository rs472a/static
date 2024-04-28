import {
  RouterLink
} from "./chunk-5XRHJL44.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-M22OFXWA.js";

// src/app/templates/block-content/block-content.component.ts
var _c0 = ["*"];
var _c1 = (a0, a1) => ({ "col-lg": a0, "col-12": a1 });
function BlockContentComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const img_r1 = \u0275\u0275reference(9);
    \u0275\u0275property("ngTemplateOutlet", img_r1);
  }
}
function BlockContentComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const img_r1 = \u0275\u0275reference(9);
    \u0275\u0275property("ngTemplateOutlet", img_r1);
  }
}
function BlockContentComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "img", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c1, ctx_r1.imgPos == ctx_r1.dir.left || ctx_r1.imgPos == ctx_r1.dir.right, ctx_r1.imgPos == ctx_r1.dir.top || ctx_r1.imgPos == ctx_r1.dir.bottom));
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("alt", ctx_r1.imgAlt);
    \u0275\u0275property("src", ctx_r1.imgUrl, \u0275\u0275sanitizeUrl);
  }
}
var direction;
(function(direction2) {
  direction2[direction2["top"] = 0] = "top";
  direction2[direction2["bottom"] = 1] = "bottom";
  direction2[direction2["left"] = 2] = "left";
  direction2[direction2["right"] = 3] = "right";
})(direction || (direction = {}));
var _BlockContentComponent = class _BlockContentComponent {
  constructor() {
    this.dir = direction;
    this.imgPos = direction.top;
  }
};
_BlockContentComponent.\u0275fac = function BlockContentComponent_Factory(t) {
  return new (t || _BlockContentComponent)();
};
_BlockContentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlockContentComponent, selectors: [["block-content"]], inputs: { title: "title", url: "url", imgUrl: "imgUrl", imgAlt: "imgAlt", imgPos: "imgPos" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 10, vars: 4, consts: [["img", ""], [1, "btn", "text-start", "rounded-0", "my-3", "p-3", "w-100", "content", 3, "routerLink"], [1, "row", "gap-2", "justify-content-center"], [3, "ngTemplateOutlet", 4, "ngIf"], [1, "col-lg"], [1, "my-3"], [3, "ngTemplateOutlet"], [1, "text-center", "align-self-center", 3, "ngClass"], ["loading", "eager", 1, "img-thumbnail", "border-0", "rounded", 3, "alt", "src"]], template: function BlockContentComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "a", 1)(1, "div", 2);
    \u0275\u0275template(2, BlockContentComponent_ng_container_2_Template, 1, 1, "ng-container", 3);
    \u0275\u0275elementStart(3, "div", 4)(4, "h1", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BlockContentComponent_ng_container_7_Template, 1, 1, "ng-container", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, BlockContentComponent_ng_template_8_Template, 2, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", ctx.url);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.imgPos == ctx.dir.top || ctx.imgPos == ctx.dir.left);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.imgPos == ctx.dir.right || ctx.imgPos == ctx.dir.bottom);
  }
}, dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, RouterLink], styles: ["\n\n.content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: scale-down;\n}\n/*# sourceMappingURL=block-content.component.css.map */"] });
var BlockContentComponent = _BlockContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlockContentComponent, { className: "BlockContentComponent", filePath: "src\\app\\templates\\block-content\\block-content.component.ts", lineNumber: 19 });
})();

export {
  direction,
  BlockContentComponent
};
//# sourceMappingURL=chunk-XSEPX2QV.js.map
