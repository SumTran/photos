function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _headers_headers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./headers/headers.component */
    "./src/app/headers/headers.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(sanitizer, iconRegistry) {
        _classCallCheck(this, AppComponent);

        this.sanitizer = sanitizer;
        this.iconRegistry = iconRegistry;
        this.title = "useful";
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerSvgIcons();
        }
      }, {
        key: "registerSvgIcons",
        value: function registerSvgIcons() {
          this.iconRegistry.addSvgIcon("logo", this.sanitizer.bypassSecurityTrustResourceUrl("./assets/coffee.svg"));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_headers_headers_component__WEBPACK_IMPORTED_MODULE_3__["HeadersComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }, {
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _headers_headers_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./headers/headers.module */
    "./src/app/headers/headers.module.ts");
    /* harmony import */


    var _posts_posts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./posts/posts.module */
    "./src/app/posts/posts.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _weather_weather_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./weather/weather.module */
    "./src/app/weather/weather.module.ts");

    var routes = [{
      path: "posts",
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./posts/posts.module */
        "./src/app/posts/posts.module.ts")).then(function (m) {
          return m.PostsModule;
        });
      }
    }, {
      path: "",
      redirectTo: "posts",
      pathMatch: "full"
    }, {
      path: "news",
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./weather/weather.module */
        "./src/app/weather/weather.module.ts")).then(function (m) {
          return m.WeatherModule;
        });
      }
    }, {
      path: "**",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | not-found-not-found-module */
        "not-found-not-found-module").then(__webpack_require__.bind(null,
        /*! ./not-found/not-found.module */
        "./src/app/not-found/not-found.module.ts")).then(function (nM) {
          return nM.NotFoundModule;
        });
      }
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _headers_headers_module__WEBPACK_IMPORTED_MODULE_4__["HeadersModule"], _posts_posts_module__WEBPACK_IMPORTED_MODULE_5__["PostsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes), _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _weather_weather_module__WEBPACK_IMPORTED_MODULE_9__["WeatherModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _headers_headers_module__WEBPACK_IMPORTED_MODULE_4__["HeadersModule"], _posts_posts_module__WEBPACK_IMPORTED_MODULE_5__["PostsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _weather_weather_module__WEBPACK_IMPORTED_MODULE_9__["WeatherModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _headers_headers_module__WEBPACK_IMPORTED_MODULE_4__["HeadersModule"], _posts_posts_module__WEBPACK_IMPORTED_MODULE_5__["PostsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes), _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _weather_weather_module__WEBPACK_IMPORTED_MODULE_9__["WeatherModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/headers/headers.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/headers/headers.component.ts ***!
    \**********************************************/

  /*! exports provided: HeadersComponent */

  /***/
  function srcAppHeadersHeadersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadersComponent", function () {
      return HeadersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function HeadersComponent_button_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r1.key)("routerLinkActive", "active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1.value, " ");
      }
    }

    var _c0 = function _c0() {
      return ["posts"];
    };

    var HeadersComponent =
    /*#__PURE__*/
    function () {
      function HeadersComponent(router) {
        _classCallCheck(this, HeadersComponent);

        this.router = router;
        this.links = [{
          key: "posts",
          value: "POSTS"
        }, {
          key: "news",
          value: "NEWS"
        }];
      }

      _createClass(HeadersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeadersComponent;
    }();

    HeadersComponent.ɵfac = function HeadersComponent_Factory(t) {
      return new (t || HeadersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HeadersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeadersComponent,
      selectors: [["app-headers"]],
      decls: 5,
      vars: 3,
      consts: [["color", "primary", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "headers", "mat-elevation-z0"], ["href", "javascript:void (0)", 1, "headers__title", 3, "routerLink"], [1, "headers__tab"], ["mat-button", "", "class", "headers__link", 3, "routerLink", "routerLinkActive", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "headers__link", 3, "routerLink", "routerLinkActive"]],
      template: function HeadersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hello Sum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeadersComponent_button_4_Template, 2, 3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n[_nghost-%COMP%]   .headers[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  width: 100px;\n}\n\n[_nghost-%COMP%]   .headers[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n  border-radius: 0;\n}\n\n[_nghost-%COMP%]   .headers__tab[_ngcontent-%COMP%] {\n  width: calc(100vw - 100px);\n  text-align: center;\n}\n\n[_nghost-%COMP%]   .headers__link[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Xb3Jrc3BhY2UvdXNlcmZ1bC9zcmMvYXBwL2hlYWRlcnMvaGVhZGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVycy9oZWFkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQ0NoQjs7QURGQTtFQUtNLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtBQ0NsQjs7QURSQTtFQVdNLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUNDdEI7O0FEYkE7RUFlTSwwQkFBMEI7RUFDMUIsa0JBQWtCO0FDRXhCOztBRGxCQTtFQW1CTSxxQkFBcUI7QUNHM0IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXJzL2hlYWRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC5oZWFkZXJzIHtcbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG5cbiAgICAuYWN0aXZlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICAgICZfX3RhYiB7XG4gICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEwMHB4KTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgJl9fbGluayB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gICAgfVxuXG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0IC5oZWFkZXJzIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG46aG9zdCAuaGVhZGVycyAuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG46aG9zdCAuaGVhZGVyc19fdGFiIHtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMDBweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOmhvc3QgLmhlYWRlcnNfX2xpbmsge1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-headers",
          templateUrl: "./headers.component.html",
          styleUrls: ["./headers.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/headers/headers.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/headers/headers.module.ts ***!
    \*******************************************/

  /*! exports provided: HeadersModule */

  /***/
  function srcAppHeadersHeadersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadersModule", function () {
      return HeadersModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _headers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./headers.component */
    "./src/app/headers/headers.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    var HeadersModule = function HeadersModule() {
      _classCallCheck(this, HeadersModule);
    };

    HeadersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HeadersModule
    });
    HeadersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HeadersModule_Factory(t) {
        return new (t || HeadersModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeadersModule, {
        declarations: [_headers_component__WEBPACK_IMPORTED_MODULE_3__["HeadersComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"]],
        exports: [_headers_component__WEBPACK_IMPORTED_MODULE_3__["HeadersComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_headers_component__WEBPACK_IMPORTED_MODULE_3__["HeadersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"]],
          exports: [_headers_component__WEBPACK_IMPORTED_MODULE_3__["HeadersComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/posts/post-details/post-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/posts/post-details/post-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: PostDetailsComponent */

  /***/
  function srcAppPostsPostDetailsPostDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostDetailsComponent", function () {
      return PostDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PostDetailsComponent =
    /*#__PURE__*/
    function () {
      function PostDetailsComponent(route) {
        _classCallCheck(this, PostDetailsComponent);

        this.route = route;
      }

      _createClass(PostDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.route.params.subscribe(function (result) {
            return console.log(result['id']);
          });
        }
      }]);

      return PostDetailsComponent;
    }();

    PostDetailsComponent.ɵfac = function PostDetailsComponent_Factory(t) {
      return new (t || PostDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    PostDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostDetailsComponent,
      selectors: [["app-post-details"]],
      decls: 2,
      vars: 0,
      consts: [[1, "posts-content"], ["src", "https://www.npr.org/sections/coronavirus-live-updates/2020/03/24/820891370/coronavirus-n-y-infection-rate-is-doubling-about-every-3-days-cuomo-says"]],
      template: function PostDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n[_nghost-%COMP%]   .posts-content[_ngcontent-%COMP%] {\n  width: calc(100vw);\n  height: calc(100vh);\n}\n\n[_nghost-%COMP%]   .posts-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  z-index: 100;\n  border: none;\n  opacity: 1;\n  position: absolute;\n  font-family: \"Merriweather\", serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Xb3Jrc3BhY2UvdXNlcmZ1bC9zcmMvYXBwL3Bvc3RzL3Bvc3QtZGV0YWlscy9wb3N0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bvc3RzL3Bvc3QtZGV0YWlscy9wb3N0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FDQ2hCOztBREZBO0VBSUksa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQ0V2Qjs7QURQQTtFQVFNLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDZDQUE0QztBQ0dsRCIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3QtZGV0YWlscy9wb3N0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC5wb3N0cy1jb250ZW50IHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcblxuICAgIGlmcmFtZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0IC5wb3N0cy1jb250ZW50IHtcbiAgd2lkdGg6IGNhbGMoMTAwdncpO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xufVxuXG46aG9zdCAucG9zdHMtY29udGVudCBpZnJhbWUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiwgc2VyaWYgIWltcG9ydGFudDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-details',
          templateUrl: './post-details.component.html',
          styleUrls: ['./post-details.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/posts/posts.component.ts":
  /*!******************************************!*\
    !*** ./src/app/posts/posts.component.ts ***!
    \******************************************/

  /*! exports provided: PostsComponent */

  /***/
  function srcAppPostsPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsComponent", function () {
      return PostsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PostsComponent_ul_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quy t\u1EAFc 5 n\u0103m gi\xFAp t\u1EA1o ra t\u01B0\u01A1ng lai b\u1EA1n mong mu\u1ED1n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var number_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", number_r3);
      }
    }

    var _c0 = function _c0() {
      return [1, 2, 3, 4, 5];
    };

    var PostsComponent =
    /*#__PURE__*/
    function () {
      function PostsComponent(route) {
        _classCallCheck(this, PostsComponent);

        this.route = route;
      }

      _createClass(PostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PostsComponent;
    }();

    PostsComponent.ɵfac = function PostsComponent_Factory(t) {
      return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostsComponent,
      selectors: [["app-posts"]],
      decls: 6,
      vars: 2,
      consts: [[1, "posts"], [4, "ngFor", "ngForOf"], ["href", "javascript: void(0)", 3, "routerLink"]],
      template: function PostsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Ideas and thoughts on how development has a significant impact on the user experience through everything from security to performance. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostsComponent_ul_5_Template, 4, 1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n[_nghost-%COMP%]   .posts[_ngcontent-%COMP%] {\n  width: calc(900px + 3rem);\n  margin: 1rem auto;\n}\n\n[_nghost-%COMP%]   .posts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5em;\n  border-bottom: 1px dotted #d3d3d1;\n  line-height: 2em;\n}\n\n[_nghost-%COMP%]   .posts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #fff9b8;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Xb3Jrc3BhY2UvdXNlcmZ1bC9zcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUNDaEI7O0FERkE7RUFJSSx5QkFBeUI7RUFDekIsaUJBQWlCO0FDRXJCOztBRFBBO0VBUVEsY0FBYztFQUNkLGNBQWM7RUFFZCxpQ0FBaUM7RUFDakMsZ0JBQWdCO0FDRXhCOztBRGRBO0VBZVUsbUJBQW1CO0VBQ25CLGVBQWU7QUNHekIiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLnBvc3RzIHtcbiAgICB3aWR0aDogY2FsYyg5MDBweCArIDNyZW0pO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIGxpIHtcbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgIC8vYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjZDNkM2QxO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNkM2QzZDE7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjliODtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0IC5wb3N0cyB7XG4gIHdpZHRoOiBjYWxjKDkwMHB4ICsgM3JlbSk7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xufVxuXG46aG9zdCAucG9zdHMgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZDNkM2QxO1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxuXG46aG9zdCAucG9zdHMgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY5Yjg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-posts',
          templateUrl: './posts.component.html',
          styleUrls: ['./posts.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/posts/posts.module.ts":
  /*!***************************************!*\
    !*** ./src/app/posts/posts.module.ts ***!
    \***************************************/

  /*! exports provided: PostsModule */

  /***/
  function srcAppPostsPostsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsModule", function () {
      return PostsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./posts.component */
    "./src/app/posts/posts.component.ts");
    /* harmony import */


    var _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./post-details/post-details.component */
    "./src/app/posts/post-details/post-details.component.ts");

    var routes = [{
      path: "posts",
      children: [{
        path: "",
        component: _posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"]
      }, {
        path: ":id",
        component: _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_4__["PostDetailsComponent"]
      }]
    }];

    var PostsModule = function PostsModule() {
      _classCallCheck(this, PostsModule);
    };

    PostsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PostsModule
    });
    PostsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PostsModule_Factory(t) {
        return new (t || PostsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsModule, {
        declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"], _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_4__["PostDetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"], _post_details_post_details_component__WEBPACK_IMPORTED_MODULE_4__["PostDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/weather/new-details/new-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/weather/new-details/new-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: NewDetailsComponent */

  /***/
  function srcAppWeatherNewDetailsNewDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewDetailsComponent", function () {
      return NewDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../weather.service */
    "./src/app/weather/weather.service.ts");

    var NewDetailsComponent =
    /*#__PURE__*/
    function () {
      function NewDetailsComponent(data, sanitizer, weatherService) {
        _classCallCheck(this, NewDetailsComponent);

        this.sanitizer = sanitizer;
        this.weatherService = weatherService;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(data.url);
      }

      _createClass(NewDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.weatherService.fetch().subscribe();
        }
      }]);

      return NewDetailsComponent;
    }();

    NewDetailsComponent.ɵfac = function NewDetailsComponent_Factory(t) {
      return new (t || NewDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]));
    };

    NewDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewDetailsComponent,
      selectors: [["app-new-details"]],
      decls: 3,
      vars: 1,
      consts: [["type", "text/html", 2, "width", "100%", "height", "100%", 3, "data"]],
      template: function NewDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "object", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "backup content in case it doesn't work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      },
      styles: [".new-details[_ngcontent-%COMP%] {\n  width: calc(100vw);\n  height: calc(100vh);\n}\n\n.new-details[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  z-index: 100;\n  border: none;\n  opacity: 1;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Xb3Jrc3BhY2UvdXNlcmZ1bC9zcmMvYXBwL3dlYXRoZXIvbmV3LWRldGFpbHMvbmV3LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dlYXRoZXIvbmV3LWRldGFpbHMvbmV3LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FDQ3JCOztBREhBO0VBSUksWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0FDR2hCIiwiZmlsZSI6InNyYy9hcHAvd2VhdGhlci9uZXctZGV0YWlscy9uZXctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctZGV0YWlscyB7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcbiAgaWZyYW1lIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuXG4iLCIubmV3LWRldGFpbHMge1xuICB3aWR0aDogY2FsYygxMDB2dyk7XG4gIGhlaWdodDogY2FsYygxMDB2aCk7XG59XG5cbi5uZXctZGV0YWlscyBpZnJhbWUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-details',
          templateUrl: './new-details.component.html',
          styleUrls: ['./new-details.component.scss']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/weather/weather.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/weather/weather.component.ts ***!
    \**********************************************/

  /*! exports provided: WeatherComponent */

  /***/
  function srcAppWeatherWeatherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherComponent", function () {
      return WeatherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./weather.service */
    "./src/app/weather/weather.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    function WeatherComponent_div_0_a_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherComponent_div_0_a_4_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var article_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.openReader(article_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var article_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", article_r7.urlToImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r7.title);
      }
    }

    function WeatherComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WeatherComponent_div_0_a_4_Template, 4, 2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Page 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var articles_r5 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", articles_r5);
      }
    }

    var WeatherComponent =
    /*#__PURE__*/
    function () {
      function WeatherComponent(weatherService, dialog) {
        _classCallCheck(this, WeatherComponent);

        this.weatherService = weatherService;
        this.dialog = dialog;
      }

      _createClass(WeatherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.$articles = this.weatherService.fetch();
        }
      }, {
        key: "openReader",
        value: function openReader(article) {}
      }]);

      return WeatherComponent;
    }();

    WeatherComponent.ɵfac = function WeatherComponent_Factory(t) {
      return new (t || WeatherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    WeatherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WeatherComponent,
      selectors: [["app-weather"]],
      decls: 2,
      vars: 3,
      consts: [["class", "some-page-wrapper", "fxLayout", "row wrap", "fxLayoutGap", "1rem", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutGap", "1rem", 1, "some-page-wrapper"], ["fxFlex", "450px", "fxLayout", "column"], ["fxLayout", "row", 3, "click", 4, "ngFor", "ngForOf"], ["fxFlex", "450px"], ["fxLayout", "row", 3, "click"], ["fxFlex", "75px", "height", "50px", 3, "src"], ["fxFlex", "", 2, "margin-left", "1rem"]],
      template: function WeatherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeatherComponent_div_0_Template, 8, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.$articles));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".some-page-wrapper[_ngcontent-%COMP%] {\n  max-width: calc(900px + 5rem);\n  margin: 1rem auto;\n}\n\n.some-page-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-bottom: 1px dotted rgba(0, 0, 0, 0.6);\n  padding: 0.5rem;\n}\n\n.some-page-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  border-radius: 8px;\n}\n\n.some-page-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #fff9b8;\n  cursor: pointer;\n}\n\n.first[_ngcontent-%COMP%] {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Xb3Jrc3BhY2UvdXNlcmZ1bC9zcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQ0FuQjs7QURGQTtFQUtJLDRDQUF3QztFQUN4QyxlQUFlO0FDQ25COztBRFBBO0VBU00sa0JBQWtCO0VBR2xCLGtCQUFrQjtBQ0V4Qjs7QURkQTtFQWVNLG1CQUFtQjtFQUNuQixlQUFlO0FDR3JCOztBRENBO0VBQ0UsYUFBYTtBQ0VmIiwiZmlsZSI6InNyYy9hcHAvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc29tZS1wYWdlLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IGNhbGMoOTAwcHggKyA1cmVtKTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG5cbiAgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2JhKDAsMCwwLC42KTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG5cbiAgICBpbWcge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmOWI4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuLmZpcnN0IHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbiIsIi5zb21lLXBhZ2Utd3JhcHBlciB7XG4gIG1heC13aWR0aDogY2FsYyg5MDBweCArIDVyZW0pO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbn1cblxuLnNvbWUtcGFnZS13cmFwcGVyIGEge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uc29tZS1wYWdlLXdyYXBwZXIgYSBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uc29tZS1wYWdlLXdyYXBwZXIgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY5Yjg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpcnN0IHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-weather",
          templateUrl: "./weather.component.html",
          styleUrls: ["./weather.component.scss"]
        }]
      }], function () {
        return [{
          type: _weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/weather/weather.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/weather/weather.module.ts ***!
    \*******************************************/

  /*! exports provided: WeatherModule */

  /***/
  function srcAppWeatherWeatherModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherModule", function () {
      return WeatherModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _weather_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./weather.component */
    "./src/app/weather/weather.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _new_details_new_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./new-details/new-details.component */
    "./src/app/weather/new-details/new-details.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var routes = [{
      path: "",
      component: _weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"]
    }];

    var WeatherModule = function WeatherModule() {
      _classCallCheck(this, WeatherModule);
    };

    WeatherModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WeatherModule
    });
    WeatherModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WeatherModule_Factory(t) {
        return new (t || WeatherModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WeatherModule, {
        declarations: [_weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"], _new_details_new_details_component__WEBPACK_IMPORTED_MODULE_8__["NewDetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"], _new_details_new_details_component__WEBPACK_IMPORTED_MODULE_8__["NewDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/weather/weather.service.ts":
  /*!********************************************!*\
    !*** ./src/app/weather/weather.service.ts ***!
    \********************************************/

  /*! exports provided: WeatherService */

  /***/
  function srcAppWeatherWeatherServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherService", function () {
      return WeatherService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var WeatherService =
    /*#__PURE__*/
    function () {
      function WeatherService(http) {
        _classCallCheck(this, WeatherService);

        this.http = http;
      }

      _createClass(WeatherService, [{
        key: "fetch",
        value: function fetch() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("X-Api-Key", "1566c526ba3f4f018965649ef26bcd07");
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("country", "us");
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].newApiUrl, {
            params: params,
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            return resp["articles"];
          }));
        }
      }]);

      return WeatherService;
    }();

    WeatherService.ɵfac = function WeatherService_Factory(t) {
      return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    WeatherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WeatherService,
      factory: WeatherService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      newApiUrl: 'http://newsapi.org/v2/top-headlines'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/admin/Workspace/userful/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map