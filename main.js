import {
  AppComponent
} from "./chunk-IFRWOHZA.js";
import {
  bootstrapApplication,
  provideClientHydration,
  provideRouter
} from "./chunk-5XRHJL44.js";
import {
  LOCALE_ID,
  provideHttpClient,
  withFetch
} from "./chunk-M22OFXWA.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    title: "Home",
    data: {
      headerHeight: "100vh"
    },
    loadComponent: () => import("./chunk-M35MBG5V.js").then((x) => x.LandingComponent)
  },
  {
    path: "form/reg",
    title: "Register",
    data: {
      headerHeight: "30vh"
    },
    loadComponent: () => import("./chunk-7A5G6735.js").then((x) => x.RegBengkelComponent)
  },
  {
    path: "items",
    title: "Store",
    data: {
      headerHeight: "30vh"
    },
    loadComponent: () => import("./chunk-EMHSRKJ3.js").then((x) => x.ListItemsComponent)
  },
  {
    path: "about",
    title: "About",
    data: {
      headerHeight: "30vh"
    },
    loadComponent: () => import("./chunk-EY75TQA5.js").then((x) => x.AboutComponent)
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: LOCALE_ID,
      useValue: "id-ID"
    }
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
