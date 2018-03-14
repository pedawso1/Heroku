webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.browser.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBrowserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/*#fullPage{*/\r\n  /*display:flex;*/\r\n  /*flex-direction: column;*/\r\n  /*min-height: 100vh;*/\r\n  /*}*/\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id = \"fullPage\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isDirty = false;
        this.title = 'app';
    }
    AppComponent.prototype.canDeactive = function () {
        return !this.isDirty;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_form_component__ = __webpack_require__("./src/app/login/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authguard_guard__ = __webpack_require__("./src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reject_reject_component__ = __webpack_require__("./src/app/reject/reject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_accordion__ = __webpack_require__("./node_modules/primeng/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_carousel__ = __webpack_require__("./node_modules/primeng/carousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_primeng_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_panel__ = __webpack_require__("./node_modules/primeng/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_growl__ = __webpack_require__("./node_modules/primeng/growl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_growl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_growl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_card__ = __webpack_require__("./node_modules/primeng/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__application_application_component__ = __webpack_require__("./src/app/application/application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__appselect_appselect_component__ = __webpack_require__("./src/app/appselect/appselect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__new_form_new_form_component__ = __webpack_require__("./src/app/new-form/new-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__review_app_review_app_component__ = __webpack_require__("./src/app/review-app/review-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_primeng_tristatecheckbox__ = __webpack_require__("./node_modules/primeng/tristatecheckbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_primeng_tristatecheckbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_primeng_tristatecheckbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_primeng_splitbutton__ = __webpack_require__("./node_modules/primeng/splitbutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_primeng_splitbutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_primeng_splitbutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_primeng_togglebutton__ = __webpack_require__("./node_modules/primeng/togglebutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_primeng_togglebutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_primeng_togglebutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_primeng_inputswitch__ = __webpack_require__("./node_modules/primeng/inputswitch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_primeng_inputswitch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_primeng_inputswitch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_primeng_confirmdialog__ = __webpack_require__("./node_modules/primeng/confirmdialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_primeng_confirmdialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_primeng_confirmdialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_primeng_menu__ = __webpack_require__("./node_modules/primeng/menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_primeng_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_primeng_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_primeng_panelmenu__ = __webpack_require__("./node_modules/primeng/panelmenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_primeng_panelmenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_primeng_panelmenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_primeng_overlaypanel__ = __webpack_require__("./node_modules/primeng/overlaypanel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_primeng_overlaypanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_primeng_overlaypanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_primeng_inplace__ = __webpack_require__("./node_modules/primeng/inplace.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_primeng_inplace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_primeng_inplace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_primeng_datatable__ = __webpack_require__("./node_modules/primeng/datatable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_primeng_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_primeng_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_primeng_blockui__ = __webpack_require__("./node_modules/primeng/blockui.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_primeng_blockui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_primeng_blockui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_primeng_chart__ = __webpack_require__("./node_modules/primeng/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_primeng_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_primeng_chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_primeng_tabmenu__ = __webpack_require__("./node_modules/primeng/tabmenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_primeng_tabmenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_primeng_tabmenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_primeng_sidebar__ = __webpack_require__("./node_modules/primeng/sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_primeng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42_primeng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_primeng_datascroller__ = __webpack_require__("./node_modules/primeng/datascroller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_primeng_datascroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_primeng_datascroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_primeng_fileupload__ = __webpack_require__("./node_modules/primeng/fileupload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_primeng_fileupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44_primeng_fileupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_primeng_keyfilter__ = __webpack_require__("./node_modules/primeng/keyfilter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_primeng_keyfilter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45_primeng_keyfilter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














 //accordion and accordion tab




 //api


























var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__login_login_form_component__["a" /* LoginFormComponent */]
    },
    {
        path: '',
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__authguard_guard__["a" /* AuthguardGuard */]],
        children: [
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */]
            },
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
            },
            {
                path: 'appselect',
                component: __WEBPACK_IMPORTED_MODULE_24__appselect_appselect_component__["a" /* AppselectComponent */],
            },
            {
                path: 'review',
                component: __WEBPACK_IMPORTED_MODULE_27__review_app_review_app_component__["a" /* ReviewAppComponent */],
            },
            {
                path: 'newForm',
                component: __WEBPACK_IMPORTED_MODULE_25__new_form_new_form_component__["a" /* NewFormComponent */],
            },
            {
                path: 'application',
                component: __WEBPACK_IMPORTED_MODULE_22__application_application_component__["a" /* ApplicationComponent */],
            }
        ]
    },
    {
        path: 'reject',
        component: __WEBPACK_IMPORTED_MODULE_11__reject_reject_component__["a" /* RejectComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__reject_reject_component__["a" /* RejectComponent */],
                __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_22__application_application_component__["a" /* ApplicationComponent */],
                __WEBPACK_IMPORTED_MODULE_24__appselect_appselect_component__["a" /* AppselectComponent */],
                __WEBPACK_IMPORTED_MODULE_25__new_form_new_form_component__["a" /* NewFormComponent */],
                __WEBPACK_IMPORTED_MODULE_27__review_app_review_app_component__["a" /* ReviewAppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_41_primeng_tabmenu__["TabMenuModule"],
                __WEBPACK_IMPORTED_MODULE_42_primeng_sidebar__["SidebarModule"],
                __WEBPACK_IMPORTED_MODULE_38_primeng_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_43_primeng_datascroller__["DataScrollerModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_40_primeng_chart__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_growl__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_18_primeng_panel__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_37_primeng_inplace__["InplaceModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["InputTextareaModule"],
                __WEBPACK_IMPORTED_MODULE_16_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_39_primeng_blockui__["BlockUIModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["CodeHighlighterModule"],
                __WEBPACK_IMPORTED_MODULE_45_primeng_keyfilter__["KeyFilterModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_accordion__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["RouterModule"].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_36_primeng_overlaypanel__["OverlayPanelModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_21_primeng_card__["CardModule"],
                __WEBPACK_IMPORTED_MODULE_23_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_28_primeng_tristatecheckbox__["TriStateCheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_44_primeng_fileupload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_29_primeng_splitbutton__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_30_primeng_togglebutton__["ToggleButtonModule"],
                __WEBPACK_IMPORTED_MODULE_31_primeng_inputswitch__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_32_primeng_confirmdialog__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_33_primeng_menu__["MenuModule"],
                __WEBPACK_IMPORTED_MODULE_35_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_17_primeng_carousel__["CarouselModule"],
                __WEBPACK_IMPORTED_MODULE_34_primeng_panelmenu__["PanelMenuModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__authguard_guard__["a" /* AuthguardGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/application/application.component.css":
/***/ (function(module, exports) {

module.exports = ".old-form {\r\n  background-color: orange !important;\r\n  color: black !important;\r\n}\r\n\r\n\r\n.grey{\r\n  background-color: #cccccc;\r\n  background: #cccccc;\r\n}\r\n\r\n\r\n.very-old-form {\r\n  background-color: red !important;\r\n  color: black !important;\r\n}\r\n\r\n\r\n.new-form {\r\n  background-color: lawngreen !important;\r\n  color: black !important;\r\n}\r\n\r\n\r\n.button {\r\n\r\n  display: inline-block;\r\n  border-radius: 4px;;\r\n  background-color: black;\r\n  font-family: Arial;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  padding: 12px;\r\n  width: 130px;\r\n  -webkit-transition: all 0.5s;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n  margin-left: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/application/application.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<p-tabMenu [model]=\"items\" [activeItem]=\"items[0]\">\n\n</p-tabMenu>\n\n\n<p-carousel headerText=\"Pending Validation\" [value]=\"form\">\n\n  <ng-template let-f pTemplate=\"item\">\n\n\n    <div class=\"ui-grid ui-grid-responsive\">\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\"><img src=\"../../assets/folder.pmg.png\" width=\"40\"></div>\n      </div>\n      <div class=\"ui-grid-row grey\">\n        <div class=\"ui-grid-col-6\">ID:</div>\n        <div class=\"ui-grid-col-6\">{{f.formId}}</div>\n      </div>\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-6\">Cost:</div>\n        <div class=\"ui-grid-col-6\">${{f.cost}}</div>\n      </div>\n      <div class=\"ui-grid-row grey\">\n        <div class=\"ui-grid-col-6\">Description:</div>\n        <div class=\"ui-grid-col-6\">{{f.description}}</div>\n      </div>\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-6\">Event:</div>\n        <div class=\"ui-grid-col-6\">{{f.event}}</div>\n      </div>\n      <div class=\"ui-grid-row grey\">\n        <div class=\"ui-grid-col-6\">Location:</div>\n        <div class=\"ui-grid-col-6\">{{f.location}}</div>\n      </div>\n\n\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-6\">\n          <button type=\"text\" (click)=\"display = true\" pButton icon=\"fa-external-link-square\" label=\"Show\"></button>\n        </div>\n        <div class=\"ui-grid-col-6\">\n          <button type=\"button\" pButton icon=\"fa fa-table\" (click)=\"selectForm(f)\"></button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</p-carousel>\n\n\n<p-sidebar [(visible)]=\"display\">\n\n  <!--<p-dataScroller [value]=\"comments\" [rows]=\"10\" [inline]=\"true\" scrollHeight=\"500px\">-->\n  <p-header>\n  </p-header>\n  <!--<ng-template let-f pTemplate=\"item\">-->\n  <div class=\"ui-g form-item\">\n    <div class=\"ui-g-12 ui-md-3\">\n      <img src=\"../../assets/form.png\">\n    </div>\n    <div class=\"ui-g-12 ui-md-9\">\n      <div class=\"ui-g\">\n            <span class=\"ui-float-label\">\n    <input id=\"float-input\" type=\"text\" pInputText>\n    <label for=\"float-input\">Comment</label>\n            </span>\n        <div class=\"ui-inputgroup\">\n          <input type=\"submit\" value=\"SUBMIT\" (click)=\"commentLog($event)\" class=\"button\">\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--</ng-template>-->\n\n</p-sidebar>\n\n"

/***/ }),

/***/ "./src/app/application/application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent(router, user, route, http) {
        this.router = router;
        this.user = user;
        this.route = route;
        this.http = http;
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.user.getUserManager()) {
            //
            this.items = [
                { label: 'Profile', icon: 'fa-support', command: function (event) { _this.router.navigate(['profile']); } },
                { label: 'New Forms', icon: 'fa-calendar', command: function (event) { _this.router.navigate(['newForm']); } },
                { label: 'Current Forms', icon: 'fa-bar-chart', command: function (event) { _this.router.navigate(['application']); } },
            ];
        }
        else {
            this.items = [
                { label: 'Profile', icon: 'fa-support', command: function (event) { _this.router.navigate(['profile']); } },
                { label: 'New Forms', icon: 'fa-calendar', command: function (event) { _this.router.navigate(['newForm']); } },
                { label: 'Current Forms', icon: 'fa-bar-chart', command: function (event) { _this.router.navigate(['application']); } },
                { label: 'Review Forms', icon: 'fa-book', command: function (event) { _this.router.navigate(['review']); } },
            ];
        }
        var url = 'http://localhost:9999/RevCo/FormServlet';
        var req = this.http.post(url, {
            userName: this.user.getUsername()
        })
            .subscribe(function (res) {
            _this.form = JSON.parse(JSON.stringify(res));
            _this.cols = [
                { field: 'formId', header: 'ID' },
                { field: 'cost', header: 'Cost' },
                { field: 'location', header: 'Location' },
                { field: 'description', header: 'Description' },
                { field: 'date', header: 'Date' },
                { field: 'event', header: 'Event' },
                { field: 'workExcuse', header: 'Reason' },
                { field: 'warn', header: 'warn' }
            ];
            _this.location = _this.form.location;
            _this.formId = _this.form.formId;
            _this.cost = _this.form.cost;
            _this.date = _this.form.date;
            _this.workExcuse = _this.form.workExcuse;
            _this.event = _this.form.event;
            _this.description = _this.form.description;
            _this.approve = _this.form.approve;
            _this.submitWarn = _this.form.submitWarn;
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    };
    ApplicationComponent.prototype.selectForm = function (f) {
        this.msgs = [];
        if (f.submitWarn) {
            this.msgs.push({ severity: 'danger', summary: 'URGENT', detail: 'Submitted:' + f.date + " " + f.time });
        }
        else if (f.warn == 0) {
            this.msgs.push({ severity: 'danger', summary: 'Expiration Warning', detail: 'Submitted:' + f.date + " " + f.time });
        }
        else if (f.warn == (-1)) {
            this.msgs.push({ severity: 'warning', summary: 'Expiration Notice', detail: 'Submitted:' + f.date + " " + f.time });
        }
        else if (f.warn == (-2)) {
            this.msgs.push({ severity: 'success', summary: 'New Form', detail: 'Submitted:' + f.date + " " + f.time });
        }
    };
    ApplicationComponent.prototype.commentLog = function (e) {
        var url = 'http://localhost:9999/RevCo/comment';
        var req = this.http.post(url, {
            id: e.formId,
            username: this.user.getUserManager(),
            comment: e.target.elements[0].value
        })
            .subscribe(function (res) {
        });
    };
    ApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-application',
            template: __webpack_require__("./src/app/application/application.component.html"),
            styles: [__webpack_require__("./src/app/application/application.component.css")],
            styles: ['.ui-grid-row{' +
                    'text-align:center;}' +
                    '.ui-grid{' +
                    'margin: 10px 0px;' +
                    '}' +
                    '.ui-grid-row > div{' +
                    ' paddingL 4px 10px;' +
                    '}'
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], ApplicationComponent);
    return ApplicationComponent;
}());



/***/ }),

/***/ "./src/app/appselect/appselect.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.button {\r\n\r\n  display: inline-block;\r\n  border-radius: 4px;;\r\n  background-color: black;\r\n  font-family: Arial;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  padding: 12px;\r\n  width: 130px;\r\n  -webkit-transition: all 0.5s;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n  margin-left: 15px;\r\n}\r\n\r\n.button:hover {\r\n  padding-right: 17px;\r\n  background-color: #eeeeee;\r\n\r\n}\r\n\r\n.group .button:not(:last-child) {\r\n  border-bottom: none; /* Prevent double borders */\r\n}\r\n\r\n.button:hover {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n.group  {\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  width: 150px;\r\n  display: block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/appselect/appselect.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"group\">\n    <a routerLink=\"/newForm\" class=\"button\">New Forms</a>\n    <a routerLink=\"/application\" class=\"button\">Old Forms</a>\n    <div *ngIf=\"this.userMgr\">\n      <a routerLink=\"/review\" class=\"button\">Review Forms</a>\n    </div>\n  </div>\n</form>\n\n"

/***/ }),

/***/ "./src/app/appselect/appselect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppselectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppselectComponent = /** @class */ (function () {
    function AppselectComponent(user) {
        this.user = user;
        this.userMgr = this.user.getUserManager();
    }
    AppselectComponent.prototype.ngOnInit = function () {
    };
    AppselectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appselect',
            template: __webpack_require__("./src/app/appselect/appselect.component.html"),
            styles: [__webpack_require__("./src/app/appselect/appselect.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], AppselectComponent);
    return AppselectComponent;
}());



/***/ }),

/***/ "./src/app/authguard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardGuard = /** @class */ (function () {
    function AuthguardGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        if (this.user.getUserLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate([''], {
                queryParams: {
                    return: state.url
                }
            });
            return false;
        }
    };
    AuthguardGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AuthguardGuard);
    return AuthguardGuard;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.button {\r\n\r\n  display: inline-block;\r\n  border-radius: 4px;;\r\n  background-color: black;\r\n  font-family: Arial;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  padding: 12px;\r\n  width: 130px;\r\n  -webkit-transition: all 0.5s;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n  margin-left: 15px;\r\n}\r\n\r\n.button:hover {\r\n  padding-right: 17px;\r\n  background-color: #eeeeee;\r\n\r\n}\r\n\r\n.group .button:not(:last-child) {\r\n  border-bottom: none; /* Prevent double borders */\r\n}\r\n\r\n.button:hover {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n.group  {\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  width: 150px;\r\n  display: block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"userCurrent($event)\">\n\n  <div class=\"group\">\n\n    <a routerLink=\"/profile\" class=\"button\">Profile</a>\n    <a routerLink=\"/appselect\" class=\"button\">Applications</a>\n    <button class=\"button\">Notifications</button>\n    <button class=\"button\">Setting</button>\n    <a routerLink=\"/\" class=\"button\">Logout</a>\n  </div>\n\n</form>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(user, router) {
        this.user = user;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.userCurrent = function (e) {
        // switch(e.target.elements[0].value){
        //   case("Profile"):{
        //     this.router.navigate(['profile']);
        //     break;
        //   }
        //   case("Application"):{
        //     this.router.navigate(['application']);
        //     break;
        //   }
        // }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"ui-g-6\"><a routerLink=\"/\" class=\"button\">-----</a></div>\n<div></div>\n\n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "header {\r\n  /*text-align: center;*/\r\n  padding: 75px 0;\r\n\r\n\r\n  max-width: 100%;\r\n\r\n\r\n\r\n}\r\n\r\n.gold{\r\n  font-size: 80px;\r\n  font-family: Magneto;\r\n  background:url('portoro.0e7d727783cd9f6f3872.png');\r\n  background-repeat:repeat-x;\r\n  background-position:0 0;\r\n  text-align:center;\r\n  color:transparent;\r\n  -webkit-font-smoothing:antialiased;\r\n  -webkit-background-clip:text;\r\n  -webkit-text-fill-color:transparent;\r\n  margin:0;\r\n\r\n}\r\n\r\n.sizing{\r\n\r\n  top-margin: 5%;\r\n  max-height: 97%;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  background: url('headerback.376f54d9f31526474be9.png');\r\n  background-position: 50% 50%;\r\n  background-repeat: no-repeat;\r\n\r\n}\r\n\r\n.d{\r\n  margin:0;\r\n  padding:0;\r\n}\r\n\r\nbody{\r\n\r\n  background:url('golden.70fe2d0b83dcc06bbbe2.png');\r\n  height: 100%;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding-top: 6px;\r\n  padding-bottom: 6px;\r\n  color: black;\r\n  border-bottom: 3px solid;\r\n}\r\n\r\n.button {\r\n\r\n  display: inline-block;\r\n  margin: 0;\r\n  background-color: black;\r\n  font-family: Arial;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 10px;\r\n  padding: 0;\r\n  width: 130px;\r\n\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"sizing\">\n    <header><p class=\"gold\">Revature Gold</p></header>\n  </div>\n</body>\n\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login-form.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.box{\r\n  margin-bottom: 150px;\r\n}\r\n\r\ndiv.input {\r\n\r\n  position: relative;\r\n}\r\n\r\ninput[type=text]:focus{\r\n\r\n  opacity: 0.5;\r\n}\r\n\r\ninput[type=password]:focus{\r\n  opacity: 0.5;\r\n}\r\n\r\ninput[type=text]{\r\n  border: none;\r\n  bottom-border: 2px solid white;\r\n  width: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  border: 2px solid whitesmoke;\r\n  border-radius: 4px;\r\n  font-size: 16px;\r\n  background-color: lightgoldenrodyellow;\r\n  background-image: url('data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAA10lEQVR4AbXSMUoDURRG4U8HLVPoBgJiJ1hnI9mC2KYTdIgryCLUFAYsLERwAfZ2dinEWlOa4PMVIo+5TIyo57Tnh1tcf0Gl7z7bV/mWjoGp9OnUQEcrXSMzqeHMSFegZ2Ihtbgw0VMireB/DR5+NjhXGS4bxNwKg5jHwTxc3MzflHiWsrXKWMyznii5k7JDVC5inr2l5FgqJjFPjijZlYpJzN/taHBTTJp5ci2wv+T55vaInLYOaoisu5JEL61pYdM45Gc2LOXQ61f84sAKbKs9Zk9s+T0fIzkQalttDloAAAAASUVORK5CYII=');\r\n  background-position: 2px 3px;\r\n  background-repeat: no-repeat;\r\n  opacity: 0.65;\r\n  padding: 5px;\r\n  padding-left: 40px;\r\n  -o-border-image: url('golden.70fe2d0b83dcc06bbbe2.png');\r\n     border-image: url('golden.70fe2d0b83dcc06bbbe2.png');\r\n\r\n\r\n}\r\n\r\ninput[type=password]{\r\n  border: none;\r\n  bottom-border: 2px solid white;\r\n  width: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  -o-border-image: url('golden.70fe2d0b83dcc06bbbe2.png');\r\n     border-image: url('golden.70fe2d0b83dcc06bbbe2.png');;\r\n  border: 2px solid whitesmoke;\r\n  border-radius: 4px;\r\n  font-size: 16px;\r\n  background-color: lightgoldenrodyellow;\r\n  background-image: url('data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAi0lEQVR4Ae3LS06FQBQG4W9kswAeiY8d+gr7MiF3G1wSQdeizHDSA4g0rXPqH52cKv/gpNAazGaDViHDg0/Lah/uHVBEfb1JkKS17OxJkiEqb0qVznIwMMejBPXfgwo0+eAaj06tcckHr7uvR5GtDMH0S393kw64M2700S1HAcGL3pdvvWeBdHCS5wegDJwz2ktQMAAAAABJRU5ErkJggg==');\r\n  background-position: 2px 2px;\r\n  background-repeat: no-repeat;\r\n  opacity: 0.65;\r\n  padding: 5px;\r\n  padding-left: 40px;\r\n\r\n\r\n}\r\n\r\ninput[type=text]:focus{\r\n  border: 3px solid black;\r\n}\r\n\r\ninput[type=password]:focus{\r\n  border: 3px solid black;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.inside{\r\n  font-size: 15px;\r\n  font-family: \"Arial Black\";\r\n  color: fuchsia;\r\n}\r\n\r\n.button {\r\n\r\n  display: block;\r\n  border-radius: 4px;;\r\n  background-color: black;\r\n  font-family: \"Arial Black\";\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  padding: 0;\r\n  width: 130px;\r\n  -webkit-transition: all 0.5s;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: auto;\r\n}\r\n\r\n.button:hover {\r\n  color: gold;\r\n  border: 2px black;\r\n  color: darkmagenta;\r\n  background-repeat: no-repeat;\r\n\r\n\r\n}\r\n\r\n.button:hover {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\ndiv.input{\r\n\r\n  padding: 10px;\r\n  font-size: 25px;\r\n\r\n\r\n}\r\n\r\ndiv.input{\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p-growl [(value)]=\"msgs\"></p-growl>\n\n<form (submit)=\"loginUser($event)\">\n  <div class=\"box\">\n    <div class=\"input\">\n      <input type=\"text\" placeholder=\"...\" class=\"inside\">\n    </div>\n    <div class=\"input\">\n      <input pInputText type=\"password\" pKeyFilter=\"alphanum\" placeholder=\"...\" class=\"inside\">\n    </div>\n    <div class=\"input\">\n      <input pInputText type=\"submit\" value=\"LOGIN\" class=\"button ui-g-6\">\n    </div>\n  </div>\n</form>\n\n"

/***/ }),

/***/ "./src/app/login/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_common_messageservice__ = __webpack_require__("./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_components_common_messageservice__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(fb, router, user, route, http) {
        this.fb = fb;
        this.router = router;
        this.user = user;
        this.route = route;
        this.http = http;
        this.return = '';
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.loginUser = function (e) {
        var _this = this;
        e.preventDefault();
        var url = 'http://localhost:9999/RevCo/LoginServlet';
        var req = this.http.post(url, {
            userName: e.target.elements[0].value,
            passWord: e.target.elements[1].value
        })
            .subscribe(function (res) {
            _this.msgs = [];
            _this.user.setUsername(e.target.elements[0].value);
            var auth = JSON.parse(JSON.stringify(res));
            if (auth.Authenticate) {
                _this.user.setUserLoggedIn();
                _this.user.setManager(auth.Manager);
                _this.user.setUserCurrentPage('profile');
                _this.router.navigate(['profile']);
            }
            else {
                _this.msgs.push({ severity: 'ui-messages-error', summary: 'INVLAID', detail: 'Verification Failed' });
            }
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
        // let options = new Options({ headers: headers });
        // Observable <HttpResponse> ob = (this.http.post(url, complexdata));
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login-form.component.html"),
            styles: [__webpack_require__("./src/app/login/login-form.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5_primeng_components_common_messageservice__["MessageService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/new-form/new-form.component.css":
/***/ (function(module, exports) {

module.exports = "\r\ninput[type=text]{\r\n  border: none;\r\n  bottom-border: 2px solid white;\r\n  width: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  border: 2px solid whitesmoke;\r\n  border-radius: 4px;\r\n  font-size: 16px;\r\n  background-color: white;\r\n  background-position: 2px 3px;\r\n  background-repeat: no-repeat;\r\n  opacity: 0.65;\r\n  padding: 5px;\r\n  padding-left: 40px;\r\n\r\n\r\n}\r\ninput[type=password]{\r\n  border: none;\r\n  bottom-border: 2px solid white;\r\n  width: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  border: 2px solid whitesmoke;\r\n  border-radius: 4px;\r\n  font-size: 16px;\r\n  background-color: white;\r\n  background-position: 2px 2px;\r\n  background-repeat: no-repeat;\r\n  opacity: 0.65;\r\n  padding: 5px;\r\n  padding-left: 40px;\r\n\r\n\r\n}\r\ninput[type=text]:focus{\r\n  border: 3px solid black;\r\n}\r\ninput[type=password]:focus{\r\n  border: 3px solid black;\r\n}\r\n.button {\r\n\r\n  display: inline-block;\r\n  border-radius: 4px;;\r\n  background-color: black;\r\n  font-family: Arial;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  padding: 12px;\r\n  width: 130px;\r\n  -webkit-transition: all 0.5s;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n  margin-left: 15px;\r\n}\r\n.button:hover {\r\n  padding-right: 17px;\r\n  background-color: #eeeeee;\r\n\r\n}\r\n.button:hover {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/new-form/new-form.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabMenu [model]=\"items\" [activeItem]=\"items[0]\">\r\n</p-tabMenu>\r\n\r\n<form [formGroup]=\"fForm\" (ngSubmit)=\"loginUser(fForm.value)\">\r\n  <div class=\"ui-g ui-fluid\">\r\n    <div class=\"ui-g-6 ui-md-3 ui-g-offset-2\">\r\n      <div class=\"ui-inputgroup\">\r\n        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n        <input pInputText type=\"text\" formControlName=\"location\" placeholder=\"Location\"  pKeyFilter=\"alphanum\"/>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!fForm.controls['location'].valid&&fForm.controls['location'].dirty\">\r\n            <i class=\"fa fa-close\"></i>\r\n            Location is required\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-6 ui-md-3\">\r\n      <div class=\"ui-inputgroup\">\r\n        <span class=\"ui-inputgroup-addon\">$</span>\r\n        <input pInputText type=\"text\"  pKeyFilter=\"int\" formControlName=\"cost\" placeholder=\"Expense\"/>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!fForm.controls['cost'].valid&&fForm.controls['cost'].dirty\">\r\n            <i class=\"fa fa-close\"></i>\r\n            Cost is required\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-6 ui-md-3\">\r\n      <div class=\"ui-inputgroup\">\r\n        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n        <input pInputText type=\"text\" formControlName=\"work\" pKeyFilter=\"alphanum\" placeholder=\"Work Reason\"/>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!fForm.controls['work'].valid&&fForm.controls['work'].dirty\">\r\n            <i class=\"fa fa-close\"></i>\r\n            Reason is required\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g ui-fluid\">\r\n\r\n    <div class=\"ui-g-6 ui-md-3 ui-g-offset-2\">\r\n      <div class=\"ui-inputgroup\">\r\n        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n        <p-dropdown [options]=\"evtType\" [style]=\"{'width':'150px'}\" formControlName=\"event\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-6 ui-md-3\">\r\n      <div class=\"ui-inputgroup\">\r\n        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n        <p-dropdown [options]=\"grdType\" [style]=\"{'width':'150px'}\" formControlName=\"grade\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-4 ui-md-3\">\r\n      <div class=\"ui-inputgroup\">\r\n        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n        <p-calendar formControlName=\"date\" hourFormat=\"12\" dateFormat=\"yy.mm.ddT\" placeholder=\"Date\"\r\n                    [showTime]=\"true\"></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-4 ui-md-2 ui-g-offset-2\">\r\n      <div class=\"ui-inputgroup\">\r\n        <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n        <textarea pInputTextarea pKeyFilter=\"alphanum\" placeholder=\"Description\" [(ngModel)]=\"descriptions\"\r\n                  [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-6 ui-md-4 ui-g-offset-2\">\r\n    <div class=\"ui-inputgroup\">\r\n      <input type=\"submit\" value=\"SUBMIT\" class=\"button\">\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n\r\n<div></div>\r\n"

/***/ }),

/***/ "./src/app/new-form/new-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("./src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewFormComponent = /** @class */ (function () {
    function NewFormComponent(fb, router, user, route, http) {
        this.fb = fb;
        this.router = router;
        this.user = user;
        this.route = route;
        this.http = http;
        this.descriptions = "";
        this.evtType = [
            { label: 'Events', value: null },
            { label: 'University Courses', value: 1 },
            { label: 'Seminars', value: 2 },
            { label: 'Cert Prep Classes', value: 3 },
            { label: 'Certification', value: 4 },
            { label: 'Technical Training', value: 5 },
            { label: 'Other', value: 6 }
        ];
        this.grdType = [
            { label: 'Grades', value: null },
            { label: 'Presentation', value: 1 },
            { label: 'Attendance Form', value: 2 },
            { label: 'Grade Scale', value: 3 },
        ];
    }
    NewFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fForm = this.fb.group({
            location: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            cost: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            work: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            event: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            grade: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
        });
        if (!this.user.getUserManager()) {
            //
            this.items = [
                {
                    label: 'Profile', icon: 'fa-support', command: function (event) {
                        _this.router.navigate(['profile']);
                    }
                },
                {
                    label: 'New Forms', icon: 'fa-calendar', command: function (event) {
                        _this.router.navigate(['newForm']);
                    }
                },
                {
                    label: 'Current Forms', icon: 'fa-bar-chart', command: function (event) {
                        _this.router.navigate(['application']);
                    }
                },
            ];
        }
        else {
            this.items = [
                {
                    label: 'Profile', icon: 'fa-support', command: function (event) {
                        _this.router.navigate(['profile']);
                    }
                },
                {
                    label: 'New Forms', icon: 'fa-calendar', command: function (event) {
                        _this.router.navigate(['newForm']);
                    }
                },
                {
                    label: 'Current Forms', icon: 'fa-bar-chart', command: function (event) {
                        _this.router.navigate(['application']);
                    }
                },
                {
                    label: 'Review Forms', icon: 'fa-book', command: function (event) {
                        _this.router.navigate(['review']);
                    }
                },
            ];
        }
    };
    NewFormComponent.prototype.loginUser = function (e) {
        var _this = this;
        //e.preventDefault();
        var url = 'http://localhost:9999/RevCo/NewForm';
        var req = this.http.post(url, {
            cost: this.fForm.value.cost,
            work: this.fForm.value.work,
            event: this.fForm.value.event,
            grade: this.fForm.value.grade,
            date: (this.fForm.value.date),
            location: this.fForm.value.location,
            description: this.descriptions,
            username: this.user.getUsername()
        })
            .subscribe(function (res) {
            var auth = JSON.parse(JSON.stringify(res));
            if (auth.Applied) {
                _this.router.navigate(['application']);
            }
            else {
                _this.router.navigate(['profile']);
            }
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    };
    NewFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-form',
            template: __webpack_require__("./src/app/new-form/new-form.component.html"),
            styles: [__webpack_require__("./src/app/new-form/new-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NewFormComponent);
    return NewFormComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n#title{\r\n  color: black;\r\n}\r\nimg{\r\npadding: 10px;\r\n}\r\n/* Zebra striping */\r\n.userbox{\r\n\r\n}\r\ntr {\r\n  background: whitesmoke;\r\n}\r\n.header {\r\n  background: black;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n.dom, .header {\r\n  padding: 6px;\r\n  border: 1px solid #ccc;\r\n  text-align: left;\r\n}\r\n.dom{\r\n  color: black;\r\n  width: 100%;\r\n  font-weight: bold;\r\n}\r\n.contain{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.dom:hover{\r\n  background: #444444;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p-tabMenu [model]=\"items\" [activeItem]=\"items[0]\">\n\n</p-tabMenu>\n<script src=\"profile.component.ts\"></script>\n<div class=\"ui-g\" >\n  <div class=\"ui-g-12 ui-md-3 ui-g-offset-3\">\n    <p-card title=\"{{nameF}} {{nameL}}\" subtitle=\"Department: {{dept}}\" [style]=\"{width: '360px'}\" styleClass=\"ui-card-shadow\">\n      <p-header >\n        <tr class=\"row\" >\n          <th class=\"header\">ID</th>\n          <td class=\"dom\">{{id}}</td>\n        </tr>\n        <tr class=\"row\">\n          <th class=\"header\">Surpervisor</th>\n          <td class=\"dom\">{{mgr}}</td>\n        </tr>\n        <tr class=\"row\">\n          <th class=\"header\">Username</th>\n          <td class=\"dom\">{{usern}}</td>\n        </tr>\n      </p-header>\n    </p-card>\n  </div>\n    <p-card title=\"Reimbursment\"  [style]=\"{width: '360px'}\"\n            styleClass=\"ui-card-shadow\" class=\"ui-g-12 ui-md-3 \">\n      <p-header>\n        <p-chart type=\"doughnut\" [data]=\"data\"></p-chart>\n      </p-header>\n      <div>Current Reimbursment Pending: ${{reim}}</div>\n    </p-card>\n  </div>\n\n<div></div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, user, route, http) {
        this.router = router;
        this.user = user;
        this.route = route;
        this.http = http;
        this.id = "";
        this.nameF = "";
        this.nameL = "";
        this.usern = "";
        this.pass = "";
        this.dept = "";
        this.mgr = "";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.user.getUserManager()) {
            //
            this.items = [
                { label: 'Profile', icon: 'fa-support', command: function (event) { _this.router.navigate(['profile']); } },
                { label: 'New Forms', icon: 'fa-calendar', command: function (event) { _this.router.navigate(['newForm']); } },
                { label: 'Current Forms', icon: 'fa-bar-chart', command: function (event) { _this.router.navigate(['application']); } },
            ];
        }
        else {
            this.items = [
                { label: 'Profile', icon: 'fa-support', command: function (event) { _this.router.navigate(['profile']); } },
                { label: 'New Forms', icon: 'fa-calendar', command: function (event) { _this.router.navigate(['newForm']); } },
                { label: 'Current Forms', icon: 'fa-bar-chart', command: function (event) { _this.router.navigate(['application']); } },
                { label: 'Review Forms', icon: 'fa-book', command: function (event) { _this.router.navigate(['review']); } },
            ];
        }
        var url = 'http://localhost:9999/RevCo/ProfileServlet';
        var req = this.http.post(url, {
            userName: this.user.getUsername()
        })
            .subscribe(function (res) {
            var auth = JSON.parse(JSON.stringify(res));
            _this.id = auth.id;
            _this.nameF = auth.first;
            _this.nameL = auth.last;
            _this.usern = auth.user;
            _this.pass = auth.pass;
            _this.dept = auth.dept;
            _this.mgr = auth.manager;
            _this.reim = auth.reim;
            _this.pend = auth.pend;
            _this.remain = (1000 - _this.reim);
            _this.wheel(_this.pend, _this.reim, _this.remain);
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    };
    ProfileComponent.prototype.wheel = function (x, y, z) {
        this.data = {
            labels: ['PENDING', 'REIMBURSED', 'REMAINING'],
            datasets: [
                {
                    data: [x, y, z],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/reject/reject.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.button {\r\n\r\n  display: inline-block;\r\n  border-radius: 4px;;\r\n  background-color: black;\r\n  font-family: Arial;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  padding: 12px;\r\n  width: 130px;\r\n  -webkit-transition: all 0.5s;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n  margin-left: 15px;\r\n}\r\n\r\n.button:hover {\r\n  padding-right: 17px;\r\n  background-color: #eeeeee;\r\n\r\n}\r\n\r\n.button:hover {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/reject/reject.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Invalid</title>\n</head>\n<body>\n<p>INCORRECT LOGIN: RETURNING TO MAIN PAGE</p>\n<a routerLink=\"/\" class=\"button\">HOME</a>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/reject/reject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RejectComponent = /** @class */ (function () {
    function RejectComponent() {
    }
    RejectComponent.prototype.ngOnInit = function () {
    };
    RejectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reject',
            template: __webpack_require__("./src/app/reject/reject.component.html"),
            styles: [__webpack_require__("./src/app/reject/reject.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RejectComponent);
    return RejectComponent;
}());



/***/ }),

/***/ "./src/app/review-app/review-app.component.css":
/***/ (function(module, exports) {

module.exports = ".old-form {\r\n  background-color: orange !important;\r\n  color: black !important;\r\n}\r\n\r\n.ui-grid-row .grey{\r\n  background-color: #cccccc;\r\n  background: #cccccc;\r\n}\r\n\r\n.very-old-form {\r\n  background-color: red !important;\r\n  color: black !important;\r\n}\r\n\r\n.new-form {\r\n  background-color: lawngreen !important;\r\n  color: black !important;\r\n}\r\n\r\n.button {\r\n\r\n  display: inline-block;\r\n  border-radius: 4px;;\r\n  background-color: black;\r\n  font-family: Arial;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  padding: 12px;\r\n  width: 130px;\r\n  -webkit-transition: all 0.5s;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n  margin-left: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/review-app/review-app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p-growl [value]=\"msgs\"></p-growl>\n\n\n<p-carousel headerText=\"Forms\" [value]=\"form\">\n\n  <p-tabMenu [model]=\"items\" [activeItem]=\"items[0]\">\n\n  </p-tabMenu>\n  <ng-template let-f pTemplate=\"item\">\n\n\n    <div class=\"ui-grid ui-grid-responsive\">\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\"><img src=\"../../assets/folder.pmg.png\" width=\"40\"></div>\n      </div>\n      <div class=\"ui-grid-row grey\">\n        <div class=\"ui-grid-col-6\">ID:</div>\n        <div class=\"ui-grid-col-6\">{{f.formId}}</div>\n      </div>\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-6\">Cost:</div>\n        <div class=\"ui-grid-col-6\">${{f.cost}}</div>\n      </div>\n      <div class=\"ui-grid-row grey\">\n        <div class=\"ui-grid-col-6\">Description:</div>\n        <div class=\"ui-grid-col-6\">{{f.description}}</div>\n      </div>\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-6\">Event:</div>\n        <div class=\"ui-grid-col-6\">{{f.event}}</div>\n      </div>\n      <div class=\"ui-grid-row grey\">\n        <div class=\"ui-grid-col-6\">Location:</div>\n        <div class=\"ui-grid-col-6\">{{f.location}}</div>\n      </div>\n\n\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\">\n          <button type=\"button\" pButton icon=\"fa fa-table\" (click)=\"selectForm(f)\"></button>\n        </div>\n      </div>\n\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-6\">\n          <button pButton type=\"submit\" label=\"Approve\" (click)=\"save(f.formId,true,'Approved')\"\n                  icon=\"fa-check\"></button>\n        </div>\n        <div class=\"ui-grid-col-6\">\n          <button pButton type=\"submit\" label=\"Deny\" icon=\"fa-close\"\n                  (click)=\"save(f.formId,false, 'Denied')\"\n                  class=\"ui-button-secondary\"></button>\n        </div>\n      </div>\n\n    </div>\n\n  </ng-template>\n</p-carousel>\n\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\"\n                 width=\"425\"></p-confirmDialog>\n\n<button pButton type=\"submit\" label=\"Refresh\" (click)=\"ngOnInit()\" class=\"button\"></button>\n<div></div>\n"

/***/ }),

/***/ "./src/app/review-app/review-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_api__ = __webpack_require__("./node_modules/primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewAppComponent = /** @class */ (function () {
    function ReviewAppComponent(router, user, route, http, confirmationService) {
        this.router = router;
        this.user = user;
        this.route = route;
        this.http = http;
        this.confirmationService = confirmationService;
        this.currentRev = true;
    }
    ReviewAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.user.getUserManager()) {
            //
            this.items = [
                { label: 'Profile', icon: 'fa-support', command: function (event) { _this.router.navigate(['profile']); } },
                { label: 'New Forms', icon: 'fa-calendar', command: function (event) { _this.router.navigate(['newForm']); } },
                { label: 'Current Forms', icon: 'fa-bar-chart', command: function (event) { _this.router.navigate(['application']); } },
            ];
        }
        else {
            this.items = [
                { label: 'Profile', icon: 'fa-support', command: function (event) { _this.router.navigate(['profile']); } },
                { label: 'New Forms', icon: 'fa-calendar', command: function (event) { _this.router.navigate(['newForm']); } },
                { label: 'Current Forms', icon: 'fa-bar-chart', command: function (event) { _this.router.navigate(['application']); } },
                { label: 'Review Forms', icon: 'fa-book', command: function (event) { _this.router.navigate(['review']); } },
            ];
        }
        var url = 'http://localhost:9999/RevCo/reviewServlet';
        var req = this.http.post(url, {
            userName: this.user.getUsername()
        })
            .subscribe(function (res) {
            _this.form = JSON.parse(JSON.stringify(res));
            _this.location = _this.form.location;
            _this.formId = _this.form.formId;
            _this.cost = _this.form.cost;
            _this.date = _this.form.date;
            _this.workExcuse = _this.form.workExcuse;
            _this.event = _this.form.event;
            _this.description = _this.form.description;
            _this.approve = _this.form.approve;
            _this.submitWarn = _this.form.submitWarn;
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    };
    ReviewAppComponent.prototype.selectForm = function (f) {
        this.msgs = [];
        // if(f.submitWarn){
        //   this.msgs.push({severity: 'danger', summary: 'URGENT', detail: 'EVENT STARTS:' + f.date + " " + f.time});
        // }
        // else
        if (f.warn == 0) {
            this.msgs.push({ severity: 'danger', summary: 'Expiration Warning', detail: 'Submitted::' + f.date + " " + f.time });
        }
        else if (f.warn == (-1)) {
            this.msgs.push({ severity: 'warning', summary: 'Expiration Notice', detail: 'Submitted:' + f.date + " " + f.time });
        }
        else if (f.warn == (-2)) {
            this.msgs.push({ severity: 'success', summary: 'New Form', detail: 'Submitted:' + f.date + " " + f.time });
        }
    };
    ReviewAppComponent.prototype.save = function (selectedItem, e, choice) {
        var _this = this;
        var url = 'http://localhost:9999/RevCo/approve';
        var check = this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: function () {
                _this.http.post(url, {
                    userName: _this.user.getUsername(),
                    id: selectedItem.valueOf(_this.formId),
                    currentReview: e,
                })
                    .subscribe(function (res) {
                    console.log(_this.currentRev);
                    var checks = JSON.parse(JSON.stringify(res));
                    if (checks) {
                        _this.rowValue = checks;
                        console.log('Smort');
                    }
                    else {
                        _this.rowValue = checks;
                    }
                }, function (err) {
                    if (err.error instanceof Error) {
                        console.log('Client-side error occured.');
                    }
                    else {
                        console.log('Server-side error occured.s');
                    }
                });
            }
        });
    };
    ReviewAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-review-app',
            providers: [__WEBPACK_IMPORTED_MODULE_4_primeng_api__["ConfirmationService"]],
            template: __webpack_require__("./src/app/review-app/review-app.component.html"),
            styles: [__webpack_require__("./src/app/review-app/review-app.component.css")],
            styles: ['.ui-grid-row .grey{' +
                    'text-align:center;' +
                    'background: grey}' +
                    '.ui-grid{' +
                    'margin: 10px 0px;' +
                    '}' +
                    '.ui-grid-row > div{' +
                    ' paddingL 4px 10px;' +
                    '}' +
                    '.ui-grid-row{' +
                    'text-align:center;}'
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4_primeng_api__["ConfirmationService"]])
    ], ReviewAppComponent);
    return ReviewAppComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        this.isUserLoggedIn = false;
    }
    UserService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    UserService.prototype.setUserLoggedOut = function () {
        this.isUserLoggedIn = false;
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    UserService.prototype.setUserCurrentPage = function (x) {
        this.page = x;
    };
    UserService.prototype.getUserCurrentPage = function () {
        return this.page;
    };
    UserService.prototype.setUsername = function (y) {
        this.username = y;
    };
    UserService.prototype.getUsername = function () {
        return this.username;
    };
    UserService.prototype.setManager = function (x) {
        this.isUserManager = x;
    };
    UserService.prototype.getUserManager = function () {
        return this.isUserManager;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_browser_module__ = __webpack_require__("./src/app/app.browser.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_browser_module__["a" /* AppBrowserModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map